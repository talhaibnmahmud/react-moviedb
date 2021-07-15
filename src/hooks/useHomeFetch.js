import { useEffect, useState } from "react";

import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadMore, setLoadMore] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(searchTerm);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      //   console.log(movies);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // Initial and Search
  useEffect(() => {
    setState(initialState);

    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!loadMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setLoadMore(false);
  }, [loadMore, searchTerm, state.page]);

  return {
    state,
    error,
    loading,
    searchTerm,
    setLoadMore,
    setSearchTerm,
  };
};

export { useHomeFetch };
