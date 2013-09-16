'use strict';

var linkTag = -1;

angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {

	return {
		link: function(scope, iElement, iAttrs, controller) {

			// iElement.addClass('pretty');
			// console.log('[tng-lifecycle]: post-link');
			// console.log('[tng-lifecycle]: tElement === iElement? => ' + (tElement === iElement));

			iElement.append('<span>link tag: ' + ++linkTag + '</span>');
		}
	};
});