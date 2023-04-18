/**
 * 🏳️‍🌈🏳️‍⚧️💖 pride flag 💖🏳️‍⚧️🏳️‍🌈
 * made with ❤️ by mellodoot, 2023
 * 
 * web: https://mellodoot.com
 * source: https://github.com/mellodoot/prideflag
 */

const pride_flag_svg =
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <path id="red" d="M120,80 L100,100 L120,120 Z" style="fill:#d20605"/>
  <path id="orange" d="M120,80 V40 L80,80 L100,100 Z" style="fill:#ef9c00"/>
  <path id="yellow" d="M120,40 V0 L60,60 L80,80 Z" style="fill:#e5fe02"/>
  <path id="green" d="M120,0 H80 L40,40 L60,60 Z" style="fill:#09be01"/>
  <path id="blue" d="M80,0 H40 L20,20 L40,40 Z" style="fill:#081a9a"/>
  <path id="purple" d="M40,0 H0 L20,20 Z" style="fill:#76008a"/>

  <rect id="black" x="60" width="60" height="60" style="fill:#010101"/>
  <rect id="brown" x="70" width="50" height="50" style="fill:#603814"/>
  <rect id="lightblue" x="80" width="40" height="40" style="fill:#73d6ed"/>
  <rect id="pink" x="90" width="30" height="30" style="fill:#ffafc8"/>
  <rect id="white" x="100" width="20" height="20" style="fill:#fff"/>
  
  <rect id="intyellow" x="110" width="10" height="10" style="fill:#fed800"/>
  <circle id="intpurple" cx="120" cy="0" r="5" stroke="#7601ad" stroke-width="2" fill="none"/>
</svg>`;

function create_pride_flag() {
    const container = document.createElement("a");
    container.id = "pride-triangle";
    container.href = "https://github.com/mellodoot/prideflag";
    container.target = "_blank";

    triangle = document.createElement('svg');
    triangle.innerHTML = pride_flag_svg;
    triangle.style.position = "fixed";
    triangle.style.top = "0";
    triangle.style.right = "0";
    triangle.style.width = "120px";
    triangle.style.transformOrigin = "100% 0%";
    triangle.style.transition = "transform .5s cubic-bezier(.32,1.63,.41,1.01)";
    triangle.style.zIndex = "8008135";

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

    container.appendChild(triangle);

    return container;
}

pride_flag = create_pride_flag();
document.body.appendChild(pride_flag);