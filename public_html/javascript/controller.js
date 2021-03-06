var app = angular.module("myApp", []);

app.controller("myCtrl", ["$scope", "serv"
            , function ($scope, serv) {

                var stealth = new Equipacio("Stealth");
                var color1 = new Color("Azul");
                stealth.addColor(color1);
                var color2 = new Color("Celeste");
                stealth.addColor(color2);
                var color3 = new Color("Blanco");
                stealth.addColor(color3);
                stealth.remColor(color3);
                serv.addEquipacio(stealth);

                var rush = new Equipacio("Rush");
                var color4 = new Color("Rojo");
                rush.addColor(color4);
                var color5 = new Color("Carmesi");
                rush.addColor(color5);
                var color6 = new Color("Negro");
                rush.addColor(color6);

                rush.addColor(color4);
                serv.addEquipacio(rush);
                
                $scope.newColor = {};
                $scope.activeEquipacio;
                $scope.equipacioList = serv.equipacioList;



                var team = new Team("Souls Crusaders", 100, 0, "Dark Souls");

                var player1 = new Player("Kelvin", "player1", "Magician", 90, 110);
                var player2 = new Player("Lluis", "player2", "Paladin", 10, 30);
                var player3 = new Player("Danyl", "player3", "Warrior", 210, 400);
                var player4 = new Player("Marc", "player4", "Warrior", 910, 200);

                team.addPlayer(player1);
                team.addPlayer(player2);
                team.addPlayer(player3);
                team.addPlayer(player4);

                $scope.team = team;

                $scope.newTeam = {};
                $scope.newPlayer = {};
                $scope.activeTeam;

                serv.addTeam(team);

                var team1 = new Team("Profes", 200, 0, "Stucom");
                var prof1 = new Player("Cristian", "prof1", "FrontEnd", 90, 110);
                var prof2 = new Player("Alfredo", "prof2", "BackEnd", 10, 30);
                var prof3 = new Player("Lluis", "prof3", "Servidores", 210, 400);
                var prof4 = new Player("Diana", "prof4", "Tutora", 910, 200);

                $scope.team1 = team1;

                team1.addPlayer(prof1);
                team1.addPlayer(prof2);
                team1.addPlayer(prof3);
                team1.addPlayer(prof4);

                serv.addTeam(team1);

                $scope.teamList = serv.teamList;

                $scope.createTeam = function () {
                    if ($scope.newTeam.name !== undefined) {
                        var team = new Team($scope.newTeam.name, $scope.newTeam.victories, $scope.newTeam.defeats, $scope.newTeam.game , $scope.newTeam.slogan);
                        serv.addTeam(team);
                    }
                };

                $scope.createPlayer = function () {
                    if ($scope.teamList[$scope.activeTeam] !== undefined && $scope.newPlayer.nickname !== undefined) {
                        var player = new Player($scope.newPlayer.name, $scope.newPlayer.nickname, $scope.newPlayer.position, $scope.newPlayer.points);
                        if ($scope.teamList[$scope.activeTeam].players[player.nickname] === undefined) {
                            $scope.teamList[$scope.activeTeam].addPlayer(player);
                        } else {
                            $scope.teamList[$scope.activeTeam].players[player.nickname] = player;
                        }
                    }
                };
                $scope.deletePlayer = function (nickname) {
                    delete $scope.teamList[$scope.activeTeam].players[nickname];
                };

                $scope.viewPlayer = function (nickname) {
                    $scope.newPlayer.name = $scope.teamList[$scope.activeTeam].players[nickname].name;
                    $scope.newPlayer.nickname = nickname;
                    $scope.newPlayer.position = $scope.teamList[$scope.activeTeam].players[nickname].position;
                    $scope.newPlayer.points = $scope.teamList[$scope.activeTeam].players[nickname].points;
                };

                $scope.createColor = function (name) {
                    $scope.equipacioList[$scope.activeEquipacio].addColor(name);
                };
                
                $scope.remColor = function (name) {
                    delete $scope.equipacioList[$scope.activeEquipacio].colors[name];
                };

            }]);