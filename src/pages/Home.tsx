import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchJoke } from "../redux/actions/action";

const Home = () => {
    const dispatch: AppDispatch = useDispatch()
    const joke = useSelector((state: RootState) => state.joke)
    const loading = useSelector((state: RootState) => state.loading)
    const error = useSelector((state: RootState) => state.error)
    
  return (
    <>
    <h1>Jokes</h1>
    {loading && <p>Loading...</p>}
    {joke && <p>{joke}</p>}
    {error && <p>Error: {error}</p>}
    <button onClick={() => dispatch(fetchJoke())}>Joke</button>
    </>
  );
};

export default Home;
