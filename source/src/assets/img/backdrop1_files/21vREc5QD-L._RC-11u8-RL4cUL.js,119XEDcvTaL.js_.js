(function(l,u,G){l.execute(function(){l.when("A","jQuery","atf").execute(function(C,d){C.on.ready(function(){function e(a,b,c,e,f){d(a).slideToggle(300);d(b).slideToggle(300);d(c).toggleClass("tmmShowPrompt tmmHidePrompt");d(e).toggleClass("tmmShowPrompt tmmHidePrompt");d(f).toggleClass("rotate")}function h(a){a.position();a.width();d(".swatchElement");a.find(".swatchElement").each(function(){d(this).attr("data-width",d(this).width())});d("#formats").find(".a-row").removeClass("nonJSFormats")}function c(){var a=
d("#formats"),b=a.width()-40,c=0;a.find(".swatchElement").each(function(){d(this).is(":visible")&&(c+=d(this).width())});c>b?d(a.find(".swatchElement:visible").get().reverse()).each(function(){var a=0,e=!1;d(this).find(".format").hasClass("a-button-selected")?(a=d(this).prev(".swatchElement").width(),e=d(this).prev(".swatchElement").is(":hidden"),d(this).prev(".swatchElement").hide()):(a=d(this).width(),e=d(this).is(":hidden"),d(this).hide());e||(c-=a);return c>b}):c<b&&a.find(".swatchElement").each(function(){if(d(this).is(":hidden"))return d(this).attr("data-width")<=
b-c&&d(this).show(),!1})}var a=0,b=0,g,k=function(a){"undefined"!=typeof a&&(g=new a.ImpressionLogger("dpbxapps","bxapps-atfMarker",!0,!0))};"undefined"!=typeof amznJQ?amznJQ.available("DPClientLogger",function(){k(u.DPClientLogger)}):l.when("DPClientLogger").execute(k);C.declarative("tmm-see-more-editions-click",["click"],function(a){var b=a.data,c=b.metabindingUrl;if(a.$target.hasClass("a-link-expander")||a.$target.parent().hasClass("a-link-expander")){var b=b.metabindingPlaceHolder,f="#metabinding_row_top_"+
b,g="#metabinding_row_bottom_"+b,h="#editionsSeePrompt_"+b,k="#editionsHidePrompt_"+b,l="#editionsIcon_"+b,m="isAjaxComplete_"+b,r="isAjaxInProgress_"+b;a="#tmmSpinnerDiv_"+b;var z=C.state("mediamatrix-state"),b=z["url_"+b].replace(/&amp;/g,"&");d("#formats .tmmErrorClass").hide();"1"===z[m]||"1"===z[r]?e(f,g,h,k,l):(C.ajax(b,{method:"get",success:function(){z[m]="1";C.state("mediamatrix-state",z);e(f,g,h,k,l)},indicator:d(a),error:function(){d($tmmErrorDiv).show();z[r]="0";C.state("mediamatrix-state",
z)}}),z[r]="1",C.state("mediamatrix-state",z))}else"#"!==c&&(u.location=c)});if(0<d("#formats > .a-link-expander").length){var f=u.ue;f&&f.count&&f.count("mediaMatrixExpanderPresent",1)}d("#formats > .a-link-expander").click(function(){e("#tmmSwatches","#twister","#showMoreFormatsPrompt","#hideMoreFormatsPrompt","#formatsIcon");if(!b){var c=u.ue;c&&c.count&&c.count("mediaMatrixExpanderClicked",1);b=1}g&&d("#twister").is(":visible")&&!a&&(g.logImpression("tmm-show-more-formats-viewed"),a=1)});var f=
C.state("mediamatrix-state"),m="1";"undefined"!==typeof f&&"undefined"!==typeof f.showHybridMediaMatrix&&"1"===f.showHybridMediaMatrix?m="0":"undefined"!==typeof f&&"undefined"!==typeof f.isDvdWeblabEnabled&&"1"===f.isDvdWeblabEnabled&&(m="0");"1"===m&&(d("#formats.responsive").each(function(){h(d(this))}),c(),C.on("resize",c));d("#formats .unselected .format").mouseenter(function(){d(this).find(".a-color-secondary").addClass("a-color-price").removeClass("a-color-secondary")}).mouseleave(function(){d(this).find(".a-color-price").addClass("a-color-secondary").removeClass("a-color-price")});
d("#landingItemRentalLink").attr("href","javascript:document.getElementById('rentBuySection').click();")})});l.when("A","jQuery","a-dropdown").execute(function(l,d,e){function h(a){return a?a.replace(/&#0/g,"&#"):undef}function c(a){for(var b=a.getOptions(),b=b?b.size():0,c=1;c<b;c++)a.removeOption(1)}function a(a,b){var c=a.getOption(0),e=c.info()[0];c.remove();d.each(b,function(b,c){a.addOption({text:q[h(c)],value:c,css_class:"dropdownAvailable"},1)});a.addOption(e,0);a.val(e.value)}function b(b){G=
b.value;c(A);"-1"!==G&&(g(),a(A,Object.keys(m[h(G)])))}function g(){Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),d=c.length;return function(e){if("object"!==typeof e&&("function"!==typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f=[],g;for(g in e)a.call(e,g)&&f.push(g);if(b)for(g=
0;g<d;g++)a.call(e,c[g])&&f.push(c[g]);return f}}())}function k(a){x=a.value;"-1"!==x&&"-1"!==G&&(u.location=v[m[h(G)][h(x)]])}function f(a){a=a.value;"-1"!==a&&(u.location=v[h(a)])}var m,n=l.state("dcdMetaData");if(n){var v=n.asinToDetailPageURLMap,q=n.truncatedValuesMap,t=n.dimensionKeys,p=t[0],G=-1,x=-1,A;2===t.length?(m=n.doubleValuesToAsinMap,n=t[1],t=e.getSelect("native_dcd_dropdown_"+p),A=e.getSelect("native_dcd_dropdown_"+n),t.setValue("-1"),A.setValue("-1"),c(A),l.on("a:dropdown:selected:"+
p,b),l.on("a:dropdown:selected:"+n,k)):(t=e.getSelect("native_dcd_dropdown_"+p),(e=n.selectedAsin)?t.setValue(e):t.setValue("-1"),l.on("a:dropdown:selected:asin-redirect",f))}})})})(function(){var l=window.AmazonUIPageJS||window.P,u=l._namespace||l.attributeErrors;return u?u("TwisterHardlinesDetailPageAsset"):l}(),window);
/* ******** */
(function(l,u,G){l.execute(function(){l.when("A","jQuery","atf").execute(function(l,d,e){function h(){var c=parseInt(d("#byline").width()),a=0;d("#byline .author").each(function(){d(this).is(".notFaded")&&(a+=d(this).outerWidth())});a+=d("#byline .more").outerWidth();if(a>c){var b=d("#byline .author.notFaded").length;d(d("#byline .author.notFaded").get().reverse()).each(function(e){a>c&&e<b-1&&(e=d(this).width(),d(this).removeClass("notFaded"),d(this).fadeOut(10,function(){d(this).hide()}),a-=e,d("#byline .moreCount").html(d("#byline .author").length-
d("#byline .author.notFaded").length),d("#byline .more").addClass("notFaded").fadeIn(10))})}else if(a<c&&d("#byline .author.notFaded").length<d("#byline .author").length){var e=c-a;d("#byline .author").each(function(){if(!d(this).hasClass("notFaded")){var a=d(this).outerWidth();a<=e?(e-=a,d(this).addClass("notFaded").fadeIn(10),a=d("#byline .author").length-d("#byline .author.notFaded").length,0===a?d("#byline .more").removeClass("notFaded").fadeOut(10):(d("#byline .moreCount").html(a),d("#byline .more").addClass("notFaded").fadeIn(10))):
e=0}})}}d("#byline .showMoreLink").click(function(){d("#byline .author").each(function(){d(this).hasClass("notFaded")||d(this).addClass("notFaded").fadeIn(0);d("#byline .more").removeClass("notFaded").fadeOut(0)});return!1});d("#byline .contributorNameID").mouseenter(function(){var c=d(this).attr("data-asin"),a={},b="isAjaxComplete_"+c,e="isAjaxInProgress_"+c,h=l.state("popoverImage-state");a.entityID=c;"1"!==h[b]&&"1"!==h[e]&&(d.ajax({url:"/gp/product/utility/by-line/book-contributor-details/ajax/author-image.html",
data:a,dataType:"html",timeout:1E3,success:function(a){d("#contributorImageContainer"+c).get(0).innerHTML=a;h[b]="1";l.state("popoverImage-state",h)},error:function(){h[e]="0";l.state("popoverImage-state",h)}}),h[e]="1",l.state("popoverImage-state",h))});(function(c){var a=parseInt(c.width()),b=parseInt(c.find(".more").outerWidth()),e=0;d("#byline .author").each(function(){d(this).is(".notFaded")&&(e+=d(this).outerWidth())});d("#byline .more").attr("data-width",b);var h=a-b;if(h>e)c.find(".author").each(function(){var a=
d(this).index();3<=parseInt(a)?(a=d(this).outerWidth(),d(this).attr("data-width",a),a<h?(h-=a,d(this).addClass("notFaded"),d(this).fadeIn("slow")):(h=0,d(this).fadeOut("slow"))):(a=d(this).outerWidth(),d(this).attr("data-width",a),h-=a)});else{var f=d("#byline .author.notFaded").length;d(d("#byline .author.notFaded").get().reverse()).each(function(a){h<e&&a<f-1&&(a=d(this).outerWidth(),e-=a,d(this).fadeOut("slow").removeClass("notFaded"))})}a=c.find(".author").length-c.find(".author.notFaded").length;
0<a&&(c.find(".moreCount").html(a),c.find(".more").fadeIn("slow"),c.find(".more").addClass("notFaded"))})(l.$("#byline"));d(u).resize(function(){h()})});l.when("A","jQuery").register("product-description-fix",function(l,d){return{fixTableIssue:function(){d("#productDescription .productDescriptionWrapper table").each(function(){var e=d(this).attr("width");"undefined"!==typeof e?d(this).css("width",e):d(this).css("width","auto")})}}})})})(function(){var l=window.AmazonUIPageJS||window.P,u=l._namespace||
l.attributeErrors;return u?u("PInfoHardlinesDetailPageAsset"):l}(),window);
/* ******** */
(function(l,u,G){l.execute(function(){l.when("A","jQuery","atf").register("accordionBuyBoxJS",function(C,d,e){var h={updateCssClass:function(c){var a=d("#rbbContainer");a.find(".selected .a-icon-radio-active").removeClass("a-icon-radio-active").addClass("a-icon-radio-inactive");a.find(".selected .offer-price").removeClass("a-color-price").addClass("a-color-secondary");c.parents(".rbbSection").removeClass("unselected").addClass("selected");c.parents(".rbbSection").toggleClass("dp-accordion-active",
500);c.find(".a-icon-radio-inactive").removeClass("a-icon-radio-inactive").addClass("a-icon-radio-active");c.find(".offer-price").removeClass("a-color-secondary").addClass("a-color-price");d("#rbbContainer .rbbSection .rbbContent").find(".offer-price").removeClass("a-color-secondary").addClass("a-color-price")},animate:function(c){var a=d("#rbbContainer"),b=c.attr("id"),e,h;a.find(".rbbSection").each(function(a,c){d(c).find(".rbbHeader")[0].id==b?e=d(c):d(c).hasClass("selected")&&(h=d(c))});h.find(".rbbContent").slideUp(500,
function(){h.removeClass("selected").addClass("unselected");h.toggleClass("dp-accordion-active",500)});e.find(".rbbContent").slideDown(500);d.browser.msie&&7==parseInt(d.browser.version,10)&&(e.find(".rbbContent").css("display","inline"),setTimeout(function(){e.find(".rbbContent").css("display","block")},505))},oneClickJS:function(){d("#one-click-button, #one-click-button-ubb").click(function(){var c="https://"+u.location.host+d("#addToCart").attr("action");d("#addToCart").attr("action",c);return!0})},
usedBuyBoxJS:function(){d("#one-click-button-ubb, #usedbuyBox #add-to-cart-button-ubb").click(function(){var c=d("#addToCart"),a=c.attr("action").replace("ref=dp_start-bbf_1_glance","ref=dp_start-ubbf_1_glance");c.attr("action",a);return!0});l.when("a-popover").execute(function(c){var a=d("#usedItemConditionInfoLink"),b=c.create(a,{width:250,position:"triggerBottom",activate:C.capabilities.touch?"onmousemove":"onclick",closeButton:!1,popoverLabel:"Used condition details",name:"usedItemConditionDetailsPopover",
dataStrategy:"preload"});a.mouseleave(function(){b.hide()})})},initialize:function(){d(".rbbHeaderLink").attr("href","javascript:void(0);");d("#rbbContainer .rbbSection.unselected .dp-accordion-inner").hide();d("#rbbContainer .rbbSection .rbbHeader").click(function(c){d(c.target);c=d(this);var a=c.hasClass("rbbHeader")?c:c.parents(".rbbHeader");if(a.parents(".rbbSection").hasClass("selected"))return!1;c=d("#rbbContainer .rbbSection.selected .rbbHeader").attr("id");var b=a.attr("id");h.updateCssClass(a);
d("#abbWrapper [id^=mbb-offeringID-]").each(function(){this.checked=!1});a=d(this);h.animate(a);C.trigger("buybox:accordion:changed",b,c);return!0});h.oneClickJS();h.usedBuyBoxJS()}};return h})})})(function(){var l=window.AmazonUIPageJS||window.P,u=l._namespace||l.attributeErrors;return u?u("OffersHardlinesDetailPageAsset"):l}(),window);
/* ******** */
