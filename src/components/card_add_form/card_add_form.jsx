import React, { useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '@/components/button/button';
import { useState } from 'react';

const CardEditForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = ({ name, url }) => {
    setFile({ fileName: name, fileURL: url });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type='text' name='name' placeholder='name' />
      <input ref={companyRef} className={styles.input} type='text' name='company' placeholder='company' />
      <select ref={themeRef} className={styles.select} name='theme' placeholder='theme'>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
        <option value='colorful'>colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type='text' name='title' placeholder='title' />
      <input ref={emailRef} className={styles.input} type='text' name='email' placeholder='email' />
      <textarea ref={messageRef} className={styles.textarea} name='message' placeholder='message' />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
