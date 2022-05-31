import React from 'react';
import styles from './preview.module.css';
import Card from '@/components/card/card';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;
