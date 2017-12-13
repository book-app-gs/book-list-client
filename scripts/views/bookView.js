'use strict';
var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function (module) { 
    
    var bookView = {};

    bookView.toggleIndex = () => {
        $('.body-container').hide();
        $('.book-all').show();
        app.Book.all.map(a => $('#book-list').append(a.toHtml()));
    }

    bookView.initIndexPage = () => {
        bookView.toggleIndex();
    }
    
    module.bookView = bookView; // keep at bottom
})(app);