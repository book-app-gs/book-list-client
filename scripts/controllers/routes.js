'use strict';

page('/', app.Book.fetchAll(app.bookView.initIndexPage));
page('/add', app.bookView.initAddPage);
// page('/:book_id', app.Book.fetchOne(app.bookView.initDetailPage));

page();