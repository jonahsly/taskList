import React from 'react';
import './App.css';
import CounterTask from "../components/CounterTask";
import SearchTask from "../components/SearchTask";
import ListTask from "../containers/ListTask";
import AddButtonTask from "../components/AddButtonTask";

function App() {
  return (
    <>
        <CounterTask/>
        <SearchTask/>
        <ListTask/>
        <AddButtonTask/>
    </>
  );
};

export default App;
