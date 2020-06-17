node() {
    stage("Checkout") {
        deleteDir()
        git "https://github.com/maltez/test.git"
    }
    
    stage("Build") {
         sh "echo Building ${BUILD_ID} build"
    }
    
    stage("Testing"){
        sh "echo Tetsing on ${NODE_NAME}"
    }
    
    stage("Delivery"){
           sh "echo Pulling on registry....."
    }
    
 
}
