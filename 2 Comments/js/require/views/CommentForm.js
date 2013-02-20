/*jslint nomen: true */
/*global define: true, Backbone: true, _: true, $: true */

define(
    [
        'models/Comment',
        'text!templates/comment-form.html'
    ],
    function (CommentModel, template) {
        "use strict";
        var newComment = function (e) {
                var options, comment;

                e.preventDefault();

                options = {};
                _.each(this.$('form').serializeArray(), function (field) {
                    options[field.name] = field.value;
                });

                comment = new CommentModel(options);
                comment.save();
                this.commentCollection.add(comment);

                this.$('input, textarea').val('');
            };
        return Backbone.View.extend({
            events: {
                'submit form': newComment
            },
            initialize: function (options) {
                this.commentCollection = options.commentCollection;
                this.render();
            },
            render: function () {
                $(this.el).html(
                    template
                );
            }
        });
    }
);
