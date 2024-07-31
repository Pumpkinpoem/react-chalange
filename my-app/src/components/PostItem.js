import React from 'react';
import css from './css/Content.module.css';

const PostItem = ({ post }) => {
    return (
        <div className={css.SearchItem}>
            <h2>{post.name}</h2>
            <img src={post.image} alt={post.name} />
            <p>{post.description}</p>
        </div>
    );
};

export default PostItem;
