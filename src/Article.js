import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Article.css';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postPerPage: 5,
            val: false
        };
        this.handleMorePosts = this.handleMorePosts.bind(this)
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            const posts = res.data;
            this.setState({
                posts: posts
            })
        });
    }

    handleMorePosts() {
        if (this.state.postPerPage < 99) {
            this.setState({
                postPerPage: this.state.postPerPage + 5
            })
        }
        else if (this.state.postPerPage > 95) {
            this.setState({
                val: true
            })
        }
    }

    render() {
        return (
            <div className="Article">{this.state.posts.slice(0, this.state.postPerPage).map(post =>
                <div>
                    <div className="article-title">{post.title}</div>
                    <div className="article-date">March 2, 2016 | Travel</div>
                    <div className="article-text">{post.body}</div>
                    <button className="article__continue-button">
                        <Link to={`/posts/${post.id}`} className="article__continue-link">Continue reading</Link>
                    </button>
                    <hr className="article__delimetr" />
                </div>)}
                <button onClick={this.handleMorePosts} className="article__more-button" disabled={this.state.val} >More posts</button>
            </div>
        )
    }
}

export default Article;