app.controller('UploadCtrl', function ($scope, httpService, IP, Upload, showPopup,Bucket) {

    $scope.uploadFile = function (ev) {
        $scope.loader = true;
        $scope.url = IP+"filemanagement/upload/"+Bucket;

        Upload.upload({
            url: $scope.url,
            headers: {'Accept': 'application/text'},//webAPI exposed to upload the file
            data: {file: $scope.myFile} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if (resp.status == 200) {
                showPopup.showAlert(ev, "File Uploaded Successfully");
            }
            $scope.loader = false;

        }, function (resp) { //catch error
            showPopup.showAlert(ev, "error occurred while uploading");
            $scope.loader = false;

        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);

        });


    };


});