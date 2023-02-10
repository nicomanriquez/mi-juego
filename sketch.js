var nave, fondo1, fondo2, kars, met, limiteIzq, limiteDer
var naveIMG, fondoIMG, karsIMG, met1IMG, met2IMG, met3IMG
var puntuacion 
var end = 0
function preload(){
fondoIMG = loadImage("./imagenes/espacio.png")
naveIMG = loadImage("./imagenes/nave.png")
karsIMG = loadImage("./imagenes/kars.png")
met1IMG = loadImage("./imagenes/met1.png")
met2IMG = loadImage("./imagenes/met2.png")
met3IMG = loadImage("./imagenes/met3.png")
met4IMG = loadImage("./imagenes/met4.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 fondo1 = createSprite(2450,500)
 fondo1.addImage(fondoIMG)
 fondo1.scale = 5.2
 if (end === 0){
 fondo1.velocityY = 5
 }
 fondo2 = createSprite(2450,0)
 fondo2.addImage(fondoIMG)
 fondo2.scale = 5.2
 if (end === 0){
 fondo2.velocityY = 5
 }
 nave = createSprite(2400,2000)
 nave.addImage(naveIMG)
 nave.scale=0.3
 limiteIzq = createSprite(0,2000,10,3000)
 limiteIzq.visible = false;
 limiteDer = createSprite(5130,2000,10,3000)
 limiteDer.visible = false;
metGroup = new Group();
}
function crearKars(){
  if (frameCount % 1000 === 0){
  kars = createSprite(Math.round(random(0,4800)),0);
  kars.addImage(karsIMG);
  kars.lifetime=100;
  kars.velocityY=30;
  kars.velocityX=15;
  kars.scale=0.7;
  metGroup.add(kars);
}
}
function crearMet() {
  if(frameCount % 60 === 0 && end === 0) {
   var met = createSprite(Math.round(random(0,4800)));
   met.setCollider('circle',0,0,300)
   //met.debug = true
  metGroup.add(met);
    met.velocityY = 30
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: met.addImage(met1IMG);
              break;
      case 2: met.addImage(met2IMG);
              break;
      case 3: met.addImage(met3IMG);
              break;
      case 4: met.addImage(met4IMG);
              break;
      default: break;
    }
  }

}

function moverNave(){
  if (keyDown(RIGHT_ARROW)){
  nave.x=nave.x+20
  }
  if (keyDown(LEFT_ARROW)){
    nave.x=nave.x-20
    }
}

function añadirPuntuacion(){
 if (end === 0){
    puntuacion = frameCount
   }
  }

function draw() {
 background(0);
 drawSprites();
 if (fondo1.y > 1100){
   fondo1.y = fondo1.width/2;
 }
 if (fondo2.y > 1100){
   fondo2.y = 0;
 }
 nave.setCollider('circle',0,0,300)
 //nave.debug=true;
 if (nave.isTouching(metGroup)){
  nave.destroy();
  end = 1;
 }
 if(end === 1){
  textSize(150)
  fill("red")
  text("juego "+""+"terminado", 1800,1200)
  textSize(150)
  fill("blue")
  text("puntaje "+""+"final: "+""+puntuacion, 1800,500)
 }
 if (end === 0){
 textSize(150)
 fill("purple")
 text("puntaje "+""+puntuacion,250,250)
 }
 crearKars();
 crearMet();
 
 moverNave();
 añadirPuntuacion();
 
}