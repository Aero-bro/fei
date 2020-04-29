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
               sh "docker -v"
               sh "docker build -t myapp:latest ."
               sh "docker login --username=慈航普渡aero registry.cn-hangzhou.aliyuncs.com"
               sh "docker tag myapp:latest registry.cn-hangzhou.aliyuncs.com/aero_bro/fei:latest"
               sh "docker push registry.cn-hangzhou.aliyuncs.com/aero_bro/fei:latest"
               sh "docker pull registry.cn-hangzhou.aliyuncs.com/aero_bro/fei:latest"
               sh "docker run -d -p 8080:80 registry.cn-hangzhou.aliyuncs.com/aero_bro/fei:latest"
            }
        }
    }
}
