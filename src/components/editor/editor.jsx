import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '@/components/card_edit_form/card_edit_form';
import CardAddForm from '@/components/card_add_form/card_add_form';

const Editor = ({ cards, onAdd }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>editor</h1>
      <ul>
        {cards.map((card) => (
          <CardEditForm key={card.id} card={card}></CardEditForm>
        ))}
        <CardAddForm onAdd={onAdd} />
      </ul>
    </section>
  );
};

export default Editor;
