'use strict';
var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function (module) { 
    
    var errorView = {};

    errorView.errorCallback = (err) => {
        errorView.initErrorPage(err);
    }

    errorView.initErrorPage = (err) => {
        $('.container').hide();
        $('.error-view').show();
        $('#error-message-holder').empty();
        let template = Handlebars.compile($('#error-template').text());
        $('#error-message-holder').append(template(err));        
    }
    module.errorView = errorView; 
})(app);