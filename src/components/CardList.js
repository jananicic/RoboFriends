import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
           {
            robots.map((element, i) => {
                return < Card 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                />
            })
           }
        </div>
    );
}

export default CardList;