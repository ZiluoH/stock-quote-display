import React from 'react';

function StockDetail({stockData}) {
    if(stockData.results === undefined){
        return(
            <h4>Enter a valid stock ticker to search</h4>
        )
    }else{
        const resultArray = stockData.results;
        let maxPrice, minPrice, avgPrice, maxVolume, minVolume, avgVolume
        maxPrice = (resultArray.reduce((max,p) => p.h > max ? p.h : max, resultArray[0].h)).toFixed(2)
        minPrice = (resultArray.reduce((min,p) => p.l < min ? p.l : min, resultArray[0].h)).toFixed(2)
        maxVolume = resultArray.reduce((max,p) => p.v > max ? p.v : max, resultArray[0].v)
        minVolume = resultArray.reduce((min,p) => p.v < min ? p.v : min, resultArray[0].v)
        avgVolume = (resultArray.reduce((a,b) => a + b.v, 0)/stockData.count).toFixed()
        avgPrice = (resultArray.reduce((a,b) => a + b.vw, 0)/stockData.count).toFixed(2)
        return (
			<div>
				<h2>{stockData.ticker}</h2>

				<table className="stock_detail_table">
                    <thead className="stock_detail_table_head">
                        <tr>
                            <th>Item</th>
                            <th>Maximum</th>
                            <th>Minimum</th>
                            <th>Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="stock_detail_price">
                            <td>Price</td>
                            <td>{maxPrice}</td>
                            <td>{minPrice}</td>
                            <td>{avgPrice}</td>
                        </tr>
                        <tr>
                            <td>Volume</td>
                            <td>{maxVolume}</td>
                            <td>{minVolume}</td>
                            <td>{avgVolume}</td>
                        </tr>
                    </tbody>
				</table>
			</div>
		);
    }
}

export default StockDetail;