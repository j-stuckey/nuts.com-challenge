import styles from './Card.module.css';
import Image from 'next/image';

function Card({ id, name, images, prices, handleClose }) {
  const backupImg =
    'https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg';

  const price = prices.length ? `$${prices[0].value.centAmount / 100}` : 'n/a';

  const imgURL = images.length ? images[0].url : backupImg;
  return (
    <li key={id} className={styles.card} onClick={handleClose}>
      <p>{name}</p>
      <Image src={imgURL} height={150} width={150} />

      <p>{price}</p>
    </li>
  );
}

export default Card;
