import React, { useState } from 'react';
import Button from 'Components/Button/Button';

//TODO : see if it's gonna be used in the future

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(startDate.getDate() + 1);

    return (
        <div>
            <div>
                Location:
                <select>
                    <option value="anctartica">Anctartica</option>
                    <option value="greenland">Greenland</option>
                    <option value="alaska">Alaska</option>
                </select>
            </div>
            <div>Start date:</div>
            <div>End Date:</div>
            <div>Number of penguins</div>
            <Button children="Search" />
        </div>
    );
};

export default Search;
