module.service ('Tasks',['$rootScope' ,function($rootScope){
    this.data = {
        "tasks":[{
            "type": 501,
            "taskID": 867001,
            "name": "Complete Tasks abc",
            "desc": "DO this taks before 10.30"
        },{
            "type": 501,
            "taskID": 867002,
            "name": "Complete Tasks def",
            "desc": "DO this taks before 9.30"
        },{
            "type": 502,
            "taskID": 867003,
            "name": "Complete Tasks ajklads",
            "desc": "DO this task after completing task abc"
        },{
            "type": 502,
            "taskID": 867004,
            "name": "Complete Tasks efg",
            "desc": "DO this task after completing task abc"
        },{
            "type": 502,
            "taskID": 867005,
            "name": "Complete Tasks wer",
            "desc": "DO this task after completing task iopoiiop"
        },{
            "type": 503,
            "taskID": 867006,
            "name": "Complete Tasks",
            "desc": "DO this task after completing task abc"
        },{
            "type": 503,
            "taskID": 867007,
            "name": "Complete Tasks asdxass",
            "desc": "DO this task after completing task abc"
        }]
    };   
    
    this.data.taskType = [{
        "taskTypeID" : 501,
        "taskTypeName" : "Very Important"
    },{
        "taskTypeID" : 502,
        "taskTypeName" : "Important"
    },{
        "taskTypeID" : 503,
        "taskTypeName" : "Good to Have"
    }];

    var init = function(){
        this.data.tasksById = {};
        this.data.tasks.forEach(function(element) {
            this.data.tasksById[element.taskID] = element;
        },this);
        this.data.taskTypeByID ={};
        this.data.taskType.forEach(function(element) {
            this.data.taskTypeByID[element.taskTypeID] = element;
        },this);

        for(var i = 0 ; i < this.data.tasks.length ; i++) {
            var task = this.data.tasks[i];
            if(!this.data.taskTypeByID[task.type].task){
                this.data.taskTypeByID[task.type].task = [];
            }
            this.data.taskTypeByID[task.type].task.push(task); 
        }
        
        
        
    
    }

    init.call(this);
    
    this.getTasks = function(){
        return this.data.taskTypeByID;
    };

    this.getTaskByID = function(id){
        return this.data.tasksById[id];
    };

    
}]);