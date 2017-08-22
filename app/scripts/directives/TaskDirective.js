module.directive('task',['$rootScope',function($rootScope){
return {
    restrict: 'E',
    scope:{
        task: '='
    },
    template : '<div>{{hi}}</div>',
    link : function(scope, element, attrs){
        scope.hi = "hello";
    }
};
}]);