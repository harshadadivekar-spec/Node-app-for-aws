pipeline {
    agent any
    tools {
        nodejs "NodeJs"
        
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
        stage("Run Application") {
            steps {
                bat "npm start"
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
                bat "npm run build"
            }
        }
        stage("Deployment") {
            steps {
                bat "del /q /s C:\\inetpub\\wwwroot\\Nodeappforasw\\*"
                bat "xcopy /E /I /Y build\\* C:\\inetpub\\wwwroot\\Nodeappforaws\\"
                
            }

        }

    }
}