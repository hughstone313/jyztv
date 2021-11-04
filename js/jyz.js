/**
 * 作者：石振宁
 * 版本v1.4.3
 * 微信：xiu-xing
 */
(function(){
    'use strict';
    window.jyz={};
    /**获取id */
    var id=function(_id){
        return document.getElementById(_id);
    }
    jyz.id=id;
    /*获取class集合 */
    var className=function(_class){
        return document.getElementsByClassName(_class);
    }
    jyz.className=className;
    /**ajax */
    var ajax=function(_opt){
        _opt = _opt || {};
        _opt.method = _opt.method.toUpperCase() || 'POST';
        _opt.url = _opt.url || '';
        _opt.async = _opt.async || true;
        _opt.data = _opt.data || null;
        _opt.success = _opt.success || function () {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }else{
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        var params = [];
        for (var key in _opt.data){
            params.push(key + '=' + _opt.data[key]);
        }
        var postData = params.join('&');
        if (_opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(_opt.method, _opt.url, _opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        }else if(_opt.method.toUpperCase() === 'GET'){
            xmlHttp.open(_opt.method, _opt.url + '?' + postData, _opt.async);
            xmlHttp.send(null);
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                _opt.success(xmlHttp.responseText);
            }
        }
    }
    jyz.ajax=ajax;
    /**window onload */
    var ready=function(_fn){
        window.onload=_fn;        
    }
    jyz.ready=ready;
    /** resize */
    var resize=function(_fn){
        window.onresize=_fn;
    }
    jyz.resize=resize;
    /**tap _ele目标元素，_fn回调，_fn1触摸时的特效，_fn2触摸后的特效*/
    var tap=function(_ele,_fn,_fn1,_fn2){
        var startX, startY;
        var endX, endY;
        _ele.addEventListener('touchstart', function(_e){            
            if(_fn1!=null){
                _fn1(_e);
            }            
            var touches = _e.touches[0];
            startX = touches.clientX;
            startY = touches.clientY;            
        }, false);
        _ele.addEventListener('touchend', function(_e){
            if(_fn2!=null){
                _fn2(_e);
            }
            var touches = _e.changedTouches[0];
            endX = touches.clientX;
            endY = touches.clientY;
            if(Math.abs(startX - endX) < 6 && Math.abs(startY - endY) < 6 ){
                if(_fn!=null){
                    _fn(_e);
                }                
            }
        }, false);
    }
    jyz.tap=tap;
    /**验证手机号 */
    var phoneValidate=function(_phone){
        var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test($poneInput.val())) {
            return false;
        }else{
            return true;
        }
    }
    jyz.phoneValidate=phoneValidate;
    /**验证固话 */
    var telValidate=function(_tel){
        var myreg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
        if (!myreg.test(tel)) {
            return false;
        }else{
            return true;
        }
    }
    jyz.telValidate=telValidate;
    /**window onscroll */
    var scroll=function(_fn){
        window.onscroll=_fn;
    }
    jyz.scroll=scroll;
    /** 获取url参数 */
    var query=function(_name){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == _name){return pair[1];}
        }
        return(false);
    }
    jyz.query=query;
    /** html解码/反转义 */
    var htmlDecode=function(_html){
        var temp = document.createElement("div"); 
        temp.innerHTML = _html; 
        var output = temp.innerText || temp.textContent; 
        temp = null; 
        return output; 
    }
    jyz.htmlDecode=htmlDecode;
    /** 右键菜单 */
    var contextmenu=function(_fn){
        window.oncontextmenu=_fn;
    }
    jyz.contextmenu=contextmenu;
    //是否手机访问
    var browser=function(){
        var u = navigator.userAgent;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }
    jyz.browser=browser;
})();
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?fa5ced1661593d3a0fee849cabf3d787";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();