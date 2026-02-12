/**
 * Scrollytelling implementation using Scrollama
 * Based on lasr-web structure
 */

// Main container
var main = d3.select("main");
var scrolly = main.select("#scrolly");
var article = scrolly.select(".article");
var step = article.selectAll(".step");

// Initialize scrollytelling for a given section
function init(selector) {
    // Select the section container
    var container = d3.select(selector);
    var article = container.select(".article");
    var step = article.selectAll(".step");

    // Create scrollama instance
    var scroller = scrollama();

    // Handle resize
    function handleResize() {
        // Update step heights
        var stepH = Math.floor(window.innerHeight * 0.75);
        step.style("height", stepH + "px");

        var figureHeight = window.innerHeight * 0.5;
        var figureMarginTop = (window.innerHeight - figureHeight) / 2;

        // Style both img and video elements
        var figures = container.selectAll("img, video");
        figures
            .style("height", figureHeight + "px")
            .style("top", figureMarginTop + "px");

        // Tell scrollama to update new element dimensions
        scroller.resize();
    }

    // Handle step enter
    function handleStepEnter(response) {
        // Query for both img and video elements within this section
        // Try different ID patterns (updateableFigure, updateableFigure2, etc.)
        var updateableFigure = document.querySelector(selector + " img[id^='updateableFigure']");
        var updateableVideo = document.querySelector(selector + " video[id^='updateableVideo']");

        if (!updateableFigure) return;

        // Get the directory path from the image src
        var updateableFigurePath = updateableFigure.src.split("/").slice(0, -1).join("/");

        // Step number (1-indexed)
        var stepNumber = response.index + 1;

        // Check if this step should show video (step 1 for section2)
        if (stepNumber === 1 && updateableVideo) {
            // Hide image, show video
            updateableFigure.style.display = "none";
            updateableVideo.style.display = "block";
            updateableVideo.play();
        } else {
            // Show image, hide video
            updateableFigure.style.display = "block";
            if (updateableVideo) {
                updateableVideo.style.display = "none";
            }
            // Update image src
            updateableFigure.src = updateableFigurePath + "/" + stepNumber + ".svg";
        }

        // Add active class to current step
        step.classed("is-active", function(d, i) {
            return i === response.index;
        });
    }

    // Initialize scrollama
    function setupScrollama() {
        // Determine offset based on screen size
        var offset = window.innerWidth < 768 ? 0.2 : 0.5;

        scroller
            .setup({
                step: selector + " .step",
                offset: offset,
                debug: false,
            })
            .onStepEnter(handleStepEnter);

        // Setup resize event
        window.addEventListener("resize", handleResize);
    }

    // Kick things off
    setupScrollama();
    handleResize();

    // Set initial state - show video for step 1, hide it otherwise
    var updateableVideo = document.querySelector(selector + " video[id^='updateableVideo']");
    if (updateableVideo) {
        updateableVideo.style.display = "block";
    }
    var updateableFigure = document.querySelector(selector + " img[id^='updateableFigure']");
    if (updateableFigure) {
        updateableFigure.style.display = "none";
    }
}

// Mobile corrections
function mobileCorrections() {
    if (window.innerWidth < 768) {
        d3.selectAll("img").classed("underlay", true);
        localizeSteps();
    }
}

// Localize steps for mobile
function localizeSteps() {
    d3.selectAll(".step").each(function() {
        var step = d3.select(this);
        var stepHTML = step.html();
        step.html("<div class='step-background'>" + stepHTML + "</div>");
    });
}

// Run mobile corrections on load
window.addEventListener("load", mobileCorrections);
