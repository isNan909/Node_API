<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Herenn/Node_API">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">CodeWay Case Study</h3>

  <p align="center">
    Here is my first project for CodeWay!
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is my first project for CodeWay. 

The purpose of this assignment is to create an applicable CI & CD pipeline
for an application that runs on top of a Kubernetes cluster.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This is a list of programs to bootstrap your project.

* [Jenkins](https://www.jenkins.io/)
* [Docker](https://www.docker.com/)
* [AWS EC2](https://aws.amazon.com/ec2/)
* [AWS EKS](https://aws.amazon.com/eks/)
* [Helm](https://helm.sh/)
* [PostgreSQL](https://www.postgresql.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First, you need to fork repository to your GitHub repository and create AWS Account.

### Prerequisites

You need basic knowledge of AWS, Jenkins, Docker and CI/CD logic.

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get in to your AWS Account [https://console.aws.amazon.com](https://console.aws.amazon.com)
2. Launch an EC2 instance. You may use t2.micro for free tier but i suggest you to use t3.micro because of Jenkins.
3. Create an EKS Cluster and then create 2 nodes.
4. SSH to your EC2 instance.
5. Run update
   ```sh
   sudo yum update
   ```
5. Install Jenkins:
    ```sh
    sudo wget -O /etc/yum.repos.d/jenkins.repo \
    https://pkg.jenkins.io/redhat-stable/jenkins.repo
    sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
    sudo yum upgrade
    sudo yum install epel-release java-11-openjdk-devel
    sudo yum install jenkins
    sudo systemctl daemon-reload
    ```
    You can start the Jenkins service with the command:
    ```sh
    sudo systemctl start jenkins
    ```
    Get your Admin Password and Copy it:
    ```sh
    sudo cat /var/lib/jenkins/secrets/initialAdminPassword
    ```
    Browse to http://localhost:8080 (or whichever port you configured for Jenkins when installing it) and wait until the Unlock Jenkins page appears.

    On Jenkins create Multibranch Pipeline and under Branch Sources click "Add Source" then select GitHub.
    After adding credentials paste Repository HTTPS URL.
    You need to add "Filter by name (with wildcards)" and Include "release/dev release/prod"

    Also you need to download Docker plugin and add Credentials for Docker.
    Under Manage Jenkins go to Manage Nodes and Clouds section and on Configure Clouds section add Docker.

6. Install Docker:

    Add Docker Repository:
    ```sh
    sudo yum install -y yum-utils
    sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
    ```

    Install Docker Engine:
    ```sh
    sudo yum install docker-ce docker-ce-cli containerd.io 
    ```

    To install a specific version of Docker Engine, list the available versions in the repo, then select and install:
    ```sh
    yum list docker-ce --showduplicates | sort -r
    ```
    ```sh
    sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
    ```

    Start Docker.
    ```sh
    sudo systemctl start docker
    ```

7. Install Helm:

    ```sh
    curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
    $ chmod 700 get_helm.sh
    $ ./get_helm.sh
    ```

8. Install PostgreSQL:

    Add PostgreSQL Yum Repository
    ```sh
    sudo tee /etc/yum.repos.d/pgdg.repo<<EOF
    [pgdg13]
    name=PostgreSQL 13 for RHEL/CentOS 7 - x86_64
    baseurl=https://download.postgresql.org/pub/repos/yum/13/redhat/rhel-7-x86_64
    enabled=1
    gpgcheck=0
    EOF
    ```

    Command to install PostgreSQL on Amazon Linux 2:
    ```sh
    sudo yum install postgresql13 postgresql13-server
    ```

    Initial database configurations:

    ```sh
    sudo /usr/pgsql-13/bin/postgresql-13-setup initdb
    ```

    Enable and Start PostgreSQL Service:
    ```sh
    sudo systemctl start postgresql-13
    sudo systemctl enable postgresql-13
    ```

    Check the status of the Service:
    ```sh
    sudo systemctl status postgresql-13
    ```

    



    For test and demo enviroment you may change "listen_address='local' to listen_address='*'" 
    Do not change forget to change it back to local before production step for security.




<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Hasan Eren Çiftçi - [LinkedIn](https://www.linkedin.com/in/hasanerenciftci/) - erenciftci@hotmail.com.tr

Project Link: [Original Repository](https://github.com/Herenn/Node_API)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>