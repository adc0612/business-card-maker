import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const onButtonClick = () => {
    inputRef.current.click();
  };
  const onFileInputClick = async (event) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input ref={inputRef} className={styles.input} type='file' accept='image/*' name='file' onChange={onFileInputClick} />
      {loading ? (
        <div className={styles.loading}></div>
      ) : (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} type='button' onClick={onButtonClick}>
          {name || 'No file'}
        </button>
      )}
    </div>
  );
};

export default ImageFileInput;
