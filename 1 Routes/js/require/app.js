/*global Backbone: false, require: false */

require([ "Router" ], function (Router) {
    "use strict";
    var router;

    router = new Router();
    Backbone.history.start();
});
