import image from '/img/logo.svg'

interface IiconLogo {
  className?: string;
}

export function IconLogo({ className }: IiconLogo) {
  return (
    <img src={image} className={className ?? ''} alt="Idzanamix" />
  )
}

export default IconLogo;
