'use strict';

var compileTag = -1, linkTag = -1;

angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {

	console.log('[tng-lifecycle]: constructor');

	return {
		controller: function($scope, $element, $attrs) {
			console.log('[tng-lifecycle]: controller');
			$element.addClass('controller');
		},
		compile: function(tElement, tAttrs) {
			console.log('[tng-lifecycle]: compile');

			tElement.addClass('pretty');
			tElement.append('<span>compile tag: ' + ++compileTag + '</span><br>');

			return {
				pre: function (scope, iElement, iAttrs, controller) {
					console.log('[tng-lifecycle]: pre-link');

					iElement.append('<span>pre-link tag: ' + ++linkTag + '</span><br>');
				},
				post: function (scope, iElement, iAttrs, controller) {
					console.log('[tng-lifecycle]: post-link');
					console.log('[tng-lifecycle]: tElement === iElement? => ' + (tElement === iElement));

					iElement.append('<span>post-link tag: ' + ++linkTag + '</span>');
				}
			};
		}
	};
})
.directive('tngLifecycleChild', function() {
	console.log('[tng-lifecycle-child]: constructor');

	return {
		controller: function($scope, $element, $attrs) {
			console.log('[tng-lifecycle-child]: controller');
		},
		compile: function(tElement, tAttrs) {
			console.log('[tng-lifecycle-child]: compile');

			tElement.addClass('pretty');
			tElement.append('<span>compile tag: ' + ++compileTag + '</span><br>');
			tElement.append('<span>child</span><br>');

			return {
				pre: function (scope, iElement, iAttrs, controller) {
					console.log('[tng-lifecycle-child]: pre-link');

					iElement.append('<span>pre-link tag: ' + ++linkTag + '</span><br>');
				},
				post: function (scope, iElement, iAttrs, controller) {
					console.log('[tng-lifecycle-child]: post-link');

					iElement.append('<span>post-link tag: ' + ++linkTag + '</span><br>');
				}
			};
		}
	};
});