/* Ugly hack :-( */

/*
Template._init_foundation.rendered = function () {
    Meteor.defer( function() {
        console.log("_init_foundation")
        $(document).foundation();
        if (/mobile/i.test(navigator.userAgent))
            FastClick.attach(document.body);

    });
};
*/

if (Meteor.isClient) {
    $(document).ready(function () {
        console.log("foundation init");
        $(document).foundation(function (response) {
            console.log('Foundation Init Error', response.errors);
        });
    });
}
