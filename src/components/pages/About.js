import React from 'react'

function About() {
    let copyright = "Copyright(C) Farzan Hajian";
    let showCoptyright = true;
    let showBold = false;
    let headerTag

    if (showBold) {
        headerTag = <h1 className="text-secondary">Hello {copyright}</h1>;
    } else {
        headerTag = <h6 className="text-secondary">Hello {copyright}</h6>;
    }

    return (
        <div>
            <h1 className="display-4">About Contact Manager</h1>
            <p className="lead">Simple application for managing contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
            {showCoptyright ? headerTag : null}
        </div>
    )
}

export default About;