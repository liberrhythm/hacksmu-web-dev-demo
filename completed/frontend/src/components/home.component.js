import React, {Component} from "react";
import axios from 'axios';
import Post from "./post.component";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:9000/posts/')
            .then(res => {
                this.setState({ posts: res.data });
            });
    }

  render() {
    return (
        <div>
            {
                this.state.posts.map((post, i) => {
                    return (
                        <div>
                            <Post key={i} title={post.title} author={post.author} text={post.text} />
                            <br />
                        </div>
                    )
                })
            }
        </div>
    );
  }
}