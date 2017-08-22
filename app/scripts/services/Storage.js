module.factory('Storage', ['$rootScope', function($rootScope) {
    
        return {
            get: function(key) {
                return JSON.parse(localStorage.getItem(key));
            },
            set: function(key, data) {
                localStorage.setItem(key, JSON.stringify(data));
            }
        };
    }]);