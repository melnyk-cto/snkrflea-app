// core
import React, { useState } from 'react'

// library
import Select from 'react-select';


export const CustomSelect = ({options, placeholder}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const customStyles = {
        control: base => ({
            ...base,
            // This line disable the blue border
            boxShadow: 'none'
        }),
    };
    return (
        <Select
            instanceId
            styles={customStyles}
            isSearchable={false}
            className='select'
            classNamePrefix="select"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={placeholder}
        />
    )
};
