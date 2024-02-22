import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import styles from './todoInput.module.css'
import { useTodoContext } from '../context/todoContext'

const TodoInput = () => {
  const [value, setValue] = useState('')
  const { createTodo } = useTodoContext()

  const handleCreateTodo = () => {
    event?.preventDefault()
    createTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleCreateTodo} className={styles.wrapper}>
      <input
        placeholder='Adicione uma nova tarefa'
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <button>
        Criar
        <PlusCircle size={18} weight='bold' />
      </button>
    </form>
  )
}

export default TodoInput