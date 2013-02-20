/*jslint nomen: true */
/*global define: false, Backbone: false, _: false, require: false, $: false */

define(
    [],
    function () {
        return Backbone.Router.extend({

            routes: {
                '': 'indexController'
            },

            indexController : function () {
                require(
                    [
                        'collections/Comment',
                        'views/CommentList',
                        'views/CommentForm'
                    ],
                    function (CommentCollection, CommentListView, CommentFormView) {
                        var commentCollection, commentListView, commentFormView;

                        commentCollection = new CommentCollection();

                        commentListView = new CommentListView({
                            commentCollection: commentCollection
                        });

                        commentFormView = new CommentFormView({
                            commentCollection: commentCollection
                        });

                        commentCollection.fetch();

                        $('.comment-list').html(commentListView.el);
                        $('.comment-form').html(commentFormView.el);
                    }
                );
            }

        }
    );
});