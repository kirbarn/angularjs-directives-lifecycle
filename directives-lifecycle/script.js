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
			tElement.append('<code>compile()</code> call order: <b>' + ++compileTag + '</b><br>');

			var preElement;

			return {
				pre: function(scope, iElement) {
					preElement = iElement;

					console.log('[tng-lifecycle]: pre-link');

					iElement.append('<code>pre()</code> (pre-link) call order <b>' + ++linkTag + '</b><br>');
				},
				post: function(scope, iElement) {
					console.log('[tng-lifecycle]: post-link');

					// iElement.prepend('<h3>' + scope.i + '</h3>');
					iElement.append('<code>post()</code> (post-link) call order <b>' + ++linkTag + '</b><br>');
					console.log('[tng-lifecycle]: link');
				}
			};
		}
	};
});