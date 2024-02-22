import styles from './todoListItem.module.css'
import { Todo, useTodoContext } from "../context/todoContext"
import { Trash } from '@phosphor-icons/react'

type Props = Todo

const TodoListItem: React.FC<Props> = ({ id, title, isDone }) => {
  const { toggleDone, deleteTodo } = useTodoContext()

  return (
    <div className={styles.wrapper}>
      <input type='checkbox' onChange={() => toggleDone(id)} />
      <span className={isDone ? styles.checked : ''}>{title}</span>
      <Trash onClick={() => deleteTodo(id)} />
    </div>
  )
}

export default TodoListItem