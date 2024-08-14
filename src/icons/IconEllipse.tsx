interface IIconEllipse {
  className?: string;
}

function IconEllipse({ className }: IIconEllipse) {
  return (
    <svg className={className ?? ''} width="390" height="289" viewBox="0 0 390 289" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_45_295)">
        <ellipse cx="194.5" cy="144.5" rx="143.5" ry="43.5" fill="#CB10AC" />
      </g>
      <defs>
        <filter id="filter0_f_45_295" x="-49.4" y="0.599998" width="487.8" height="287.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50.2" result="effect1_foregroundBlur_45_295" />
        </filter>
      </defs>
    </svg>
  )
}

export default IconEllipse;
