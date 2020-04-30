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
               sh "docker tag myapp registry.cn-hangzhou.aliyuncs.com/aero_bro/fei:myapp"
               sh "docker push registry.cn-hangzhou.aliyuncs.com/aero_bro/fei:myapp"
               sh "docker-compose pull registry.cn-hangzhou.aliyuncs.com/aero_bro/fei:myapp && docker-compose up -d registry.cn-hangzhou.aliyuncs.com/aero_bro/fei:myapp"
            }
        }
    }
}
