import BookInfo from './components/BookInfo.jsx'
import BookList from './components/BookList.jsx'
import BookSearch from './components/BookSearch.jsx'
import React from 'react'
import {Router, Route, Link, hashHistory} from 'react-router'
import ReactDOM from 'react-dom'
import $ from 'jquery'

var App = React.createClass({
  render: function(){
    return (
      <div>
        <h1> BookApp </h1>
          <div className="col-md-4">
             <BookSearch  /> 
             <BookList  />
             {this.props.children}
          </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <Route path=":name" component={BookInfo}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

// from div className="col-md-offset-1 col-md-6"
//<BookList data={this.state.list} />
