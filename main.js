// Importe a biblioteca p5.js
import * as p5 from 'p5';

// Variáveis globais
let video;
let poseNet;
let poses = [];

// Função para inicializar a webcam e o PoseNet
function setup() {
  createCanvas(640, 480); // Defina o tamanho da tela

  // Acesse a webcam
  video = createCapture(VIDEO);
  video.size(width, height);

  // Inicialize o PoseNet
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  // Oculte o componente extra criado por p5.js
  video.hide();
}

// Função chamada quando o modelo PoseNet é carregado
function modelLoaded() {
  console.log('Modelo PoseNet carregado!');
}

// Função chamada quando as poses são detectadas
function gotPoses(results) {
  poses = results;
}

// Função de desenho contínua
function draw() {
  // Exiba a visualização da webcam
  image(video, 0, 0, width, height);

  // Adicione o código para criar a tela e posicione-a ao lado da visualização da webcam
  // (implemente conforme necessário)

  // Adicione o código para executar o PoseNet
  // (implemente conforme necessário)

  // Escreva a função gotposes()
  // (implemente conforme necessário)
}
