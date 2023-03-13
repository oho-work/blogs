# Docker 基础命令

### Commit

语法格式如下：

```bash
docker commit [OPTIONS] CONTAINER REPOSITORY[:TAG]
```

(选填) [OPTIONS] 说明：

- **-a : ** 提交的镜像作者
- **-c : ** 使用Dockerfile指令来创建镜像
- **-m : ** 提交时的说明文字
- **-p : ** 在commit时，将容器暂停

(必填) CONTAINER 说明：

- 构建镜像所用容器的名称或者ID

(必填) REPOSITORY 说明：

- 生成镜像的名称

(选填) [:TAG] 说明：

- 生成镜像的版本号，默认为latest

举例：

```bash
docker commit -a oho -m "举例说明" a404c6c174a2 example:3.0.19
```

