/*global define: false, Backbone: false, Store: false */

define(
    ['models/Comment'],
    function (CommentModel) {
        return Backbone.Collection.extend({
            model: CommentModel,
            localStorage: new Store("comment")
        });
    }
);
