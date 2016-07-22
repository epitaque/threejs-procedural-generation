!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.WorleyNoise=e():t.WorleyNoise=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e){function o(t,e){this._numPoints=t||0,this._seed=e||1e4,this._init()}function n(t,e){return t*t+e*e}function i(t,e){return Math.abs(t)+Math.abs(e)}o.prototype.addPoint=function(t,e){this._points[this._numPoints++]={x:t,y:e}},o.prototype.getEuclidean=function(t,e,o){return Math.sqrt(this._calculateValue(t,e,o,n))},o.prototype.getManhattan=function(t,e,o){return this._calculateValue(t,e,o,i)},o.prototype.getMap=function(t,e){function o(t){return Math.sqrt(c._calculateValue(s*a,u*a,t,n))}function r(t){return c._calculateValue(s*a,u*a,t,i)}var s,u,a=1/(t-1),p=[],c=this;for(e=e||function(t,e){return t(1)},u=0;t>u;++u)for(s=0;t>s;++s)p[u*t+s]=e(o,r);return p},o.prototype.getNormalizedMap=function(t,e){var o,n,i=this.getMap(t,e),r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;for(n=0;n<i.length;++n)r=Math.min(r,i[n]),s=Math.max(s,i[n]);for(o=1/(s-r),n=0;n<i.length;++n)i[n]=(i[n]-r)*o;return i},o.prototype._init=function(){var t;for(this._points=[],t=0;t<this._numPoints;++t){var e=Math.sin(t+1)*this._seed,o=Math.cos(t+1)*this._seed;this._points.push({x:e-Math.floor(e),y:o-Math.floor(o)})}},o.prototype._calculateValue=function(t,e,o,n){var i,r,s,u,a;for(u=0;u<this._numPoints;++u)this._points[u].selected=!1;for(a=0;o>a;++a){for(i=Number.POSITIVE_INFINITY,u=0;u<this._numPoints;++u)r=n(t-this._points[u].x,e-this._points[u].y),i>r&&!this._points[u].selected&&(i=r,s=u);this._points[s].selected=!0}return i},t.exports=o}])});