node() {
    stage('Checkout') {
        //git "https://github.com/maltez/test.git"
         deleteDir() // Workdir cleanup
        def scmVars = checkout scm
    }

    stage('Build') {
        sh "echo Building"
        sh "echo 'Change Jenkinsfile'"
        // sh "docker build -t image/test ."
    }

    stage('Tests') {
        sh "echo Testing"
    }

    stage('Push image') {
        sh "echo Pushing"
    }
}
