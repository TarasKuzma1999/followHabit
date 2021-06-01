
const initialState = {
    habits: [
        {
            id:1,
            habit: 'Бігати зранку',
            isComplited: false
        },
        {
            id:2,
            habit: 'Чистити зуби',
            isComplited: true
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
                habits: [...state.habits, {id: state.idForHabit, habit: action.newHabit, isComplited: false}, ],
                idForHabit: ++state.idForHabit
            }      
        case "DELETE_HABIT": 
            let newHabits = state.habits.filter(h => h.id !== action.id)
            return{
                ...state,
                habits: [...newHabits]
            }
        case "UPDATE_HABIT": 
            let updatedHabits = state.habits.map(h => {
                if(h.id === action.id){
                    h.habit = action.newText;
                }
                return h
            })       
            return{
                ...state,
                habits: [...updatedHabits]
            }
        case "COMPLETE_HABIT": 
            let complitedHabits = state.habits.map(h => {
                if(h.id === action.id){
                    h.isComplited = !h.isComplited;
                }
                return h
            })       
            return{
                ...state,
                habits: [...complitedHabits]
            }
        case "UNCOMPLITED_ALL_HABITS": 
            let uncomplitedHabits = state.habits.map(h => {
                h.isComplited = false;
                console.log(h)                
                return h
            })       
            return{
                ...state,
                habits: [...uncomplitedHabits]
            }                    
        default:
            return state
    }
    
}

export const addHabit = (newHabit) => ({ type: 'ADD_HABIT', newHabit})
export const deleteHabit = (id) => ({ type: 'DELETE_HABIT', id })
export const updateHabit = (id, newText) => ({ type: 'UPDATE_HABIT', id, newText})
export const completeHabit = (id) => ({ type: 'COMPLETE_HABIT', id })
export const uncompleteAllHabits = () => ({ type: 'UNCOMPLITED_ALL_HABITS'})




export default habitsListReduser