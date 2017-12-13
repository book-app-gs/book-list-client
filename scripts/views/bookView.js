'use strict';
var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function (module) { 
    
    var bookView = {};

    bookView.initIndexPage = () => {
        console.log('app-' , app)
        Book.all.forEach(a => $('#books').append(a.toHtml()));
    }
    module.bookView = bookView; 
})(app);