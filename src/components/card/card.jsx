import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE_URL = '/images/default_logo.png';
const Card = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE_URL;
  return (
    <li className={`${styles.card} ${getUserTheme(theme)}`}>
      <img className={styles.avatar} src={url} alt='profile photo' />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};
function getUserTheme(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown Theme: ${theme}`);
  }
}
export default Card;
