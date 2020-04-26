pipeline{
    agent any
    stages{
        stage("get code"){
           steps{
               echo "get code from scm"
           }
        }
        stage("package"){
            steps{
                echo "packge code"
            }
        }
        stage("deploy"){
            steps{
                echo "deploy packge to node1"
            }
        }
    }
}
