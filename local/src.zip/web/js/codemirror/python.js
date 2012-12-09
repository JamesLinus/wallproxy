CodeMirror.defineMode("python",function(q,k){function l(a){return RegExp("^(("+a.join(")|(")+"))\\b")}function j(a,b){if(a.sol()){var c=b.scopes[0].offset;if(a.eatSpace()){var d=a.indentation();d>c?h="indent":d<c&&(h="dedent");return null}0<c&&m(a,b)}if(a.eatSpace())return null;if("#"===a.peek())return a.skipToEnd(),"comment";if(a.match(/^[0-9\.]/,!1)){c=!1;a.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)&&(c=!0);a.match(/^\d+\.\d*/)&&(c=!0);a.match(/^\.\d+/)&&(c=!0);if(c)return a.eat(/J/i),"number";c=!1;a.match(/^0x[0-9a-f]+/i)&&
(c=!0);a.match(/^0b[01]+/i)&&(c=!0);a.match(/^0o[0-7]+/i)&&(c=!0);a.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(a.eat(/J/i),c=!0);a.match(/^0(?![\dx])/i)&&(c=!0);if(c)return a.eat(/L/i),"number"}if(a.match(o)){for(var e=a.current();0<="rub".indexOf(e.charAt(0).toLowerCase());)e=e.substr(1);var f=1==e.length;b.tokenize=function(a,b){for(;!a.eol();)if(a.eatWhile(/[^'"\\]/),a.eat("\\")){if(a.next(),f&&a.eol())return"string"}else{if(a.match(e))return b.tokenize=j,"string";a.eat(/['"]/)}if(f){if(k.singleLineStringErrors)return g;
b.tokenize=j}return"string"};return b.tokenize(a,b)}if(a.match(r)||a.match(s))return null;if(a.match(t)||a.match(u)||a.match(v))return"operator";if(a.match(w))return null;if(a.match(x))return"keyword";if(a.match(y))return"builtin";if(a.match(n))return"variable";a.next();return g}function p(a,b,c){var c=c||"py",d=0;if("py"===c){if("py"!==b.scopes[0].type){b.scopes[0].offset=a.indentation();return}for(a=0;a<b.scopes.length;++a)if("py"===b.scopes[a].type){d=b.scopes[a].offset+q.indentUnit;break}}else d=
a.column()+a.current().length;b.scopes.unshift({offset:d,type:c})}function m(a,b,c){c=c||"py";if(1!=b.scopes.length){if("py"===b.scopes[0].type){for(var a=a.indentation(),c=-1,d=0;d<b.scopes.length;++d)if(a===b.scopes[d].offset){c=d;break}if(-1===c)return!0;for(;b.scopes[0].offset!==a;)b.scopes.shift()}else if("py"===c)b.scopes[0].offset=a.indentation();else{if(b.scopes[0].type!=c)return!0;b.scopes.shift()}return!1}}function z(a,b){h=null;var c=b.tokenize(a,b),d=a.current();if("."===d)return c=a.match(n,
!1)?null:g,null===c&&"meta"===b.lastToken&&(c="meta"),c;if("@"===d)return a.match(n,!1)?"meta":g;if(("variable"===c||"builtin"===c)&&"meta"===b.lastToken)c="meta";if("pass"===d||"return"===d)b.dedent+=1;"lambda"===d&&(b.lambda=!0);(":"===d&&!b.lambda&&"py"==b.scopes[0].type||"indent"===h)&&p(a,b);var e="[({".indexOf(d);-1!==e&&p(a,b,"])}".slice(e,e+1));if("dedent"===h&&m(a,b))return g;e="])}".indexOf(d);if(-1!==e&&m(a,b,d))return g;0<b.dedent&&(a.eol()&&"py"==b.scopes[0].type)&&(1<b.scopes.length&&
b.scopes.shift(),b.dedent-=1);return c}var g="error",u=/^[\+\-\*/%&|\^~<>!]/,w=/^[\(\)\[\]\{\}@,:`=;\.]/,t=/^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(\/\/)|(\*\*))/,s=/^((\+=)|(\-=)|(\*=)|(%=)|(\/=)|(&=)|(\|=)|(\^=))/,r=/^((\/\/=)|(>>=)|(<<=)|(\*\*=))/,n=/^[_A-Za-z][_A-Za-z0-9]*/,v=l(["and","or","not","is","in"]),f="as assert break class continue def del elif else except finally for from global if import lambda pass raise return try while with yield".split(" "),i="abs all any bin bool bytearray callable chr classmethod compile complex delattr dict dir divmod enumerate eval filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip __import__ NotImplemented Ellipsis __debug__".split(" "),
A="apply basestring buffer cmp coerce execfile file intern long raw_input reduce reload unichr unicode xrange False True None".split(" "),B=["exec","print"],C=["ascii","bytes","exec","print"],D=["nonlocal","False","True","None"];if(k.version&&3===parseInt(k.version,10))var f=f.concat(D),i=i.concat(C),o=/^(([rb]|(br))?('{3}|"{3}|['"]))/i;else f=f.concat(B),i=i.concat(A),o=/^(([rub]|(ur)|(br))?('{3}|"{3}|['"]))/i;var x=l(f),y=l(i),h=null;return{startState:function(a){return{tokenize:j,scopes:[{offset:a||
0,type:"py"}],lastToken:null,lambda:!1,dedent:0}},token:function(a,b){var c=z(a,b);b.lastToken=c;a.eol()&&a.lambda&&(b.lambda=!1);return c},indent:function(a){return a.tokenize!=j?0:a.scopes[0].offset}}});CodeMirror.defineMIME("text/x-python","python");