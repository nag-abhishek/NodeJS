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
                    sh 'node General/main.js'
                 }
                 }
                 stage('Three') {
                     steps{
                echo 'stage 4'
                     }
                 }
         }
}
                 