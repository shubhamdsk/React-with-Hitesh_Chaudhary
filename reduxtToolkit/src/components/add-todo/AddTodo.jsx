import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/sllice/todoSlice';
import styles from './AddTodo.module.css';

const AddTodo = () => {
   const [input, setInput] = useState('');
   const dispatch = useDispatch();

   const addTodoHandler = (e) => {
      e.preventDefault();
      if (input.trim() === '') return;
      dispatch(addTodo(input));
      setInput('');
   };

   return (
      <div className={styles.container}>
         <form onSubmit={addTodoHandler} className={styles.form}>
            <input
               type="text"
               placeholder="Enter a Todo..."
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className={styles.input}
            />
            <button type="submit" className={styles.button}>
               Add Todo
            </button>
         </form>
      </div>
   );
};

export default AddTodo;
