import React from 'react'
import {Link} from 'react-router'

var BookList = React.createClass({
  getInitialState: function() {
    return ({list: []});
  },
  handleChange: function(e) {
    this.setState({list: e.target.value});
    this.props.list(e.target.value);
    //need to do a call here to access the books from the db instead of the ajax calls
    // $.ajax({
    //     url: "https://www.googleapis.com/books/v1/volumes?q=" + this.props.params.search,
    //     dataType: 'json',
    //     //  cache: true,
    //     success: function(data){
    //       console.log(data)
    //       this.setState({list: data.items})
    //     }.bind(this)
    //   })
  },
  // loadBookList: function(){
  //   console.log('loading book list');
  //   $.ajax({
  //       url: "https://www.googleapis.com/books/v1/volumes?q=" + this.props.params.search,
  //       dataType: 'json',
  //       //  cache: true,
  //       success: function(data){
  //         console.log(data)
  //         this.setState({list: data.items})
  //       }.bind(this),
  //       error: function(xhr, status, err) {
  //          console.log("error")
  //          console.error(this.props.url, status, err.toString());
  //       }.bind(this),
  //        timeout:10000
  //   });
  // },
  render: function() {
    // if (this.props.data.length === 0){
    //   return null;
    // }
    //var that = this;
    var bookNodes = this.state.data.map(function(book, idx){
      return(
        <div>
          <li
            className="list-group-item"
            key={idx}>
            <Link to={'/' + book.title}>{book.title}</Link>
          </li>
        </div>
      );
  })
 }
})

module.exports = BookList

// was inside it's own return/div <ul className = "list-group bookList">{bookNodes}</ul>
