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
    rawData.forEach(BookObject => Book.all.push(new Book(BookObject)))
  };
  
  Book.fetchAll = callback => {
    $.get(`${__API_URL__}/api/v1/books`)
    .then(
      function(results) {
        Book.loadAll(results);
        console.log(results);
        callback()
      }
    )
    .catch(app.errorView.errorCallback)
  };
  module.Book = Book;
})(app);