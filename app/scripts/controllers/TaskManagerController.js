module.controller('TaskManagerController', ['$scope', '$rootScope', 'Storage', 'Tasks', '$window', function($scope, $rootScope, Storage, Tasks, $window) {
    if (Storage.get('List')) {
        $scope.list = Storage.get('List');
    } else {
        $scope.list = Tasks.getTasks();
        Storage.set('List', $scope.list)
    }

    $scope.listTypes = Object.keys($scope.list);

    $scope.addItem = function($event) {
        var currentTypeID = $event.target.closest('.task-type-wrapper').children[1].getAttribute('taskTypeId');
        $scope.list[currentTypeID].task.push({
            edit: true,
            type: currentTypeID,
            taskID: Math.floor(Math.random() * 100000)
        })
    };
    $window.dragStart = function(current, e) {
        console.log("dragstarting : " + event.target.getAttribute('taskID'));
        e.dataTransfer.setData("taskID", event.target.getAttribute('taskID'));
        e.dataTransfer.setData("previousTaskTypeID", event.target.getAttribute('previousTypeID'));

    }

    $window.dragEnd = function(current, e) {
        console.log("drag end");

    }

    $window.dragEnter = function(current, e) {
        console.log("drag enering");
    }

    $window.dragLeave = function(current, e) {
        console.log("you are leaving ");
    }

    $window.dragDrop = function(current, e) {
        e.preventDefault();
        var currentTypeID = current.getAttribute('taskTypeId');
        console.log("currentTypeID:" + currentTypeID);
        var taskID = event.dataTransfer.getData("taskID");;
        var previousTaskTypeID = event.dataTransfer.getData("previousTaskTypeID");
        var list = JSON.parse(window.localStorage.List);
        var itemToBeMoved;
        var index;

        list[previousTaskTypeID].task.forEach(function(element, i) {
            if (element.taskID == taskID) {
                index = i;
                itemToBeMoved = element;
            }
        }, this);
        list[previousTaskTypeID].task.splice(index, 1);
        list[currentTypeID].task.push(itemToBeMoved);

        $scope.list = list;
        Storage.set('List', $scope.list);
        $scope.$apply();
        console.log("something has been dropped");
    }

    $scope.$watch('list', function(newVal, oldVal) {
        console.log("Saving the data to Local Storage");
        Storage.set('List', $scope.list);
    }, true);
    setTimeout(function() {
        alert("Select any task box and drop it any other task type (Drop it below the Add task Button). The data is persisted in LocalStorage and will be available till the cache is cleared. Click on Add Task to add the new task and save it.  If any issues please clear the cache and test again")

    }, 500)
}]);