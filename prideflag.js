//
// pride flag - copyright (c) 2024 ari melody
// 
// this code is provided AS-IS, WITHOUT ANY WARRANTY, to be
// freely redistributed and/or modified as you please, however
// retaining this license in any redistribution.
// 
// please use this flag to link to an LGBTQI+-supporting page
// of your choosing!
// 
// web: https://arimelody.me
// source: https://git.arimelody.me/ari/prideflag
//

const pride_url = "https://git.arimelody.me/ari/prideflag";

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

const pride_flag_css =
    `#prideflag {
        position: fixed;
        top: 0;
        right: 0;
        width: 120px;
        transform-origin: 100% 0%;
        transition: transform .5s cubic-bezier(.32,1.63,.41,1.01);
        z-index: 8008135;
        pointer-events: none;
    }
    #prideflag:hover {
        transform: scale(110%);
    }
    #prideflag:active {
        transform: scale(110%);
    }
    #prideflag * {
        pointer-events: all;
    }`;

function create_pride_flag() {
    const flag = document.createElement("a");
    flag.id = "prideflag";
    flag.href = pride_url;
    flag.target = "_blank";
    flag.innerHTML = pride_flag_svg;
    return flag;
}

function load_pride_flag_style() {
    const pride_stylesheet = document.createElement('style');
    pride_stylesheet.textContent = pride_flag_css;
    document.head.appendChild(pride_stylesheet);
}

load_pride_flag_style();
flag = create_pride_flag();
document.body.appendChild(flag);
