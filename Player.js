function Player(){
    this.hp = 0;
    this.sprite = new Sprite();
    this.vidas = 3;
    this.pontos = 0;
    this.x = 40;
    this.y = 75;
    this.sprite.x = this.x;
    this.sprite.y = this.y;
}


Player.prototype.desenhar = function(ctx){this.sprite.desenhar(ctx)};
Player.prototype.desenharImg = function(ctx, img){this.sprite.desenharImg(ctx, img)};
Player.prototype.mover = function(dt){this.sprite.mover(dt)};

Player.prototype.moverAng = function(dt){this.sprite.moverAng(dt)};

Player.prototype.colidiuCom = function(alvo){this.sprite.colidiuCom(alvo)};

Player.prototype.perseguir = function (alvo, dt) {this.sprite.perseguir(alvo, dt)};
Player.prototype.perseguirAng = function (alvo, dt){this.sprite.perseguirAng(alvo, dt)};


