import React, { Component } from 'react';

let AuthoritySearch = ({ authorities }) => {

    return (<div className="page">
        {JSON.stringify(authorities)}
    </div>)
}

export default AuthoritySearch;