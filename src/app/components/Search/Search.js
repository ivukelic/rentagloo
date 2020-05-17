import React, { useState } from 'react';
import Button from '../Button/Button';
import Calendar from 'react-calendar';

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(startDate.getDate() + 1);

    console.log(startDate);
    console.log(endDate);

    return (
        <div>
            <div>
                Location:
                <select>
                    <option value="anctartica">Anctartica</option>
                    <option value="greenland">Greenland</option>
                    <option value="alaska">Akaska</option>
                </select>
            </div>
            <div>
                Start date:
                <Calendar onChange={setStartDate} value={startDate} />
            </div>
            <div>
                End Date:
                <Calendar onChange={setEndDate} value={new Date()} />
            </div>
            <div>Number of penguins</div>
            <Button children="Search" />
        </div>
    );
};

export default Search;
