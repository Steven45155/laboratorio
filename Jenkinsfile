pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Steven45155/laboratorio.git'
            }
        }
        stage('Build Docker') {
            steps {
                sh 'docker build -t mi-app .'
            }
        }
        stage('Run Docker') {
            steps {
                // El || true evita que la pipeline falle si el contenedor no existe
                sh 'docker rm -f mi-app || true'
                sh 'docker run -d --name mi-app -p 3000:3000 mi-app'
            }
        }
    }
}