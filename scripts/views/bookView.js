'use strict';
var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function (module) { 
    
    var bookView = {};

    bookView.toggleIndex = () => {
        console.log('hiding container and showing bookview');
        $('.container').hide();
        $('.book-view').show();
        app.Book.all.map(a => $('#book-list').append(a.toHtml()));
    }

    bookView.initIndexPage = () => {
        bookView.toggleIndex();
    }
    module.bookView = bookView; 
})(app);