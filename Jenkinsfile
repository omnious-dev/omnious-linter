pipeline {
  agent {
    docker {
      image 'node:8-alpine'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'yarn'
        sh 'yarn bootstrap'
      }
    }
  }
}
