node() {
    def image

    stage('Checkout') {
        deleteDir() // Workdir cleanup
        def scmVars = checkout scm

        image = "imageTAG"
    }

    stage('Build') {
        sh "docker build -t ${image} ."
    }

    stage('Tests') {
        sh "echo Testing"
    }

    stage('Push image') {
        sh "echo Pushing"
    }
}