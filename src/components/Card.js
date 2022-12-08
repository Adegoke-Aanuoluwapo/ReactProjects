import React from 'react';

const Card = ({name, email, id }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
            
            <img alt="" src={`https://robohash.org/${id}test?200*200`} />
            <div>
        <h2>{name}</h2>
        <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;