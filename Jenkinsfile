pipeline {
    agent none
    stages {
        stage("Checkout") {
            input{
                message "Continue?"
                ok "Yes"
                submitter "Nick"
                parameters {
                    string(name:"PERSON", defaultValue: "Nick", description: "This is name of approver")
                }
            }
            steps {
                echo "Checkout initiate by ${PERSON}"
            }
        }
        stage("Build") {
            steps {
                echo "Build"
            }
        }
        stage("test"){
            parallel {
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
    }
    post {
            fixed {
                echo "Cleeeeeeeeeeeeeeaaaaaaan!"
            }
    }
}
