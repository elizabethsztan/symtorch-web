# Scrollytelling Website

A minimal scrollytelling website based on the [lasr-web](https://github.com/trishullab/lasr-web) structure.

## Structure

```
.
├── index.html              # Main HTML file
├── static/
│   ├── scrollama.js       # Scrollama library
│   ├── css/
│   │   └── scrollytelling.css
│   ├── js/
│   │   └── scrollytelling.js
│   ├── frames/            # SVG frames for section 1
│   │   ├── 1.svg
│   │   ├── 2.svg
│   │   ├── 3.svg
│   │   └── 4.svg
│   └── frames2/           # SVG frames for section 2
│       ├── 1.svg
│       ├── 2.svg
│       └── 3.svg
```

## How It Works

The scrollytelling is powered by:
- **Scrollama.js**: Handles scroll-based interactions
- **D3.js**: DOM manipulation and selection
- **Bulma CSS**: Responsive layout framework

As you scroll through each `.step` div, the corresponding image updates to show the next frame in the sequence.

## Customization

### Adding Content

1. Edit [index.html](index.html) to update:
   - Page title and header
   - Step text content
   - Author information

2. Replace placeholder SVG files in `static/frames/` and `static/frames2/` with your own visualizations

### Adding More Sections

To add another scrollytelling section:

1. Add a new section in [index.html](index.html):
```html
<div class="columns is-centered" id="section3">
    <div class="column is-one-third article">
        <div class="content step">
            <h3>Step 1</h3>
            <p>Your content here.</p>
        </div>
        <!-- Add more steps -->
    </div>
    <div class="column is-half content">
        <img src="static/frames3/1.svg" id="updateableFigure3" loading="eager" alt="Visualization">
    </div>
</div>
```

2. Create the frames directory: `mkdir static/frames3`

3. Add your SVG files: `static/frames3/1.svg`, `static/frames3/2.svg`, etc.

4. Initialize in the script section:
```html
<script>
    init("#section1");
    init("#section2");
    init("#section3");  // Add this line
</script>
```

### Creating Frames from PowerPoint

Following the lasr-web approach:

1. Create your slides in PowerPoint/Keynote
2. Export as PDF
3. Use a tool to extract frames as SVG:
   ```bash
   # Install pdf2svg (macOS)
   brew install pdf2svg

   # Convert each page to SVG
   pdf2svg slides.pdf static/frames/%d.svg all
   ```

## Running Locally

Open [index.html](index.html) in a web browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000`

## License

Based on the MIT-licensed [lasr-web](https://github.com/trishullab/lasr-web) project.
