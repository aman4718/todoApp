import { Navbar } from 'react-bootstrap'
import './App.css'
import AddToDo from './components/AddToDo'
import NavBar from './components/Navbar'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <AddToDo/>
      <NavBar/>
      <Todo />
    </>
  )
}

export default App
