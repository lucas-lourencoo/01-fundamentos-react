import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Lucas Lourenço'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque dolores aliquam, fugiat aut facilis, corporis voluptatum debitis doloremque nesciunt iure nam voluptate numquam quasi sit, delectus dolore quibusdam molestiae.'
          />
          <Post />
        </main>
      </div>
    </div>
  );
}
