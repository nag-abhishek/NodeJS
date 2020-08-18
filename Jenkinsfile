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
              bat 'node General/main.js'
                 }
                 }
                 stage('Three') {
                     steps{
                echo 'stage 4'
                     }
                 }
         }
}
                 