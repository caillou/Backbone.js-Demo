/*jslint white: false, es5: false */
/*global define: true, Backbone: true, _: true */

define(
    [
        'text!templates/comment-list.html',
        'text!templates/comment-list-row.html'
    ],
    function (listTemplate, listRowTemplate) {
        return Backbone.View.extend({
            initialize: function (options) {
                this.commentCollection = options.commentCollection;
                this.commentCollection.bind('add', this.addRow, this);
                this.render();
            },
            addRow: function () {
                
            },
            render: function () {
                
            }
        });
    }
);
