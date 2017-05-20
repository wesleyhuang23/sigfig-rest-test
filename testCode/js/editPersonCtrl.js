angular.module('app').controller('editPersonCtrl', function($scope, $stateParams, mainSvc){
    let id = $stateParams.id;

    let personToEdit = function(){
        mainSvc.getPersonToEdit(id).then(function(res){
            // console.log(res);
            $scope.person = res;
            mainSvc.getCompanyName(res.companyId).then(function(CompRes){
                // console.log(CompRes, 'company response');
                $scope.email = res.email;
                $scope.name = res.name;
                $scope.company = CompRes;
            });
        })
    }
    personToEdit(id);

    $scope.updatePerson = function(name, company, email){
        //getting the company id for PUT request before running the update function
        mainSvc.getCompanies().then(function(res){
            // console.log(res);
            //funning a filter to compare the name with list of companies returned
            var company_id = res.data.filter(function(el){
                return el.name === company
            })
            console.log(company_id);
                data = {
                name: name,
                companyId: company_id[0]._id,
                email: email
            }
            console.log(data);
            mainSvc.updatePerson(data, $scope.person._id).then(function(res){
                // console.log(res);
                $scope.getCompanies();
            });
        })
        
    }
})