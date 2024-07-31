import React from 'react';
import css from './css/Content.module.css';
import postsData from '../posts.json';
import PostItem from './PostItem';

class Content extends React.Component {
    render() {
        const posts = postsData.savedPosts;

        if (!Array.isArray(posts)) {
            console.error('Posts is not an array:', posts);
            return <div>Error: Posts data is not an array</div>;
        }

        return (
            <div className={css.Content}>
                <h1 className={css.TitleBar}>My Photos</h1>
                <div className={css.SearchResults}>
                    {posts.map((post, index) => (
                        <PostItem key={index} post={post} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Content;
