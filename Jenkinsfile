pipeline {
         agent any
         stages {
                 stage('One') {
                 steps {
                    echo 'start'
                 }
                 }
         
         stage('Two') {
                 steps {
                    echo "Hello World!"
                sh "echo Hello from the shell"
                sh "hostname"
                sh "uptime"
                 }
                 }
                 stage('Three') {
                     steps{
                echo 'stage 4'
                     }
                 }
         }
}
                 