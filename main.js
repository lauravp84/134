// Acesse a webcam
let captura;

function setup() {
    createCanvas(640, 480); // Defina o tamanho da visualização da webcam
    captura = createCapture(VIDEO); // Acesse a webcam
    captura.size(640, 480); // Defina o tamanho da visualização da webcam
    captura.hide(); // Não oculte a visualização da webcam
}

// Inicialize o PoseNet
let poseNet;

function modelLoaded() {
    console.log('Modelo PoseNet carregado!');
}

function setup() {
    poseNet = ml5.poseNet(captura, modelLoaded); // Inicialize o PoseNet
    poseNet.on('pose', gotposes); // Execute o PoseNet e chame gotposes() quando houver detecção de pose
}

// Função para lidar com os resultados do PoseNet
function gotposes(resultados) {
    if (resultados.length > 0) {
        console.log(resultados); // Exiba os resultados no console
    }
}
