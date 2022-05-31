import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '@/components/card_edit_form/card_edit_form';

const Editor = ({ cards }) => {
  return (
    <section>
      <h1 className={styles.editor}>editor</h1>
      <ul>
        {cards.map((card) => (
          <CardEditForm key={card.id} card={card}></CardEditForm>
        ))}
      </ul>
    </section>
  );
};

export default Editor;
