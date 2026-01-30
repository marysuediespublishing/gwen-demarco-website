#!/bin/bash

# Analyze loop logs to show attempt counts per todo

LOGS_DIR=".logs"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

if [[ ! -d "$LOGS_DIR" ]]; then
  echo "No .logs directory found."
  exit 1
fi

echo -e "${CYAN}=== Loop Analytics ===${NC}"
echo ""

total_attempts=0
total_todos=0
max_attempts=0
max_todo=""

# Process each log file
for logfile in "$LOGS_DIR"/T*.md; do
  [[ -f "$logfile" ]] || continue

  filename=$(basename "$logfile")
  todo_name="${filename%.md}"

  # Count attempts (## Attempt lines)
  attempts=$(grep -c "^## Attempt" "$logfile" 2>/dev/null || echo "0")

  # Check if completed (has Success) - match markdown bold format **Result:**
  if grep -q "\*\*Result:\*\* Success" "$logfile" 2>/dev/null; then
    status="${GREEN}completed${NC}"
  elif grep -q "\*\*Result:\*\* In Progress" "$logfile" 2>/dev/null; then
    status="${YELLOW}in progress${NC}"
  elif grep -q "\*\*Result:\*\* Failed" "$logfile" 2>/dev/null; then
    status="${RED}failed${NC}"
  else
    status="${YELLOW}unknown${NC}"
  fi

  # Track max attempts
  if [[ $attempts -gt $max_attempts ]]; then
    max_attempts=$attempts
    max_todo=$todo_name
  fi

  total_attempts=$((total_attempts + attempts))
  total_todos=$((total_todos + 1))

  # Color code by attempt count
  if [[ $attempts -eq 1 ]]; then
    count_color=$GREEN
  elif [[ $attempts -le 3 ]]; then
    count_color=$YELLOW
  else
    count_color=$RED
  fi

  printf "%-30s %b%2d attempts%b  [%b]\n" "$todo_name" "$count_color" "$attempts" "$NC" "$status"
done

echo ""
echo -e "${CYAN}--- Summary ---${NC}"
echo "Total todos with logs: $total_todos"
echo "Total attempts: $total_attempts"

if [[ $total_todos -gt 0 ]]; then
  avg=$(echo "scale=1; $total_attempts / $total_todos" | bc)
  echo "Average attempts per todo: $avg"
fi

if [[ -n "$max_todo" ]]; then
  echo -e "Most attempts: ${RED}$max_todo${NC} ($max_attempts)"
fi

# Count completed vs in-progress
completed=$(grep -l "\*\*Result:\*\* Success" "$LOGS_DIR"/T*.md 2>/dev/null | wc -l | tr -d ' ')
in_progress=$(grep -l "\*\*Result:\*\* In Progress" "$LOGS_DIR"/T*.md 2>/dev/null | wc -l | tr -d ' ')

echo ""
echo -e "Completed: ${GREEN}$completed${NC}"
echo -e "In Progress: ${YELLOW}$in_progress${NC}"
