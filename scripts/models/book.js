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
  
  Book.loadAll = rawData => {  
  //  if (!(Book.all && Book.all.length))
  // doing it this way doesnt refresh when you want to delete

  Book.all = [];
  {rawData.forEach(BookObject => Book.all.push(new Book(BookObject)))}
  };
  
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  Book.fetchAll = (ctx, callback) => {
    console.log('fetching all...', callback);
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  }

  Book.fetchOne = (ctx, callback) => {
    console.log('inside fetch one... ctx param next', ctx);
    $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
      .then(results => ctx.book =results[0])
      .then(callback)
      .catch(errorCallback);
  }

  Book.prototype.insertRecord = function(callback) {
    //$.post('${__API_URL__}/v1/books', {title: this.title, author: this.author, isbn: this.isbn, image_url: this.image_url, description: this.description})
    $.post(`${__API_URL__}/api/v1/books`, callback)
      .then(console.log('inserting record'))
      .then(() => page('/'))
  };

  Book.destroy = (ctx, callback) => {
    console.log('inside destory', ctx);
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${ctx.params.book_id}`,
      method: 'DELETE'
    })
      .then(() => page('/'))
      .then(callback)
      .catch(errorCallback);
    
    // $.get(`${__API_URL__}/api/v1/books/delete/${ctx.params.book_id}`)
    //   .then(results => ctx.book =results[0])
    //   .then(callback)
    //   .catch(errorCallback);
    }

    Book.update = (ctx, callback) => {
      event.preventDefault(); 
      console.log('inside update', ctx);
      $.ajax({
        url: `${__API_URL__}/api/v1/books/${ctx.params.book_id}`,
        method: 'PUT',
        data: {
          title: ctx.book.title,
          author: ctx.book.author,
          isbn: ctx.book.isbn,
          url: ctx.book.url,
          description: ctx.book.description
        }
      })
        .then(callback)
        .catch(errorCallback);
    }
  

    Book.create = book => {
      $.post(`${__API_URL__}/api/v1/books`, book)
      .then(() => page('/'))
      .catch(errorCallback)
    }

  module.Book = Book;
})(app);