import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '@/components/card_edit_form/card_edit_form';
import CardAddForm from '@/components/card_add_form/card_add_form';

const Editor = ({ cards, onAdd, onEdit, onDelete }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>editor</h1>
      <ul>
        {Object.keys(cards).map((key) => (
          <CardEditForm key={key} card={cards[key]} onEdit={onEdit} onDelete={onDelete}></CardEditForm>
        ))}
        <CardAddForm onAdd={onAdd} />
      </ul>
    </section>
  );
};

export default Editor;
