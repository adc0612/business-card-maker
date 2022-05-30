import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '@/components/card_edit_form/card_edit_form';

const Editor = ({ cards }) => {
  return (
    <section>
      <h1 className={styles.editor}>editor</h1>
      {cards.map((card) => (
        <CardEditForm card={card}></CardEditForm>
      ))}
    </section>
  );
};

export default Editor;
