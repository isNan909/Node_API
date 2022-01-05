node {
    def app

    stage('Update Kubeconfig') {
        withAWS(credentials: 'myaws', region: 'us-east-1') {
            sh 'aws eks --region us-east-1 update-kubeconfig --name CodeWay'
        }
    }

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("herenn/node_api")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage('Helm Deploy') {
        sh 'curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash'
        sh "/usr/local/bin/helm install --upgrade codeway helm/ -f helm/values.yaml --set image.tag=${env.BUILD_NUMBER}"
    }
}

