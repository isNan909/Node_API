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
        stage('Docker Build') {
            agent any
            steps {
                sh 'docker build -t shanem/spring-petclinic:latest .'
            }
        }
        stage('Docker Push') {
            agent any
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                    sh 'docker push shanem/spring-petclinic:latest'
                }
            }
        }
    }
}