/**
* directiveLifecycle Module
*/
angular.module('tngDirectiveLifecycle', [])
.directive('tngLifecycle', function() {
    var compileTag = -1, linkTag = -1;

    console.log('[tng-lifecycle]: constructor');

    return {
        controller: function($scope, $element, $attrs) {
            console.log('[tng-lifecycle]: controller');
            $element.addClass('controller');
        },
        compile: function(tElement, tAttrs) {
            console.log('[tng-lifecycle]: compile');

            tElement.addClass('compile');
            tElement.append('<span>compile tag: ' + ++compileTag + '</span><br>');

            return {
                pre: function (scope, iElement, iAttrs, controller) {
                    console.log('[tng-lifecycle]: pre-link');
                },
                post: function (scope, iElement, iAttrs, controller) {
                    console.log('[tng-lifecycle]: post-link');
                    console.log('[tng-lifecycle]: tElement === iElement? => ' + (tElement === iElement));

                    iElement.addClass('link' + iAttrs['index']);
                    iElement.append('<span>link tag: ' + ++linkTag + '</span><hr>');
                }
            }
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

            return {
                pre: function (scope, iElement, iAttrs, controller) {
                    console.log('[tng-lifecycle-child]: pre-link');
                },
                post: function (scope, iElement, iAttrs, controller) {
                    console.log('[tng-lifecycle-child]: post-link');
                }
            }
        }
    };
});