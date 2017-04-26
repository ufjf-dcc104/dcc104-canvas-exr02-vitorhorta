function Player(){
    this.hp = 100;
    this.sprite = new Sprite();
    this.vidas = 3;
    this.pontos = 0;
    this.x = 40;
    this.y = 350;
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.sprite.ay = 0.0;
    this.sprite.vy = 0.0;
    this.shots = [];
}


Player.prototype.desenhar = function(ctx){this.sprite.desenhar(ctx)};
Player.prototype.desenharImg = function(ctx, img){this.sprite.desenharImg(ctx, img)};
Player.prototype.mover = function(dt){this.sprite.mover(dt)};

Player.prototype.moverAng = function(dt){this.sprite.moverAng(dt)};

Player.prototype.colidiuCom = function(alvo){this.sprite.colidiuCom(alvo)};

Player.prototype.perseguir = function (alvo, dt) {this.sprite.perseguir(alvo, dt)};
Player.prototype.perseguirAng = function (alvo, dt){this.sprite.perseguirAng(alvo, dt)};


Player.prototype.fire = function (alvo, audiolib, key, vol){
    if(alvo.cooldown>0) return;
    var tiro = new Sprite();
    tiro.x = alvo.x;
    tiro.y = alvo.y;
    tiro.angle = alvo.angle;
    tiro.am = 100;
    tiro.width = 8;
    tiro.height = 16;
    tiro.imgkey = "shot";
    this.shots.push(tiro);
    alvo.cooldown = 1;
    if(audiolib && key) audiolib.play(key,vol);
}
