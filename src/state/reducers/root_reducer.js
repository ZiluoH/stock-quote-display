import { combineReducers } from 'redux';
import stock_reducer from './stock_reducer'

const reducers = combineReducers({
	stock: stock_reducer,
});

export default reducers;
