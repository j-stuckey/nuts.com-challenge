import styles from './Card.module.css';
import Image from 'next/image';

function Card({ id, name, images, prices, handleClose }) {

  return (
    <li key={id}  className={styles.card} onClick={handleClose}>
      <p>{name}</p>
          {images.length ? (
            <Image
              src={
                images[0].url ||
                'https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg'
              }
              height={150}
              width={150}
            />
          ) : (
            <Image
              src="https://1b0bbb9e89b4713adcc7-aea4cee2cb18344b328e3a03eff3ec4f.ssl.cf1.rackcdn.com/ece4edb2868a8225.cro-U2aFaCJE.jpg"
              height={150}
              width={150}
            />
          )}
          {prices.length ? (
            <p>
              $
              {prices[0].value.centAmount / 100}
            </p>
          ) : (
            <p>N/a</p>
          )}
    </li>
  );
}

export default Card;
