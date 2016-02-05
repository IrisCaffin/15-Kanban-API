// The Angular Module
angular.module('kanban', ['ngResource']);

angular.module('kanban').value('apiUrl', 'http://localhost:50026/api');

angular.module('kanban').controller('IndexController', function ($scope, $resource, apiUrl) {

    var ListResource = $resource(apiUrl + '/list/:listId', { listId: '@id'});

    var lists = ListResource.query();

    $scope.lists = lists;

    //var User = $resource('/user/:userId', {userId:'@id'});
    //var user = User.get({userId:123}, function() {
    //    user.abc = true;
    //    user.$save();
    //});
});