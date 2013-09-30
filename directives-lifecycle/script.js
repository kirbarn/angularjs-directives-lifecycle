'use strict';

var linkTag = 0, compileTag = 0;

angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {

	return {
		compile: function(tElement) {
			console.log('[tng-lifecycle]: compile');

			tElement.addClass('pretty');
			tElement.append('<code>compile()</code> call order: <b>' + ++compileTag + '</b><br>');

			return function(scope, iElement) {
				console.log('[tng-lifecycle]: link');

				// iElement.prepend('<h3>' + scope.i + '</h3>');
				iElement.append('<code>link()</code> call order: <b>' + ++linkTag + '</b><br>');
				iElement.append('tElement === iElement? => ' + (tElement === iElement) + '<br>');
			}
		}
	};
});