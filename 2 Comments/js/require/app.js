/*global Backbone: true, require: true */

require(
    [ "Router", 'i18n!nls/comment' ],
    function (Router, commentStrings) {
        "use strict";
        var router;

        // This is how you could get i18n to work with
        // require.js.
        // The i18n plugin is not used in this demo.
        //
        // For more info, visit
        // http://requirejs.org/docs/api.html#i18n
        // console.log(commentStrings);

        // We need to assign the new Router() object
        // to a variable, in order to make jslint happy.
        router = new Router();
        Backbone.history.start();
    }
);
