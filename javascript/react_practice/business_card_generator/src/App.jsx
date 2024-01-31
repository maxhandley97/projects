import React from 'react';
import CardForm from './cardform.jsx';
import CardDisplay from './CardDisplay';


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          name: '',
          email: '',
          linkedin: '',
          github: ''
      }
        
    }

    updateCard = (stateKey, newValue) => {
        this.setState({
          [stateKey]: newValue
        });
    }

    render(){
        return( 
        <div className="App" >
            <CardForm card={this.state} updateCard={this.updateCard}/>
            <CardDisplay card={this.state}/>
        </div>
        )
    }
}

export default App;