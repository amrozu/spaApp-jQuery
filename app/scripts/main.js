'use strict';

var $window = $(window);
var $content = $('#content');

var load = function (name) {
    if (whitelist.indexOf(name) === -1) {
        name = 'home';
    }

    $content.load('views/' + name + '.html');
};

var whitelist = [
    'about',
    'contact',
    'home'
];

$window
    .on('load', function () {
        load();
    })
    .on('hashchange', function () {
        load(location.hash.substring(1));
    });
