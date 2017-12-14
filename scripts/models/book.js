'use strict';
var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function (module) {     

    function Book (rawDataObj) {
     Object.keys(rawDataObj).forEach(key => {
     this[key] = rawDataObj[key];
    }, this);
    }
  
  Book.all = [];

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.prototype.toHtmlDetails = function() {
    let template = Handlebars.compile($('#book-details-template').text());
    return template(this);
  };  
  
  Book.loadAll = rawData => {  
    rawData.forEach(BookObject => Book.all.push(new Book(BookObject)))
  };
  
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  Book.fetchAll = callback => {
    console.log('fetching all...');
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  }

  Book.fetchOne = (ctx, callback) => {
    console.log('inside fetch one... ctx param next', ctx.params.book_id);
    $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
      .then(results => ctx.book =results[0])
      .then(console.log('inside the fetch query'))
      .then(callback)
      .catch(errorCallback);
  }

  Book.prototype.insertRecord = function(callback) {
    //$.post('${__API_URL__}/v1/books', {title: this.title, author: this.author, isbn: this.isbn, image_url: this.image_url, description: this.description})
    $.post(`${__API_URL__}/api/v1/books`, callback)
      .then(console.log('inserting record'))
      .then(() => page('/'))
  };

    Book.create = book => {
      $.post(`${__API_URL__}/api/v1/books`, book)
      .then(() => page('/'))
      .catch(errorCallback)
    }

  module.Book = Book;
})(app);