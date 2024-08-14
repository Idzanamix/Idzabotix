import image from '/img/bigBlobPressed.svg'

interface IIconBigBlob {
  className?: string;
  isTaping?: boolean;
}

function IconBigBlob({ className, isTaping }: IIconBigBlob) {
  return (
    <img
      src={image}
      alt="Blob"
      className={className ? className : ''}
      style={{opacity: isTaping ? 1 : 0}}
      width={624}
      height={484}
    />
  )
}

export default IconBigBlob;
