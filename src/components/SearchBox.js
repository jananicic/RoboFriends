import React from 'react';

const SearchBox = ({searchchange}) => {
    return(
        <input 
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' placeholder='search robots' 
            onChange={searchchange}
        />
    );
}

export default SearchBox;