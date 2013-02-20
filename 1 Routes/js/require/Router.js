/*jslint white: false, es5: false */
/*global define: false, Backbone: false, _: false */

define([], function () {
    "use strict";

    var displaySomething, links, linksArray;

    linksArray = [
        'q?backbone',
        'show/42',
        'search/pierre/Zurich',
        'download/avatar/pierre/large'
    ];

    links = $('<ul/>');

    _.each(linksArray, function (fragment) {
        fragment = '#' + fragment;
        links.append('<li><a/></li>')
            .find('a:last')
            .attr('href', fragment)
            .text(fragment);
    });

    displaySomething = function (displayString) {
        return function () {
            var text, i, ii;

            text = displayString;

            if (arguments.length > 0) {
                text += ': [';
                text += _.map(
                    Array.prototype.slice.call(arguments),
                    function (string) {
                        return '"' + string + '"';
                    }
                ).join(', ');
                text += ']';
            }

            $('body').html('<h1/>')
                .append(links)
                .find('h1')
                .text(text);
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