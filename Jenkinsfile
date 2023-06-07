node() {
    stage('Checkout') {
        //def scmVars = checkout scm
        deleteDir() // Workdir cleanup
        git "https://github.com/maltez/test.git"
    }

    stage('Build') {
        sh "echo Building"
        sh "echo 'Change Jenkinsfile'"
        sh "docker build -t image/test ."
    }

    stage('Tests') {
        sh "echo Testing"
    }

    stage('Push image') {
        sh "echo Pushing"
    }
}
