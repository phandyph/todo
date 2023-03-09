import './Parent.css';
import { useState } from 'react';
import Inputform from '../inputform/Inputform';
import Displayinput from '../displayinput/Displayinput';
let indexTask = 0;

const Parent =() => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [checked, setChecked] = useState([]);

    // Add task
    const onAdd = () => {
        if (task !== '') {
            let eachTodo = {id: indexTask++, task:task}
            setTask('');
            setTodos([...todos, eachTodo]);
        }
    }

    // Delete task
    const onDelete = (id) => {
        const newTodos = todos.filter(todo=>todo.id !== id)
        setTodos(newTodos);
    }

    // Click check to check on checkbox
    const handleOnCheck = (event) => {
    var todoChecked = [...checked]; // store value which checked (can check more than 1)
    var targetCheck = event.target.checked; // checkbox have been check.
    var targetValue = event.target.value; // value of checkbox which checked
    console.log(targetCheck); //true/false
    console.log(targetValue);
    console.log(checked)

    if (targetCheck) {
        todoChecked = [...checked, targetValue];
    } else {
        todoChecked.splice(checked.indexOf(targetValue), 1);
    }
    setChecked(todoChecked);
    };

    // create to put on style.
    var isChecked = (item) => // create it to set style.
    checked.includes(item) ? "checked-todo" : "not-checked-todo";


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
                    task={task}
                    setTask={setTask}
                />

                <Displayinput
                    task={task}
                    setTask={setTask}
                    todos={todos}
                    onDelete={onDelete}
                    handleOnCheck={handleOnCheck}
                    isChecked={isChecked}
                />
            </div>
        </div>
    )
}

export default Parent;