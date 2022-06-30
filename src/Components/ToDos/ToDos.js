import ToDo from "./ToDo";

const ToDos = (props) => {
    const sendToDo = (todo) => {
        props.onDelete(todo)
    }

    return (<div>
        {props.todos.map((todo) => (
            <ToDo key={Math.random()} todo={todo} forDelete={sendToDo} />
        ))}
    </div>);
}

export default ToDos;