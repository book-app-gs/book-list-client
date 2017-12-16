'use strict';

//if you dont have ctx passed to fetAll - it breaks when you go from book details back to book view. Why ?
//same with this- page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage(ctx)));

page('/', 
    (ctx, next) => app.Book.fetchAll(ctx, next),
    (ctx) => app.bookView.initIndexPage(ctx));

page('/books/add', 
    ctx => app.bookView.initAddPage(ctx));

page('/books/admin',
    app.adminView.initAdminPage);

page('/books/search', 
(ctx, next) => app.bookView.initSearchFormPage(ctx, next), 
(ctx) => app.bookView.initSearchResultsPage(ctx));

page('/books/:book_id', 
    ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));

page('/books/:book_id/update', 
    (ctx, next) => app.Book.fetchOne(ctx, next), 
    (ctx, next) => app.bookView.initUpdateFormPage(ctx, next),
    (ctx) => app.bookView.initIndexPage(ctx));

page('/books/:book_id/delete', 
    (ctx, next) => app.Book.fetchOne(ctx, next), 
    (ctx) => app.Book.destroy(ctx));


//page('/books/:book_id/update', ctx  => app.Book.fetchOne(ctx, app.bookView.initUpdateFormPage());
//the above looses the context information

page('*', '/');

page();

// Need to change form from retaining info if you go from update for tp add form