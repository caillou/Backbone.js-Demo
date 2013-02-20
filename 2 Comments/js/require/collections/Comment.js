/*global define: false, Backbone: false, Store: false */

define(
    ['models/Comment'],
    function (CommentModel) {
        "use strict";
        return Backbone.Collection.extend({
            model: CommentModel,
            localStorage: new Store("comment")
        });
    }
);
