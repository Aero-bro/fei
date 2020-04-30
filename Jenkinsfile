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
               sh "docker build -t myapp ."
               sh "docker login --username=慈航普渡aero --password=Zf666888? registry.cn-hangzhou.aliyuncs.com"
               sh "docker push myapp"
               sh "docker-compose stop myapp && docker-compose pull myapp && docker-compose up -d myapp"
            }
        }
    }
}
