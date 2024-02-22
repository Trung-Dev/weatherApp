import React, {forwardRef} from "react";

const SunPhaseSvg = forwardRef((props, ref) => (

<svg viewBox="0 0 500 170" fill="transparent" xmlns="http://www.w3.org/2000/svg" ref={ref}>
  <g className="sunPhaseSvg">
    <g className="ellipse" filter="url(#filter0_d_0_1)">
      <path d="M60 157C60 157 80.0178 118.467 115.65 89.3985C151.282 60.3303 199.609 44 250 44C300.391 44 348.718 60.3303 384.35 89.3984C419.982 118.467 440 157 440 157" stroke="url(#paint0_linear_0_1)" strokeOpacity="0.34" strokeWidth="3" strokeLinecap="round" shapeRendering="crispEdges"/>
    </g>
    <g className="sunMoonContainer">
      <g className="moonContainer">
        <g className="moonGlow" filter="url(#filter1_f_0_1)">
          <rect x="40" y="138" width="40.4776" height="38.1164" rx="19.0582" fill="#FFEF9A"/>
        </g>
        <g className="moon" filter="url(#filter2_i_0_1)">
          <path d="M77.7552 157.046C77.7552 167.013 69.7511 175.092 59.8776 175.092C50.0041 175.092 42 167.013 42 157.046C42 147.08 50.0041 139 59.8776 139C69.7511 139 77.7552 147.08 77.7552 157.046Z" fill="url(#paint1_linear_0_1)"/>
        </g>
      </g>
      <g className="sunContainer">
        <g className="sunGlow" filter="url(#filter3_f_0_1)">
          <rect x="40" y="138" width="40.4776" height="38.1164" rx="19.0582" fill="#F5F4EC"/>
        </g>
        <g className="sun" filter="url(#filter4_i_0_1)">
          <path d="M77.7552 157.046C77.7552 167.013 69.7511 175.092 59.8776 175.092C50.0041 175.092 42 167.013 42 157.046C42 147.08 50.0041 139 59.8776 139C69.7511 139 77.7552 147.08 77.7552 157.046Z" fill="url(#paint2_linear_0_1)"/>
        </g>
      </g>
    </g>
  </g>
  <defs>
    <filter id="filter0_d_0_1" x="54.4997" y="42.5" width="391.001" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
    </filter>
    <filter id="filter1_f_0_1" x="6.71159" y="104.712" width="107.054" height="104.693" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="16.6442" result="effect1_foregroundBlur_0_1"/>
    </filter>
    <filter id="filter2_i_0_1" x="42" y="139" width="35.7552" height="38.2541" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2.16158"/>
      <feGaussianBlur stdDeviation="3.89085"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
    </filter>
    <filter id="filter3_f_0_1" x="6.71159" y="104.712" width="107.054" height="104.693" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="16.6442" result="effect1_foregroundBlur_0_1"/>
    </filter>
    <filter id="filter4_i_0_1" x="42" y="139" width="35.7552" height="38.2541" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2.16158"/>
      <feGaussianBlur stdDeviation="3.89085"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.81 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
    </filter>
    <linearGradient id="paint0_linear_0_1" x1="250.467" y1="44" x2="250.467" y2="157" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_0_1" x1="57.162" y1="166.869" x2="72.0809" y2="140.948" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="#FFEE94"/>
    </linearGradient>
    <linearGradient id="paint2_linear_0_1" x1="57.162" y1="166.869" x2="72.0809" y2="140.948" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FF9900"/>
      <stop offset="1" stopColor="#FFEE94"/>
    </linearGradient>
  </defs>
</svg>


));

export default SunPhaseSvg;