import React from 'react'

var BookSearch = React.createClass({
  getInitialState: function() {
    return ({search: ''});
  },
  handleChange: function(e) {
    this.setState({search: e.target.value});
    this.props.search(e.target.value);
  },
  handleBookSearch: function(data){
     // if (data){
     //   this.setState({list: this.state.value})
     //   return;
     $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + this.props.params.search,
        dataType: 'json',
        //  cache: true,
        success: function(data){
          console.log(data)
          this.setState({list: data.items})
        }.bind(this),
        // error: function(xhr, status, err) {
        //    console.log("error")
        //    console.error(this.props.url, status, err.toString());
        // }.bind(this),
        //  timeout:10000
    }),
     var list = this.state.data.filter(function(data){
         return (data.items);
     })
     this.setState({list: list});
  ,
  render: function() {
    return (
      <input className="form-control"
        type="text"
        placeholder="look up a book"
        value={this.state.search}
        onChange={this.handleChange}
       
      />
    )
  }
})
 // search={this.handleBookSearch}
module.exports = BookSearch