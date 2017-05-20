angular.module('app').service('mainSvc', function($http){
    this.createCompany = function(company){
        return $http({
            method: 'POST',
            url: '/companies',
            data: company
        }).then(function(res){
            return res
        })
    }
    this.getCompanies = function(){
        return $http({
            method: 'GET',
            url: '/companies'
        }).then(function(res){
            return res;
        })
    }
    this.getPeople = function(id){
        return $http({
            method: 'GET',
            url: '/companies/'+ id +'/people'
        }).then(function(res){
            return res
        })
    }
    this.getCompanyToEdit = function(id){
        return $http({
            method: 'GET',
            url: '/companies/' + id.id
        }).then(function(res){
            return res;
        })
    }
    this.editCompany = function(data, id){
        return $http({
            method: 'PUT',
            url: '/companies/' + id,
            data: data
        }).then(function(res){
            return res;
        })
    }
    this.createPerson = function(data){
        return $http({
            method: 'POST',
            url: '/person',
            data: data
        }).then(function(res){
            return res;
        })
    }
    this.getPersonToEdit = function(id){
        return $http({
            method: 'GET',
            url: '/person/' + id,
        }).then(function(res){
            return res.data;
        })
    }
    this.getCompanyName = function(id){
        return $http({
            method: 'GET',
            url: '/companies/' + id
        }).then(function(res){
            return res.data;
        })
    }
    this.updatePerson = function(data, companyId){
        return $http({
            method: 'PUT',
            url: '/person/' + companyId,
            data: data
        }).then(function(res){
            return res;
        })
    }
    this.deletePerson = function(id){
        return $http({
            method: 'DELETE',
            url: '/person/' + id
        }).then(function(res){
            return res;
        })
    }
})