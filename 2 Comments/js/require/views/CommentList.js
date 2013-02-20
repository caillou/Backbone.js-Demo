/*jslint nomen: true */
/*global define: false, Backbone: false, _: false, $: false */

define(
    [
        'text!templates/comment-list-row.html'
    ],
    function (listRowTemplate) {
        "use strict";
        return Backbone.View.extend({
            listRowTemplate: _.template(listRowTemplate),

            initialize: function (options) {
                this.commentCollection = options.commentCollection;
                this.commentCollection.bind('reset', this.renderRows, this);
                this.commentCollection.bind('add', this.renderRow, this);
            },

            renderRows: function (commentCollection) {
                commentCollection.each(function (commentModel) {
                    this.renderRow(commentModel);
                }, this);
            },

            renderRow: function (commentModel) {
                $(this.el).prepend(
                    this.listRowTemplate({
                        comment: commentModel.toJSON(),
                        displayDate: commentModel.getDisplayDate()
                    })
                );
            }
        });
    }
);
