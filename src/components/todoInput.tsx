import { PlusCircle } from '@phosphor-icons/react'
import styles from './todoInput.module.css'

const TodoInput = () => {
  return (
    <div className={styles.wrapper}>
      <input placeholder='Adicione uma nova tarefa' />

      <button>
        Criar
        <PlusCircle size={18} />
      </button>
    </div>
  )
}

export default TodoInput