import React, { useState } from 'react';
import styles from './maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Editor from '@/components/editor/editor';
import Preview from '@/components/preview/preview';

const Maker = ({ authService, FileInput, cardRepository }) => {
  // useLocation을 이용해 route에서 온 state접근
  const location = useLocation();
  const { id } = location.state;
  const navigate = useNavigate();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(id ? id : '');

  // firebase logout 기능 호출
  const onLogout = () => {
    authService.logout();
  };

  // Cards sync firebase 호출
  // mount 될때와 userid가 바뀌었을 때만 호출
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);

  // onAuthChange에 user가 없을때 홈으로 되돌아가기
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
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
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
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
