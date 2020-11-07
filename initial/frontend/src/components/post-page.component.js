import React, { Component } from "react";
import axios from 'axios';

export default class PostPage extends Component {

    constructor(props) {
        super(props);

        const { match: { params } } = this.props;

        // TODO: ADD POST INFO TO STATE HERE

        this.state = {
            id: params.id
        };
    }

    componentDidMount() {
        // TODO: ADD AXIOS CALL HERE
    }

    render() {
        // TODO: ADD POST INFO DISPLAY HERE
        return (
            <div>
                
            </div>
        );
    }
}