/*jslint nomen: true */
/*global define: false, Backbone: false, _: false, require: false, $: false */

define(
    [
        'collections/Comment',
        'views/CommentList',
        'views/CommentForm'
    ],
    function (CommentCollection, CommentListView, CommentFormView) {
        return Backbone.Router.extend({

            routes: {
                '': 'indexController'
            },

            indexController : function () {
                var commentCollection, commentListView, commentFormView;

                commentCollection = new CommentCollection();

                commentListView = new CommentListView({
                    commentCollection: commentCollection
                });

                commentFormView = new CommentFormView({
                    commentCollection: commentCollection
                });

                $('.comment-list').html(commentListView.el);
                $('.comment-form').html(commentFormView.el);

                commentCollection.fetch();
            }

        }
    );
});