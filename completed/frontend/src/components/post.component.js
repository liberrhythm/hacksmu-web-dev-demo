import React, { Component } from "react";

export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            author: props.author,
            text: props.text,
        };
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