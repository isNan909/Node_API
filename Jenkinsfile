pipeline {
    agent {
        docker { image 'docker:dind' }
    }
    stages {
        stage('Test') {
            steps {
                sh "ls -lR"
                sh 'docker --version'
            }
        }
    }
}
