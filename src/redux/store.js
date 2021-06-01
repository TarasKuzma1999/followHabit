import { combineReducers, createStore } from "redux";
import habitsListReduser from "./habits-list-reduser"

const redusers = combineReducers({
    habitsList: habitsListReduser
})

let store = createStore(redusers)

window.store = store;

export default store;