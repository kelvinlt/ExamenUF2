app.service("serv", function () {
    this.teamList = [];

    this.addTeam = function (team) {
        this.teamList.push(team);
    };
    
    this.equipacioList = [];

    this.addEquipacio = function (equipacio) {
        this.equipacioList.push(equipacio);
    };


});

function Player(name, nickname, position, points) {
    this.name = name;
    this.nickname = nickname;
    this.position = position;
    this.points = points;

    this.setName = function (name) {
        this.name = name;
    };
    this.setNickname = function (nickname) {
        this.nickname = nickname;
    };
    this.setPosition = function (position) {
        this.position = position;
    };
    this.setPoints = function (points) {
        this.points = points;
    };

}
;

function Team(name, victories, defeats, game, slogan) {
    this.name = name;
    this.victories = victories;
    this.defeats = defeats;
    this.game = game;
    this.slogan = slogan;

    this.players = {};
    this.setName = function (name) {
        this.name = name;
    };
    this.setVictories = function (victories) {
        this.victories = victories;
    };
    this.setDefeats = function (defeats) {
        this.defeats = defeats;
    };
    this.setType = function (type) {
        this.type = type;
    };
    this.addPlayer = function (player) {
        this.players[player.nickname] = player;
    };
    this.getPlayer = function (nick) {
        return this.players[nick];
    };
};

function Equipacio(name) {
    this.name = name;

    this.colores = {};

    this.addColor = function (color) {
        this.colores[color.name] = color;
    };
    this.remColor = function (color){
        this.colores[color.name] ="";
    }
};

function Color(name) {
    this.name = name;
};


