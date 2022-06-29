import { useRef, useState } from 'react';
import './AddToDo.css'

const AddToDo = (props) => {
    const [enteredTittle, setEnteredTittle] = useState('')
    const tittleHandler = (event) => {
        setEnteredTittle(event.target.value)

    }
    const sumbitHandler = (event) => {
        event.preventDefault();
        const newToDo = { tittle: enteredTittle }
        props.onAdd(newToDo)
        // console.log(enteredTittle)

    }


    return (<div className='form'>
        <form onSubmit={sumbitHandler}>
            <label htmlFor="tittle" style={{ color: 'black' }}>Tittle</label>
            <input type="text" value={enteredTittle} onChange={tittleHandler} />
            <button type="submit">Add</button>
        </form>
    </div >);
}

export default AddToDo;