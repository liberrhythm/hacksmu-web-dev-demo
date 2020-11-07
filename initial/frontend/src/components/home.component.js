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
        // TODO: ADD AXIOS CALL HERE
    }

  render() {
    // TODO: ADD POST COMPONENTS HERE
    return (
        <div>
            {
                this.state.posts.map((post, i) => {
                    return (
                        <div>

                        </div>
                    )
                })
            }
        </div>
    );
  }
}