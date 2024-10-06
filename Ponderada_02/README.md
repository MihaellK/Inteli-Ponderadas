# Projeto de Visão Computacional com ESP32

Este projeto utiliza o microcontrolador **ESP32-CAM** em conjunto com um modelo de **Machine Learning** (TensorFlow Lite) para realizar detecção da presença de pessoas em uma imagem. O dispositivo também é integrado com a biblioteca **DumbDisplay** para comunicação via Bluetooth, permitindo a visualização de imagens e o controle do processo de inferência.

## Objetivo
O objetivo principal deste projeto é implementar um sistema de visão computacional embarcado capaz de:
- Capturar imagens utilizando a câmera do ESP32.
- Processar essas imagens utilizando um modelo pré-treinado de detecção de pessoas (TensorFlow Lite).
- Exibir os resultados e as imagens no **DumbDisplay**.
- Comunicar-se via **Bluetooth**.

## Componentes Utilizados

### 1. **Hardware**
- **ESP32-CAM**: Microcontrolador com capacidade de comunicação sem fio (Bluetooth e Wi-Fi), bem como suporte a Machine Learning embarcado. Módulo de camera utilizado incluso

### 2. **Software**
- **Platform.IO**: Extensão do VSCode para desenvolvimento em microcontroladores.
- **TensorFlow Lite**: Framework de Machine Learning leve, capaz de executar modelos em dispositivos de baixa capacidade de hardware.
- **DumbDisplay**: Biblioteca para comunicação entre o ESP32 e uma interface gráfica, permitindo a visualização de dados e interatividade.

## Funcionamento do Sistema

### 1. **Inicialização**
O código inicia configurando o ESP32 e a biblioteca **DumbDisplay**, que permite o uso do Bluetooth para comunicar com o display remoto ou com o computador. O ESP32 é configurado para utilizar o Bluetooth quando o macro `BLUETOOTH` estiver definido, ou o Wi-Fi como alternativa.

### 2. **Configuração da Câmera**
A câmera é inicializada com parâmetros específicos, como resolução de 96x96 pixels (grayscale), o que reduz o uso de memória e acelera o processamento de imagens. A câmera captura imagens em preto e branco, facilitando o uso de modelos de aprendizado de máquina mais leves.

### 3. **Modelo de Detecção de Pessoas**
O projeto utiliza um modelo de detecção de pessoas fornecido pelo TensorFlow Lite. Esse modelo foi pré-treinado para identificar se há uma pessoa na imagem capturada. O modelo recebe imagens 96x96 como entrada, processa a imagem, e retorna uma probabilidade de haver ou não uma pessoa na cena.

### 4. **TensorFlow Lite no ESP32**
O TensorFlow Lite é carregado na memória do ESP32 e configurado para realizar inferências diretamente no dispositivo. O modelo é carregado na memória interna do microcontrolador (ou PSRAM, se disponível), e a inferência é executada diretamente no hardware do ESP32.

### 5. **Exibição de Resultados**
O sistema utiliza três camadas gráficas do **DumbDisplay** para exibir:
- **Camada de Imagem para Detecção**: Mostra a imagem capturada que será analisada pelo modelo de detecção de pessoas.
- **Camada de Status**: Exibe o status da detecção, indicando se uma pessoa foi detectada ou não.
- **Camada de Imagem Processada**: Mostra a imagem final após a análise e os resultados de detecção.

### 6. **Comunicação com o Usuário**
A comunicação ocorre via **Bluetooth**, o ESP32 se conecta a um dispositivo nomeado "ESP32CAM"

Os resultados da inferência, assim como informações de status e logs do TensorFlow Lite, são enviados ao DumbDisplay para visualização. Logs de erro também são exibidos no display, como a falha na inicialização da câmera ou na alocação de memória.

## Demonstração
[Link](https://youtu.be/5tBclh6SlPM)