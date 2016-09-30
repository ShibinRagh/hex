var  designAppFactory = angular.module('designAppFactory',['ngResource']);
designAppFactory.factory('appFactory', ['$resource', function($resource){
    
    return{
        teamMembersFtry: $resource('api/team.json', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        }),
        workFtry: $resource('api/work.json', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        }),
        clientsFtry: $resource('api/clients.json', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        }),
        EmailEnquiry: $resource('/email', {},{
            update:{ method: 'PUT'}
        })
        
    }
}]);


 