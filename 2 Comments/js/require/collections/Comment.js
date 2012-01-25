/*jslint white: false, es5: false */
/*global define: true, Backbone: true, Store: true */

define(
    ['models/Comment'],
    function (CommentModel) {
        return Backbone.Collection.extend({
            model: CommentModel,
            localStorage: new Store("comment")
        });
    }
);
