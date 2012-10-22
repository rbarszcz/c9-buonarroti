/**
 * c9-buonarroti
 * extra themes for Cloud9 IDE
 *
 * @copyright 2012, Rudi Barszcz
 * 
 * based on my-c9-themes: 
 *    @copyright 2011, Chase Colman
 *    @license MIT <http://chase.github.com/MIT.txt>
 */
define(function(require, exports, module) {
  var ext = require("core/ext");
  var themes = require("ext/themes/themes");
  var aceConfig = require("ace/config");
  var defaultPath = aceConfig.get("themePath");

  module.exports = ext.register("c9-buonarroti/workspace/c9-buonarroti.js", {
    name     : "c9-buonarroti",
    dev      : "Rudi Barszcz",
    alone    : true,
    type     : ext.GENERAL,
    nodes    : [],
    themes   : {
      "* Prospettiva" : "c9-buonarroti/workspace/prospettiva",
      "* rbarszcz" : "c9-buonarroti/workspace/rbarszcz"
    },
    init    : function() { 
      aceConfig.set("themePath","c9-buonarroti/workspace");
      themes.register(this.themes); 
    },
    enable  : function() {
      aceConfig.set("themePath","c9-buonarroti/workspace");
      themes.register(this.themes);
    },      
    disable : function() { 
      aceConfig.set("themePath",defaultPath); 
    },    
    destroy : function() { 
      aceConfig.set("themePath",defaultPath); 
    }
  });
});