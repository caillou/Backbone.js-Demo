/*jslint white: false, es5: false */
/*global define: true, Backbone: true, _: true */

define(
    ['text!templates/comment-form.html'],
    function (template) {
        return Backbone.View.extend({
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
