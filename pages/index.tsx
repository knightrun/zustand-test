import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import TodoList from "../components/TodoList";
import Input from "../components/Input";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>할 일 목록</h2>
      <Input />
      <TodoList />
    </div>
  )
}

export default Home
