import React from 'react';

const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
const getSearchSuccess = (results) => {
	return {
		type: GET_SEARCH_SUCCESS,
		results: results
	}
}