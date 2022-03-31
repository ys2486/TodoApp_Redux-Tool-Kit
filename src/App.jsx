import React from 'react';
import styles from './App.module.css';
import { FaSignInAlt } from 'react-icons/fa';
import TaskList from './features/task/TaskList';
import TaskDetails from './features/task/TaskDetails';
import TaskInput from './features/task/TaskInput';
import Header from './features/login/Header';

const logout = () => {
  localStorage.removeItem('localJWT');
  window.location.href = '/';
};

function App() {
  return (
    <div className={styles.containerTasks}>
      <div className={styles.appTasks}>
        <button onClick={logout} className={styles.signBtn}>
          <FaSignInAlt />
        </button>
        <Header />
        <TaskInput />
        <TaskList />
      </div>
      <div className={styles.appDetails}>
        <TaskDetails />
      </div>
    </div>
  );
}

export default App;
