'use strict';
var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function (module) { 
    
    var adminView = {};

    adminView.initAdminPage = function(ctx) {
        $('.body-container').hide();
        $('.admin-verify').show();
        $('#admin-form').on('submit', adminView.verify);    
    }

    adminView.verify = (event) => {
        event.preventDefault();
        console.log('You are verified');
        
    };

    module.adminView = adminView; 
})(app);