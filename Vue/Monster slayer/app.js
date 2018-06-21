new Vue({
    el: "#app",
    data : {
        playerHealth : 100,
        monsterHealth : 100,
        isGameRunning : false,
        turns: []
    },
    methods : {
        startGame : function() {
            this.turns = [];
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack : function() {
            let damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer : true,
                text : 'Player hits Monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        monsterAttack : function() {
            let damage = this.calculateDamage(3,10);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer : false,
                text : 'Monster hits Player for ' + damage
            });
            this.checkWin();
        },
        specialAttack : function() {
            let damage = this.calculateDamage(10,20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer : true,
                text : 'Player hits Monster HARD for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        heal : function() {
            if (this.playerHealth < 100) {
                this.playerHealth += 10;
                if (this.playerHealth > 100) {
                    this.playerHealth = 100;
                }
            };
            this.turns.unshift({
                isPlayer : true,
                text : 'Player heals for 10'
            });
            this.monsterAttack();
        },
        giveUp : function() {
            this.stopGame();
            alert('Never give up!')
        },
        calculateDamage : function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin : function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.stopGame();
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost. New game?')) {
                    this.startGame();
                } else {
                    this.stopGame();
                }
                return true;
            }
            return false;
        },
        stopGame : function() {
            this.isGameRunning = false;
            this.turns = [];
        }
    }
});