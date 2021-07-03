import {createStore} from 'redux'
import ContactReducer from './ContactReducer'

const store=createStore(ContactReducer);
export default store;