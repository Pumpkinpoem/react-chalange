import React from 'react';
import css from './css/Content.module.css';
import postsData from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader'; 

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: [],
            searchInput: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ 
                isLoaded: true,
                posts: postsData.savedPosts 
            });
        }, 9000);
    }

    handleSearchChange = (event) => {
        const searchInput = event.target.value.toLowerCase();
        const filteredPosts = postsData.savedPosts.filter(post =>
            post.author.toLowerCase().includes(searchInput)
        );
        this.setState({ posts: filteredPosts, searchInput });
    }

    render() {
        const posts = postsData.savedPosts;
        const { isLoaded, searchInput } = this.state;
        if (!Array.isArray(posts)) {
            console.error('Posts is not an array:', posts);
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
                            onChange={this.handleSearchChange}
                            placeholder="By Author"
                        />
                    </form>
                    <h4>posts found: {posts.length}</h4>
                </div>
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
