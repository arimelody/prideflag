function create_path(id, d, fill) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('id', id);
    path.setAttribute('d', d);
    path.setAttribute('style', `fill:${fill}`);
    return path;
}

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

function create_svg() {
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

    svg.appendChild(create_rect("black", "70", "0", "50", "50", "#010101"));
    svg.appendChild(create_rect("brown", "80", "0", "40", "40", "#603814"));
    svg.appendChild(create_rect("lightblue", "90", "0", "30", "30", "#73d6ed"));
    svg.appendChild(create_rect("pink", "100", "0", "20", "20", "#ffafc8"));
    svg.appendChild(create_rect("white", "110", "0", "10", "10", "#ffffff"));

    return svg;
}

function create_triangle() {
    const link = document.createElement("a");
    link.id = "pride-triangle";
    link.href = "https://github.com/mellodoot/prideflag";
    link.target = "_blank";

    const triangle = create_svg();
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

    window.onresize = function () {
        if (window.innerWidth <= 720) {
            triangle.style.width = "6rem";
            triangle.style.right = "-6rem";
        } else {
            triangle.style.width = "120px";
            triangle.style.right = "-120px";
        }
    }

    link.appendChild(triangle);

    return link;
}

const triangle = create_triangle();
document.body.appendChild(triangle);