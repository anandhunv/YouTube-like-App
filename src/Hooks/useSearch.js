import React, { useEffect } from 'react';
import { SEARCH_RESULTS } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../utils/displaySlice';

const useSearch = () => {
  const dispatch = useDispatch();
  const keyword = useSelector(store => store.display.results);
  // console.log(keyword);

  useEffect(() => {
    if (!keyword) return;

    const getSearch = async () => {
      try {
        const data = await fetch(SEARCH_RESULTS + keyword + '&type=video&maxResults=20&part=snippet');
        const json = await data.json();
        // console.log(json);

        dispatch(addData(json.items))
        // Dispatch an action to update Redux store with the search results
        // Example: dispatch({ type: 'SET_SEARCH_RESULTS', payload: json });
      } catch (error) {
        console.error('Error fetching search results:', error);
        // You might want to dispatch an action to handle errors
      }
    };

    getSearch();

  }, [keyword, dispatch]); // Include keyword and dispatch in the dependencies array

  // You might want to return something from the hook, such as loading state or search results
};

export default useSearch;
