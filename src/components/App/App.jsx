import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import Filter from '../Container/Filter';
import Header from '../Container/Header';
import Paintings from '../Container/Paintings';
import styles from './styles.module.scss';

const App = function App() {
  const themeColor = useSelector((store) => store.themeColor);
  return (
    <Router>
      <div className={cn(styles.App, themeColor === 'white' && styles.App_white)}>
        <div className={styles.App__container}>
          <Header />
          <Filter />
          <Paintings />
        </div>
      </div>
    </Router>
  );
};

export default App;
