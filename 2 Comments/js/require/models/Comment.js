/*global define: false, Backbone: false, Store: false, moment: false, md5: false */

define(
    [],
    function () {
        "use strict";
        return Backbone.Model.extend({
            localStorage: new Store("comment"),
            initialize: function (options) {
                if (!options.date) {
                    this.set({'date': moment().toString()});
                }
                if (!options.avatarUrl) {
                    this.set({
                        avatarUrl: 'https://secure.gravatar.com/avatar/' + md5(this.get('email'))
                    });
                }
            },
            getDisplayDate: function () {
                return moment(this.get('date')).fromNow();
            }
        });
    }
);