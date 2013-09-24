'use strict';

var linkTag = -1, compileTag = -1;

angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {

	return {
		compile: function(tElement) {
			console.log('[tng-lifecycle]: compile');

			tElement.addClass('pretty');
			tElement.append('compile: ' + ++compileTag + '<br>');

			return function(scope, iElement) {
				console.log('[tng-lifecycle]: link');

				iElement.append('link: ' + ++linkTag + '<br>');
				iElement.append('tElement === iElement? => ' + (tElement === iElement) + '<br>');
			}
		}
	};
});