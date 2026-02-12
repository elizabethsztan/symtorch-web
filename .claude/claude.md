# SymTorch Web Project

This is a scrollytelling website for the SymTorch paper, built with Bulma CSS and D3.js for interactive visualizations.

## Project Structure

- `index.html` - Main HTML file containing the website structure
- `static/` - Static assets directory
  - `css/scrollytelling.css` - Custom CSS for scrollytelling interactions
  - `js/scrollytelling.js` - JavaScript for handling scroll-based animations
  - `scrollama.js` - Scrollytelling library
  - `frames/` - SVG frames for scrollytelling section 1
  - `frames2/` - SVG frames for scrollytelling section 2
  - `figure1.svg` - Hero figure showing SymTorch framework overview
  - `symtorch_logo.svg` - SymTorch logo
  - `symtorch_favicon.png` - Favicon

## Key Features

- Responsive design using Bulma CSS framework
- Scrollytelling sections with D3.js for interactive visualizations
- PyTorch-themed color scheme (#4478e8 blue)
- Noto Sans font family for body text
- Google Sans for headings

## Development

To run locally, simply open `index.html` in a browser or use a local server:

```bash
python -m http.server 8000
```

Then navigate to `http://localhost:8000`

## Sections

1. Header with title, authors, and institution
2. Buttons for GitHub, Paper, and Documentation links
3. Hero figure (Figure 1) with caption
4. Abstract section
5. Introduction
6. Scrollytelling Section 1 (4 steps)
7. Methodology
8. Scrollytelling Section 2 (3 steps)
9. Conclusion
10. Footer

## Notes

- The abstract is positioned after the hero figure
- Scrollytelling sections are initialized via JavaScript at the bottom of index.html
- Mobile-responsive with special styling for screens under 768px
