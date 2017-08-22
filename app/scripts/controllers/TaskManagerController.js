
module.controller('TaskManagerController',['$scope','$rootScope' ,'Storage' , 'Tasks' ,function($scope,$rootScope,Storage, Tasks){
    if(Storage.get('List')){
        $scope.list = Storage.get('List');
    } else {
        $scope.list = Tasks.getTasks();
        Storage.set('List',$scope.list)
    }

    

}]);