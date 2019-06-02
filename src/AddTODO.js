import React, { Component } from 'react';

class AddTODO extends Component {
    state = {
        content: ''
    };

    changeContent = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.content);
        let content = '';
        this.setState({
            content
        })
    };

    updateContent = (e) => {
        let content = e.target.value;
        this.setState({
            content
        })
    }

    render() {
        return (
            <div className="todos">
                <form onSubmit={this.changeContent}>
                    <input value={this.state.content} className="addTodo" placeholder="Add a todo" onChange={this.updateContent}/>
                </form>
            </div>
        )
    }
}

export default AddTODO