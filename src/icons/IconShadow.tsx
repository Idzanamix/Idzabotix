interface IIconShadow {
  className?: string;
}

function IconShadow({ className }: IIconShadow) {
  return (
    <svg className={className ?? ''} width="351" height="136" viewBox="0 0 351 136" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_45_375)">
        <ellipse cx="175.5" cy="67.9452" rx="124.5" ry="17.0548" fill="black" />
      </g>
      <defs>
        <filter id="filter0_f_45_375" x="0.200001" y="0.0903816" width="350.6" height="135.71" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="25.4" result="effect1_foregroundBlur_45_375" />
        </filter>
      </defs>
    </svg>
  )
}

export default IconShadow;
