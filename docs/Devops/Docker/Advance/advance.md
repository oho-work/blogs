# Docker 进阶

### 本地镜像上传dockerhub

1. 注册[docker hub]([hub.docker.com](https://hub.docker.com/))账号

   

2. 登录到docker hub

   ```bash
   docker login
   ```

3. 重新打包镜像

   ```bash
   docker tag 原镜像名称 自定义前缀/新镜像名称
   ```

4. 上传镜像

   ```bash
   docker push 要推送的镜像名称
   ```

### 从docker hub拉取公开镜像



### 从docker hub拉取私有镜像

1. 登录到docker hub

   ```bash
   docker login
   ```

2. 拉取镜像

   ```
   docker push 要拉取的镜像名称
   ```

   