node() {
    environment {
        registry = "repository_name"
    }

    stage('Checkout') {
        deleteDir() // Workdir cleanup
        def scmVars = checkout scm
    }

    stage('Build') {
        sh "echo Building"
        //docker.build registry + ":$BUILD_NUMBER"
    }

    stage('Tests') {
        sh "echo Testing"
    }

    stage('Push image') {
        sh "echo Pushing"
    }
}