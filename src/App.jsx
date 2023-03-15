import './global.css';

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Osvaldo Júnior"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sint veniam at alias quod repellendus. Voluptas id, nulla ipsa quas doloribus quia enim aliquam, fugit aliquid nihil, explicabo eligendi delectus?"
          />

          <Post 
            author="Gisele Taborda"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis sint veniam at alias quod repellendus. Voluptas id, nulla ipsa quas doloribus quia enim aliquam, fugit aliquid nihil, explicabo eligendi delectus?"
          />
        </main>
      </div>
    </div>
  )
}

