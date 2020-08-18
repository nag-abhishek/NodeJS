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
              bat 'wmic computersystem get name'
                 }
                 }
                 stage('Three') {
                     steps{
                echo 'stage 4'
                     }
                 }
         }
}
                 