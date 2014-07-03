// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



(function(){

    var app = angular.module('score-counterApp', []);

    var players = [];

    app.controller('FormController', function($scope){
        $scope.player = {};

        this.addPlayer = function(){
            $scope.player.score = 0;
            players.push($scope.player);
            $scope.player = {};
        };
    });

    app.controller('ListController', function($scope){
        $scope.players = players;
    });


    app.controller('PanelController', function($scope){
        this.activePanel = 1;
        $scope.errorMessage = null;

        this.setPanel = function(val){
            if(players.length < 2){
                $scope.errorMessage = "You need at least 2 players!";
                return;
            }
            this.activePanel = val;

        };

        this.isActive = function(val){
            return this.activePanel === val;
        };
    });

    app.controller('GameController', function($scope){
        this.players = players;

        this.addScore = function(player){
            player.score++;
        }

        this.moreThan2Players = function(){
            return this.players.length > 2;
        }
    });
})();
