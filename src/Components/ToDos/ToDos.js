import ToDo from "./ToDo";
const ToDos = (props) => {
    return (<div>
        {props.todos.map((todo) => (
            <ToDo key={Math.random()} todo={todo} />
        ))}
    </div>);
}

export default ToDos;