import { ClipboardText } from '@phosphor-icons/react'
import { useTodoContext } from '../context/todoContext'
import styles from './todoList.module.css'
import TodoListItem from './todoListItem'

const TodoList: React.FC = () => {
  const { todos } = useTodoContext()

  return (
    <div className={styles.wrapper}>
      <header>
        <span>Tarefas Criadas</span>
        <span>Concluídas</span>
      </header>

      {todos.length == 0 &&
        <div>
          <div className={styles.divider} />

          <div className={styles.emptyListAdvice}>
            <ClipboardText size={56} />
            <span style={{ fontWeight: 'bold' }}>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      }

      {todos.length > 0 && todos.map(t => <TodoListItem key={t.id} {...t} />)}
    </div>
  )
}

export default TodoList