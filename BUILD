load("//tools/bzl:plugin.bzl", "gerrit_plugin")
load("//tools/bzl:js.bzl", "polygerrit_plugin")
load("//tools/bzl:genrule2.bzl", "genrule2")

gerrit_plugin(
    name = "example-restApiPostRevision",
    srcs = glob(["src/main/java/**/*.java"]),
    manifest_entries = [
        "Gerrit-PluginName: example-restApiPostRevision",
        "Gerrit-Module: com.googlesource.gerrit.plugins.examples.restapipostrevision.Module",
        "Gerrit-HttpModule: com.googlesource.gerrit.plugins.examples.restapipostrevision.HttpModule",
        "Implementation-Title: Example Rest Api Post Revision",
    ],
    resource_jars = [":example-restApiPostRevision-static"],
    resources = glob(["src/main/resources/**/*"])
)

genrule2(
    name = "example-restApiPostRevision-static",
    srcs = [":example-restApiPostRevision_ui"],
    outs = ["example-restApiPostRevision-static.jar"],
    cmd = " && ".join([
        "mkdir $$TMP/static",
        "cp -r $(locations :example-restApiPostRevision_ui) $$TMP/static",
        "cd $$TMP",
        "zip -Drq $$ROOT/$@ -g .",
    ]),
)

polygerrit_plugin(
    name = "example-restApiPostRevision_ui",
    srcs = glob([
        "**/*.html",
        "static/*.js",
    ]),
    app = "plugin.html",
    plugin_name = "example-restApiPostRevision",
)
