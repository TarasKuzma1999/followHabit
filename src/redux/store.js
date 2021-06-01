import { combineReducers, createStore } from "redux";
import hebitsListReduser from "./habits-list-reduser"

const redusers = combineReducers({
    heditsList: hebitsListReduser
})

let store = createStore(redusers)

export default store;