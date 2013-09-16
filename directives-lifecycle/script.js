'use strict';

var linkTag = -1;

angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {

	return {
		link: function(scope, iElement, iAttrs, controller) {
			// console.log('[tng-lifecycle]: link');
			// console.log('[tng-lifecycle]: tElement === iElement? => ' + (tElement === iElement));

			// iElement.addClass('pretty');
			// iElement.append('link tag: ' + ++linkTag);
		}
	};
});