app.controller('ViewCtrl', function ($scope, httpService, IP) {
    $scope.isLoading = true;
    $scope.url = IP + 'filemanagement/all';
    httpService.fetchHttp('GET', $scope.url, '', '').then(
        function (response) {
            console.log(response);
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
            console.log("OOps some error occured");
            $scope.isLoading = false;
        }
    );
});