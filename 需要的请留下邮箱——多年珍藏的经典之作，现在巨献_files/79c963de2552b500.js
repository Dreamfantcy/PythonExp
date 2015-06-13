




$(function(){
    $("#joingroupbtn").click(function(){
        url = "/j/group/" + $(this).attr("name") + "/join";
        $.post_withck(url, {},
            function(sjson){
                var ret = eval("(" + sjson + ")");
                $("#joingroupbtn").hide();
                if (ret.result=="toomany"){
                    $("#replysect").html('<p class="attn" align="right">你已经加入了500个小组，无法再加入更多小组。</p>');
                }else{
                    $("#replysect").html('<br/><h2>你现在加入了这个小组，可以发表回应　· · · · · ·　</h2><div class="txd"><form name="comment_form" method="post" action="add_comment"><textarea name="rv_comment" rows="8" cols="54"></textarea><br/><input type="hidden" name="start" value="500"/><span class="bn-flat-hot rr"><input type="submit" value="加上去"/></span><span><label class="pl share-label share-shuo"><input type="checkbox" name="sync_to_mb"/>推荐到广播 </label> </span></form></div>');
                }
            });
        return false;
    });

    $("body").delegate(".topic-doc", 'mouseenter mouseleave', function (e) {
        var target = $('.topic-report a');
        switch (e.type) {
        case "mouseenter":
            target.show();
            break;
        case "mouseleave":
            target.hide();
            break;
        }
    });

    $(".topic-reply li").bind('mouseenter mouseleave click', function (e) {
        var comment_user_id = $(this).find(".operation_div").attr("id"),
        can_delete = 0,
        can_report = 0;
        switch (e.type) {
        case "mouseenter":
            $(this).find(".operation-more").show();
            break;
        case "mouseleave":
            $(this).find(".operation-more").hide();
            break;
        case "click":
            tar = $(e.target);
            if (tar.hasClass("lnk-report")) {
                e.preventDefault();
                var TXT_CFM_WARN = "确定要举报这条垃圾广告吗？",
                    id = tar.data("id"),
                    type = tar.data("type");

                var result = confirm(TXT_CFM_WARN);

                if (result) {
                    $.post_withck(
                        "/j/misc/report_ad",
                        {
                            id: id,
                            type: type
                        }
                    );
                }
            }
            break;
        }
    });


    $('body').delegate('.reply-comment .lnk-close', 'click', function(e){
      e.preventDefault();
      $(this).parent().remove();
    });

});


Do(function(){
  var cookieCfg={key:"ap",cookie:"1"},$doubanTip=$("#doubanapp-tip"),data={};function hideDoubanTip(){if(!$doubanTip.length){return}$doubanTip.hide();data[cookieCfg.key]=cookieCfg.cookie;set_cookie(data)}$doubanTip.delegate("a","click",hideDoubanTip);if(!get_cookie(cookieCfg.key)){$doubanTip.show()}var popup;var nav=$("#db-global-nav");var more=nav.find(".bn-more");function handleShowMoreActive(c){var a=$(c.currentTarget);var b=a.parent();hideDoubanTip();if(popup){popup.parent().removeClass("more-active");if($.contains(b[0],popup[0])){popup=null;return}}b.addClass("more-active");popup=b.find(".more-items");popup.trigger("moreitem:show")}nav.delegate(".bn-more, .top-nav-reminder .lnk-remind","click",function(a){a.preventDefault();handleShowMoreActive(a);return}).delegate(".lnk-doubanapp","mouseenter",function(b){var a=$(this);if(!a.parent().hasClass("more-active")){handleShowMoreActive(b)}}).delegate(".top-nav-doubanapp","mouseleave",function(){var b=$(this);var a=b.find(".lnk-doubanapp");if(popup){b.removeClass("more-active");if($.contains(b[0],popup[0])){popup=null}}});$(document).click(function(a){if($(a.target).closest(".more-items").length||$(a.target).closest(".more-active").length){return}if(popup){popup.parent().removeClass("more-active");popup=null}});
});

Do(function() {
  if ($('.aside').height() > $('.article').height()) {
    return;
  }
  function fixed(c,d){var b=/ipod|iphone|ipad|android|blackberry|mobile|webos|windows phone/i.test(navigator.userAgent);if($.browser.ie&&$.browser.version|0<7||b){return}if(!c||c.length==0){return}var g=d.gap||10;var f=$(window);var e;var a=$.map(c,function(i){var i=$(i);var h=i.position().top;return{node:i,top:h,width:i.width(),bottom:h+i.outerHeight(true)}}).sort(function(i,h){return i.top-h.top});return{init:function(){var h=this.container=$('<div class="fixed-fields"></div>');h.hide().appendTo(c.eq(0).parent().css("position","relative"));this.bindResizeEvent();this.bindScrollEvent();this.setupChecker();f.trigger("resize")},bindScrollEvent:function(){var h=this;f.bind("scroll",function(){var i;return function(j){i&&clearTimeout(i);i=setTimeout(function(){h.handleScroll.call(h,j)},0)}}())},bindResizeEvent:function(){var h=this;f.bind("resize",function(){var i;return function(j){i&&clearTimeout(i);i=setTimeout(function(){h.handleResize.call(h,j)},20)}}())},setupChecker:function(){var h=this;h.getChecker()(c,function(){h.handleNodesUpdate();f.trigger("resize")})},getChecker:function(){var i=window.MutationObserver||window.WebKitMutationObserver;if(i){return function(k,l){$.each(k,function(m,n){var o=new i(function(p,q){if(p[0].addedNodes.length||p[0].removedNodes.length){l()}});o.observe(n,{childList:true,subtree:true})})}}var h=document.documentElement;var j=h.addEventListener?(function(){var n,k,m=false;k=h.id;n=function(){h.removeEventListener("DOMAttrModified",n,false);j=true;h.id=k};h.addEventListener("DOMAttrModified",n,false);h.id="nw";m=h.id!=="nw";h.id=k;return m})():false;if(j){return function(l,m){function k(n){if(!$.contains(n.currentTarget,n.relatedNode)&&n.currentTarget!==n.relatedNode){return}m()}$.each(l,function(n,o){o.addEventListener("DOMNodeInserted",k,false);o.addEventListener("DOMNodeRemoved",k,false)})}}return this.checkingTimer()},checkingTimer:function(){var i=this;var h=[];clearInterval(i.timer);i.timer=setInterval(function(){var m;var l=false;for(var k=0,j=a.length;k<j;k++){m=a[k];if(m.node.outerHeight(true)!==m.bottom-m.top){l=true;break}}if(l){$.each(h,function(n,o){o()})}},1000);return function(j,k){h.push(k)}},handleScroll:function(){var m=this;var k=f.scrollTop();var l;var j=0;var h=a[a.length-1].bottom+g;if(!e&&(k>h)){this.setFixed()}else{if(e&&(k<=h)){this.setStatic()}}},setFixed:function(){var i=g;$.each(a,function(h){var j=a[h];var l=j.node;var k=j.top;l.css({position:"fixed",top:i,width:j.width});i+=l.height()});e=true},setStatic:function(){$.each(a,function(h){var i=a[h];var k=i.node;var j=i.top;k.css({position:"static"})});e=false},handleResize:function(){this.handleScroll()}}};
  setTimeout(function() {
    fixed($('#g-side-info-member, #g-side-info, .mod-app-entrance, #dale_group_topic_new_bottom_right'), {
      extraHeight: 200
    }).init();
  }, 800);
});


;(function() {
  var mask;
  var popup;
  var current = '';


  var init_popup = function() {
    mask = $('<div class="popup-reg-mask"></div>').appendTo('body');
    mask.css('height', $(document).height());
    popup = $('#g-popup-reg');
    popup.find('.lnk-close').click(function(e) {
        e.preventDefault();
        popup.hide();
        mask.hide();
    });

    if ($.browser.msie && ($.browser.version|0) === 6) {
        var win = $(window).scroll((function() {
            var timer;
            var doc = document.body;
            return function() {
                if (timer) {
                    window.clearTimeout(timer);
                }
                timer = window.setTimeout(function() {
                    popup.css({
                      top: (doc.scrollTop + win.height()/2 - popup.height()/2) + 'px'
                    });
                }, 20);
            };
        })()).trigger('scroll');
    }
  };

  var show_popup = function() {
    if (popup) {
      popup.show();
      mask.show();
    } else {
      $('#g-popup-reg').show();
      init_popup();
    }
  };

  Douban.init_show_register = function (e) {
    var node = $(e);
    node.click(function(e) {
      e.preventDefault();
      show_popup();
      if (current !== 'register') {
        popup.find('iframe').attr('src', reg_url);
      }
      current = 'register';
    });
  };

  Douban.init_show_login = function (e) {
    var node = $(e);
    node.click(function(e) {
      e.preventDefault();
      show_popup();
      if (current !== 'login') {
        popup.find('iframe').attr('src', login_url);
      }
      current = 'login';
    });
  };
})();


$(function() {
  var $landingBar = $('#landing-bar');
  var popup_mark = 'g_reg';
  // 有些页面会自动弹注册框
  if (
  'selenium_main_app_window' === window.name ||
  window.POPUP_REG && !window.name) {
      $('#landing-bar').show();
      $('#wrapper').addClass('landing');
  }

  $landingBar.delegate('a', 'click', function(e) {
      // 第三方登录不处理，其他隐藏landing bar
      if ($(this).parent().is('.item')) {
          return;
      }

      e.preventDefault();
      $landingBar.hide();
      if (window.POPUP_REG) {
        window.name = window.name || popup_mark;
      }
  });
});
