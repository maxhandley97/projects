import React from 'react';

export default class CardForm extends React.Component {

    handleChangeInput = (event) => {
        this.props.updateCard(event.target.name, event.target.value);
    }

    render(){
        return(
            <form>
                <label>Username:</label>
                <input name="name" type="text" value={this.props.card.name} onChange={this.handleChangeInput}/>
                <label >Email:</label>
                <input name="email" type="text" value= {this.props.card.email} onChange={this.handleChangeInput} />
                <label>LinkedIn:</label>
                <input name = "linkedin" type="text" value = {this.props.card.linkedin} onChange={this.handleChangeInput} />
                <label>Github:</label>
				<input name="github" type="text" value={this.props.card.github} onChange={this.handleChangeInput} />
            </form>
        );
    }
}