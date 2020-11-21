import React, { useEffect } from 'react'
import TodoList from './components/TodoList';
import Context from './context'
import Loader from './components/Loader'
import Modal from './modal/Modal';

const AddTodo = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./components/AddTodo'))
  }, 1000)
}))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 1000)
      })
  }, [])

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial!</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={onCreate} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : loading ? null : <p>У Вас нет задач!</p>}
      </div>
    </Context.Provider>
  );

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function onCreate(title) {
    setTodos(todos.concat([{
      id: Date.now(),
      title,
      completed: false,
    }]))
  }
}

export default App;
