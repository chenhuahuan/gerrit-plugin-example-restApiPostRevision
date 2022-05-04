
# Setup
1. 拉取gerrit源码。
```bash
mkdir ~/my-gerrit-test
cd ~/my-gerrit-test
git clone https://gerrit.googlesource.com/gerrit
cd gerrit
git checkout dd780721ab
```

2. 切换到gerrit仓库的plugins目录下，拉取该插件仓库到errit-plugin-example-restApiPostRevision目录。
```bash
cd ~/my-gerrit-test/gerrit/plugins
git clone git@github.com:chenhuahuan/gerrit-plugin-example-restApiPostRevision.git
cd ~/my-gerrit-test/gerrit/plugins/gerrit-plugin-example-restApiPostRevision
git checkout master
```
3. 构建
```bash
cd ~/my-gerrit-test/gerrit
bazel clean --expunge && bazel build plugins/example-restApiPostRevision
```

