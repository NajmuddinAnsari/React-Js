import './ToDo.css'
const ToDo = (props) => {
    const headerHandler = () => {
        
    }
    return (<div className='todo' onClick={headerHandler} >
        <h1 >{props.todo.tittle}</h1>
    </div>);
}

export default ToDo;