import axios from "axios";
import apiKey from "../../apikey";

export const loadStock = (ticker) => {
	return (dispatch) => {
		return axios.get(
			`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2020-01-01/2020-12-31?apiKey=${apiKey}`
		).then((response) => {
			dispatch({
				type:'loadStock',
				payload:response.data
			})
		})
	}
}


