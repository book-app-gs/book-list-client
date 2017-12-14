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

    bookView.initDetailPage = function(ctx) {
        $('.body-container').hide();
        $('.book-details').show();
        $('.book-details').empty();
        let template = Handlebars.compile($('#book-detail-template').text());
        $('.book-details').append(template(ctx));
    }

    bookView.initAddPage = function() {
        console.log('building book');
        $('.body-container').hide();
        $('.book-new').show();
        $('#new-book-form').on('submit', function(event){
            event.preventDefault();
            console.log('listening to form');
            let book = {
                title: event.target.title.value,
                author: event.target.author.value,
                isbn: event.target.isbn.value,
                url: event.target.url.value,
                description: event.target.description.value
            }
        })
        Book.create(book);
    }
    
    module.bookView = bookView; // keep at bottom
})(app);