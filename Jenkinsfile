pipeline {
    agent { label 'Jenkins-Agent'}
    tools { nodejs "node" }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                branches: [[name: "main"]],
                doGenerateSubmoduleConfigurations: false,
                extensions: [],
                gitTool: 'Default',
                submoduleCfg: [],
                userRemoteConfigs: [[url: 'https://github.com/tijko/AuditMarks.git']]
               ])
            }
        }
        stage('Cloning Source') {
            steps {
                sh 'echo GIT sourcing'
                git branch:'main', url:'https://github.com/tijko/AuditMarks.git'
            }
        }

        stage('Install Node Dependencies') {
            steps {
                sh 'echo Installing Node Dependencies'
                sh 'npm ci'
            }
        }
    }

}
