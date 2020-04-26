pipeline{
    agent any
    stages{
        stage("git-clone"){
           steps{
               sh "git clone https://github.com/Aero-bro/fei.git"
           }
        }
        stage("npm-build "){
            steps{
                sh "npm run build"
                sh "
            }
        }
        stage("docker push"){
            steps{
                echo "deploy packge to node1"
            }
        }
    }
}
