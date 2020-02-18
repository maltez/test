pipeline {
    agent none
    stages {
        stage("Cleanup"){
            echo "Cleanup!!!"
        }
        post {
            fixed {
                echo "Cleeeeeeeeeeeeeeaaaaaaan!"
            }
        }
        stage("Checkout") {
            steps {
                echo "Checkout"
            }
        }
        stage("Build") {
            steps {
                echo "Build"
            }
        }
        stage("Unit test"){
            steps {
                echo "Unit test passed"
            }
        }
        stage("Integration test"){
            steps {
                echo "Integration test passed"
            }
        }
    }
}
