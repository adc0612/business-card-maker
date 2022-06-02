import React, { useState } from 'react';
import styles from './maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Editor from '@/components/editor/editor';
import Preview from '@/components/preview/preview';

const Maker = ({ authService, FileInput }) => {
  // useLocation을 이용해 route에서 온 state접근
  const location = useLocation();
  const { id } = location.state;
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: 'person1',
      company: 'company1',
      theme: 'light',
      title: 'Backed Engineer',
      email: 'person1@gmail.com',
      message: 'message message message',
      fileName: 'file1',
      fileURL: 'person1.png',
    },
    2: {
      id: 2,
      name: 'person2',
      company: 'company2',
      theme: 'dark',
      title: 'Backed Engineer',
      email: 'person2@gmail.com',
      message: 'message message message',
      fileName: 'file2',
      fileURL: null,
    },
    3: {
      id: 3,
      name: 'person3',
      company: 'company3',
      theme: 'colorful',
      title: 'Backed Engineer',
      email: 'person3@gmail.com',
      message: 'message message message',
      fileName: 'file3',
      fileURL: 'person3.png',
    },
    4: {
      id: 4,
      name: 'person4',
      company: 'company4',
      theme: 'dark',
      title: 'Backed Engineer',
      email: 'person4@gmail.com',
      message: 'message message message',
      fileName: 'file4',
      fileURL: 'person4.png',
    },
  });

  // firebase logout 기능 호출
  const onLogout = () => {
    authService.logout();
  };

  // onAuthChange에 user가 없을때 홈으로 되돌아가기
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <div className={styles.container}>
        <Editor cards={cards} onAdd={createOrUpdateCard} onEdit={createOrUpdateCard} onDelete={deleteCard} FileInput={FileInput}></Editor>
        <Preview cards={cards}></Preview>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
