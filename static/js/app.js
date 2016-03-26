var app = angular.module('MunchApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{ templateUrl: '/templates/main.html' })
        .when('/results',{ templateUrl: '/templates/results.html'})
});
app.controller('MainController', function($scope){
    $scope.d = new Date();
    $scope.h = $scope.d.getHours();
    $scope.greeting = function(){
        if($scope.h > 5 && $scope.h < 12){
            $scope.greeting = "morning";
        } else if ($scope.h > 12 && $scope.h < 18){
            $scope.greeting = "afternoon";
        } else {
            $scope.greeting = "evening";
        }
    };
    $scope.chooseActivity = function($scope){
        $('#currently').toggleClass('selected_btn').animate();
        $('#currently_drop').slideToggle();
    };
    $scope.chooseFeeling = function($scope){
        $('#feeling').toggleClass('selected_btn').animate();
        $('#feeling_drop').slideToggle();
    };
    $scope.getCraving = function($scope){
    };
    $scope.checkCravings = function($scope){
        if ($('.craving_btn').hasClass('selected_craving')){
            return true;
        } else {
            return false;
        }
    }
    $scope.showRecommendations = function($scope){

    };
    $scope.getRecipes = function($scope){
        function getRecipeJson() {
            var apiKey = "2SqYjldYw3hl0yC63Op39Ez7SyQ12R9s";
            var titleKeyword = "apple almond banana snack";
            var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                + titleKeyword
                + "&api_key="+apiKey;
            $.ajax({
                type: "GET",
                dataType: 'json',
                cache: false,
                url: url,
                success: function (data) {
                    console.log(data);
                    var recipeData = data;
                    return recipeData;
                }
            });
        }
        getRecipeJson();
    }
});

$(document).ready(function() {
    $(this).scrollTop(0);
});

console.log("everybody gets a fuckin apple y'all");


