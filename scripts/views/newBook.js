'use strict';
var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function (module) { 
    
    var newBook = {};


    newBook.initNewBookPage = () => {
        
        $('#new-form').on('change', 'input, textarea', newBook.create);
        $('#new-form').on('submit', newBook.submit);
      };
    
      newBook.create = () => {
        $('#books').empty();
    
        let book = {
            title: e.target.title.value,
            description: e.target.description.value,
            category: e.target.category.value,
            contact: e.target.contact.value,
            status: e.target.status.value
        }
        
    
        $('#books').append(book.toHtml());
      };
    
    newBook.submit = event => {
        event.preventDefault();
        let book = new app.Book({
            title: $('#book-title').val(),
            author: $('#book-author').val(),
            authorUrl: $('#book-author-url').val(),
            category: $('#book-category').val(),
            body: $('#book-body').val(),
        });
    
        book.insertRecord();
        // use page JS to redirect to homepage
        page('/');

    }    
    newBook.initIndexPage = () => {
        newBook.initNewBookPage();
    }
    
    module.newBook = newBook; // keep at bottom
})(app);