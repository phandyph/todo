import './Todo.css';
import { useState } from 'react';
import Inputform from '../inputform/Inputform';
import Displayinput from '../displayinput/Displayinput';

const Todo =() => {
    const [indexTodo, setIndexTodo] = useState(0)
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [checkedTodos, setCheckedTodos] = useState([]);
    
    // Add task
    const onAdd = () => {
        if (todo !== '') {
            setIndexTodo(indexTodo+1)
            const eachTodo = {id: indexTodo, todo:todo}
            setTodo('');
            setTodos([...todos, eachTodo]);
        }
    }

    // Delete task
    const onDelete = (id) => {
        var newTodos = todos.filter(todo=>todo.id !== id)
        setTodos(newTodos);
    }

    // Click check to check on checkbox
    const handleOnCheck = (event) => {
        /**
         const {checked, value} = event.target: mean that
        * checked = event.target.checked
        * value = event.target.value
        */
        const {checked, value} = event.target

        var todoChecked = [...checkedTodos]; // store value which checked (can check more than 1)
        if (checked) {
            todoChecked = [...checkedTodos, value];
        } else {
            todoChecked.splice(checkedTodos.indexOf(value), 1);
        }
        setCheckedTodos(todoChecked);
    };

    // create to put on style.
    const isChecked = (todo) => // create it to set style.
    checkedTodos.includes(todo) ? "checked-todo" : "not-checked-todo";

    return (
        <div className='m-0 p-0'>
            <div className="todo-nav">
                TODO
            </div>

            <div className="todo-form">
                <p className='todo-title m-0'>todos</p>
                <Inputform 
                    onAdd={onAdd}
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo}
                    setTodo={setTodo}
                />

                <Displayinput
                    todo={todo}
                    setTodo={setTodo}
                    todos={todos}
                    onDelete={onDelete}
                    handleOnCheck={handleOnCheck}
                    isChecked={isChecked}
                />
            </div>
        </div>
    )
}

export default Todo;