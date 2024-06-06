let xb = 500
let yb = 400
let diametro = 30
let raio = diametro/2
let xvb = 10
let yvb = 10

let meusPontos = 0
let pontosDoOponente = 0

let xr = 5
let yr = 300
let lr = 20
let ar = 120

let xro = 975
let yro = 300
let vyo

let raquetada
let ponto
let trilha
let imagem

function setup() {
  createCanvas(1000, 800);
  trilha.loop()
}

function draw() {
  background("white")
  mostrabola()
  mexebola()
  quicabola()
  
  incluirPontos()
  marcarPontos()
  
  mostraraquete(xr,yr)
  mexerraquete()
  colisaoMinhaRaqueteBiblioteca(xr, yr)

  
  //verificaColisaoRaquete()
  
  mostraraquete(xro, yro)
  movimentaRaqueteOponente()
  colisaoMinhaRaqueteBiblioteca(xro, yro)
}

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
  imagem = loadImage('images.jfif')     
}

function incluirPontos(){
  fill('white')
  rect(325,3,100,50)
  rect(565,3,100,50)
  
  fill(0);
  textSize(65)
  text(meusPontos, 360, 50);
  text(pontosDoOponente, 600, 50);
  text('Meus ')
}

function marcarPontos(){
  if (xb > 980) {
    meusPontos += 1
    ponto.play()
    let loaded = image(imagem, 0,0,1000,1000)
  }
  
  if (xb < 20) {
    pontosDoOponente += 1
    ponto.play()
    let loaded = image(imagem, 0,0,1000,1000)
  }
}

function mostrabola(){
  circle(xb,yb,diametro)  
  fill(0,0,0)
}

function mexebola(){
  xb += xvb
  yb += yvb
}

function quicabola(){
  if (xb + raio > width || xb - raio < 0){
    xvb *= -1
  }
  
  if (yb + raio > height || yb - raio < 0){
    yvb *= -1
  }
}

function mostraraquete(x,y){
  rect(x,y,lr,ar)
}

function mexerraquete(){
  if (keyIsDown(87))
  yr -= 10
  
  if (keyIsDown(83))
  yr +=10
}

function verificaColisaoRaquete(){
  if (xb - raio < xr + lr
     && yb - raio < yr + ar
     && yb + raio > yr) {
    xvb *= -1
  }
}

function movimentaRaqueteOponente(){
  vyo = yb - yro - lr / 2 - 30
  yro +=vyo
}

function verificaColisaoRaquete() {
  if (xb - raio < xr + rl && yb - raio < yr + ar && yb + raio > yr) {
    xvb *= -1;
    raquetada.play()
  }
}

function colisaoMinhaRaqueteBiblioteca(x, r) {
  colidiu = collideRectCircle(x, r, lr, ar, xb, yb, raio);
  if(colidiu) {
    xvb *= -1;
    raquetada.play()
  }
}