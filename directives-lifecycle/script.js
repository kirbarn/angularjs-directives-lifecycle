'use strict';

var linkTag = 0;

angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {

	return {
		link: function(scope, iElement) {
			console.log('[tng-lifecycle]: link');

			iElement.addClass('pretty');
			iElement.append('<code>link()</code> call order <b>' + ++linkTag + '</b>');
		}
	};
});