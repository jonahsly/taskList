import React from 'react';
import './ListTask.css';

export default function ListTask(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
};

export { ListTask };