app.controller('DeleteCtrl', function ($scope, httpService, IP, $mdDialog, showPopup) {


    $scope.isLoading = true;
    $scope.delloader = -1;
    $scope.url = IP + 'filemanagement/all';
    httpService.fetchHttp('GET', $scope.url, '', '').then(
        function (response) {
            $scope.isLoading = false;
            if (response.status == 200) {
                $scope.list = response.data;
                $scope.showtable = true;

            }
            else {
                $scope.showtable = false;
            }

        },
        function (error) {
            $scope.isLoading = false;
            console.log("OOps some error occured");
        }
    );

    $scope.deleteFile = function (ev, filename, index) {

        var confirm = $mdDialog.confirm()
            .title('Would you like to delete file?')
            //  .textContent('All of the banks have agreed to forgive you your debts.')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Yes!')
            .cancel('No');
        $mdDialog.show(confirm).then(function () {

            var arr = [filename];
            $scope.delloader = index;
            $scope.url = IP + 'filemanagement/delete';
            httpService.fetchHttp('DELETE', $scope.url, arr, 'application/json').then(
                function (response) {
                    $scope.delloader = -1;
                    showPopup.showAlert(ev, "File Deleted Successfully");
                    $scope.list = response.data;
                },
                function (error) {
                    $scope.delloader = -1;
                    showPopup.showAlert(ev, "OOps some error occured");
                }
            );

        }, function () {

        });


    }


});