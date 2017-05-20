angular.module('app', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){ //creating seperate routes to edit data
    
    $stateProvider
    .state('home', {
        templateUrl: './templates/home.html',
        url: '/',
    })
    .state('editCompany', {
        templateUrl: './templates/editCompany.html',
        url: '/editCompany/:id',
        controller: 'editCompanyCtrl'
    })
    .state('editPerson', {
        templateUrl: './templates/editPerson.html',
        url: '/editPerson/:id',
        controller: 'editPersonCtrl'
    });

    $urlRouterProvider.otherwise('/');

});

//logic for the show and hiding of employees
let show = function(id){
    let current = document.getElementsByClassName(id)[0]; //to prevent all cards from opening using id to get the specific card
    let panel = document.getElementById(id);
    if(current.id === ''){
        current.id = 'show';
        panel.innerHTML = 'Hide people who work here';
    } else {
        current.id = ''
        panel.innerHTML = 'Show people who work here';
    }
}
