import './App.css'
import Greeting from './Greeting.jsx'

function App() {

//must return jsx for component
  return (
    <>
    <h1>Hello</h1>
    {/* any javascript expression must be in curly braces, arguements properties/props in react */}
    <Greeting foo="bar" name="Matt" age = {26}/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <Greeting abc = "123" />
    </>
  )
}

export default App
