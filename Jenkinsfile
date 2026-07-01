pipeline {
    agent any
    tools {
        nodejs "NodeJs"
        //jdk "JDK_HOME"
    }
    stages {
        stage("Checkout") {
            steps {
                checkout scm   

            }
        }
        stage("Install Dependencies") {
            steps {
                bat "npm install"
            }
        }
        stage ("Test") {
            steps {
                echo "Running tests..."
               // bat "npm test"
            }
        }
        stage("Build") {
            steps {
                echo "Express.js application - no build required."
            }
        }
        stage("Deployment") {
            steps {
                bat "if not exist C:\\inetpub\\wwwroot\\NodeJsSample mkdir C:\\inetpub\\wwwroot\\NodeJsSample"
                bat "xcopy /E /I /Y * C:\\inetpub\\wwwroot\\NodeJsSample\\"
            }
        }

    }
}









