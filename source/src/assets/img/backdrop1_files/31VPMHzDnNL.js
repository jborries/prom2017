(function(n,p,u){n.execute(function(){n.when("A","page-refresh-state","web-ajax-utility","alt-page-refresh-measurement").register("page-refresh-handler",function(d,k,h,f){var c={},a=d.$,g=u,e=function(b,c){var e=this;e.clientId=b;e.persistentParams={};e.pageRefreshUrlParams="";e.deviceType="";e.doPageRefresh=function(d,g,f,k){e.persistentParams=a.extend(!0,e.persistentParams,g.Persistent);var n={};a.extend(!0,n,e.persistentParams,g["Non-Persistent"]);g=c;var p=0<=g.indexOf("?");g=g+(p?"&":"?")+((d?
"asin="+d:"")+(e.pageRefreshUrlParams?e.pageRefreshUrlParams:""));for(var u in n)null!=n[u]&&(d=n[u],p=g.slice(-1),g+="?"===p||"&"===p?"":"&",g+=u+"="+d);h.getInstance(b,g,f,k).getContent()};e.addParams=function(b){e.persistentParams=a.extend(!0,e.persistentParams,b);return!0};e.removeParams=function(b){d.each(b,function(b,a){delete e.persistentParams[b]});return!0};e.createCustomParamsMap=function(b,c){var e={Persistent:{},"Non-Persistent":{}};a.each(b,function(b,a){e.Persistent[b]=a});a.each(c,
function(b,a){e["Non-Persistent"][b]=a});return e};e.startMeasurement=function(b,a,c,e){g&&g.start(b,a,c,e)};e.stampImageLoad=function(b){g&&g.stampImageLoad(b)};e.stampFeature=function(b,a){g&&g.stampFeature(b,a)};(function(){var b=k.pageRefreshData;e.pageRefreshUrlParams=b.pageRefreshUrlParams;e.deviceType=b.deviceType})()};return{getHandlerInstance:function(b,d,l){(null==b||""===b)&&p.ueLogError&&p.ueLogError({message:"Invalid ClientId"},{logLevel:"FATAL",attribution:"PageRefreshAPI",message:"Invalid ClientId passed to getHandlerInstance of dpRefreshHandler"});
c[b]||(c[b]=new e(b,d));g||(d=l.config,g=new f(a,d.atf.marker,d.cf.marker),g.init(l.storeID,l.productGroupID));return c[b]}}});n.when("A","page-refresh-handler").register("dp-refresh-handler",function(d,k){function h(f,c,a){this.featureTriggeringRefresh=f.featureName;this.deviceType=(this.deviceTypeStateData=d.state("detail-page-device-type"))&&this.deviceTypeStateData.deviceType?this.deviceTypeStateData.deviceType:"web";this.pageRefreshUrl=c&&c.pageRefreshUrl?c.pageRefreshUrl:"/gp/twister/ajaxv2";
this.clientId="PageRefresh_"+this.deviceType+"_Client";this.DPRefreshHandler=k.getHandlerInstance(this.clientId,this.pageRefreshUrl,a)}h.prototype={doPageRefresh:function(d,c,a,g){try{this.DPRefreshHandler.doPageRefresh(d,c,a,g)}catch(e){p.ueLogError&&p.ueLogError(e,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the doPageRefresh method triggered by - "+this.featureTriggeringRefresh})}},createCustomParamsMap:function(d,c){var a={};try{a=this.DPRefreshHandler.createCustomParamsMap(d,
c)}catch(g){p.ueLogError&&p.ueLogError(g,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the createCustomParamsMap method triggered by - "+this.featureTriggeringRefresh})}return a},addParams:function(d){return d&&"object"==typeof d?this.DPRefreshHandler.addParams(d):!1},removeParams:function(d){return d&&"object"==typeof d?this.DPRefreshHandler.removeParams(d):!1},startMeasurement:function(d,c,a,g){try{this.DPRefreshHandler.startMeasurement(d,c,a,g)}catch(e){p.ueLogError&&
p.ueLogError(e,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}},stampImageLoad:function(d){try{this.DPRefreshHandler.stampImageLoad(d)}catch(c){p.ueLogError&&p.ueLogError(c,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}},stampFeature:function(d,c){try{this.DPRefreshHandler.stampFeature(d,
c)}catch(a){p.ueLogError&&p.ueLogError(a,{logLevel:"ERROR",attribution:this.featureTriggeringRefresh,message:"This error is caused by the startMeasurement method triggered by - "+this.featureTriggeringRefresh})}}};return h});n.when("A","jQuery").register("alt-page-refresh-ajax-scope",function(d,k){return function(d,f,c){this.scopeName=f;this.url=c;ues("t0",f,p.newTwisterInteractionStartTime);ues("ctb",f,"1");this.signalMarker=function(a){!this.markers[a]||0>=this.markers[a].conditions||0===--this.markers[a].conditions&&
"function"==typeof this.markers[a].handler&&this.markers[a].handler()};this.addlongPoleTag=function(a,c){a=a.toLowerCase();this.markers[a]&&0==this.markers[a].conditions&&0==this.markers[a].conditions&&p.ue&&"function"===typeof ue.tag&&ue.tag(c)};this.postData=function(){var a=this.scopeName;d.ajax({url:this.url,dataType:"text",timeout:4E4,error:function(){},success:function(c,b,d){ues("id",a,c);uex("ld",a)}})};var a=this;this.markers={image:{conditions:1,handler:function(){uet("ne",f);a.signalMarker("af")}},
af:{conditions:Twister.atfMarkerCount?Twister.atfMarkerCount:2,handler:function(){uet("af",f);uet("cf",f);a.signalMarker("cf")}},cf:{conditions:Twister.cfMarkerCount?Twister.cfMarkerCount:2,handler:function(){uet("cf",f);a.postData()}}}}});n.when("A","jQuery","alt-page-refresh-ajax-scope").register("alt-page-refresh-measurement",function(d,k,h){return function(d,c,a){this.atfMarker=c;this.cfMarker=a;this.scopeCount={};this.ajaxScopes={};this.url="";this.init=function(a,c){this.url="/gp/twister/dynamic-update/ajax-measurement.html/?s="+
a+"&pgid="+c+"&deviceType="+Twister.deviceType;Twister.isInstaTwisterEnabled&&(this.url+="&ptd="+Twister.productTypeName)};this.start=function(a,c,b,k){if(p.ue){this.scopeCount[a]||(this.scopeCount[a]=0);var l=a+(this.scopeCount[a]+1);this.scopeCount[a]++;var r=this.url;c&&(r+="&dimensionType="+c);"undefined"!==typeof b&&(r+="&dimensionCount="+b);"undefined"!==typeof k&&(r+="&dimensionsDisplayType="+k);this.ajaxScopes[a]=new h(d,l,r)}};this.stampImageLoad=function(a){this.ajaxScopes[a]&&(this.ajaxScopes[a].signalMarker("image"),
Twister.cfImageLongPollTag&&this.ajaxScopes[a].addlongPoleTag("cf",Twister.cfImageLongPollTag))};this.stampFeature=function(a,c){this.ajaxScopes[c]&&(a===this.atfMarker&&this.ajaxScopes[c].signalMarker("af"),a===this.cfMarker&&(this.ajaxScopes[c].signalMarker("cf"),Twister.cfHtmlLongPollTag&&this.ajaxScopes[c].addlongPoleTag("cf",Twister.cfHtmlLongPollTag)))};this.stampCustomMetrics=function(a,c){this.ajaxScopes[c]&&uet(a,this.ajaxScopes[c].scopeName)}}});n.when("A","ready").register("page-refresh-state",
function(d){var k=d.state("page-refresh-data");d=d.state("detail-page-device-type");var h={};"undefined"!==typeof k&&(h.pageRefreshUrlParams=k.pageRefreshUrlParams);"undefined"!==typeof d&&(h.deviceType=d.deviceType);return{pageRefreshData:h}});n.when("A","jQuery","dp-js-logger").register("web-ajax-utility",function(d,k,h){function f(a,c,e,b){this.scope=a;this.url=c;this.options=e;this.status=0;this.selected=!1;this.error=this.successData=this.xhr=this._status=u;this.chunks=[];this.doNotAbort=b||
!1}var c=new h("WebAjaxUtility");f._objects={};f.prototype._callback=function(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);"function"===typeof a&&a.apply(self,c)};f.prototype._canAbort=function(){return!this.doNotAbort&&1===this.status};f.prototype._isAborted=function(){return 3===this.status};f.prototype._getUrl=function(){return this.url};f.prototype._abort=function(){if(1===this.status)try{this.ajaxRequestRefence.abort(),this.status=3}catch(a){c.logFatal(a,{message:" Could not abort ajax request."})}};
f.prototype._flushChunkData=function(){var a=this;a.chunks.length&&k.map(a.chunks,function(c){a._callback(a.options.chunk,c)})};f.prototype._request=function(){var a=this;a.ajaxRequestRefence=d.get(a.url,{params:a.options.params,success:function(c,e,b){a.status=4;a.successData=c;a._status=e;a.xhr=b;a.selected&&a._callback(a.options.success,c,e,b)},error:function(c,e,b){a.status=2;a.xhr=c;a._status=e;a.error=b;a.selected&&a._callback(a.options.error,c,e,b)},abort:function(c){a.status=3;a.xhr=c;a.selected&&
a._callback(a.options.abort,c)},chunk:function(c){c&&(a.chunks.push(c),a.selected&&a._callback(a.options.chunk,c))},timeout:a.options.timeout||4E4})};f.prototype.getContent=function(){f._abortRequestsExcept(this);this.selected=!0;0===this.status?(this.status=1,this._request()):1===this.status?this._flushChunkData():4===this.status&&(this._flushChunkData(),this._callback(this.options.success,this.successData,this._status,this.xhr),d.trigger("a:pageUpdate"))};f._abortRequestsExcept=function(a){k.each(f._objects[a.scope],
function(c,e){e._canAbort()&&c!==a._getUrl()&&e._abort()})};f.getInstance=function(a,c,e,b){if(!a||!c||"object"!==typeof e)throw"Incorrect parameter passed.";f._objects[a]=f._objects[a]||{};var d=f._objects[a][c];d&&d._isAborted()&&(delete f._objects[a][c],d=u);d||(f._objects[a][c]=new f(a,c,e,b,this));return f._objects[a][c]};return f})})})(function(){var n=window.AmazonUIPageJS||window.P,p=n._namespace||n.attributeErrors;return p?p("PageRefreshAsset"):n}(),window);