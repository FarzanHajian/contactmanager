import React from 'react'

export default (props) => {
    return (
        <div>
            <h1 className="dislay-4">
                <span className="text-danger">404 </span>
                Page Not Found
            </h1>
            <p className="lead">Sorry, that page ({props.history.location.pathname}) does not exist</p>
        </div>
    );
};
