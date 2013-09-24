'use strict';

var linkTag = -1, compileTag = -1;

angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {
	console.log('[tng-lifecycle]: construction');

	return {
		controller: function($scope) {
			console.log('[tng-lifecycle]: controller');
		},
		compile: function(tElement) {
			console.log('[tng-lifecycle]: compile');

			tElement.addClass('pretty');
			tElement.append('compile: ' + ++compileTag + '<br>');

			var preElement;

			return {
				pre: function(scope, iElement) {
					preElement = iElement;

					console.log('[tng-lifecycle]: pre-link');

					iElement.append('pre-link: ' + ++linkTag + '<br>');
					iElement.append('tElement === iElement? => ' + (tElement === iElement) + '<br>');
				},
				post: function(scope, iElement) {
					console.log('[tng-lifecycle]: post-link');

					iElement.append('post-link: ' + ++linkTag + '<br>');
					iElement.append('tElement === iElement? => ' + (tElement === iElement) + '<br>');
					iElement.append('preElement === postElement? => ' + (preElement === iElement));
				}
			};
		}
	};
});