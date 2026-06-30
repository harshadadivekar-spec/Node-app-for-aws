pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Name of NodeJS configured in Jenkins
    }

    environment {
        APP_NAME = "nodejs-app"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/harshadadivekar-spec/Node-app-for-aws.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                    echo "Deploying application..."
                    pm2 stop ${APP_NAME} || true
                    pm2 delete ${APP_NAME} || true
                    pm2 start app.js --name ${APP_NAME}
                '''
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}