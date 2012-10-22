/**
 * rbarszcz theme by Rudi Barszcz
 */

define('c9-buonarroti/workspace/rbarszcz', ['require', 'exports', 'module', 'ace/lib/dom'], function(require, exports, module) {

  exports.isDark = true;
  exports.cssClass = "ace-rbarszcz";
  exports.cssText = "\
  .ace-rbarszcz .ace_gutter { background-color: #444; color: #7f7f7f; }\
  .ace-rbarszcz .ace_gutter-active-line { background: rgba(189, 189, 189, 0.12); }\
  .ace-rbarszcz .ace_print_margin { width: 1px; background: #222222; }\
  .ace-rbarszcz .ace_scroller { background-color: #222222; }\
  .ace-rbarszcz .ace_text-layer { cursor: text; color: white; }\
  .ace-rbarszcz .ace_cursor { border-left: 2px solid #9F9F9F; }\
  .ace-rbarszcz .ace_cursor.ace_overwrite { border-left: 0px; border-bottom: 1px solid #9F9F9F;}\
  .ace-rbarszcz .ace_marker-layer .ace_selection { background: rgba(255, 255, 255, 0.2); }\
  .ace-rbarszcz .ace_marker-layer .ace_step { background: rgb(198, 219, 174); }\
  .ace-rbarszcz .ace_marker-layer .ace_bracket { margin: -1px 0 0 -1px; border: 1px solid #343434; }\
  .ace-rbarszcz .ace_marker-layer .ace_active-line { background: rgba(189, 189, 189, 0.12); }\
  .ace-rbarszcz .ace_marker-layer .ace_selected-word { margin: -1px 0 0 -1px; border: 1px solid #343434; }\
  .ace-rbarszcz .ace_invisible { color: rgba(75, 75, 126, 0.50); }\
  .ace-rbarszcz .ace_keyword { color:#fff; }\
  .ace-rbarszcz .ace_keyword.ace_operator { color:#7f7f7f; font-weight:normal; }\
  .ace-rbarszcz .ace_support.ace_type { color:#bdbdbd; }\
  .ace-rbarszcz .ace_constant.ace_language { color:#e89cc4; }\
  .ace-rbarszcz .ace_constant.ace_numeric { color:#f58050; }\
  .ace-rbarszcz .ace_constant.ace_language.ace_boolean { color:#9b859d; }\
  .ace-rbarszcz .ace_string { color:#85c5dc; }\
  .ace-rbarszcz .ace_string.ace_regexp { color:#b7ced7; }\
  .ace-rbarszcz .ace_storage.ace_type { color:#f4c36a; font-weight:bold; }\
  .ace-rbarszcz .ace_identifier { color:#fff; }\
  .ace-rbarszcz .ace_entity.ace_name.ace_function { color:#fff; }\
  .ace-rbarszcz .ace_punctuation.ace_operator { color: #7f7f7f; }\
  .ace-rbarszcz .ace_paren { color: #7f7f7f; }\
  .ace-rbarszcz .ace_invalid { color:#CED2CF; background-color:#DF5F5F; }\
  .ace-rbarszcz .ace_invalid.ace_deprecated { color:#CED2CF; background-color:#B798BF; }\
  .ace-rbarszcz .ace_fold { background-color: #7AA6DA; border-color: #DEDEDE; }\
  .ace-rbarszcz .ace_function { color:#fff; }\
  .ace-rbarszcz .ace_comment { color:#614d3d; font-style:italic; }\
  .ace-rbarszcz .ace_variable { color:#e89cc4; }\
  .ace-rbarszcz .ace_meta.ace_tag { color:#bdbdbd; }\
  .ace-rbarszcz .ace_entity.ace_other.ace_attribute-name { color:#7f7f7f; }\
  .ace-rbarszcz .ace_markup.ace_underline { text-decoration:underline; }\
  .ace-rbarszcz .ace_markup.ace_heading { color:#FFE898; }";
  
  var dom = require("ace/lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});