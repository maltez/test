@Library('logging') _

node() {
    stage('Checkout') {
        //git "https://github.com/maltez/test.git"
         deleteDir() // Workdir cleanup
        def scmVars = checkout scm
    }

    stage('Build') {
        log.info("Building")
        log.info("Change Jenkinsfile")
        sh "docker build -t image/test ."
    }

    stage('Tests') {
        log.info("Testing")
    }

    stage('Push image') {
        log.warning("Pushing")
    }
}
