node() {
    environment {
        registry = "repository_name"
        registryCredential = 'dockerhub'
    }

    stage('Checkout') {
        deleteDir() // Workdir cleanup
        def scmVars = checkout scm
    }

    stage('Build') {
        script {
          docker.build registry + ":$BUILD_NUMBER"
        }
    }

    stage('Tests') {
        sh "echo Testing"
    }

    stage('Push image') {
        sh "echo Pushing"
    }
}