import {CombineReducer } from 'redux'
import commonReducer from '../components/CommonWrapper/commonReducer'
export default CombineReducer({
    common: commonReducer
})