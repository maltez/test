node() {
    stage('Checkout') {
        deleteDir() // Workdir cleanup
        def scmVars = checkout scm
    }

    stage('Build') {
        sh "docker build -t image/test ."
    }

    stage('Tests') {
        sh "echo Testing"
    }

    stage('Push image') {
        sh "echo Pushing"
    }
}