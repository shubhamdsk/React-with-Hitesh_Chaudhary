import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../../redux/sllice/todoSlice';
import styles from './Todos.module.css';

function Todos() {
   const todos = useSelector((state) => state.todos);
   const dispatch = useDispatch();

   return (
      <div className={styles.container}>
         <div className={styles.title}>My Todos</div>

         {todos.length === 0 ? (
            <p className={styles.noTodos}>No todos available</p>
         ) : (
            <ul className={styles.list}>
               {todos.map((todo) => (
                  <li key={todo.id} className={styles.item}>
                     {todo.text}
                     <button
                        className={styles.deleteBtn}
                        onClick={() => dispatch(removeTodo(todo.id))}
                     >
                        X
                     </button>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default Todos;
