import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main> 
          <Post 
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima incidunt iste praesentium enim dicta, hic, quas blanditiis pariatur vitae facere molestias quo dolor ut soluta voluptatibus. Modi dicta ad atque!"
          />
          <Post 
            author="Diogo Caxiado"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
