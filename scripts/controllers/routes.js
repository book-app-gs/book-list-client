'use strict';

page('/', app.Book.fetchAll(app.bookView.initIndexPage));
//page('/books/new', app.bookView.initAddPage);
//page('books/:book_id', app.Book.fetchOne(app.bookView.initDetailPage));
page('/books/:book_id', app.Book.fetchOne());
page('*', '/');
page();