import { useState } from "react";
import './AddToDo.css'
const AddToDo = (props) => {
    const [enteredTittle, setEnteredTittle] = useState('')
    const [isValid, setIsValid] = useState(true)
    const tittleHandler = (event) => {
        setIsValid(true)
        setEnteredTittle(event.target.value)
    }
    const formHandler = (event) => {
        event.preventDefault();
        if (enteredTittle.trim().length === 0) {
            setIsValid(false)
            return;
        }
        setEnteredTittle('')
        const newToDo = { tittle: enteredTittle }
        props.onAdd(newToDo)

    }

    return (<div>
        <form onSubmit={formHandler}>
            <div className={` ${!isValid ? 'invalid' : ''}`}>
                <label htmlFor="tittle" >Tittle</label>
                <input type="text" onChange={tittleHandler}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    </div >);
}

export default AddToDo;