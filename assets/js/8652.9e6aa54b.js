"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8652],{8652:(t,i,e)=>{e.d(i,{diagram:()=>d});var a=e(74363),n=e(37352),r=(e(62264),e(86208),e(24300),function(){var t=function(t,i,e,a){for(e=e||{},a=t.length;a--;e[t[a]]=i);return e},i=[1,3],e=[1,4],a=[1,5],n=[1,6],r=[1,7],s=[1,5,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],l=[1,5,6,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],o=[32,33,34],h=[2,7],c=[1,13],d=[1,17],u=[1,18],x=[1,19],g=[1,20],f=[1,21],y=[1,22],p=[1,23],q=[1,24],T=[1,25],m=[1,26],A=[1,27],_=[1,30],b=[1,31],S=[1,32],k=[1,33],F=[1,34],P=[1,35],v=[1,36],L=[1,37],C=[1,38],z=[1,39],B=[1,40],D=[1,41],E=[1,42],I=[1,57],w=[1,58],R=[5,22,26,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51],W={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,QUADRANT:6,document:7,line:8,statement:9,axisDetails:10,quadrantDetails:11,points:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,text:21,point_start:22,point_x:23,point_y:24,"X-AXIS":25,"AXIS-TEXT-DELIMITER":26,"Y-AXIS":27,QUADRANT_1:28,QUADRANT_2:29,QUADRANT_3:30,QUADRANT_4:31,NEWLINE:32,SEMI:33,EOF:34,alphaNumToken:35,textNoTagsToken:36,STR:37,MD_STR:38,alphaNum:39,PUNCTUATION:40,AMP:41,NUM:42,ALPHA:43,COMMA:44,PLUS:45,EQUALS:46,MULT:47,DOT:48,BRKT:49,UNDERSCORE:50,MINUS:51,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",6:"QUADRANT",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",22:"point_start",23:"point_x",24:"point_y",25:"X-AXIS",26:"AXIS-TEXT-DELIMITER",27:"Y-AXIS",28:"QUADRANT_1",29:"QUADRANT_2",30:"QUADRANT_3",31:"QUADRANT_4",32:"NEWLINE",33:"SEMI",34:"EOF",37:"STR",38:"MD_STR",40:"PUNCTUATION",41:"AMP",42:"NUM",43:"ALPHA",44:"COMMA",45:"PLUS",46:"EQUALS",47:"MULT",48:"DOT",49:"BRKT",50:"UNDERSCORE",51:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[9,0],[9,2],[9,1],[9,1],[9,1],[9,2],[9,2],[9,2],[9,1],[9,1],[12,4],[10,4],[10,3],[10,2],[10,4],[10,3],[10,2],[11,2],[11,2],[11,2],[11,2],[4,1],[4,1],[4,1],[21,1],[21,2],[21,1],[21,1],[39,1],[39,2],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[36,1],[36,1],[36,1]],performAction:function(t,i,e,a,n,r,s){var l=r.length-1;switch(n){case 12:this.$=r[l].trim(),a.setDiagramTitle(this.$);break;case 13:this.$=r[l].trim(),a.setAccTitle(this.$);break;case 14:case 15:this.$=r[l].trim(),a.setAccDescription(this.$);break;case 16:a.addSection(r[l].substr(8)),this.$=r[l].substr(8);break;case 17:a.addPoint(r[l-3],r[l-1],r[l]);break;case 18:a.setXAxisLeftText(r[l-2]),a.setXAxisRightText(r[l]);break;case 19:r[l-1].text+=" \u27f6 ",a.setXAxisLeftText(r[l-1]);break;case 20:a.setXAxisLeftText(r[l]);break;case 21:a.setYAxisBottomText(r[l-2]),a.setYAxisTopText(r[l]);break;case 22:r[l-1].text+=" \u27f6 ",a.setYAxisBottomText(r[l-1]);break;case 23:a.setYAxisBottomText(r[l]);break;case 24:a.setQuadrant1Text(r[l]);break;case 25:a.setQuadrant2Text(r[l]);break;case 26:a.setQuadrant3Text(r[l]);break;case 27:a.setQuadrant4Text(r[l]);break;case 31:case 33:this.$={text:r[l],type:"text"};break;case 32:this.$={text:r[l-1].text+""+r[l],type:r[l-1].type};break;case 34:this.$={text:r[l],type:"markdown"};break;case 35:this.$=r[l];break;case 36:this.$=r[l-1]+""+r[l]}},table:[{3:1,4:2,5:i,6:e,32:a,33:n,34:r},{1:[3]},{3:8,4:2,5:i,6:e,32:a,33:n,34:r},{3:9,4:2,5:i,6:e,32:a,33:n,34:r},t(s,[2,4],{7:10}),t(l,[2,28]),t(l,[2,29]),t(l,[2,30]),{1:[2,1]},{1:[2,2]},t(o,h,{8:11,9:12,10:14,11:15,12:16,21:28,35:29,1:[2,3],5:c,13:d,15:u,17:x,19:g,20:f,25:y,27:p,28:q,29:T,30:m,31:A,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E}),t(s,[2,5]),{4:43,32:a,33:n,34:r},t(o,h,{10:14,11:15,12:16,21:28,35:29,9:44,5:c,13:d,15:u,17:x,19:g,20:f,25:y,27:p,28:q,29:T,30:m,31:A,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E}),t(o,[2,9]),t(o,[2,10]),t(o,[2,11]),{14:[1,45]},{16:[1,46]},{18:[1,47]},t(o,[2,15]),t(o,[2,16]),{21:48,35:29,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E},{21:49,35:29,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E},{21:50,35:29,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E},{21:51,35:29,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E},{21:52,35:29,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E},{21:53,35:29,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E},{5:I,22:[1,54],35:56,36:55,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w},t(R,[2,31]),t(R,[2,33]),t(R,[2,34]),t(R,[2,37]),t(R,[2,38]),t(R,[2,39]),t(R,[2,40]),t(R,[2,41]),t(R,[2,42]),t(R,[2,43]),t(R,[2,44]),t(R,[2,45]),t(R,[2,46]),t(R,[2,47]),t(s,[2,6]),t(o,[2,8]),t(o,[2,12]),t(o,[2,13]),t(o,[2,14]),t(o,[2,20],{36:55,35:56,5:I,26:[1,59],40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w}),t(o,[2,23],{36:55,35:56,5:I,26:[1,60],40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w}),t(o,[2,24],{36:55,35:56,5:I,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w}),t(o,[2,25],{36:55,35:56,5:I,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w}),t(o,[2,26],{36:55,35:56,5:I,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w}),t(o,[2,27],{36:55,35:56,5:I,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w}),{23:[1,61]},t(R,[2,32]),t(R,[2,48]),t(R,[2,49]),t(R,[2,50]),t(o,[2,19],{35:29,21:62,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E}),t(o,[2,22],{35:29,21:63,37:_,38:b,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E}),{24:[1,64]},t(o,[2,18],{36:55,35:56,5:I,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w}),t(o,[2,21],{36:55,35:56,5:I,40:S,41:k,42:F,43:P,44:v,45:L,46:C,47:z,48:B,49:D,50:E,51:w}),t(o,[2,17])],defaultActions:{8:[2,1],9:[2,2]},parseError:function(t,i){if(!i.recoverable){var e=new Error(t);throw e.hash=i,e}this.trace(t)},parse:function(t){var i=this,e=[0],a=[],n=[null],r=[],s=this.table,l="",o=0,h=0,c=r.slice.call(arguments,1),d=Object.create(this.lexer),u={yy:{}};for(var x in this.yy)Object.prototype.hasOwnProperty.call(this.yy,x)&&(u.yy[x]=this.yy[x]);d.setInput(t,u.yy),u.yy.lexer=d,u.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var g=d.yylloc;r.push(g);var f=d.options&&d.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var y,p,q,T,m,A,_,b,S,k={};;){if(p=e[e.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(null==y&&(S=void 0,"number"!=typeof(S=a.pop()||d.lex()||1)&&(S instanceof Array&&(S=(a=S).pop()),S=i.symbols_[S]||S),y=S),q=s[p]&&s[p][y]),void 0===q||!q.length||!q[0]){var F="";for(m in b=[],s[p])this.terminals_[m]&&m>2&&b.push("'"+this.terminals_[m]+"'");F=d.showPosition?"Parse error on line "+(o+1)+":\n"+d.showPosition()+"\nExpecting "+b.join(", ")+", got '"+(this.terminals_[y]||y)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==y?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(F,{text:d.match,token:this.terminals_[y]||y,line:d.yylineno,loc:g,expected:b})}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+y);switch(q[0]){case 1:e.push(y),n.push(d.yytext),r.push(d.yylloc),e.push(q[1]),y=null,h=d.yyleng,l=d.yytext,o=d.yylineno,g=d.yylloc;break;case 2:if(A=this.productions_[q[1]][1],k.$=n[n.length-A],k._$={first_line:r[r.length-(A||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(A||1)].first_column,last_column:r[r.length-1].last_column},f&&(k._$.range=[r[r.length-(A||1)].range[0],r[r.length-1].range[1]]),void 0!==(T=this.performAction.apply(k,[l,h,o,u.yy,q[1],n,r].concat(c))))return T;A&&(e=e.slice(0,-1*A*2),n=n.slice(0,-1*A),r=r.slice(0,-1*A)),e.push(this.productions_[q[1]][0]),n.push(k.$),r.push(k._$),_=s[e[e.length-2]][e[e.length-1]],e.push(_);break;case 3:return!0}}return!0}},N={EOF:1,parseError:function(t,i){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,i)},setInput:function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var i=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===a.length?this.yylloc.first_column:0)+a[a.length-e.length].length-e[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),i=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+i+"^"},test_match:function(t,i){var e,a,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(a=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,i,e,a;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if((e=this._input.match(this.rules[n[r]]))&&(!i||e[0].length>i[0].length)){if(i=e,a=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,n[r])))return t;if(this._backtrack){i=!1;continue}return!1}if(!this.options.flex)break}return i?!1!==(t=this.test_match(i,n[a]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,i,e,a){switch(e){case 0:case 1:case 3:break;case 2:return 32;case 4:return this.begin("title"),13;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),15;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),17;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:case 22:case 24:case 28:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 25;case 14:return 27;case 15:return 26;case 16:return 28;case 17:return 29;case 18:return 30;case 19:return 31;case 20:this.begin("md_string");break;case 21:return"MD_STR";case 23:this.begin("string");break;case 25:return"STR";case 26:return this.begin("point_start"),22;case 27:return this.begin("point_x"),23;case 29:this.popState(),this.begin("point_y");break;case 30:return this.popState(),24;case 31:return 6;case 32:return 43;case 33:return"COLON";case 34:return 45;case 35:return 44;case 36:case 37:return 46;case 38:return 47;case 39:return 49;case 40:return 50;case 41:return 48;case 42:return 41;case 43:return 51;case 44:return 42;case 45:return 5;case 46:return 33;case 47:return 40;case 48:return 34}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[30],inclusive:!1},point_x:{rules:[29],inclusive:!1},point_start:{rules:[27,28],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[21,22],inclusive:!1},string:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};function U(){this.yy={}}return W.lexer=N,U.prototype=W,W.Parser=U,new U}());r.parser=r;const s=r,l=(0,a.E)();const o=(0,a.c)();function h(t){return(0,a.d)(t.trim(),o)}const c=new class{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var t,i,e,n,r,s,l,o,h,c,d,u,x,g,f,y,p,q;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:(null==(t=a.B.quadrantChart)?void 0:t.chartWidth)||500,chartWidth:(null==(i=a.B.quadrantChart)?void 0:i.chartHeight)||500,titlePadding:(null==(e=a.B.quadrantChart)?void 0:e.titlePadding)||10,titleFontSize:(null==(n=a.B.quadrantChart)?void 0:n.titleFontSize)||20,quadrantPadding:(null==(r=a.B.quadrantChart)?void 0:r.quadrantPadding)||5,xAxisLabelPadding:(null==(s=a.B.quadrantChart)?void 0:s.xAxisLabelPadding)||5,yAxisLabelPadding:(null==(l=a.B.quadrantChart)?void 0:l.yAxisLabelPadding)||5,xAxisLabelFontSize:(null==(o=a.B.quadrantChart)?void 0:o.xAxisLabelFontSize)||16,yAxisLabelFontSize:(null==(h=a.B.quadrantChart)?void 0:h.yAxisLabelFontSize)||16,quadrantLabelFontSize:(null==(c=a.B.quadrantChart)?void 0:c.quadrantLabelFontSize)||16,quadrantTextTopPadding:(null==(d=a.B.quadrantChart)?void 0:d.quadrantTextTopPadding)||5,pointTextPadding:(null==(u=a.B.quadrantChart)?void 0:u.pointTextPadding)||5,pointLabelFontSize:(null==(x=a.B.quadrantChart)?void 0:x.pointLabelFontSize)||12,pointRadius:(null==(g=a.B.quadrantChart)?void 0:g.pointRadius)||5,xAxisPosition:(null==(f=a.B.quadrantChart)?void 0:f.xAxisPosition)||"top",yAxisPosition:(null==(y=a.B.quadrantChart)?void 0:y.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:(null==(p=a.B.quadrantChart)?void 0:p.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:(null==(q=a.B.quadrantChart)?void 0:q.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:l.quadrant1Fill,quadrant2Fill:l.quadrant2Fill,quadrant3Fill:l.quadrant3Fill,quadrant4Fill:l.quadrant4Fill,quadrant1TextFill:l.quadrant1TextFill,quadrant2TextFill:l.quadrant2TextFill,quadrant3TextFill:l.quadrant3TextFill,quadrant4TextFill:l.quadrant4TextFill,quadrantPointFill:l.quadrantPointFill,quadrantPointTextFill:l.quadrantPointTextFill,quadrantXAxisTextFill:l.quadrantXAxisTextFill,quadrantYAxisTextFill:l.quadrantYAxisTextFill,quadrantTitleFill:l.quadrantTitleFill,quadrantInternalBorderStrokeFill:l.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:l.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),a.l.info("clear called")}setData(t){this.data={...this.data,...t}}addPoints(t){this.data.points=[...t,...this.data.points]}setConfig(t){a.l.trace("setConfig called with: ",t),this.config={...this.config,...t}}setThemeConfig(t){a.l.trace("setThemeConfig called with: ",t),this.themeConfig={...this.themeConfig,...t}}calculateSpace(t,i,e,a){const n=2*this.config.xAxisLabelPadding+this.config.xAxisLabelFontSize,r={top:"top"===t&&i?n:0,bottom:"bottom"===t&&i?n:0},s=2*this.config.yAxisLabelPadding+this.config.yAxisLabelFontSize,l={left:"left"===this.config.yAxisPosition&&e?s:0,right:"right"===this.config.yAxisPosition&&e?s:0},o=this.config.titleFontSize+2*this.config.titlePadding,h={top:a?o:0},c=this.config.quadrantPadding+l.left,d=this.config.quadrantPadding+r.top+h.top,u=this.config.chartWidth-2*this.config.quadrantPadding-l.left-l.right,x=this.config.chartHeight-2*this.config.quadrantPadding-r.top-r.bottom-h.top;return{xAxisSpace:r,yAxisSpace:l,titleSpace:h,quadrantSpace:{quadrantLeft:c,quadrantTop:d,quadrantWidth:u,quadrantHalfWidth:u/2,quadrantHeight:x,quadrantHalfHeight:x/2}}}getAxisLabels(t,i,e,a){const{quadrantSpace:n,titleSpace:r}=a,{quadrantHalfHeight:s,quadrantHeight:l,quadrantLeft:o,quadrantHalfWidth:h,quadrantTop:c,quadrantWidth:d}=n,u=Boolean(this.data.xAxisRightText),x=Boolean(this.data.yAxisTopText),g=[];return this.data.xAxisLeftText&&i&&g.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:o+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+r.top:this.config.xAxisLabelPadding+c+l+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&i&&g.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:o+h+(u?h/2:0),y:"top"===t?this.config.xAxisLabelPadding+r.top:this.config.xAxisLabelPadding+c+l+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:u?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&e&&g.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+o+d+this.config.quadrantPadding,y:c+l-(x?s/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&e&&g.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:"left"===this.config.yAxisPosition?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+o+d+this.config.quadrantPadding,y:c+s-(x?s/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:x?"center":"left",horizontalPos:"top",rotation:-90}),g}getQuadrants(t){const{quadrantSpace:i}=t,{quadrantHalfHeight:e,quadrantLeft:a,quadrantHalfWidth:n,quadrantTop:r}=i,s=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:r,width:n,height:e,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:r,width:n,height:e,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a,y:r+e,width:n,height:e,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:a+n,y:r+e,width:n,height:e,fill:this.themeConfig.quadrant4Fill}];for(const l of s)l.text.x=l.x+l.width/2,0===this.data.points.length?(l.text.y=l.y+l.height/2,l.text.horizontalPos="middle"):(l.text.y=l.y+this.config.quadrantTextTopPadding,l.text.horizontalPos="top");return s}getQuadrantPoints(t){const{quadrantSpace:i}=t,{quadrantHeight:e,quadrantLeft:a,quadrantTop:r,quadrantWidth:s}=i,l=(0,n.M89)().domain([0,1]).range([a,s+a]),o=(0,n.M89)().domain([0,1]).range([e+r,r]);return this.data.points.map((t=>({x:l(t.x),y:o(t.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:t.text,fill:this.themeConfig.quadrantPointTextFill,x:l(t.x),y:o(t.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}})))}getBorders(t){const i=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:e}=t,{quadrantHalfHeight:a,quadrantHeight:n,quadrantLeft:r,quadrantHalfWidth:s,quadrantTop:l,quadrantWidth:o}=e;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r-i,y1:l,x2:r+o+i,y2:l},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r+o,y1:l+i,x2:r+o,y2:l+n-i},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r-i,y1:l+n,x2:r+o+i,y2:l+n},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:r,y1:l+i,x2:r,y2:l+n-i},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:r+s,y1:l+i,x2:r+s,y2:l+n-i},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:r+i,y1:l+a,x2:r+o-i,y2:l+a}]}getTitle(t){if(t)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const t=this.config.showXAxis&&!(!this.data.xAxisLeftText&&!this.data.xAxisRightText),i=this.config.showYAxis&&!(!this.data.yAxisTopText&&!this.data.yAxisBottomText),e=this.config.showTitle&&!!this.data.titleText,a=this.data.points.length>0?"bottom":this.config.xAxisPosition,n=this.calculateSpace(a,t,i,e);return{points:this.getQuadrantPoints(n),quadrants:this.getQuadrants(n),axisLabels:this.getAxisLabels(a,t,i,n),borderLines:this.getBorders(n),title:this.getTitle(e)}}};const d={parser:s,db:{setWidth:function(t){c.setConfig({chartWidth:t})},setHeight:function(t){c.setConfig({chartHeight:t})},setQuadrant1Text:function(t){c.setData({quadrant1Text:h(t.text)})},setQuadrant2Text:function(t){c.setData({quadrant2Text:h(t.text)})},setQuadrant3Text:function(t){c.setData({quadrant3Text:h(t.text)})},setQuadrant4Text:function(t){c.setData({quadrant4Text:h(t.text)})},setXAxisLeftText:function(t){c.setData({xAxisLeftText:h(t.text)})},setXAxisRightText:function(t){c.setData({xAxisRightText:h(t.text)})},setYAxisTopText:function(t){c.setData({yAxisTopText:h(t.text)})},setYAxisBottomText:function(t){c.setData({yAxisBottomText:h(t.text)})},addPoint:function(t,i,e){c.addPoints([{x:i,y:e,text:h(t.text)}])},getQuadrantData:function(){const t=(0,a.c)(),{themeVariables:i,quadrantChart:e}=t;return e&&c.setConfig(e),c.setThemeConfig({quadrant1Fill:i.quadrant1Fill,quadrant2Fill:i.quadrant2Fill,quadrant3Fill:i.quadrant3Fill,quadrant4Fill:i.quadrant4Fill,quadrant1TextFill:i.quadrant1TextFill,quadrant2TextFill:i.quadrant2TextFill,quadrant3TextFill:i.quadrant3TextFill,quadrant4TextFill:i.quadrant4TextFill,quadrantPointFill:i.quadrantPointFill,quadrantPointTextFill:i.quadrantPointTextFill,quadrantXAxisTextFill:i.quadrantXAxisTextFill,quadrantYAxisTextFill:i.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:i.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:i.quadrantInternalBorderStrokeFill,quadrantTitleFill:i.quadrantTitleFill}),c.setData({titleText:(0,a.t)()}),c.build()},clear:function(){c.clear(),(0,a.v)()},setAccTitle:a.s,getAccTitle:a.g,setDiagramTitle:a.q,getDiagramTitle:a.t,getAccDescription:a.a,setAccDescription:a.b},renderer:{draw:(t,i,e,r)=>{var s,l,o;function h(t){return"top"===t?"hanging":"middle"}function c(t){return"left"===t?"start":"middle"}function d(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}const u=(0,a.c)();a.l.debug("Rendering quadrant chart\n"+t);const x=u.securityLevel;let g;"sandbox"===x&&(g=(0,n.MlD)("#i"+i));const f=("sandbox"===x?(0,n.MlD)(g.nodes()[0].contentDocument.body):(0,n.MlD)("body")).select(`[id="${i}"]`),y=f.append("g").attr("class","main"),p=(null==(s=u.quadrantChart)?void 0:s.chartWidth)||500,q=(null==(l=u.quadrantChart)?void 0:l.chartHeight)||500;(0,a.i)(f,q,p,(null==(o=u.quadrantChart)?void 0:o.useMaxWidth)||!0),f.attr("viewBox","0 0 "+p+" "+q),r.db.setHeight(q),r.db.setWidth(p);const T=r.db.getQuadrantData(),m=y.append("g").attr("class","quadrants"),A=y.append("g").attr("class","border"),_=y.append("g").attr("class","data-points"),b=y.append("g").attr("class","labels"),S=y.append("g").attr("class","title");T.title&&S.append("text").attr("x",0).attr("y",0).attr("fill",T.title.fill).attr("font-size",T.title.fontSize).attr("dominant-baseline",h(T.title.horizontalPos)).attr("text-anchor",c(T.title.verticalPos)).attr("transform",d(T.title)).text(T.title.text),T.borderLines&&A.selectAll("line").data(T.borderLines).enter().append("line").attr("x1",(t=>t.x1)).attr("y1",(t=>t.y1)).attr("x2",(t=>t.x2)).attr("y2",(t=>t.y2)).style("stroke",(t=>t.strokeFill)).style("stroke-width",(t=>t.strokeWidth));const k=m.selectAll("g.quadrant").data(T.quadrants).enter().append("g").attr("class","quadrant");k.append("rect").attr("x",(t=>t.x)).attr("y",(t=>t.y)).attr("width",(t=>t.width)).attr("height",(t=>t.height)).attr("fill",(t=>t.fill)),k.append("text").attr("x",0).attr("y",0).attr("fill",(t=>t.text.fill)).attr("font-size",(t=>t.text.fontSize)).attr("dominant-baseline",(t=>h(t.text.horizontalPos))).attr("text-anchor",(t=>c(t.text.verticalPos))).attr("transform",(t=>d(t.text))).text((t=>t.text.text));b.selectAll("g.label").data(T.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text((t=>t.text)).attr("fill",(t=>t.fill)).attr("font-size",(t=>t.fontSize)).attr("dominant-baseline",(t=>h(t.horizontalPos))).attr("text-anchor",(t=>c(t.verticalPos))).attr("transform",(t=>d(t)));const F=_.selectAll("g.data-point").data(T.points).enter().append("g").attr("class","data-point");F.append("circle").attr("cx",(t=>t.x)).attr("cy",(t=>t.y)).attr("r",(t=>t.radius)).attr("fill",(t=>t.fill)),F.append("text").attr("x",0).attr("y",0).text((t=>t.text.text)).attr("fill",(t=>t.text.fill)).attr("font-size",(t=>t.text.fontSize)).attr("dominant-baseline",(t=>h(t.text.horizontalPos))).attr("text-anchor",(t=>c(t.text.verticalPos))).attr("transform",(t=>d(t.text)))}},styles:()=>""}}}]);