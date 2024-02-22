import styles from './app.module.css'
import todoLogo from './assets/todo-logo.svg'
import TodoInput from './components/todoInput'
import TodoProvider from './context/todoContext'

const App = () => {
  return (
    <TodoProvider>
      <div>
        <div className={styles.grayBg} />

        <main className={styles.content}>
          <img src={todoLogo} alt="Logotipo do site" />
          <TodoInput />
        </main>
      </div>
    </TodoProvider>
  )
}

export default App
