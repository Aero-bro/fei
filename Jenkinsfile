pipeline{
    agent any
    stages{
        stage("git-clone"){
           steps{
               sh "rm -rf fei"
               sh "git clone https://github.com/Aero-bro/fei.git"
           }
        }
        stage("npm-build "){
            steps{
              nodejs('nodejs'){
              }
                sh "npm install"
                sh "npm run build"
                echo "构建完成"
            }
        }
        stage("docker push"){
            steps{
                echo "deploy packge to node1"
            }
        }
    }
}
