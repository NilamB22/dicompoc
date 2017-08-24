app.service('httpService', function ($http) {
    this.fetchHttp = function (method, url, param, headers) {
        return $http({
            method: method,
            crossDomain: true,
            headers: {
                'Content-Type': headers
            },
            url: url,
            data: param
        }).then(function (response) {
            return response;
        }, function errorCallback(response) {
            alert("Oops!! some error occured while httpf fetch call");
            return response;
        });

    }
});

app.service('showPopup', function ($mdDialog) {
    this.showAlert = function (ev,msg) {

        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('')
                .textContent(msg)
                .ariaLabel('Alert Dialog Demo')
                .ok('OK')
                .targetEvent(ev)
        );
    };
});
