pipeline {
    agent any
    environment {
      API_TOKEN1 = 'true'
    }
    stages {
      stage('Read file json') {     
        steps {
          script {
            def idFromJson = sh(script: "cat ./test/coverage-summary.json | jq -r .total.lines.pct", returnStdout: true).trim() as Double
            echo "KET QUA TEST: ${idFromJson}"
            env.TEST = idFromJson
            if (idFromJson < 80) {
              return
            } else {
              throw new Exception("Coverage deo hơn 80")
            }
          }
        }       
      }
      stage('when sss') {
        // when {
        //         expression {
        //             return (env.TEST > 80)
        //         }
        //     }
        steps {
          sh 'echo ok ne'
        }
      }

    }
  post {
    always {  
      echo "always"
    }
    success {
      echo "SUCCESSFUL"
    }
    failure {
      echo "FAILED"
    }
  }
}
