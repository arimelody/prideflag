/**
 * 🏳️‍🌈🏳️‍⚧️💖 pride flag 💖🏳️‍⚧️🏳️‍🌈
 * made with ❤️ by mellodoot, 2023
 * 
 * an alternate, insanely over-engineered version of prideflag.js
 * which generates all required svg elements at runtime.
 * 
 * given the svg doesn't exactly change however, this turned
 * out to be wholly unnecessary.
 * 
 * neat proof of concept, though!
 */

/**
 * Creates an SVG path using the given parameters.
 * @param {string} id The SVG `id` tag to give the path element.
 * @param {string} d An SVG draw path.
 * @param {string} fill A fill colour to apply within an included `style` tag.
 * @returns An SVG path.
 */
function create_path(id, d, fill) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('id', id);
    path.setAttribute('d', d);
    path.setAttribute('style', `fill:${fill}`);
    return path;
}

/**
 * Creates an SVG rectangle using the given parameters.
 * @param {string} id The SVG `id` tag to give the rectangle element.
 * @param {number} x The X coordinate of the rectangle.
 * @param {number} y The Y coordinate of the rectangle.
 * @param {number} width The width of the rectangle.
 * @param {number} height The height of the rectangle.
 * @param {string} fill A fill colour to apply within an included `style` tag.
 * @returns An SVG rectangle.
 */
function create_rect(id, x, y, width, height, fill) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute('id', id);
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('style', `fill:${fill}`);
    return rect;
}

/**
 * Creates an SVG circle using the given parameters.
 * @param {string} id The SVG `id` tag to give the circle element.
 * @param {number} x The X coordinate of the circle.
 * @param {number} y The Y coordinate of the circle.
 * @param {number} radius The radius of the circle.
 * @param {string} stroke_colour The stroke colour of the rectangle.
 * @param {number} stroke_width The stroke width of the rectangle.
 * @param {string} fill A fill colour to apply within an included `style` tag.
 * @returns An SVG rectangle.
 */
function create_circle(id, x, y, radius, stroke_colour, stroke_width, fill) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('id', id);
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', radius);
    circle.setAttribute('stroke', stroke_colour);
    circle.setAttribute('stroke-width', stroke_width);
    circle.setAttribute('fill', fill);
    return circle;
}

/**
 * Uses the included SVG generation methods to create a complete
 * pride flag SVG element.
 * @returns An SVG pride flag.
 */
function create_pride_flag_svg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 120 120");

    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = "Progressive Pride Flag";
    svg.appendChild(title);

    svg.appendChild(create_path("red", "M40,0 H0 L20,20 Z", "#d20605"));
    svg.appendChild(create_path("orange", "M80,0 H40 L20,20 L40,40 Z", "#ef9c00"));
    svg.appendChild(create_path("yellow", "M120,0 H80 L40,40 L60,60 Z", "#e5fe02"));
    svg.appendChild(create_path("green", "M120,40 V0 L60,60 L80,80 Z", "#09be01"));
    svg.appendChild(create_path("blue", "M120,80 V40 L80,80 L100,100 Z", "#081a9a"));
    svg.appendChild(create_path("purple", "M120,80 L100,100 L120,120 Z", "#76008a"));

    svg.appendChild(create_rect("black", "60", "0", "60", "60", "#010101"));
    svg.appendChild(create_rect("brown", "70", "0", "50", "50", "#603814"));
    svg.appendChild(create_rect("lightblue", "80", "0", "40", "40", "#73d6ed"));
    svg.appendChild(create_rect("pink", "90", "0", "30", "30", "#ffafc8"));
    svg.appendChild(create_rect("white", "100", "0", "20", "20", "#ffffff"));

    svg.appendChild(create_rect("intyellow", "110", "0", "10", "10", "#fed800"));
    svg.appendChild(create_circle("intpurple", "120", "0", "5", "#7800ab", "2", "none"));

    return svg;
}

/**
 * @returns A completed pride flag with link and animations.
 */
function create_pride_flag() {
    const link = document.createElement("a");
    link.id = "pride-triangle";
    link.href = "https://github.com/mellodoot/prideflag";
    link.target = "_blank";

    const triangle = create_pride_flag_svg();
    triangle.style.position = "fixed";
    triangle.style.top = "0";
    triangle.style.right = "0";
    triangle.style.width = "120px";
    triangle.style.transformOrigin = "100% 0%";
    triangle.style.transition = "transform .5s cubic-bezier(.32,1.63,.41,1.01)";
    triangle.style.zIndex = "100";

    triangle.onmouseenter = function () {
        this.style.transform = "scale(110%)";
    };
    triangle.onmouseleave = function () {
        this.style.transform = "initial";
    };

    triangle.onmousedown = function () {
        this.style.transform = "scale(90%)";
    };
    triangle.onmouseup = function () {
        this.style.transform = "initial";
    };

    link.appendChild(triangle);

    return link;
}

const triangle = create_pride_flag();
document.body.appendChild(triangle);