import React, { useState } from 'react';

function StockForm({ loadStock }) {
	const [ticker, setTicker] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		loadStock(ticker);
	};

	return (
		<form onSubmit={handleSubmit} className='stock_form'>
			<label className='stock_ticker_label'>Enter a Stock Ticker</label>
			<input
				type='text'
				value={ticker}
				required
				onChange={(e) => setTicker(e.target.value.toUpperCase())}
				className='stock_input'
			></input>
			<input type='submit' value='Search' className='submit_btn'></input>
		</form>
	);
}

export default StockForm;
