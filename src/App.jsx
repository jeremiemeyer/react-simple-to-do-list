import { useState } from "react"
import { nanoid } from "nanoid"
import ListItem from "./components/ListItem"

function App() {

  const [todoList, setTodoList] = useState([
    // { id: nanoid(8), content: "item 1"},
    // { id: nanoid(8), content: "item 2"}
  ])
  console.log(todoList)

  // La valeur que l'on va utiliser pour l'ajout d'un nouvel item
  const [todo, setTodo] = useState("")
  const [showValidation, setShowValidation] = useState(false)

  function deleteToDo(id){
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  function handleSubmit(e){
    e.preventDefault()

    if(todo === ""){
      setShowValidation(true)
      return // On n'exécute pas ce qui suit
    }

    // On créé un nouveau tableau ici, en concaténant le nouvel item à l'ancien tableau (destructuring)
    setTodoList([...todoList, {id: nanoid(8), content: todo}])
    setTodo("")
    setShowValidation(false)
  }


  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4 uppercase text-center">Simple To-do List</h1>

        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">Add a task</label>
          <input 
          value={todo}
          onChange={e => setTodo(e.target.value)}
          type="text"
          className="mt-2 block w-full rounded"
          />
          {showValidation && (
            <p className="text-red-600 text-center">Field is empty.</p>
          )}
          <button className="text-white bg-slate-800 mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">Add</button>
        </form>
        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-50 text-md">No items to show.</li>
          )}
          {todoList.length > 0 &&
          todoList.map(item => (
            <ListItem key={item.id} itemData={item} deleteToDo={deleteToDo} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
