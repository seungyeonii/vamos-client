import React from 'react';
import PropTypes from "prop-types";

function PostList ({id, title, content}) {
    return (
        <div>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{content}</h3>
        </div>
    );
};

PostList.prototype = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired
};

export default PostList;