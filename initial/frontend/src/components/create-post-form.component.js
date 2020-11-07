import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreatePostForm extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeText = this.onChangeText.bind(this);

        // TODO: ONSUBMIT BINDING HERE

        this.state = {
            title: "",
            author: "",
            text: ""
        };
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value });
    }

    onChangeAuthor(e) {
        this.setState({ author: e.target.value });
    }

    onChangeText(e) {
        this.setState({ text: e.target.value });
    }

    onSubmit(e) {
        // TODO: ADD SUBMIT FUNCTIONALITY HERE
    }

    render() {
        // TODO: ADD ONSUBMIT CALLBACK HERE
        return (
            <div class="form-wrapper">
                <Form>
                    <Form.Group controlId="title">
                        <Form.Label>Blog Title</Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} />
                    </Form.Group>

                    <Form.Group controlId="author">
                        <Form.Label>Blog Author</Form.Label>
                        <Form.Control type="text" value={this.state.author} onChange={this.onChangeAuthor} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>Blog Text</Form.Label>
                        <Form.Control as="textarea" rows="12" value={this.state.text} onChange={this.onChangeText} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block">
                        Create Post
                    </Button>
                </Form>
            </div>
        );
    }
}