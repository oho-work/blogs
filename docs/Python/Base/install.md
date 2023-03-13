# Python安装及配置

### pip的配置

使用`pip config`设置超时时间、镜像地址、额外镜像地址、信任的域名

```bash
pip config set global.timeout 40
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
pip config set global.extra-index-url https://pypi.douban.com/simple/
pip config set global.trusted-host "pypi.douban.com mirrors.aliyun.com"
```

