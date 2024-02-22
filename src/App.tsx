import styles from './app.module.css'
import todoLogo from './assets/todo-logo.svg'
import TodoInput from './components/todoInput'

const App = () => {
  return (
    <div>
      <div className={styles.grayBg} />

      <main className={styles.content}>
        <img src={todoLogo} alt="Logotipo do site" />
        <TodoInput />
      </main>
    </div>
  )
}

export default App
