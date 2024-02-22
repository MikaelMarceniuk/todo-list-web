import { createContext, useContext, useState } from "react"

export type Todo = {
  id: number
  title: string
  isDone: boolean
}

interface ITodoContext {
  todos: Todo[]
  createTodo: (todoTitle: string) => void
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

  return (
    <TodoContext.Provider value={{ todos, createTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider