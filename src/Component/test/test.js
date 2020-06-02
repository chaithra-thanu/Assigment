import React, { Component } from 'react';
import axios from 'axios';





class Test extends Component {
    state = {
        posts: [],
        click: false
    }

    componentDidMount() {
        axios.get("https://assignment-machstatz.herokuapp.com/planet")
            .then(response => {
                this.setState({ posts: response.data });
                // console.log(response);
            });
    }

    clicked = () => {
        const doesClick = this.state.click;
        this.setState({ click: !doesClick });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <div>
                    <div>
                        <input type="checkbox" onClick={this.clicked} />
                    </div>
                    <p>{post.name}</p>
                </div>

            );
        });

        return (
            <div>
                {posts}
            </div>
        );
    }
}

export default Test;