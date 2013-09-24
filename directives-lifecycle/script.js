'use strict';

var linkTag = -1;

angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {

	return {
		link: function(scope, iElement, iAttrs, controller) {
			console.log('[tng-lifecycle]: link');

			iElement.addClass('pretty');
			iElement.append('link: ' + ++linkTag);
		}
	};
});