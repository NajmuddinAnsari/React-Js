import './ToDo.css'


const ToDo = (props) => {
    const todoHandler = () => {
        // console.log(props.todo)
        props.forDelete(props.todo)
    }

    return (
        <div className='todo' onClick={todoHandler}>
            <h1>{props.todo.tittle}</h1>

        </div>

    );
}

export default ToDo;