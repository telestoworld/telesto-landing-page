(this["webpackJsonptelesto-world"]=this["webpackJsonptelesto-world"]||[]).push([[0],{110:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return o}));var n=r(4),a=r(28),o=(r(21),function(t,e,r,o,i){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/c.innerWidth;o(e)},onEnd:function(t){var e=t.deltaX,r=c.innerWidth,a=e/r,o=t.velocityX,s=r/2,u=o>=0&&(o>.2||t.deltaX>s),d=(u?1-a:a)*r,l=0;if(d>5){var h=d/Math.abs(o);l=Math.min(h,540)}i(u,a<=0?.01:Object(n.j)(0,a,.9999),l)}})})}}]);
//# sourceMappingURL=0.ec08d0d0.chunk.js.map