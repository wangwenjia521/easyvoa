import {CHANGE_LIST} from './actionTypes'
const defaultSate = {
    list: [{
        "id": "0004",
        "title":"voa慢速英语",
        "link": "/list/0004"
    }]
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