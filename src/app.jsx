import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import styles from './app.module.css';
import Maker from './components/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login authService={authService}></Login>} />
          <Route path='/maker' element={<Maker authService={authService}></Maker>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
