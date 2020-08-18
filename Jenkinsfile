pipeline {
         agent any
         stages {
                 stage('One') {
                 steps {
                    sh 'npm install'
                 }
                 }
         
         stage('Two') {
                 steps {
                    sh 'node General/main.js'
                 }
                 }
                 stage('Three') {
                echo 'stage 4'
                
                 }
         }
}
                 