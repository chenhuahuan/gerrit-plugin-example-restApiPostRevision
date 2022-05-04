package com.googlesource.gerrit.plugins.examples.restapipostrevision;

import com.google.inject.servlet.ServletModule;
import com.google.gerrit.extensions.registration.DynamicSet;
import com.google.gerrit.extensions.webui.WebUiPlugin;
import com.google.gerrit.extensions.webui.JavaScriptPlugin;

public class HttpModule extends ServletModule {
    @Override
    protected void configureServlets() {
        DynamicSet.bind(binder(), WebUiPlugin.class)
                .toInstance(new JavaScriptPlugin("example-restApiPostRevision.js"));
        DynamicSet.bind(binder(), WebUiPlugin.class)
                .toInstance(new JavaScriptPlugin("plugin.html"));
    }
}
