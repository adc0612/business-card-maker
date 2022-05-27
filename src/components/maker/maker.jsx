import React from 'react';
import styles from './maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Maker = ({ authService }) => {
  // useLocation을 이용해 route에서 온 state접근
  const location = useLocation();
  const { id } = location.state;

  const navigate = useNavigate();

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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      {id}
      <Footer></Footer>
    </section>
  );
};

export default Maker;
