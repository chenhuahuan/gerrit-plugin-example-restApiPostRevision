

Gerrit.install(function(self) {

  function onSayHello(c, revision) {
    console.log("On say Hello js~~")
    var f = c.textfield();
    var t = c.checkbox();
    var b = c.button('Say hello', {onclick: function(){
      c.call(
        {message: f.value, french: t.checked},
        function(r) {
          c.hide();
          window.alert(r);
          c.refresh();
        });
    }});
    c.popup(c.div(
      c.prependLabel('Greeting message', f),
      c.br(),
      c.label(t, 'french'),
      c.br(),
      b));
    f.focus();
  }
  self.on("showchange", onSayHello);
  console.log("GWT UI---------hello.js")

//  Only support old GWT UI, poly-gerrit ui is not support by this version
//  if (window.Polymer) { return; } // Cut-off marker
});
