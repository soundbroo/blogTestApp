import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            post: [],
            user: [],
            comments: [],
            coms: []
        }
    }

    async componentDidMount() {
        const id = window.location.href.split("/").splice(4, 1)
        const postRequest = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        const userRequest = await axios.get("https://jsonplaceholder.typicode.com/users/" + postRequest.data.userId)
        const commentsRequest = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
        const com = commentsRequest.data.map(res => res)
        const comments = com.filter(el => el.postId == id)

        this.setState({
            id: id,
            post: postRequest.data,
            user: userRequest.data,
            comments: comments
        })
    }


    render() {
        return (
            <div className="Article post-layout">
                <div className="article-title">{this.state.post.title}</div>
                <div className="article-date">March 2, 2016</div>
                <div className="article-text">{this.state.post.body}</div>
                <div className="article-author">Author:
                    <li>Username: {this.state.user.username}</li>
                    <li>Name: {this.state.user.name}</li>
                    <li>Website: {this.state.user.website}</li>
                </div>
                <hr className="comments-delimetr" />
                <div className="article-comments">
                    {this.state.comments.map(res =>
                        <div className="comments-text">
                            <p>{res.name}:</p>
                            <p className="comments-email">{res.email}</p>
                            <p>{res.body};</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}


export default Post;