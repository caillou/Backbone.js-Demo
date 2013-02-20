/*global Backbone: true, require: true */

require(
    [ "Router", 'i18n!nls/comment' ],
    function (Router, commentStrings) {
        "use strict";

        // This is how you could get i18n to work with
        // require.js.
        // The i18n plugin is not used in this demo.
        //
        // For more info, visit
        // http://requirejs.org/docs/api.html#i18n
        // console.log(commentStrings);

        new Router();
        Backbone.history.start();
    }
);
