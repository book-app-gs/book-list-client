'use strict';
var app = app || {};
var __API_URL__ = 'http://localhost:3000';

(function (module) { 
    
    var menuView = {};

    menuView.listenMenu = () => {
        $('.main-nav').on('click', function(e){
            $('.main-nav ul').toggle();
        });
    }
    
    module.menuView = menuView; 
})(app);