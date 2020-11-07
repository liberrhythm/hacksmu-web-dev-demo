import React, { Component } from "react";
import axios from 'axios';

export default class PostPage extends Component {

    constructor(props) {
        super(props);

        const { match: { params } } = this.props;

        this.state = {
            id: params.id,
            title: "",
            author: "",
            text: ""
        };
    }

    componentDidMount() {
        axios.get("http://localhost:9000/posts/" + this.state.id)
            .then(res => {
                let post = res.data;
                this.setState({ title: post.title, author: post.author, text: post.text });
            });
    }

    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <h3>{ this.state.author }</h3>
                <p>{ this.state.text }</p>
            </div>
        );
    }
}