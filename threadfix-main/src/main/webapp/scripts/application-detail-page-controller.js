var myAppModule = angular.module('threadfix')

myAppModule.controller('ApplicationDetailPageController', function ($scope, $window, $rootScope) {

    $scope.dragEnabled = true;

    $scope.$on('dragOff', function() {
        $scope.dragEnabled = false;
    });

    $scope.$on('dragOn', function() {
        $scope.dragEnabled = true;
    });

    $scope.onFileSelect = function($files) {
        if ($scope.dragEnabled) {
            $scope.$broadcast('fileDragged', $files);
        }
    };

    $scope.appId  = $window.location.pathname.match(/([0-9]+)$/)[0];
    $scope.teamId = $window.location.pathname.match(/([0-9]+)/)[0];
    $scope.currentUrl = "/organizations/" + $scope.teamId + "/applications/" + $scope.appId;


    $scope.$on('rootScopeInitialized', function() {
        $scope.reportQuery = "&appId=" + $scope.appId + "&orgId=" + $scope.teamId;
    });

    $scope.rightReportTitle = "Top 10 Vulnerabilities";

});