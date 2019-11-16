import {CHANGE_LIST} from './actionTypes'
const defaultSate = {
    list: []
}
export default (state = defaultSate, action) => {
    switch(action.type) {
        case CHANGE_LIST:{
            return{
                list: action.list
            }
            
        }
        default: return state
    }
}