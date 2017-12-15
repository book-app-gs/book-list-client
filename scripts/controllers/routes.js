'use strict';

//if you dont have ctx passed to fetAll - it breaks when you go from book details back to book view. Why ?
page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', ctx => app.bookView.initAddPage(ctx));
page('/books/admin', app.adminView.initAdminPage);

page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/books/:book_id/update', (ctx, next) => app.Book.fetchOne(ctx, next), ctx=> app.bookView.initUpdateFormPage(ctx));
page('/books/:book_id/delete', (ctx, next) => app.Book.fetchOne(ctx, next), ctx=> app.Book.destroy(ctx));

//page('/books/:book_id/update', ctx  => app.Book.fetchOne(ctx, app.bookView.initUpdateFormPage());
//the above looses the context information

// page('/books/admin',
//     (ctx, next) => app.adminView.verify(ctx, next),
//     (ctx) => app.adminView.updateBook());
page('*', '/');

page();