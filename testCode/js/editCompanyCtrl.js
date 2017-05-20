angular.module('app').controller('editCompanyCtrl', function($scope, $stateParams, mainSvc){
    console.log($stateParams);
    let id = $stateParams;

    let getCompanyToEdit = function(){
        mainSvc.getCompanyToEdit(id).then(function(res){
            console.log(res);
            $scope.name = res.data.name;
            $scope.address = res.data.address;
            $scope.phone = res.data.phone;
            $scope.revenue = res.data.revenue;
        })
    }
    getCompanyToEdit();

    $scope.editCompany = function(name, address, revenue, phone){
        console.log(name, address, revenue, phone);
        let data = {
            name: name,
            address: address,
            revenue: revenue,
            phone: phone
        }
        mainSvc.editCompany(data, id.id).then(function(res){
            $scope.getCompanies();  
        })
    }
})