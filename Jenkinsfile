pipeline {
    agent none
    stages {
        stage("Checkout") {
            steps {
                git "https://github.com/maltez/test.git"
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
