pipeline{
    agent any
    environment {
        dockerImagename = "socketio-sticky"
        
    }
    stages{
        stage('Build Image'){
            steps{
                script {
                    dockerImage = docker.build dockerImagename
                }
                
            }
        }

      
         }


    }
    

