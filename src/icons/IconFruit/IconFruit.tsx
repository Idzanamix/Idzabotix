import styles from './iconFruit.module.css'
import fruit from '/img/fruitPressed.png'

interface IIconFruit {
  x: number;
  y: number;
}

export function IconFruit({ x, y }: IIconFruit) {
  return (
    <img
      src={fruit}
      alt="Fruit"
      className={styles.fruit}
      width={273}
      style={{ translate: `${x}% ${y}%` }}
    />
  )
}

export default IconFruit;
