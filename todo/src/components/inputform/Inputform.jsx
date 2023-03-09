import './Inputform.css';

const Inputform = ({
    onAdd,
    todos,
    task,
    setTask
}) => {
    return (
        // onSubmit={e => e.preventDefault()} : just enter we can submit data.
        <form onSubmit={e => e.preventDefault()} className='round'>
            <input 
                value={task}
                onChange={(e)=>setTask(e.target.value)}
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