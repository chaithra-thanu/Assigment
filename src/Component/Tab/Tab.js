import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

// import Test from '../test/test'
import classes from './Tab.css';

class tab extends Component {
    state = {
        posts: [],
        checked: true,
        
    }
    componentDidMount() {
        axios.get("https://assignment-machstatz.herokuapp.com/planet")
            .then(response => {
                this.setState({ posts: response.data });
                // console.log(response);
            });
    }

    checkedHandler = () => {
        const check = this.state.checked;
        this.setState({checked: !check});
    }

    render() {

        const posts = this.state.posts.map(post => {
            return (
                <div>
                        <div>
                            <input type="checkbox" defaultChecked={this.checkedHandler} /><label>{post.name}</label>
                            {/* <button onClick={this.checkedHandler}>{post.name}</button> */}
                        </div>
                </div>
            );
        });

       let  show = null;

            if (this.state.checked){
               show = (
                   <div>
                       {posts}
                   </div>
               );
            }
            else {
                null
            }
       
        // this.checkedHandler === true ? {posts} : null;
       

        const displayTab = (
            <Tabs>
                <TabList className={classes.list}>
                    <Tab>Planet</Tab>
                    <Tab>Favorite </Tab>
                </TabList>
                <TabPanel>{posts}</TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        );
        return (
            <div className={classes.Tab}>
                {displayTab}
                
            </div>

        );
    }
}

export default tab;