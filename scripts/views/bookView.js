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
        $('.book-description').show();
        $('.book-detail').empty();
        let template = Handlebars.compile($('#book-detail-template').text());
        $('.book-detail').append(template(ctx));
    }

    bookView.initCreateFormPage = function() {
        $('.body-container').hide();
        $('.book-new').show();
        $('#new-book-form').on('submit', function(event){
            event.preventDefault();
            let book = {
                title: event.target.title.value,
                author: event.target.author.value,
                isbn: event.target.isbn.value,
                url: event.target.url.value,
                description: event.target.description.value
            }
        })
    }
    
    module.bookView = bookView; // keep at bottom
})(app);