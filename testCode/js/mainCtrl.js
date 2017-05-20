angular.module('app').controller('mainCtrl', function($scope, mainSvc, $stateParams){

    //adding new company
    $scope.createCompany = function(name, address, revenue, phone){
        // console.log(name, address, revenue, phone)
        let company = {
            name: name,
            address: address,
            revenue: revenue,
            phone: phone
        }
        mainSvc.createCompany(company).then(function(res){
            // console.log(res);
            $scope.getCompanies(); //reseting the dom with new data
        })
    }

    //get companies
    $scope.getCompanies = function(){
        mainSvc.getCompanies().then(function(res){
            $scope.companies = res.data;
            // console.log($scope.companies);
            for(let i = 0; i < res.data.length; i++){
                mainSvc.getPeople(res.data[i]._id).then(function(res){
                    $scope.companies[i].people = res.data;
                    
                })
            }
        })
    }
    $scope.getCompanies();

    //creating new person
    $scope.createPerson = function(name, email, company){
        let companyId;
        for(let i = 0; i < $scope.companies.length; i++){
            if($scope.companies[i].name === company){
                companyId = $scope.companies[i]._id;
            }
        }
        let data = {
            name: name,
            companyId: companyId,
            email: email,
        }
        // console.log(data);
        mainSvc.createPerson(data).then(function(res){
            // console.log(res);
            $scope.getCompanies(); //reset what is rendered in DOM
        })
    }

    //deleting person
    $scope.deletePerson = function(id){
        // console.log(id);
        let hidden = document.getElementById(id);
        hidden.style.display = 'none';
        //hidding the person's data imediatly before actual delete and will update when page actually refreshes
        mainSvc.deletePerson(id).then(function(res){
            // console.log(res);
        })
    }
})