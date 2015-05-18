# AxAffixControl

A wrapper around the [Bootstrap affix control](http://getbootstrap.com/javascript/#affix) for usage as AngularJS directive in LaxarJS applications.

## Installation

To retrieve a copy of this control you can either clone it directly using git or alternatively install it via Bower.
For general information on installing, styling and optimizing controls, have a look at the [LaxarJS documentation](https://github.com/LaxarJS/laxar/blob/master/docs/manuals/installing_controls.md).

### Setup Using Bower

Install the control:

```sh
bower install laxarjs.ax-affix-control
```

Add RequireJS paths for the dependencies to your `require_config.js`, if you have not already done so:

```js
   paths: [
      // ...
      jquery: 'jquery/dist/jquery',
      'bootstrap-affix': 'bootstrap-sass-official/assets/javascripts/bootstrap/affix'
   ]
```

It's additionally necessary to specify the correct load order of these artifacts in the `require_config.js` by using a shim entry:

```js
   shim: {
      // ...
      'bootstrap-affix': {
         deps: [ 'jquery' ]
      }
   }
```

Reference the control from the `widget.json` of your widget:
 
```json
   "controls": [ "laxarjs.ax-affix-control" ]
```
