var bioApp = angular.module("bioApp", []);

bioApp.controller("BioListController", function ($scope) {
    $scope.bioList = this;
    $scope.bioList.bios = [
        { name: "Jonatan", nim: "535220009", place: "bogor" },
        { name: "Jonathan", nim: "535220026", place: "bogor" },
    ];

    $scope.bioList.newBio = {};
    $scope.bioList.selectedBio = null;
    $scope.bioList.filterOption = ''; // Default to empty string

    $scope.bioList.addBio = function () {
        var capitalizedName = $scope.capitalizeFirstLetter($scope.bioList.newBio.name);

        var newNim = $scope.bioList.newBio.nim;
        if (!isNaN(newNim) && Number.isInteger(Number(newNim))) {
            $scope.bioList.bios.push({
                name: capitalizedName,
                nim: newNim,
                place: $scope.bioList.newBio.place,
            });

            $scope.bioList.newBio = {};
        } else {
            alert("Invalid NIM format. Please enter a valid number.");
        }
    };

    $scope.bioList.editBio = function (bio) {
        var newName = prompt("Edit the name:", bio.name);
        if (newName !== null) {
            bio.name = $scope.capitalizeFirstLetter(newName);
        }

        var newNim = prompt("Edit the NIM/Number:", bio.nim);
        if (newNim !== null && !isNaN(newNim) && Number.isInteger(Number(newNim))) {
            bio.nim = newNim;
        } else if (newNim !== null) {
            alert("Invalid NIM format. Please enter a valid number.");
        }

        var newPlace = prompt("Edit the place:", bio.place);
        if (newPlace !== null) {
            bio.place = newPlace;
        }
    };

    $scope.bioList.selectBio = function (bio) {
        $scope.bioList.selectedBio = bio === $scope.bioList.selectedBio ? null : bio;
    };

    $scope.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
});
