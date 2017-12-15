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

    //show all books
    bookView.initIndexPage = () => {
        bookView.toggleIndex();
    }

    // show one book
    bookView.initDetailPage = function(ctx) {
        $('.body-container').hide();
        $('.book-details').empty();        
        $('.book-details').show();
        let template = Handlebars.compile($('#book-details-template').text());
        $('.book-details').append(template(ctx));
    }

    bookView.initAddPage = function() {
        $('.body-container').hide();
        $('.book-new').show();
        $('#new-book-form').on('submit', bookView.submit);
    }

    bookView.initUpdateFormPage = function(ctx) {
        $('.body-container').hide();
        $('.book-update').show();
        $("input[name*='title']").val(ctx.book.title);
        $("input[name*='author']").val(ctx.book.author);
        $("input[name*='isbn']").val(ctx.book.isbn);
        $("input[name*='url']").val(ctx.book.image_url);
        $("textarea[name*='description']").val(ctx.book.description);
        
        $('#update-book-form').on('submit', app.Book.update(ctx, bookView.initDetailPage));    
    }

    bookView.submit = event => {
        event.preventDefault();
        console.log('listening to form', event.target.title);
        let book = new app.Book({
            title: event.target.title.value,
            author: event.target.author.value,
            isbn: event.target.isbn.value,
            url: event.target.url.value,
            description: event.target.description.value
        });

        app.Book.create(book);
        // app.Book.insertRecord();
        window.location = '../';
    }
    
    module.bookView = bookView; // keep at bottom
})(app);