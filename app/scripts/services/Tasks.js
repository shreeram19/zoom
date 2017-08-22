module.service ('Tasks',['$rootScope' ,function($rootScope){
    this.data = {
        "tasks":[{
            "type": 501,
            "taskID": 867001,
            "name": "Call manager",
            "desc": "Call the manager before 11 and discuss about The prod issue"
        },{
            "type": 501,
            "taskID": 867002,
            "name": "Complete filling the Time sheet",
            "desc": "Time sheets needs to logged for billing"
        },{
            "type": 502,
            "taskID": 867003,
            "name": "Call HR",
            "desc": "Call the HR to discuss the issues"
        },{
            "type": 502,
            "taskID": 867004,
            "name": "Pay the Phone bill",
            "desc": "Pay using Paytm "
        },{
            "type": 502,
            "taskID": 867005,
            "name": "Change directory before deploying ",
            "desc": "Do not forget to change the directory before deploying it in Production"
        },{
            "type": 503,
            "taskID": 867006,
            "name": "Take Medication",
            "desc": "Take before food medication"
        },{
            "type": 503,
            "taskID": 867007,
            "name": "Send email to Team ",
            "desc": "Send email to Team about the Successful release"
        }]
    };   
    
    this.data.taskType = [{
        "taskTypeID" : 501,
        "taskTypeName" : "Very Important",
        "color" : "red" 
    },{
        "taskTypeID" : 502,
        "taskTypeName" : "Important",
        "color": "brown"
    },{
        "taskTypeID" : 503,
        "taskTypeName" : "Good to Have",
        "color": 'green'
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