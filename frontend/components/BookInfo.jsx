import React from 'react';
import $ from 'jquery';

function Book() {
  this.title = '';
  this.images = {front_default:  ''};
  this.authors = [];
}
var BookInfo = React.createClass({
  getInitialState: function() {
    var blankBook = new Book();
    return {book: blankBook};
  },
  whatBook: function(){
    console.log('working')
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + this.props.params.title,
        dataType: 'json',
        cache: true,
        success: function(data){
          console.log(data)
          this.setState({book: data})
        }.bind(this),
        error: function(xhr, status, err) {
           console.log("error")
           console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  },
  componentWillReceiveProps: function(nextProps){
    this.whatBook(nextProps.params.title)
  },
  componentDidMount: function(){
    console.log('didmount')
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + this.props.params.title,
        dataType: 'json',
        cache: true,
        success: function(data){
          console.log(data)
          this.setState({book: data})
        }.bind(this),
        error: function(xhr, status, err) {
           console.log("error")
           console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
  },
  render: function() {
    console.log(this.props.params)
    var book;
    if (this.props.book){
      book = this.props.book;
    } else {
      book = this.state.book;
    }
    var authors = book.authors.map(function(obj, idx){
        return(
          <li key={idx}>
            {obj.authors}
          </li>
        );
    });
    return (
      <div>
        <h2>{book.title} </h2>
        <img src={book.images.front_default} alt="Book Image" />
        <h4> Author: </h4>
        <ul>
          {authors}
        </ul>
      </div>
    )
  }
})

module.exports = BookInfo 