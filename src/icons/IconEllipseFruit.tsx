interface IIconEllipseFruit {
  className?: string;
}

function IconEllipseFruit({ className }: IIconEllipseFruit) {
  return (
    <svg className={className ?? ''} width="390" height="551" viewBox="0 0 390 551" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_45_377)">
        <ellipse cx="200" cy="275.438" rx="128" ry="145.534" fill="#CB10AC" />
      </g>
      <defs>
        <filter id="filter0_f_45_377" x="-57.8" y="0.10405" width="515.6" height="550.669" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="64.9" result="effect1_foregroundBlur_45_377" />
        </filter>
      </defs>
    </svg>
  )
}

export default IconEllipseFruit;
