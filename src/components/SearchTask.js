import React from 'react';
import { TaskContext } from '../contexts/TaskContext';
import './SearchTask.css';

function SearchTask() {
    const {searchValue, setSearchValue} = React.useContext(TaskContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
        className="TaskSearch"
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
};

export { SearchTask };