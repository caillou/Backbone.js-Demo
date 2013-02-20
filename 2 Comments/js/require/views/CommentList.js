/*jslint nomen: true */
/*global define: false, Backbone: false, _: false, $: false */

define(
    [
        'text!templates/comment-list-row.html',
        'text!templates/comment-list-empty.html'
    ],
    function (listRowTemplate, emptyListTemplate) {
        "use strict";
        return Backbone.View.extend({
            listRowTemplate: _.template(listRowTemplate),

            initialize: function (options) {
                this.commentCollection = options.commentCollection;
                this.commentCollection.bind('reset', this.renderRows, this);
                this.commentCollection.bind('add', this.renderRow, this);
            },

            renderRows: function (commentCollection) {
                if (commentCollection.size() === 0) {
                    $(this.el).prepend(emptyListTemplate);
                    return;
                }

                commentCollection.each(function (commentModel) {
                    this.renderRow(commentModel);
                }, this);
            },

            renderRow: function (commentModel, commentCollection) {
                if (commentCollection && commentCollection.size() === 1) {
                    // This is the first comment. Let's remove the
                    // comment-list-empty message from our element.
                    $(this.el).html('');
                }
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
