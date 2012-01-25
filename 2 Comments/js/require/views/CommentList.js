/*jslint white: false, es5: false */
/*global define: true, Backbone: true, _: true */

define(
    [
        'text!templates/comment-list-row.html'
    ],
    function (listRowTemplate) {
        return Backbone.View.extend({
            initialize: function (options) {

                this.listRowTemplate = _.template(listRowTemplate);

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
