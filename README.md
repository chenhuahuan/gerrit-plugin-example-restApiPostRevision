
# Setup
1. Pull gerrit source code。
```bash
mkdir ~/my-gerrit-test
cd ~/my-gerrit-test
git clone https://gerrit.googlesource.com/gerrit
cd gerrit
git checkout master
```

2. Download the "gerrit-plugin-example-restApiPostRevision" project inside gerrit/plugins。
```bash
cd ~/my-gerrit-test/gerrit/plugins
git clone git@github.com:chenhuahuan/gerrit-plugin-example-restApiPostRevision.git
cd ~/my-gerrit-test/gerrit/plugins/gerrit-plugin-example-restApiPostRevision
git checkout master
```
3. Build
```bash
cd ~/my-gerrit-test/gerrit
bazel clean --expunge && bazel build plugins/example-restApiPostRevision
```

