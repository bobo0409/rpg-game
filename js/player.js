let player;

function Player(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack: function () {
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    let playerAttack = function () {
      let calcBaseDamage;
      if (player.mana > 0) {
        calcBaseDamage = (player.strength * player.mana) / 1000;
      } else {
        calcBaseDamage = (player.strength * player.agility) / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(player.agility / 10)) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };
    let enemyAttack = function () {
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = (enemy.strength * enemy.mana) / 1000;
      } else {
        calcBaseDamage = (enemy.strength * enemy.agility) / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(enemy.agility / 10)) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert(
        "You hit " +
          playerAttackValues[0] +
          " damage " +
          playerAttackValues[1] +
          " times. "
      );
      if (enemy.health <= 0) {
        alert("You win, refresh page to start again!");
        getPlayerHealth.innerHTML = "Health: " + player.health;
        getEnemyHealth.innerHTML = "Health: 0";
      } else {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert(
          "Enemy hit " +
            enemyAttackValues[0] +
            " damage " +
            enemyAttackValues[1] +
            " times. "
        );
        if (player.health <= 0) {
          alert("You lose, refresh page to start again!");
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
          getPlayerHealth.innerHTML = "Health: 0";
        } else {
          getPlayerHealth.innerHTML = "Health: " + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert(
        "Enemy hit " +
          enemyAttackValues[0] +
          " damage " +
          enemyAttackValues[1] +
          " times. "
      );
      if (player.health <= 0) {
        alert("You lose, refresh page to start again!");
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: 0";
      } else {
        getPlayerHealth.innerHTML = "Health: " + player.health;
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert(
          "You hit " +
            enemyAttackValues[0] +
            " damage " +
            enemyAttackValues[1] +
            " times. "
        );
        if (enemy.health <= 0) {
          alert("You win, refresh page to start again!");
          getPlayerHealth.innerHTML = "Health: " + player.health;
          getEnemyHealth.innerHTML = "Health: 0";
        } else {
          getEnemyHealth.innerHTML = "Health: " + enemy.health;
        }
      }
    }
  },
};
