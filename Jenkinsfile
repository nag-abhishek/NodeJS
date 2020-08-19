pipeline {
         agent any
         stages {
                 stage('build') {
                 steps {
                    echo 'start'
                 }
                 }
         
         stage('execute') {
                 steps {
                   
                    bat 'node General/main.js'
                         }
                 }
                 stage('test') {
                     steps{
                    bat 'npm test'
                     }
                 }
         }
}
                 