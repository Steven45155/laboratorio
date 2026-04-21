pipeline {
    agent any

    stages {
        stage('Build Docker') {
            steps {
                bat 'docker build -t mi-app .'
            }
        }
        stage('Run Docker') {
            steps {
                // El || true evita que la pipeline falle si el contenedor no existe
                bat 'docker rm -f mi-app || true'
                bat 'docker run -d --name mi-app -p 3000:3000 mi-app'
            }
        }
    }
}