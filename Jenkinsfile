pipeline {
    agent none
    stages {
        stage("Checkout") {
            agent none
            steps {
                git "https://github.com/maltez/test.git"
                echo "Checkout"
            }
        }
        stage("Build") {
            agent none
            steps {
                echo "Build"
            }
        }
        stage("Unit test"){
            agent none
            steps {
                echo "Unit test passed"
            }
        }
        stage("Integration test"){
            agent none
            steps {
                echo "Integration test passed"
            }
        }
    }
}
