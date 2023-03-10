import './Inputform.css';

const Inputform = ({
    onAdd,
    todos,
    todo,
    setTodo
}) => {
    return (
        // onSubmit={e => e.preventDefault()} : just enter we can submit data.
        <form onSubmit={e => e.preventDefault()} className='round'>
            <input 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                type="text" 
                placeholder="Add todo"
            />

            {/* can submit using button. One more is by enter key */}
            <button 
                type='submit'
                className='right bg-success text-white'
                onClick={() => onAdd()}
            >+</button>
        </form>
    )
}

export default Inputform;