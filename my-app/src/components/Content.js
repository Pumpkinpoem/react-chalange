import React, { useState, useEffect } from 'react';
import css from './css/Content.module.css';
import postsData from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader'; 

const ContentHooks = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(postsData.savedPosts);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleSearchChange = (event) => {
        const searchInput = event.target.value.toLowerCase();
        const filteredPosts = postsData.savedPosts.filter(post =>
            post.author.toLowerCase().includes(searchInput)
        );
        setFetchedPosts(filteredPosts);
        setSearchInput(searchInput);
    }

    if (!Array.isArray(fetchedPosts)) {
        console.error('Posts is not an array:', fetchedPosts);
        return <div>Error: Posts data is not an array</div>;
    }

    return (
        <div className={css.Content}>
            <h1 className={css.TitleBar}>My Photos</h1>
            <div>
                <form className={css.TitleBar}>
                    <label htmlFor="searchInput">Search: </label>
                    <input
                        type="search"
                        id="searchInput"
                        value={searchInput}
                        onChange={handleSearchChange}
                        placeholder="By Author"
                    />
                </form>
                <h4>posts found: {fetchedPosts.length}</h4>
            </div>
            <div className={css.SearchResults}>
                {fetchedPosts.map((post, index) => (
                    <PostItem key={index} post={post} />
                ))}
            </div>
        </div>
    );
}

export default ContentHooks;
