/**
* Prospettiva - ported by rbarszcz
*
* @copyright, Matthew Sanders <https://github.com/mattsanders/Prospettiva-Theme>
*/

define('c9-buonarroti/workspace/prospettiva', ['require', 'exports', 'module', 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-prospettiva";
exports.cssText = ".ace-prospettiva .ace_gutter {\
  background: #e8e8e8;\
  color: #333;\
}\
\
.ace-prospettiva .ace_print-margin {\
  width: 1px;\
  background: #e8e8e8;\
}\
\
.ace-prospettiva .ace_scroller {\
  background-color: rgba(255, 254, 250, 0.95);\
}\
\
.ace-prospettiva .ace_text-layer {\
  color: #746F5A;\
}\
\
.ace-prospettiva .ace_cursor {\
  border-left: 2px solid #635B4E;\
}\
\
.ace-prospettiva .ace_cursor.ace_overwrite {\
  border-left: 0px;\
  border-bottom: 1px solid #635B4E;\
}\
\
.ace-prospettiva .ace_marker-layer .ace_selection {\
  background: rgba(252, 255, 0, 0.40);\
}\
\
.ace-prospettiva.ace_multiselect .ace_selection.ace_start {\
  box-shadow: 0 0 3px 0px rgba(255, 254, 250, 0.95);\
  border-radius: 2px;\
}\
\
.ace-prospettiva .ace_marker-layer .ace_step {\
  background: rgb(198, 219, 174);\
}\
\
.ace-prospettiva .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 255, 255, 0.25);\
}\
\
.ace-prospettiva .ace_marker-layer .ace_active-line {\
  background: rgba(250, 255, 0, 0.35);\
}\
\
.ace-prospettiva .ace_gutter-active-line {\
  background-color: rgba(250, 255, 0, 0.35);\
}\
\
.ace-prospettiva .ace_marker-layer .ace_selected-word {\
  border: 1px solid rgba(252, 255, 0, 0.40);\
}\
\
.ace-prospettiva .ace_fold {\
    background-color: #B3935C;\
    border-color: #746F5A;\
}\
\
.ace-prospettiva .ace_keyword { color:#B3935C; }\
.ace-prospettiva .ace_constant { color:#DA5659; }\
.ace-prospettiva .ace_support { color:#A8799C; }\
.ace-prospettiva .ace_support.ace_function { color:#C29863; }\
.ace-prospettiva .ace_support.ace_constant { color:#D77261; }\
.ace-prospettiva .ace_storage { color:#B3AC00; }\
.ace-prospettiva .ace_invalid.ace_illegal { color:#F8F8F8;\
  background-color:rgba(86, 45, 86, 0.75);\
}\
.ace-prospettiva .ace_invalid.ace_deprecated { text-decoration:underline;\
  font-style:italic;\
  color:#D2A8A1;\
}\
.ace-prospettiva .ace_string { color:#7CA563; }\
.ace-prospettiva .ace_string.ace_regexp { color:#E9C062; }\
.ace-prospettiva .ace_comment { color:#B3B3B3; \
  background-color:rgba(23, 32, 19, 0.0);\
}\
.ace-prospettiva .ace_variable { color:#73948F; }\
.ace-prospettiva .ace_meta.ace_tag { color:#9F785B; }\
.ace-prospettiva .ace_markup.ace_heading { color:#CF6A4C; }\
.ace-prospettiva .ace_markup.ace_list { color:#C0B776; }\
";

var dom = require("ace/lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);

});
