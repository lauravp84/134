// Acesse a webcam
let captura;
let poseNet;

function setup() {
    createCanvas(640, 480); // Defina o tamanho da visualização da webcam
    captura = createCapture(VIDEO); // Acesse a webcam
    captura.size(640, 480); // Defina o tamanho da visualização da webcam
    captura.hide(); // Não oculte a visualização da webcam

    // Inicialize o PoseNet
    poseNet = ml5.poseNet(captura, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Modelo PoseNet carregado!');
}

function gotPoses(resultados) {
    if (resultados.length > 0) {
        // Busque as coordenadas x dos pulsos esquerdo e direito
        let xEsquerdo = resultados[0].pose.keypoints[9].position.x;
        let xDireito = resultados[0].pose.keypoints[10].position.x;

        // Calcule a diferença entre as coordenadas x
        let diferenca = xDireito - xEsquerdo;

        // Remova os decimais
        let tamanhoTexto = floor(diferenca);

        // Atualize o tamanho do texto
        textSize(tamanhoTexto);

        // Exiba seu nome na tela
        fill(255); // Cor do texto (branco)
        text('Bianca', 10, 100); // Coordenadas x e y
    }
}

// Função draw para atualização contínua
function draw() {
    // Nada a fazer aqui neste exemplo
}
