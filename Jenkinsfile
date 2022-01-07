node {
    def app
    
    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm


    }

    stage('Push feature to release/dev'){

            withCredentials([usernamePassword(credentialsId: 'fixed',
                     usernameVariable: 'Herenn',
                     passwordVariable: '32741410eren/')]){
        sh("git push http://$username:$password@github.com:Herenn/Node_API.git")

        }
    }
}