import { createContext, useContext, useState } from "react"

export type Todo = {
  id: number
  title: string
  isDone: boolean
}

interface ITodoContext {
  todos: Todo[]
  createTodo: (title: string) => void
  toggleDone: (id: number) => void
  deleteTodo: (id: number) => void
}

export const TodoContext = createContext<ITodoContext>({} as ITodoContext)

export const useTodoContext = () => useContext(TodoContext)

type Props = {
  children: React.ReactNode
}

const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const createTodo = (title: string) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title, isDone: false }
    ])
  }

  const toggleDone = (id: number) => {
    const todoIndex = todos.findIndex(t => t.id == id)
    const newTodos = [...todos]
    newTodos[todoIndex].isDone = !newTodos[todoIndex].isDone

    setTodos(newTodos)
  }

  const deleteTodo = (id: number) => {
    const todoIndex = todos.findIndex(t => t.id == id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)

    setTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{ todos, createTodo, toggleDone, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider