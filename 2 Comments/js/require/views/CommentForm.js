/*jslint white: false, es5: false */
/*global define: true, Backbone: true, _: true */

define(
    ['text!templates/comment-form.html'],
    function (template) {
        return Backbone.View.extend({
            events: {
                'submit form': 'newComment'
            },
            initialize: function (options) {
                this.commentCollection = options.commentCollection;
                this.render();
            },
            render: function () {
                $(this.el).html(
                    template
                );
            },
            newComment: function (e) {
                var options;

                e.preventDefault();

                options = {};
                _.each(this.$('form').serializeArray(), function (field) {
                    options[field.name] = field.value;
                });

                console.log(options);
            }
        });
    }
);
