import React from 'react';
import styles from './preview.module.css';
import Card from '@/components/card/card';

const Preview = ({ cards }) => {
  return (
    <section>
      <h1 className={styles.preview}>preview</h1>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </section>
  );
};

export default Preview;
