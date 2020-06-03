import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

// import Test from '../test/test'
import classes from './Tab.css';

class tab extends Component {
    state = {
        posts: [],
        favorites: [],
        showFavorites: false,
        tabIndex: 0
    }

    componentDidMount() {
        axios.get("https://assignment-machstatz.herokuapp.com/planet")
            .then(response => {
                this.setState({ posts: response.data });
                // console.log(response);
            });
    }

    addToFavorites = (post) => {
        let fav = this.state.favorites;
        if(fav.includes(post)){ 

        }
        else{
            fav.push(post);
            this.setState({favorites: fav})
        }
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <div key={post.id} style={{ width: '200px', height: '100px' }}>
                    <div>
                    {post.name}
                    </div>
                    <div>   
                        <button onClick={() => this.addToFavorites(post)}>Add to Favorites</button>
                    </div>
                </div>
            );
        })
        const favorites = this.state.favorites.map(post => {
            return (
                <div key={post.id} style={{ width: '200px', height: '100px' }}>
                    <div>
                        {post.name}
                    </div>
                </div>
                );
        })

        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList className={classes.list}>
                    <Tab>Planet</Tab>
                    <Tab>Favorite </Tab>
                </TabList>
                <TabPanel>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                       {posts}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                       {favorites}
                    </div>
                </TabPanel>
            </Tabs>
        );
    }
}

export default tab;