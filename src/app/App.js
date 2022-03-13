import { useEffect, useRef } from 'react';
import BackgroundContent from './BackgroundContent';
import Header from './Header';
import styles from './styles/App.module.css';

function App() {
  const background = useRef(null);
  return (
    <div className={styles.Wrapper}>
      <Header></Header>
      <BackgroundContent></BackgroundContent>
    </div>
  );
}

export default App;
