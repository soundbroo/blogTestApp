import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Article from './Article'
import About from './About'
import Post from './Post'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Article} />
            <Route path="/about" component={About} />
            <Route path='/posts/:id' component={Post} />
        </Switch>
    )
}

export default Main;