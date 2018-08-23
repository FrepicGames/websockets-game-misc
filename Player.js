/**************************
** GAME PLAYER CLASS
**************************/
var Player = function(startX, startY, startZ, teamOpfor, pName) { 

	var x = startX,
		y = startY,
		z = startZ,
		legsRotY,
		torsoRotX,
		teamOpf = teamOpfor,
		nick = pName, 
		health = 100, 
		isAlive = true,
		kills = 0, 
		id;

	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};
		
	var getZ = function() {
		return z;
	};

	var getLegsRotY = function() {
		return legsRotY;
	};
		
	var getTorsoRotX = function() {
		return torsoRotX;		
	};
	
	var getTeam = function() {
		return teamOpf;		
	};
	
	var getNick = function() {
		return nick;		
	};
	
	var getHealth = function() {
		return health;		
	};
		
	var getIsAlive = function() {
		return isAlive;		
	};
		
	var getKills = function() {
		return kills;		
	};

	var setX = function(newX) {
		x = newX;
	};

	var setY = function(newY) {
		y = newY;
	};
	
	var setZ = function(newZ) {
		z = newZ;
	};
	
	var setLegsRotY = function(newRot) {
		legsRotY = newRot;
	};
	
	var setTorsoRotX = function(newRot) {
		torsoRotX = newRot;		
	};
	
	var setHealth = function(newHealth) {
		health += newHealth;			
	};
		
	var setIsAlive = function(newValue) {
		isAlive = newValue;		
	};
	
	var setKills = function(newKills) {
		kills = newKills;		
	};

	// the following variables/methods can be accessed
	return {
		getX: getX,
		getY: getY,
		getZ: getZ, 
		setX: setX,
		setY: setY,
		setZ: setZ,
		getLegsRotY: getLegsRotY,
		setLegsRotY: setLegsRotY,
		getTorsoRotX: getTorsoRotX,
		setTorsoRotX: setTorsoRotX,
		getTeam: getTeam, 
		getNick: getNick, 
		getHealth: getHealth, 
		setHealth: setHealth, 
		getIsAlive: getIsAlive, 
		setIsAlive: setIsAlive,
		getKills: getKills, 
		setKills: setKills, 
		id: id
	}
};

// export Player class in order to use it in
// other files (via require("Player").Player)
exports.Player = Player;