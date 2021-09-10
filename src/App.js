import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import StockForm from './components/StockForm';
import StockDetail from './components/StockDetail';

function App() {
	const state = useSelector((state) => state.stock);
	const dispatch = useDispatch();
	const { loadStock } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className='App'>
			<StockForm loadStock={loadStock} />
			<StockDetail stockData={state} />
		</div>
	);
}

export default App;
