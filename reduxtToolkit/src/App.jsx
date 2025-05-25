import AddTodo from './components/add-todo/AddTodo';
import Todos from './components/todo/Todos';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <p className={styles.header}>Learn about React Redux</p>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
