import React, { useRef } from 'react';
import styles from './image_file_input';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click();
  };
  const onFileInputClick = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div>
      <input ref={inputRef} className={styles.input} type='file' accept='image/*' name='file' onChange={onFileInputClick} />
      <button type='button' onClick={onButtonClick}>
        {name}
      </button>
    </div>
  );
};

export default ImageFileInput;
