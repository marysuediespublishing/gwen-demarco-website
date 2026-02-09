#!/bin/bash

# Loop-based development runner
# Checks for unchecked todos and runs Claude Code until all complete

set -e

TODOS_FILE="todos.md"
MAX_ATTEMPTS=${MAX_ATTEMPTS:-10}  # Max attempts per todo before pausing
SLEEP_BETWEEN=${SLEEP_BETWEEN:-2}  # Seconds between runs

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
  echo -e "${GREEN}[loop]${NC} $1"
}

warn() {
  echo -e "${YELLOW}[loop]${NC} $1"
}

error() {
  echo -e "${RED}[loop]${NC} $1"
}

# Check if todos.md exists
if [[ ! -f "$TODOS_FILE" ]]; then
  error "No $TODOS_FILE found. Are you in the right directory?"
  exit 1
fi

# Check if claude is available
if ! command -v claude &> /dev/null; then
  error "claude command not found. Is Claude Code installed?"
  exit 1
fi

# Check if jq is available (needed for streaming output)
if ! command -v jq &> /dev/null; then
  error "jq command not found. Install with: brew install jq"
  exit 1
fi

# Count unchecked todos
count_todos() {
  grep -c "^- \[ \]" "$TODOS_FILE" 2>/dev/null | tail -1 || echo "0"
}

# Get the first unchecked todo for display
first_todo() {
  grep -m1 "^- \[ \]" "$TODOS_FILE" | sed 's/- \[ \] //'
}

log "Starting loop..."

attempts=0
last_todo=""

while true; do
  todo_count=$(count_todos)
  
  if [[ "$todo_count" -eq 0 ]]; then
    log "All todos complete!"
    exit 0
  fi
  
  current_todo=$(first_todo)
  
  # Reset attempts if we moved to a new todo
  if [[ "$current_todo" != "$last_todo" ]]; then
    attempts=0
    last_todo="$current_todo"
  fi
  
  attempts=$((attempts + 1))
  
  # Check if we've hit max attempts on this todo
  if [[ $attempts -gt $MAX_ATTEMPTS ]]; then
    error "Todo stuck after $MAX_ATTEMPTS attempts: $current_todo"
    error "Check .logs/ for details."
    exit 1
  fi
  
  log "Todos remaining: $todo_count"
  log "Working on: $current_todo"
  log "Attempt: $attempts"
  echo ""
  
  # Run Claude Code with prompt to work on current todo
  # Use text output for simpler processing
  claude -p "Read CLAUDE.md and follow the startup procedure. Work on the first unchecked todo in todos.md." \
    --dangerously-skip-permissions \
    --verbose \
    --output-format stream-json \
    2>&1 | tee /dev/stderr | jq --unbuffered -j '.event.delta.text? // empty'
  
  log "Claude exited. Syncing filesystem..."
  sync  # Force flush writes to disk before re-reading files
  sleep "$SLEEP_BETWEEN"
  log "Checking for more todos..."
done
