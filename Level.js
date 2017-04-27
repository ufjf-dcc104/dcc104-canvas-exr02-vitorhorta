function Level() {
    this.enemies = [];
    this.shots = [];
    this.inimigos = 3;
    this.player = null;
}

Level.prototype.init = function () {
    for (var i = 0; i < this.inimigos; i++) {
        var inimigo = new Enemy();
        inimigo.sprite.x = 120 + 20 * i;
        inimigo.sprite.y = 10;
        inimigo.sprite.width = 32;
        inimigo.sprite.height = 32;
        //inimigo.vang = 300*i;
        inimigo.sprite.am = 0;
        inimigo.imgkey = "enemy";
        this.enemies.push(inimigo);
    }
};

Level.prototype.mover = function (dt) {
    for (var i = 0; i < this.enemies.length; i++) {
        this.enemies[i].mover(dt);
    }
};

Level.prototype.moverAng = function (dt) {
    for (var i = 0; i < this.enemies.length; i++) {
        this.enemies[i].moverAng(dt);
    }
};

Level.prototype.desenhar = function (ctx) {
    for (var i = 0; i < this.enemies.length; i++) {
        this.enemies[i].desenhar(ctx);
    }
};
Level.prototype.desenharImg = function (ctx) {
    for (var i = 0; i < this.enemies.length; i++) {
        this.enemies[i].desenharImg(ctx, this.imageLib.images[this.enemies[i].imgkey]);
    }
};

Level.prototype.colidiuCom = function (alvo, resolveColisao) {
    for (var i = 0; i < this.enemies.length; i++) {
        if (this.enemies[i].sprite.colidiuCom(alvo)) {
            resolveColisao(this.enemies[i], alvo);
        }
    }
};

Level.prototype.perseguir = function (alvo, dt) {
    for (var i = 0; i < this.enemies.length; i++) {
        this.enemies[i].perseguir(alvo, dt);
    }
};
Level.prototype.perseguirAng = function (alvo, dt) {
    for (var i = 0; i < this.enemies.length; i++) {
        this.enemies[i].perseguirAng(alvo, dt);
    }
};

Level.prototype.colidiuComTiros = function (al, key) {
    var that = this;
    for (var i = this.player.shots.length - 1; i >= 0; i--) {
        this.colidiuCom(this.player.shots[i], function (alvo) {
                alvo.color = "green";
                that.shots.splice(i, 1);
                player.acertouTiro();
                x = that.enemies.indexOf(alvo);
                that.enemies.splice(x, 1);
                if (al && key) al.play(key);
            }
        );
    }
}
