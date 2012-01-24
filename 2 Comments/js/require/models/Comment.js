/*jslint white: false, es5: false */
/*global define: true, Backbone: true, Store: true */

define(
    [], 
    function () {
        return Backbone.Model.extend({
            localStorage: new Store("comment")
        });
    }
);