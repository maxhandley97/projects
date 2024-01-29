function Greeting({ name = 'Guest' , age=21 }) {
    // console.log(props)
    // {name = 'Guest' , age=21 } = props 
    // done in situ 
    // default values
    return (
      <>
        <p>Bonjour, {name}!</p>
        <p>ES: Hola! {age} </p>
      </>                   
    )
  }

export default Greeting
