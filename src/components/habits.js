import { useState } from "react"
import { connect } from "react-redux"
import {addHabit, deleteHabit, updateHabit, completeHabit, uncompleteAllHabits} from "../redux/habits-list-reduser"

const Heabits = (props) => {
    let [newHabit, setNewHabit] = useState(props.newHabitText)
    
    const newHabitChange = (e) => {
        setNewHabit(e.target.value)
    }

    const newHabitPush = () => {
        if(newHabit){
            props.addHabit(newHabit);
            setNewHabit('')
        }
        
    }
    let [isChangeId, setIsChangeId] = useState(null)

    let [ changedHabit, setChangedHabit] = useState('')
    
    const changeOldHabit = (e) => {
        setChangedHabit(e.target.value)
    }

    const updateOldHabit = () => {
        props.updateHabit(isChangeId, changedHabit)
        setIsChangeId(null)
        setChangedHabit('')
    }
    
    return (
        <div>
            <ul>
                {props.habits.map(el => <li key={el.id}>
                    <input type="checkbox" checked={el.isComplited} onClick={() => props.completeHabit(el.id)}></input>
                    {isChangeId === el.id ? 
                        <input type="text" value={changedHabit || el.habit} onChange={changeOldHabit} onBlur={updateOldHabit}></input>
                        : el.habit} 
                    <button onClick={ () => props.deleteHabit(el.id)}>Видалити</button>
                    <button onClick={ () => setIsChangeId(el.id)}>Редагувати</button>
                    </li>)}
            </ul>
            <input type="text" value={newHabit} onChange={newHabitChange}></input>
            <button onClick={newHabitPush}>Додати звичку</button>
            <button onClick={props.uncompleteAllHabits}>Reset</button>
        </div>
    )
}

const mapStateToProps = (state) => state.habitsList

export default connect(mapStateToProps, {addHabit, deleteHabit, updateHabit, completeHabit, uncompleteAllHabits})(Heabits)