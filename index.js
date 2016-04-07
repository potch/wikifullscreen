var self = require("sdk/self");

var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.wiki.mozilla.org",
  contentScriptFile: self.data.url('page-script.js'),
  contentStyleFile: self.data.url('page-style.css')
});
