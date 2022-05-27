import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  // react-router-dom v6에서는 useHistory대신 useNavigate이용
  const navigate = useNavigate();
  const goToMakerPage = (userId) => {
    // 첫번째 인자 - 이동할 주소
    // 두번째 인자 - 갈 route에 전해줄 값(props)
    navigate('/maker', { state: { id: userId } });
  };

  // firebase login 호출
  // providerName은 버튼에 있는 텍스트 이용
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMakerPage(data.user.uid));
  };

  // onAuthChange에 user가 있을때 maker페이지로 이동
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMakerPage(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header></Header>
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.items}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.items}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Login;
