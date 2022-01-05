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
        stage('Building docker image') {
            steps{
                script {
                dockerImage = docker.build registry + ":$BUILD_NUMBER"
            }
        }
        stage('Deploy docker image') {
            steps{
                script {
                docker.withRegistry( '', registryCredential ) {
                dockerImage.push()
            }
        }
        stage('Cleaning up') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }
}
