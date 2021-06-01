
const initialState = {
    habits: [
        {
            id:1,
            habit: 'Бігати зранку'
        },
        {
            id:2,
            habit: 'Чистити зуби'
        }
    ],
    newHabitText: '',    
    idForHabit: 3
}


const habitsListReduser = (state = initialState, action) => {
    switch(action.type){
        case "ADD_HABIT": 
            return{
                ...state,
                habits: [...state.habits, {id: state.idForHabit, habit: action.newHabit}],
                idForHabit: ++state.idForHabit
            }
        case 'UPDATE_NEW_HABIT_TEXT':
            return{
                ...state,
                newHabitText: action.newText
            }
        default:
            return state
    }
    
}

export const addHabit = (newHabit) => ({ type: 'ADD_HABIT', newHabit})
export const updateNewHabitText = (newText) => ({ type: 'UPDATE_NEW_HABIT_TEXT', newText })


export default habitsListReduser