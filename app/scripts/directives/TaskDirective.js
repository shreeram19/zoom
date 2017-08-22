module.directive('task', ['$rootScope', function($rootScope) {
    return {
        restrict: 'E',
        scope: {
            asset: '='
        },
        template: '<div class="task-item-wrapper" ng-if="!asset.edit">' +
            ' <h3 class="task-name">{{asset.name}}</h3>' +
            '<p class="task-desc">{{asset.desc}}<p>' +
            '</div>' +
            '<div class="task-item-wrapper" ng-if="asset.edit">' +
            '   <h4>Add a Task Name and Desc</h4>' +
            ' <input class="edit task-name" ng-model="asset.name" type="text"/>' +
            '<textarea class="edit task-desc" ng-model="asset.desc"/>' +
            '<button ng-click="saveData($event)" class="add-button">Save</button>' +
            '</div>',
        link: function(scope, element, attrs) {
            scope.saveData = function(e) {
                scope.asset.edit = false;
            }
        }
    };
}]);