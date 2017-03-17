export const fetchCheeses = () => {
  return (dispatch) => {
    dispatch(fetchCheesesRequest());
    
    return fetch('http://localhost:8080/cheeses')
    .then(response => {
    	if (!response.ok) { 
    		throw new Error(response.statusText); 
    	} 
    	return response.json();
    })
    .then(json => {
    	dispatch(fetchCheesesSuccess(json.cheeses));
    })
    .catch(error => {
    	dispatch(fetchCheesesError(error));
    })
  }
}

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST 
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (data) => ({
  type: FETCH_CHEESES_SUCCESS,
  data
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
  type: FETCH_CHEESES_ERROR,
  error
});