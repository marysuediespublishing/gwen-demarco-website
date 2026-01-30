# T010 - Create Sophie and The Odd Ones book entry

## Attempt 1

**Approach:** Create src/content/books/sophie-and-the-odd-ones.md with frontmatter matching the book schema defined in src/content/config.ts. Use the dane-griggs-website book entries as a template for format and content structure. Include accurate Amazon URL and book details for Sophie Feegle Book 1.

**Result:** Success

**Details:** Created src/content/books/sophie-and-the-odd-ones.md with:
- Proper frontmatter matching the book schema (title, author, description, series, seriesOrder, pubDate, rating, species, heatLevel, setting, genres, isKU, amazonUrl, price, status, featured)
- Amazon URL: https://www.amazon.com/Sophie-Odd-Ones-Gwen-DeMarco-ebook/dp/B08CHKH9SY
- Series: Sophie Feegle, seriesOrder: 1
- Featured: true (first book in signature series)
- Species: shifters, ogres, vampires, humans
- Setting: san-francisco, city-morgue
- Markdown body with synopsis and "What Makes This Book Special" section
- Build verification passed successfully
