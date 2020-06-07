import React, { useState } from 'react';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';

function ProcessSearch() {
    const [number, setNumber] = useState('');

    const history = useHistory();

    async function handleSearch(e) {
        e.preventDefault();
        try {
            history.push({
                pathname: '/process',
                state: {number}
            });
        } catch (err) {

        }

    }
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </form>
        </div>
    )
}

export default ProcessSearch;