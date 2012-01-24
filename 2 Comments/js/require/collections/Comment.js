/*jslint white: false, es5: false */
/*global define: true, Backbone: true */

define(
    ['models/Comment'],
    function (CommentModel) {
        return Backbone.Collection.extend({
            model: CommentModel,
            initialize: function (options) {
            }
        });
    }
);
    