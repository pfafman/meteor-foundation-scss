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

If you are not using iron router then you can initialize this when meteor starts up.  There are also issues with working forms into the meteor framework.

### Install

* Pre-Install [Meteorite](https://github.com/oortcloud/meteorite) to use [Atmosphere](https://atmosphere.meteor.com)

```sh
	[sudo] npm install -g meteorite
```

Note this is not on Atmosphere yet.  You can add it if you want by editing your meteor upper level smart.json file with a "git" entry:

```
{
	"packages": {
    	"foundation-sccs": {
        	"git": "https://github.com/pfafman/meteor-foundation-sccs.git"
    	},
    	....
   	}
}
```
and then run meteorite to install.

```
	mrt add foundation-sccsr
```

If/when someone puts this on meteorite you can skip editing your smart.json file.

Edit code so as to attach foundation to your DOM.



