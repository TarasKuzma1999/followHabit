import { useState } from "react"
import { connect } from "react-redux"
import {addHabit} from "../redux/habits-list-reduser"

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
    
    return (
        <div>
            <ul>
                {props.habits.map(el => <li key={el.id}>{el.habit}</li>)}
            </ul>
            <input type="text" value={newHabit} onChange={newHabitChange}></input>
            <button onClick={newHabitPush}>Додати звичку</button>
        </div>
    )
}

const mapStateToProps = (state) => state.habitsList

export default connect(mapStateToProps, {addHabit})(Heabits)