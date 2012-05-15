/*jslint white: false, es5: false */
/*global define: false, Backbone: false, _: false, console: false */

define([], function () {
    
    var displaySomething, links, linksArray;
    
    linksArray = [
        'q?:backbone',
        'show/42',
        'search/pierre/Zurich',
        'download/avatar/pierre/large'
    ];
    
    links = $('<ul/>');
    
    _.each(linksArray, function (fragment) {
        console.log(this, arguments);
        fragment = '#' + fragment;
        links.append('<li><a/></li>')
            .find('a:last')
            .attr('href', fragment)
            .text(fragment);
    });

    displaySomething = function (displayString) {
        return function () {
            $('body').html('<h1/>')
                .append(links)
                .find('h1')
                .text(displayString);
            console.log(arguments);
        };
    };

    return Backbone.Router.extend({

        routes: {
            '': 'index',
            'q?:query': 'query',
            'show/:id': 'show',
            'search/:who/:where': 'search',
            'download/*path': 'download'
            
        },

        index: displaySomething('index'),
        query: displaySomething('query'),
        show: displaySomething('show'),
        search: displaySomething('search'),
        download: displaySomething('download')

    });
});