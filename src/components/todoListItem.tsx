import styles from './todoListItem.module.css'
import { Todo } from "../context/todoContext"
import { Trash } from '@phosphor-icons/react'

type Props = Todo

const TodoListItem: React.FC<Props> = ({ id, title, isDone }) => {
  return (
    <div className={styles.wrapper}>
      <input type='checkbox' />
      <span className={isDone ? styles.checked : ''}>{title}</span>
      <Trash />
    </div>
  )
}

export default TodoListItem