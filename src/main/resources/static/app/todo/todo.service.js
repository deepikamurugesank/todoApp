(function () {
    'use strict';

    function todoService($http) {

        return {
            getTodo: getTodo,
            postTodo: postTodo,
            updateTodo: updateTodo
        };

        function getTodo() {
            return $http.get('http://localhost:8080/todolist')
                .then(gettodoSuccess)
                .catch(gettodoFailure);

            function gettodoSuccess(response) {
                return response.data;
            };

            function gettodoFailure(response) {
                console.log(response.statusText);
            };

        }


        function postTodo(todo) {
            return $http.post('http://localhost:8080/todolist', todo)
                .then(posttodoSuccess)
                .catch(posttodoFailure);

            function posttodoSuccess(response) {
                return response.data;
            };

            function posttodoFailure(response) {
                console.log(response.statusText);
            };
        }


        function updateTodo(todo, id) {
            return $http.post('http://localhost:8080/todolist/' + id, todo)
                .then(updatetodoSuccess)
                .catch(updatetodoFailure);

            function updatetodoSuccess(response) {
                return response.data;
            };

            function updatetodoFailure(response) {
                console.log(response.statusText);
            };
        }



    };
    angular.module('mainApp')
        .factory('todoService', todoService);
    todoService.$inject = ['$http'];
})();