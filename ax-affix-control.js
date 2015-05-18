/**
 * Copyright 2015 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
define( [
   'angular',
   'jquery',
   'bootstrap-affix'
], function( ng, $ ) {
   'use strict';

   var directiveName = 'axAffix';
   var attributeOffsetTop = directiveName + 'OffsetTop';
   var attributeOffsetBottom = directiveName + 'OffsetBottom';

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   var directive = [ function() {

      return {
         restrict: 'A',
         link: function( scope, element, attrs ) {
            var offset = {};
            if( attrs[ attributeOffsetTop ] ) {
               offset.top = parseInt( attrs[ attributeOffsetTop ], 10 );
            }
            if( attrs[ attributeOffsetBottom ] ) {
               offset.bottom = parseInt( attrs[ attributeOffsetBottom ], 10 );
            }

            $( element ).affix( { offset: offset } );
         }
      };

   } ];

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   return ng.module( directiveName + 'Control', [] ).directive( directiveName, directive );

} );
