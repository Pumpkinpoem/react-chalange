import React from 'react';
import css from './css/Content.module.css';
import postsData from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader'; 

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 9000);
    }

    render() {
        const posts = postsData.savedPosts;
        const { isLoaded } = this.state;
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
