import React from 'react';

const Form = () => {
    return (
        <form>
            <div>
                <select className="list-type">
                    <option value="for-today">For Today</option>
                    <option value="shopping">Shopping</option>
                    <option value="do-sometime">Do Sometime</option> 
                </select>
            </div>
            <div className="input-box">
            <input type="text" placeholder="What to do?" className="todo-input" />
            <button className="todo-button" type="submit">
            </button>
            </div>
            <div className="select">
                <select className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option> 
                </select>
            </div>
        </form>
    )
}

export default Form;