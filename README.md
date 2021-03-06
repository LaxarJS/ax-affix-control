# AxAffixControl

> Wraps the [Bootstrap affix component](http://getbootstrap.com/javascript/#affix) as an AngularJS directive, for LaxarJS widgets

## Installation

To retrieve a copy of this control you can either clone it directly using git or alternatively install it via Bower.
For general information on installing, styling and optimizing controls, have a look at the [LaxarJS documentation](https://github.com/LaxarJS/laxar/blob/master/docs/manuals/installing_controls.md).

### Setup Using Bower

Install the control into your LaxarJS application:

```sh
bower install laxar-affix-control
```

Make sure that `bootstrap` and `jquery` can be found by RequireJS.
For example, assuming that your `baseUrl` is `'bower_components'`, add this to the `paths` section of your `require_config.js`:

```js
jquery: 'jquery/dist/jquery',
'bootstrap': 'bootstrap-sass-official/assets/javascripts/bootstrap'
```

Additionally, it is necessary to specify the correct load order by adding a `shim` entry:

```js
shim: {
   // ...
   'bootstrap/affix': [ 'jquery' ]
}
```

Now you may reference the control from the `widget.json` of your widget:
 
```json
"controls": [ "laxar-affix-control" ]
```


## Usage


