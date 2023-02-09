pipeline{
    agent any
    environment {
        dockerImagename = "socketio-sticky"
        appimage = ""
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
    

