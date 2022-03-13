import { useEffect, useRef } from 'react';
import BackgroundContent from './BackgroundContent';
import Header from './Header';
import styles from './styles/App.module.css';

function App() {
  const background = useRef(null);
  return (
    <div className={styles.Wrapper}>
      <img className={styles.BackgroundImage} src='/images/space.png' alt="" />
      <Header></Header>
      <BackgroundContent></BackgroundContent>
    </div>
  );
}

export default App;
