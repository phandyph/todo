import './Displayinput.css';

const Displayinput = ({
    todos,
    onDelete, 
    handleOnCheck,
    isChecked
}) => {

    return (
        <div className="todos">
            {todos.map((todo,index)=>{
                return (
                    <div className='p-2 m-2 todo' key={todo.id}>
                        <div className='checkbox-value'>
                            <input 
                                type="checkbox" 
                                value={todo.task}
                                onChange={handleOnCheck}

                            />
                            <span className={isChecked(todo.task)}>{todo.task}</span>
                        </div>

                        <div className="delete">
                            <svg onClick={()=>onDelete(todo.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill text-danger rounded p-1" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Displayinput;