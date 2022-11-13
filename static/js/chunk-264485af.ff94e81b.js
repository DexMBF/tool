(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-264485af"],{4763:function(e,t,n){},"51d2":function(e){e.exports=JSON.parse('{"contractName":"ERC20","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}')},"544c":function(e,t,n){"use strict";n("5ec1")},"5ec1":function(e,t,n){},"60fa":function(e,t,n){"use strict";n("4763")},7052:function(e,t,n){"use strict";n.d(t,"e",(function(){return d})),n.d(t,"i",(function(){return y})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return T})),n.d(t,"h",(function(){return h})),n.d(t,"b",(function(){return w}));var a=n("c7eb"),s=n("1da1"),r=n("51d2"),i=n("4360"),u=n("ed08"),o=n("cf29"),p=n("901e"),c=n.n(p),l=n("771e"),d=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n,s,p){var l,d,y,m;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l="getTokenBalance",e.next=3,new p.eth.Contract(r.abi,t);case 3:return d=e.sent,y={name:"balanceOf",erc20:!0,data:[s]},e.next=7,Object(o.b)(d,y,i.a.state.dapp.web3.account,l);case 7:return m=e.sent,e.abrupt("return",new c.a(Object(u.e)(m,n)));case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n,s){var i,p,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new t.eth.Contract(r.abi,n);case 2:return i=e.sent,p={name:"totalSupply",erc20:!0,data:[]},e.next=6,Object(o.c)(i,p);case 6:return c=e.sent,e.abrupt("return",Object(u.e)(c,s));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n,s,p){var c,l,d,y;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="getTokenBalance",e.next=4,new p.eth.Contract(r.abi,t);case 4:return l=e.sent,d={name:"balanceOf",erc20:!0,data:[s]},e.next=8,Object(o.c)(l,d,i.a.state.dapp.web3.account,c);case 8:return y=e.sent,e.abrupt("return",Object(u.e)(y,n));case 10:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n,s,i,u){var p,l,d;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new u.eth.Contract(r.abi,t);case 2:return p=e.sent,l={name:"allowance",erc20:!0,data:[s,i]},e.next=6,Object(o.c)(p,l);case 6:return d=e.sent,e.abrupt("return",new c.a(d));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,s,r){return e.apply(this,arguments)}}(),f=function(e,t,n){return n.eth.getBalance(e).then((function(e){return new c.a(Object(u.e)(e,t))}))},v=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n){var s,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(r.abi,t);case 2:return s=e.sent,i={name:"symbol",erc20:!0,data:[]},e.next=6,Object(o.c)(s,i);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n){var s,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(r.abi,t);case 2:return s=e.sent,i={name:"name",erc20:!0,data:[]},e.next=6,Object(o.c)(s,i);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n){var s,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(l.abi,t);case 2:return s=e.sent,r={name:"supportsInterface",erc20:!0,data:["0x80ac58cd"]},e.next=6,Object(o.c)(s,r);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n){var s,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new n.eth.Contract(r.abi,t);case 2:return s=e.sent,i={name:"decimals",erc20:!0,data:[]},e.next=6,Object(o.c)(s,i);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},"771e":function(e){e.exports=JSON.parse('{"contractName":"ERC721","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"armzs","outputs":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"string","name":"image","type":"string"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"}],"name":"create","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factoryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getArmz","outputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getCollection","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_new","type":"address"}],"name":"setFactoryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"image","type":"string"},{"internalType":"uint256","name":"lastFight","type":"uint256"},{"internalType":"uint256","name":"mana","type":"uint256"},{"internalType":"uint8","name":"maxMana","type":"uint8"},{"internalType":"uint8","name":"hourMana","type":"uint8"},{"internalType":"uint8","name":"rarity","type":"uint8"},{"internalType":"uint8","name":"boostWinrate","type":"uint8"},{"internalType":"uint8","name":"nbBoost","type":"uint8"},{"internalType":"uint32","name":"id","type":"uint32"}],"internalType":"struct Armz","name":"armz","type":"tuple"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},"977b":function(e,t,n){"use strict";n.r(t);var a=n("c7eb"),s=n("b85c"),r=n("1da1"),i=n("5530"),u=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("b64b"),n("d81d"),n("a15b"),n("c740"),n("fa7e")),o=n("05b3"),p=n("828d"),c=n("61f7"),l=n("7052"),d=n("2f62"),y=n("b893"),m=n("ed08"),b=n("99e5"),f=n.n(b),v={name:"tokenHoldScan",components:{JsonEditor:u.a},computed:Object(i.a)({},Object(d.d)({chainNetwork:function(e){return e.dapp.chainNetwork},networkId:function(e){return e.dapp.web3.networkId},myAddress:function(e){return e.dapp.web3.account},initial:function(e){return e.dapp.web3.initial},web3Instance:function(e){return e.dapp.web3.web3Instance}})),data:function(){return{web3:null,num:100,blackHeight:"",global:{},value:"",progress:0,show:{progress:!1,editor:!1},tokenHoldScan:null,tokenHoldScanList:o.m,selectToken:null,userTokenAddress:[],loading:{scan:!1,exp:!1},dataList:[]}},methods:{selectChange:function(e){if(this.$route.path){var t=this.$route.path.lastIndexOf("/"),n=this.$route.path.substring(0,t)+"/"+Object(y.o)(e.name);this.$router.push(n)}},exportExcel:function(){var e=this;this.loading.exp=!0,Promise.all([n.e("chunk-5164a781"),n.e("chunk-0d1c46e8"),n.e("chunk-4cd938c5")]).then(n.bind(null,"4bf8")).then((function(t){var n=Object.keys(e.dataList[0]),a=e.dataList,s=e.formatJson(n,a),r=Object(m.l)(new Date,"{y}-{m}-{d}")+"_tokentool_"+e.tokenHoldScan.name+"_"+e.selectToken.name;t.export_json_to_excel({header:n,filename:r,data:s}),e.loading.exp=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(m.l)(t[e]):t[e]}))}))},scanToken:function(){var e=this;return Object(r.a)(Object(a.a)().mark((function t(){var n,r,i,u,o;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.selectToken&&e.selectToken.address){t.next=3;break}return e.$message.error(e.$t("tokenHoldScan.scanAddressError")),t.abrupt("return");case 3:if(e.num&&!(e.num<1)){t.next=6;break}return e.$message.error(e.$t("tokenHoldScan.scanNumError")),t.abrupt("return");case 6:for(e.loading.scan=!0,e.progress=0,e.show.progress=!0,e.dataList=[],n=0;n<20;n++)setTimeout((function(){e.progress>=100||(e.progress=e.progress+5)}),1e3*n);return t.next=13,Object(p.m)(e.tokenHoldScan.chainId,e.selectToken.address,e.num,e.blackHeight);case 13:if(200===(r=t.sent).status&&r.data&&r.data.data&&r.data.data.items){i=Object(s.a)(r.data.data.items);try{for(i.s();!(u=i.n()).done;)o=u.value,e.dataList.push({Address:o.address,Balance:Object(m.e)(o.balance,o.contract_decimals)})}catch(e){i.e(e)}finally{i.f()}e.value=e.dataList.map((function(e){return e.Address+","+e.Balance})).join("\n"),e.progress=100,e.show.editor=!0}e.loading.scan=!1,e.$message.success(e.$t("success"));case 17:case"end":return t.stop()}}),t)})))()},remoteSelect:function(e){var t=this;return Object(r.a)(Object(a.a)().mark((function n(){var s,r,i,u;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=t.userTokenAddress.findIndex((function(t){return t.address===e})),!Object(c.i)(e)||-1!==s){n.next=18;break}return t.loading.select=!0,n.next=5,Object(l.h)(e,t.web3);case 5:return i=n.sent,n.next=8,Object(l.d)(e,t.web3);case 8:if(u=n.sent,!i){n.next=13;break}r=1,n.next=16;break;case 13:return n.next=15,Object(l.b)(e,t.web3);case 15:r=n.sent;case 16:t.loading.select=!1,u&&r?t.userTokenAddress.push({name:u,address:e,decimals:parseInt(r)}):t.$message.error(t.$t("tokenHoldScan.invalidContractAddress"));case 18:case"end":return n.stop()}}),n)})))()},getTokenInfo:function(e,t){var n=this;return Object(r.a)(Object(a.a)().mark((function s(){var r;return Object(a.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e||!t){a.next=7;break}return n.loading.select=!0,a.next=4,Object(p.n)(e,t).catch((function(e){return{data:null}}));case 4:(r=a.sent).data&&(n.userTokenAddress=r.data),n.loading.select=!1;case 7:case"end":return a.stop()}}),s)})))()},initConfig:function(){var e=this;this.global.symbol=this.$route.meta.symbol;var t=o.m.findIndex((function(t){return t.symbol===e.global.symbol}));t>-1&&(this.tokenHoldScan=o.m[t]);var n=Object(y.j)(this.$route.meta.symbol);this.web3=new f.a(new f.a.providers.HttpProvider(n.rpcUrls[0]))}},created:function(){this.initConfig()}},T=v,h=(n("544c"),n("2877")),w=Object(h.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextLeft"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("tokenHoldScan.chain"))+" "),n("el-tooltip",{attrs:{content:e.$t("tokenHoldScan.selectChain"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1),n("svg-icon",{style:"color: "+e.tokenHoldScan.color,attrs:{"icon-class":e.tokenHoldScan.icon}})],1)]),n("div",{staticClass:"switchBox"},[n("el-select",{staticStyle:{width:"100%"},attrs:{"value-key":"id",placeholder:e.$t("pleaseChoose")},on:{change:e.selectChange},model:{value:e.tokenHoldScan,callback:function(t){e.tokenHoldScan=t},expression:"tokenHoldScan"}},e._l(e.tokenHoldScanList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),n("span",{staticStyle:{float:"right","font-size":"13px"}},[n("svg-icon",{style:"color:"+t.color,attrs:{"icon-class":t.icon}})],1)])})),1)],1)]),n("div",{staticClass:"inputContext inputContextRight"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("tokenHoldScan.tokenAddress"))+" "),n("el-tooltip",{attrs:{content:e.$t("tokenHoldScan.tokenTips"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1)])]),n("div",{staticClass:"switchBox"},[n("el-select",{directives:[{name:"loading",rawName:"v-loading",value:e.loading.select,expression:"loading.select"}],staticStyle:{width:"100%"},attrs:{"value-key":"address",filterable:"",remote:"","remote-method":e.remoteSelect,placeholder:e.$t("tokenHoldScan.tokenTips")},model:{value:e.selectToken,callback:function(t){e.selectToken=t},expression:"selectToken"}},e._l(e.userTokenAddress,(function(t){return n("el-option",{key:t.address,attrs:{label:t.name,value:t}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.address))])])})),1)],1)])]),n("div",{staticClass:"inputBox"},[n("div",{staticClass:"inputContext inputContextLeft"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("tokenHoldScan.scanNum")))])])]),n("div",{staticClass:"switchBox"},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'').substr(0, 6)",placeholder:e.$t("tokenHoldScan.scanNum")},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}})],1)]),n("div",{staticClass:"inputContext inputContextRight"},[n("div",{staticClass:"label"},[n("div",{staticClass:"textBox"},[n("span",[e._v(e._s(e.$t("tokenHoldScan.blackHeight"))+" "),n("el-tooltip",{attrs:{content:e.$t("tokenHoldScan.blackHeightTips"),effect:"dark",placement:"top-start"}},[n("i",{staticClass:"el-icon-question"})])],1)])]),n("div",{staticClass:"switchBox"},[n("el-input",{attrs:{oninput:"value=value.replace(/[^\\d]/g,'')",placeholder:e.$t("tokenHoldScan.blackHeightTips")},model:{value:e.blackHeight,callback:function(t){e.blackHeight=t},expression:"blackHeight"}})],1)])]),n("div",{staticClass:"search"},[n("el-button",{attrs:{icon:"el-icon-search",size:"success",loading:e.loading.scan},on:{click:function(t){return e.scanToken()}}},[e._v(e._s(e.$t("tokenHoldScan.scan")))])],1),e.show.progress?n("div",{staticClass:"progress"},[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":24,percentage:e.progress,status:"success"}})],1):e._e(),e.show.editor?n("div",{staticClass:"editor"},[n("div",{staticClass:"label"},[n("span",[e._v(e._s(e.$t("result")))]),n("span",[e._v("Address,Balance")])]),n("json-editor",{ref:"jsonEditor",staticClass:"editor",model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._m(0)],1):e._e(),e.show.editor?n("div",{staticClass:"searchBox"},[n("el-button",{attrs:{type:"success",loading:e.loading.exp},on:{click:function(t){return e.exportExcel()}}},[e._v(e._s(e.$t("export"))+" Execl")])],1):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"label label-remark",staticStyle:{"justify-content":"center"}},[n("span",[e._v("Done by TokenTool.App")])])}],!1,null,"e1312782",null);t.default=w.exports},fa7e:function(e,t,n){"use strict";var a=n("56b3"),s=n.n(a);n("0dd0"),n("a7be"),n("acdf"),n("f9d4"),n("8822"),n("d2de"),n("ae67");var r={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(e){e!==this.jsonEditor.getValue()&&this.jsonEditor.setValue(this.value)}},mounted:function(){var e=this;this.jsonEditor=s.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,theme:"idea",screenReaderLabel:"text/javascript",lint:!0}),this.jsonEditor.setValue(this.value),this.jsonEditor.on("change",(function(t){e.$emit("changed",t.getValue())})),this.jsonEditor.on("inputRead",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()}}},i=r,u=(n("60fa"),n("2877")),o=Object(u.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"json-editor"},[t("textarea",{ref:"textarea",attrs:{placeholder:"请输入地址和数量，以逗号分隔"}})])}),[],!1,null,"358ecc3c",null);t.a=o.exports}}]);