(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4c52c6de"],{6711:function(s,t,a){},"7f44c":function(s,t,a){"use strict";a.r(t);var i=a("c7eb"),e=a("1da1"),n=(a("b680"),a("d3b7"),a("25f0"),a("b0c0"),a("99e5")),o=a.n(n),c=a("901e"),d=a.n(c),l=a("828d"),r={name:"GasPrice",data:function(){return{timer:null,websocketObj:null,wsHeartFlag:!1,reconnectTime:0,maxConnect:100,wsUrl:"wss://www.gasnow.org/ws",symbol:"",name:"",gas:{rapid:"0.00",fast:"0.00",standard:"0.00",slow:"0.00",rapidCny:"0.00",fastCny:"0.00",standardCny:"0.00",slowCny:"0.00",rapidUsd:"0.00",fastUsd:"0.00",standardUsd:"0.00",slowUsd:"0.00",fast_seconds:0,slow_seconds:0,standard_seconds:0},data:{cny:0,usd:0}}},methods:{onMessage:function(s){var t=s.data;this.gas.fast=new d.a(o.a.utils.fromWei(t.fast.price.toString(),"gwei")).toFixed(2),this.gas.slow=new d.a(o.a.utils.fromWei(t.slow.price.toString(),"gwei")).toFixed(2),this.gas.standard=new d.a(o.a.utils.fromWei(t.normal.price.toString(),"gwei")).toFixed(2),this.gas.fast_seconds=t.fast.estimated_seconds,this.gas.slow_seconds=t.slow.estimated_seconds,this.gas.standard_seconds=t.normal.estimated_seconds,this.data.cny>0&&(this.gas.fastCny=new d.a(o.a.utils.fromWei(t.fast.price.toString(),"ether")).multipliedBy(21e3).multipliedBy(this.data.cny).toFixed(4),this.gas.slowCny=new d.a(o.a.utils.fromWei(t.slow.price.toString(),"ether")).multipliedBy(21e3).multipliedBy(this.data.cny).toFixed(4),this.gas.standardCny=new d.a(o.a.utils.fromWei(t.normal.price.toString(),"ether")).multipliedBy(21e3).multipliedBy(this.data.cny).toFixed(4)),this.data.usd>0&&(this.gas.fastUsd=new d.a(o.a.utils.fromWei(t.fast.price.toString(),"ether")).multipliedBy(21e3).multipliedBy(this.data.usd).toFixed(4),this.gas.slowUsd=new d.a(o.a.utils.fromWei(t.slow.price.toString(),"ether")).multipliedBy(21e3).multipliedBy(this.data.usd).toFixed(4),this.gas.standardUsd=new d.a(o.a.utils.fromWei(t.normal.price.toString(),"ether")).multipliedBy(21e3).multipliedBy(this.data.usd).toFixed(4)),document.getElementsByClassName("column")[0].className="column",setTimeout((function(){document.getElementsByClassName("column")[0].className="column spin-icon-load"}),100)},getPing:function(){var s=this;return Object(e.a)(Object(i.a)().mark((function t(){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.c)(s.name).then((function(t){t.data&&200===t.status&&(s.data=t.data[s.name])}));case 2:Object(l.d)(s.symbol).then((function(t){s.onMessage(t.data)}));case 3:case"end":return t.stop()}}),t)})))()}},created:function(){this.symbol=this.$route.meta.symbol,this.name=this.$route.meta.name,this.timer=setInterval(this.getPing,7e3),this.getPing()},destroyed:function(){clearInterval(this.timer)}},u=r,g=(a("a41b"),a("2877")),m=Object(g.a)(u,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("h2",[s._v("Gas Price "+s._s(s.$t("latestOffer"))),a("i",[s._v("(Gwei)")])])]),a("div",{staticClass:"gasMain"},[a("ul",{staticClass:"gas"},[a("li",[a("div",{staticClass:"left"},[a("p",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"kuaisu"}}),s._v(s._s(s.$t("gasPrice.fast")))],1),a("strong",[s._v(s._s(s.gas.fast))])]),a("div",{staticClass:"right"},[a("span",[s._v("¥ "+s._s(s.gas.fastCny)+" | $ "+s._s(s.gas.fastUsd))]),a("span",[s._v("15 "+s._s(s.$t("gasPrice.seconds")))])])]),a("li",[a("div",{staticClass:"left"},[a("p",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"zhengchang"}}),s._v(s._s(s.$t("gasPrice.normal")))],1),a("strong",[s._v(s._s(s.gas.standard))])]),a("div",{staticClass:"right"},[a("span",[s._v("¥ "+s._s(s.gas.standardCny)+" | $ "+s._s(s.gas.standardUsd))]),a("span",[s._v("1 "+s._s(s.$t("gasPrice.minute")))])]),a("div",{staticClass:"column spin-icon-load"})]),a("li",[a("div",{staticClass:"left"},[a("p",[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"man"}}),s._v(s._s(s.$t("gasPrice.slow")))],1),a("strong",[s._v(s._s(s.gas.slow))])]),a("div",{staticClass:"right"},[a("span",[s._v("¥ "+s._s(s.gas.slowCny)+" | $ "+s._s(s.gas.slowUsd))]),a("span",[s._v("3 "+s._s(s.$t("gasPrice.minute")))])])])])]),a("div",{staticClass:"tips"},[a("ol",[a("li",[s._v(s._s(s.$t("gasPrice.tips")))]),a("li",[s._v(s._s(s.$t("gasPrice.help")))])])])])}),[],!1,null,"32f3554d",null);t.default=m.exports},a41b:function(s,t,a){"use strict";a("6711")}}]);