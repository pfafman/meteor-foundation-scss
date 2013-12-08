# Meteor Foundation SCSS
The [Foundation](http://foundation.zurb.com) framework using SCSS packaged for [Meteor](http://www.meteor.com)

### Intro

This is a test project to see how "hard" it is to get the foundation framework to work with Meteor.  So far I think it is probably easier to just make mods to [bootstrap](http://getbootstrap.com) to get what you think [Foundation](http://foundation.zurb.com) has to offer.

### Issues

Does not play well with Iron Router.  You have to initialize in your layout render callback.

```coffeescript
Template.layout.rendered = ->
	Meteor.defer ->
        $(document).foundation()
```

If you are not using iron router then you can initialize this when meteor starts up.


