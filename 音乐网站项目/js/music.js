
    //(佳哥组团队首先声明：我们深知写代码要注重质量，js代码最好用jQuery写，但我们团队
    // 除飘雪效果、轮播图、以及一些小东西外，其余的都是用js原生代码写的。那么，众所周知
    // ，js原生代码可以说是非常的繁琐，复杂，量大，效率低，兼容性问题处理不佳，难以驾驭，
    // 那我们为什么主要还是采用js原生代码来写呢？，原因主要出于两种：第一:我们对jQuery的
    // 熟练度不过高，本网站相关特效无法用jQuery实现；第二：我们始终坚信对于我们这种初学者
    // 来说，更应该多去写js原生代码，去深刻了解和剖析js原生代码的原理。我们明白jQuery固然
    // 重要，而且后期使用jQuery这是必然的趋势，但我们在这次项目中不追求代码高质量的那几分
    // ，对于我们前端开发人员，我们只希望通过这次的项目来提高对原生js的熟练度以及html,css的
    // 熟练度，驾驭能力等，来更好提升自己思维的分析能力、转化能力、判断能力、理解能力。对于
    // jQuery，我们还想对它说：“我们并没有放弃你，因为你是基于js原生代码而来的，你就是js
    // 原生的儿子，虽然你长的比你父亲好看，能力比你父亲强，但我们必须要先能驾驭你父亲，虽然，
    // 我们就算驾驭不了你的父亲，我们也许也能驾驭你jQuery,但如果我们驾驭了你的父亲，那我们
    // 在后期驾驭你jQuery不就显得更加的容易了吗，思维变得更加的清晰的吗，脑子变得更灵了吗，
    // 不就更能快速的记忆，理解，掌握你,学习你jQuery了吗，不就能真正的成为一名js原生代码
    // 高手了吗......”)

    //飘雪效果开始
    var minSize = 5;
    var maxSize = 50;
    var newOn =100;  //毫秒
    var flakeColor = '#fff';
    var flake = $('<div></div>').css({'position':'absolute','top':'-50px'}).html('❉');
    $(function () {
        var documentWidth = $(document).width();
        var documentHeight = $(document).height();
        setInterval(function () {
        var endPositionLeft = Math.random()*documentWidth;
        var durationFall = 2000 + Math.random()*3000;
        var sizeFlake = minSize + Math.random()*maxSize;
        var startPositionLeft = Math.random()*documentWidth;
        var startOpacity = 0.7 + Math.random()*0.3;
        var endPositionTop = documentHeight;

        flake.clone().appendTo('body').css({
            'font-size':sizeFlake,
            'opacity':startOpacity,
            'color':flakeColor,
            'left':startPositionLeft
        }).animate({
            'left':endPositionLeft,
            'top':endPositionTop,
            'opacity':0.5
        },durationFall,function () {
            $(this).remove();
        })
    },newOn)
})
    //飘雪效果结束

    $(function () {
        $('#statement span').eq(0).show().siblings().hide();

        //弹出登录界面，并关闭注册界面
        $('#regChangeLogin').click(function () {
            layer.closeAll();
            showLoginBox();
        })

        //弹出注册界面，并关闭登录界面
        $('#loginBox #registerAccount').click(function () {
            layer.closeAll();
            showRegisterBox();
        })

        //查看用户协议
        $('#register_frame #userProtocol').click(function () {
            setTimeout(function () {
                window.open('protocol.html');
            },500)
        })

        //查看隐私政策
        $('#register_frame #concealPolicy').click(function () {
            setTimeout(function () {
                window.open('private.html');
            },500)
        })

        //评论区
        $('#comment ol > li').eq(0).mouseenter(function (index) {
            $('#comment ol > li').eq(0).addClass('commentSongHover1');
            $('#comment ol > li').eq(1).removeClass('commentSongHover2');
            $('#comment ol > li').eq(2).removeClass('commentSongHover3');
            $('#comment #commentTxtArea').css('border','1px solid yellow');
            $('#loginComment1').css('color','yellow');
            // $('')
        })
        $('#comment ol > li').eq(1).mouseenter(function () {
            $('#comment ol > li').eq(0).removeClass('commentSongHover1');
            $('#comment ol > li').eq(1).addClass('commentSongHover2');
            $('#comment ol > li').eq(2).removeClass('commentSongHover3');
            $('#comment #commentTxtArea').css('border','1px solid deeppink');
            $('#loginComment1').css('color','deeppink');

        })
        $('#comment ol > li').eq(2).mouseenter(function () {
            $('#comment ol > li').eq(0).removeClass('commentSongHover1');
            $('#comment ol > li').eq(1).removeClass('commentSongHover2');
            $('#comment ol > li').eq(2).addClass('commentSongHover3');
            $('#comment #commentTxtArea').css('border','1px solid deepskyblue');
            $('#loginComment1').css('color','deepskyblue');
        })
    
        //表情
        $('#faceNumber > li').each(function (index) {
            $(this).click(function () {
                $('#overrideFace table:eq('+index+')').show().siblings().hide();
            })
        })

        //飞入购物车
        var shoppingIcon_total_num = 0;
        $('.addIn_shop_vehicle').each(function(index){
            $(this).click(function(){
                var flyImg = $('.erji_pic:eq('+index+')').clone().css({
                    'opacity':0.6,
                    'position':'absolute',
                    'left':$('.erji_pic:eq('+index+')').offset().left,
                    'top':$('.erji_pic:eq('+index+')').offset().top,
                    'margin':'-75px -224px',
                    'width':$('.erji_pic:eq('+index+')').width(),
                    'height':$('.erji_pic:eq('+index+')').height(),
                    'border':'3px solid #fff'
                });
                flyImg.appendTo('#shopping');
                shoppingIcon_total_num++;
                flyImg.animate({
                    'height':50,
                    'width':50,
                    'border-radius':100 + '%'
                }).animate({
                    'top':95 + 'px',
                    'left':1060 + 'px',
                    'width':0,
                    'height':0
                },2000,function () {
                    flyImg.remove();
                    $('#shoppingIcon_total').show();
                    $('#shoppingIcon_total').html(shoppingIcon_total_num);
                })
            })
        })

        $('#download1').on('click',function(){
            $('#replace01').insertAfter($('#replace02'));
        })
    })

    //轮播图开始
    var i = 0;
    var timer_broadcast = null;
    $(function () {
        $('.bc_pic').eq(0).show().siblings().hide();
        show_bc_Time();
        $('.broadcast_btn').hover(function () {
            i = $(this).index();
            tab();
            if(i == 0){
                $('#broadcast_pic > ul').css('background','#666');
            }
            if(i == 1){
                $('#broadcast_pic > ul').css('background','#f90');
            }
            if(i == 2){
                $('#broadcast_pic > ul').css('background','deepskyblue');
            }
            if(i == 3){
                $('#broadcast_pic > ul').css('background','orange');
            }
            if(i == 4){
                $('#broadcast_pic > ul').css('background','pink');
            }
            clearInterval(timer_broadcast);
        },function () {
            show_bc_Time();
        })
        $('.left_btn').click(function () {
            clearInterval(timer_broadcast);
            if(i == 0){
                i = 5;
            }
            i--;
            if(i == 0){
                $('#broadcast_pic > ul').css('background','#666');
            }
            if(i == 1){
                $('#broadcast_pic > ul').css('background','#f90');
            }
            if(i == 2){
                $('#broadcast_pic > ul').css('background','deepskyblue');
            }
            if(i == 3){
                $('#broadcast_pic > ul').css('background','orange');
            }
            if(i == 4){
                $('#broadcast_pic > ul').css('background','pink');
            }
            tab();
            show_bc_Time();
        })
        $('.right_btn').click(function () {
            clearInterval(timer_broadcast);
            i++;
            if(i == 5){
                i = 0;
            }
            if(i == 0){
                $('#broadcast_pic > ul').css('background','#666');
            }
            if(i == 1){
                $('#broadcast_pic > ul').css('background','#f90');
            }
            if(i == 2){
                $('#broadcast_pic > ul').css('background','deepskyblue');
            }
            if(i == 3){
                $('#broadcast_pic > ul').css('background','orange');
            }
            if(i == 4){
                $('#broadcast_pic > ul').css('background','pink');
            }
            tab();
            show_bc_Time();
        })
    })
        function tab() {
            $('.bc_pic').eq(i).fadeIn(1800).siblings().fadeOut(500);
            $('.broadcast_btn').eq(i).addClass('active').siblings().removeClass('active');
        }
        function show_bc_Time() {
            timer_broadcast = setInterval(function () {
                i++;
                if(i == 5){
                    i = 0;
                    $('#broadcast_pic > ul').css('background','#666');
                }
                if(i == 1){
                    $('#broadcast_pic > ul').css('background','#f90');
                }
                if(i == 2){
                    $('#broadcast_pic > ul').css('background','deepskyblue');
                }
                if(i == 3){
                    $('#broadcast_pic > ul').css('background','orange');
                }
                if(i == 4){
                    $('#broadcast_pic > ul').css('background','pink');
                }
                tab();
            },6000)
        }
        //轮播图结束

    window.onload = function () {

    	//注册
        var oReg_txt = document.getElementById('reg_txt');
        var oReg_pwd = document.getElementById('reg_pwd');
        var oReg_repPwd = document.getElementById('reg_repPwd');
        var oVerify_code_txt = document.getElementById('verify_code_txt');
        oReg_txt.onfocus = function (ev) {
            oReg_txt.placeholder = '';
            oReg_txt.select();
        }
        oReg_txt.onblur = function (ev) {
            oReg_txt.placeholder = '用户名只能由6~16位数字或字母组成';
        }
        oReg_pwd.onfocus = function (ev) {
            oReg_pwd.placeholder = '';
            oReg_pwd.select();
        }
        oReg_pwd.onblur = function (ev) {
            oReg_pwd.placeholder = '密码只能由6位以上数字、字母和下划线组成';
        }
        oReg_repPwd.onfocus = function (ev) {
            oReg_repPwd.placeholder = '';
            oReg_repPwd.select();
        }
        oReg_repPwd.onblur = function (ev) {
            oReg_repPwd.placeholder = '请再次输入密码';
        }
        oVerify_code_txt.onfocus = function (ev) {
            oVerify_code_txt.placeholder = '';
            oVerify_code_txt.select();
        }
        oVerify_code_txt.onblur = function (ev) {
            oVerify_code_txt.placeholder = '请输入验证码';
        }
        
        //商城与购物车开始
        var oSelectList = document.getElementById('selectList');
        var oHistoryList = document.getElementById('historyList');
        oSelectList.onclick = function () {
            oHistoryList.style.display = 'block';
        }
        oSelectList.onmouseout = oHistoryList.onmouseout = function () {
            shopping_timer = setTimeout(function () {
                oHistoryList.style.display = 'none';
        },500)
        }
        oHistoryList.onmouseover = function () {
            clearTimeout(shopping_timer);
        }

        var oSmallYuHao = document.getElementById('smallYuHao');
        var oBigYuHao = document.getElementById('bigYuHao');
        var oShop_dis_1 = document.getElementById('shop_dis_1');
        var oShopping_middle = document.getElementById('shopping_middle');
        var oShopping_middle_ul = oShopping_middle.getElementsByTagName('ul');
        var nowShop = 0;

        function moveShop() {
            for(var i = 0; i < oShopping_middle_ul.length; i++){
                oShopping_middle_ul[i].style.display = 'none';
                fadeOut(oShopping_middle_ul[i]);
            }
            oShopping_middle_ul[nowShop].style.display = 'block';
            fadeIn(oShopping_middle_ul[nowShop]);
        }
        oSmallYuHao.onclick = function () {
            // if(nowShop == 0){    //第一种方法，应是碰巧法，应为一开始按钮索引值恰好为0
            //     nowShop = 3;
            // }
            // nowShop--;
            nowShop--;    //标准法
            if(nowShop == -1){
                nowShop = 2;
            }
            moveShop();
            oShop_dis_1.innerHTML = oShop_dis_1.innerHTML * 1 - 1;
            if(oShop_dis_1.innerHTML == 0){
                oShop_dis_1.innerHTML = 3;
            }
        }
        oBigYuHao.onclick = function () {
            nowShop++;
            if(nowShop == 3){
                nowShop = 0;
            }
            moveShop();
            oShop_dis_1.innerHTML = oShop_dis_1.innerHTML * 1 + 1;
            if(oShop_dis_1.innerHTML == 4){
                oShop_dis_1.innerHTML = 1;
            }
        }

        var oInstancePurchase = document.getElementById('instancePurchase');
        oInstancePurchase.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }
        var oInstancePurchase1 = document.getElementById('instancePurchase1');
        oInstancePurchase1.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }
        var oInstancePurchase2 = document.getElementById('instancePurchase2');
        oInstancePurchase2.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }
        var oInstancePurchase3 = document.getElementById('instancePurchase3');
        oInstancePurchase3.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }
        var oInstancePurchase4 = document.getElementById('instancePurchase4');
        oInstancePurchase4.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }
        var oInstancePurchase5 = document.getElementById('instancePurchase5');
        oInstancePurchase5.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }
        var oInstancePurchase6 = document.getElementById('instancePurchase6');
        oInstancePurchase6.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }
        var oInstancePurchase7 = document.getElementById('instancePurchase7');
        oInstancePurchase7.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }
        var oInstancePurchase8 = document.getElementById('instancePurchase8');
        oInstancePurchase8.onclick = function () {
            layer.alert('您需要先登录用户才能购买哦！',{
                title:'提示',
                icon:7
            });
        }

        var oShoppingIcon = document.getElementById('shoppingIcon');
        oShoppingIcon.onclick = function () {
            layer.closeAll();
            showInShopBox();
        }

        var oSubmit_list = document.getElementById('submit_list');
        oSubmit_list.onclick = function () {
            layer.alert('对不起，您需要登录后才能进行订单支付！',{
                title:'提示',
                icon:7
            })
        }
        var oContinue_shopping = document.getElementById('continue_shopping');
        oContinue_shopping.onclick = function () {
            layer.closeAll();
            showShoppingBox();
        }
        //商城与购物车结束
    	
        //排行榜
        function rankMove(obj,target,name) {
            clearInterval(obj.rankTimer);
            obj.rankTimer = setInterval(function () {
                var cur = 0;
                if(name == 'opacity'){
                    cur = getStyle(obj,name)*100;
                }
                else{
                    cur = parseInt(getStyle(obj,name));
                }
                var speed = (target - cur)/3;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if(cur == target){
                    clearInterval(obj.rankTimer);
                }
                else{
                    if(name == 'opacity'){
                        obj.style.opacity = (cur + speed) / 100;
                        obj.style.filter = 'alpha(opacity='+cur+speed+')'
                    }
                    else{
                        obj.style[name] = cur + speed + 'px';
                    }
                }
            },30)
        }
        var oRank_list_left = document.getElementById('rank_list_left');
        var oRank_list_left_div = oRank_list_left.getElementsByTagName('div');
        var oRank_list_right = document.getElementById('rank_list_right');
        var oRank_list_right_div = oRank_list_right.getElementsByTagName('div')[0];
        for(var i = 0; i < oRank_list_left_div.length; i++){
            oRank_list_left_div[i].index = i;
            oRank_list_left_div[i].onclick = function () {
                for(var i = 0; i < oRank_list_left_div.length; i++){
                    oRank_list_left_div[i].className = '';
                }
                    this.className = 'rankSongMark';
                    rankMove(oRank_list_right_div,-500*this.index,'top');
            }
        }
        var oRank_list_right_middle = document.getElementById('rank_list_right_middle');
        var oRank_list_right_middle_ol = oRank_list_right_middle.getElementsByTagName('ol');
        var oRank_list_right_bto_leftBtn = document.getElementById('rank_list_right_bto_leftBtn');
        var oRank_list_right_bto_rightBtn = document.getElementById('rank_list_right_bto_rightBtn');
        var oRank_list_right_bto_calcNum = document.getElementById('rank_list_right_bto_calcNum');
        var nowRank = 0;
        function rlrPrevMove() {
            nowRank--;
            if(nowRank == -1){
                nowRank = 2;
            }
            for(var i = 0; i < oRank_list_right_middle_ol.length; i++){
                oRank_list_right_middle_ol[i].style.display = 'none';
            }
            oRank_list_right_middle_ol[nowRank].style.display = 'block';
        }
        function rlrNextMove() {
                nowRank++;
                if(nowRank == 3){
                    nowRank = 0;
                }
                for(var i = 0; i < oRank_list_right_middle_ol.length; i++){
                    oRank_list_right_middle_ol[i].style.display = 'none';
                }
                    oRank_list_right_middle_ol[nowRank].style.display = 'block';
        }
        oRank_list_right_bto_leftBtn.onclick = function (ev) {
            rlrPrevMove();
            oRank_list_right_bto_calcNum.innerHTML = oRank_list_right_bto_calcNum.innerHTML * 1 - 1;
            if(oRank_list_right_bto_calcNum.innerHTML == 0){
                oRank_list_right_bto_calcNum.innerHTML = 3;
            }
        }
        oRank_list_right_bto_rightBtn.onclick = function (ev) {
            rlrNextMove();
            oRank_list_right_bto_calcNum.innerHTML = oRank_list_right_bto_calcNum.innerHTML * 1 + 1;
            if(oRank_list_right_bto_calcNum.innerHTML == 4){
                oRank_list_right_bto_calcNum.innerHTML = 1;
            }
        }

        var oRank_list_right_middle2 = document.getElementById('rank_list_right_middle2');
        var oRank_list_right_middle_ol2 = oRank_list_right_middle2.getElementsByTagName('ol');
        var oRank_list_right_bto_leftBtn2 = document.getElementById('rank_list_right_bto_leftBtn2');
        var oRank_list_right_bto_rightBtn2 = document.getElementById('rank_list_right_bto_rightBtn2');
        var oRank_list_right_bto_calcNum2 = document.getElementById('rank_list_right_bto_calcNum2');
        var nowRank2 = 0;
        function rlrPrevMove2() {
            nowRank2--;
            if(nowRank2 == -1){
                nowRank2 = 2;
            }
            for(var i = 0; i < oRank_list_right_middle_ol2.length; i++){
                oRank_list_right_middle_ol2[i].style.display = 'none';
            }
            oRank_list_right_middle_ol2[nowRank2].style.display = 'block';
        }
        function rlrNextMove2() {
            nowRank2++;
            if(nowRank2 == 3){
                nowRank2 = 0;
            }
            for(var i = 0; i < oRank_list_right_middle_ol2.length; i++){
                oRank_list_right_middle_ol2[i].style.display = 'none';
            }
            oRank_list_right_middle_ol2[nowRank2].style.display = 'block';
        }
        oRank_list_right_bto_leftBtn2.onclick = function (ev) {
            rlrPrevMove2();
            oRank_list_right_bto_calcNum2.innerHTML = oRank_list_right_bto_calcNum2.innerHTML * 1 - 1;
            if(oRank_list_right_bto_calcNum2.innerHTML == 0){
                oRank_list_right_bto_calcNum2.innerHTML = 3;
            }
        }
        oRank_list_right_bto_rightBtn2.onclick = function (ev) {
            rlrNextMove2();
            oRank_list_right_bto_calcNum2.innerHTML = oRank_list_right_bto_calcNum2.innerHTML * 1 + 1;
            if(oRank_list_right_bto_calcNum2.innerHTML == 4){
                oRank_list_right_bto_calcNum2.innerHTML = 1;
            }
        }

        var oRank_list_right_middle3 = document.getElementById('rank_list_right_middle3');
        var oRank_list_right_middle_ol3 = oRank_list_right_middle3.getElementsByTagName('ol');
        var oRank_list_right_bto_leftBtn3 = document.getElementById('rank_list_right_bto_leftBtn3');
        var oRank_list_right_bto_rightBtn3 = document.getElementById('rank_list_right_bto_rightBtn3');
        var oRank_list_right_bto_calcNum3 = document.getElementById('rank_list_right_bto_calcNum3');
        var nowRank3 = 0;
        function rlrPrevMove3() {
            nowRank3--;
            if(nowRank3 == -1){
                nowRank3 = 2;
            }
            for(var i = 0; i < oRank_list_right_middle_ol3.length; i++){
                oRank_list_right_middle_ol3[i].style.display = 'none';
            }
            oRank_list_right_middle_ol3[nowRank3].style.display = 'block';
        }
        function rlrNextMove3() {
            nowRank3++;
            if(nowRank3 == 3){
                nowRank3 = 0;
            }
            for(var i = 0; i < oRank_list_right_middle_ol3.length; i++){
                oRank_list_right_middle_ol3[i].style.display = 'none';
            }
            oRank_list_right_middle_ol3[nowRank3].style.display = 'block';
        }
        oRank_list_right_bto_leftBtn3.onclick = function (ev) {
            rlrPrevMove3();
            oRank_list_right_bto_calcNum3.innerHTML = oRank_list_right_bto_calcNum3.innerHTML * 1 - 1;
            if(oRank_list_right_bto_calcNum3.innerHTML == 0){
                oRank_list_right_bto_calcNum3.innerHTML = 3;
            }
        }
        oRank_list_right_bto_rightBtn3.onclick = function (ev) {
            rlrNextMove3();
            oRank_list_right_bto_calcNum3.innerHTML = oRank_list_right_bto_calcNum3.innerHTML * 1 + 1;
            if(oRank_list_right_bto_calcNum3.innerHTML == 4){
                oRank_list_right_bto_calcNum3.innerHTML = 1;
            }
        }

        var oheaderChb = document.getElementById('headerChb');
            oheaderChb.onclick = rankChbFnd;
        function rankChbFnd() {
            var oRankChb = document.getElementsByName('rankChb');
            for(var i = 0; i < oRankChb.length; i++){
                if(oheaderChb.checked){
                    oRankChb[i].checked = true;
                }
                else{
                    oRankChb[i].checked = false;
                }
            }
        }
        var oheaderChb2 = document.getElementById('headerChb2');
        oheaderChb2.onclick = rankChbFnd2;
        function rankChbFnd2() {
            var oRankChb2 = document.getElementsByName('rankChb2');
            for(var i = 0; i < oRankChb2.length; i++){
                if(oheaderChb2.checked){
                    oRankChb2[i].checked = true;
                }
                else{
                    oRankChb2[i].checked = false;
                }
            }
        }
        var oheaderChb3 = document.getElementById('headerChb3');
        oheaderChb3.onclick = rankChbFnd3;
        function rankChbFnd3() {
            var oRankChb3 = document.getElementsByName('rankChb3');
            for(var i = 0; i < oRankChb3.length; i++){
                if(oheaderChb3.checked){
                    oRankChb3[i].checked = true;
                }
                else{
                    oRankChb3[i].checked = false;
                }
            }
        }
        var oheaderChb_1 = document.getElementById('headerChb_1');
        oheaderChb_1.onclick = rankChbFnd_1;
        function rankChbFnd_1() {
            var oRankChb_1 = document.getElementsByName('rankChb_1');
            for(var i = 0; i < oRankChb_1.length; i++){
                if(oheaderChb_1.checked){
                    oRankChb_1[i].checked = true;
                }
                else{
                    oRankChb_1[i].checked = false;
                }
            }
        }
        var oheaderChb_2 = document.getElementById('headerChb_2');
        oheaderChb_2.onclick = rankChbFnd_2;
        function rankChbFnd_2() {
            var oRankChb_2 = document.getElementsByName('rankChb_2');
            for(var i = 0; i < oRankChb_2.length; i++){
                if(oheaderChb_2.checked){
                    oRankChb_2[i].checked = true;
                }
                else{
                    oRankChb_2[i].checked = false;
                }
            }
        }
        var oheaderChb_3 = document.getElementById('headerChb_3');
        oheaderChb_3.onclick = rankChbFnd_3;
        function rankChbFnd_3() {
            var oRankChb_3 = document.getElementsByName('rankChb_3');
            for(var i = 0; i < oRankChb_3.length; i++){
                if(oheaderChb_3.checked){
                    oRankChb_3[i].checked = true;
                }
                else{
                    oRankChb_3[i].checked = false;
                }
            }
        }
        var oheaderChb__1 = document.getElementById('headerChb__1');
        oheaderChb__1.onclick = rankChbFnd__1;
        function rankChbFnd__1() {
            var oRankChb__1 = document.getElementsByName('rankChb__1');
            for(var i = 0; i < oRankChb__1.length; i++){
                if(oheaderChb__1.checked){
                    oRankChb__1[i].checked = true;
                }
                else{
                    oRankChb__1[i].checked = false;
                }
            }
        }
        var oheaderChb__2 = document.getElementById('headerChb__2');
        oheaderChb__2.onclick = rankChbFnd__2;
        function rankChbFnd__2() {
            var oRankChb__2 = document.getElementsByName('rankChb__2');
            for(var i = 0; i < oRankChb__2.length; i++){
                if(oheaderChb__2.checked){
                    oRankChb__2[i].checked = true;
                }
                else{
                    oRankChb__2[i].checked = false;
                }
            }
        }
        var oheaderChb__3 = document.getElementById('headerChb__3');
        oheaderChb__3.onclick = rankChbFnd__3;
        function rankChbFnd__3() {
            var oRankChb__3 = document.getElementsByName('rankChb__3');
            for(var i = 0; i < oRankChb__3.length; i++){
                if(oheaderChb__3.checked){
                    oRankChb__3[i].checked = true;
                }
                else{
                    oRankChb__3[i].checked = false;
                }
            }
        }
        //排行榜结束
        
        //排行榜试听开始
        	var oTrySong1 = document.getElementById('trySong1');
        	var oTrySong2 = document.getElementById('trySong2');
        	var oTrySong3 = document.getElementById('trySong3');
        	var oTrySong4 = document.getElementById('trySong4');
        	var oAudio_rank1 = document.getElementById('audio_rank1');
        	var oAudio_rank2 = document.getElementById('audio_rank2');
        	var oAudio_rank3 = document.getElementById('audio_rank3');
        	var oAudio_rank4 = document.getElementById('audio_rank4');
        	oTrySong1.onclick = function(){
        		layer.msg('聆听 他不愿  让你玩转不停！',{
        			icon:6
        		});
        		oAudio_rank1.autoplay = 'autoplay';
        	}
        	oTrySong2.onclick = function(){
        		layer.msg('聆听 要死要活 让你爽爆不停！',{
        			icon:6
        		});
        		oAudio_rank2.autoplay = 'autoplay';
        	}
        	oTrySong3.onclick = function(){
        		layer.msg('聆听 天后 让你你思绪巅峰！',{
        			icon:6
        		});
        		oAudio_rank3.autoplay = 'autoplay';
        	}
        	oTrySong4.onclick = function(){
        		layer.msg('聆听 我以为 让你性情高涨！',{
        			icon:6
        		});
        		oAudio_rank4.autoplay = 'autoplay';
        	}
        //排行榜试听结束
        	
    	//排行榜播放开始
    	var oRank_play1 = document.getElementById('rank_play1');
    	var oRank_play2 = document.getElementById('rank_play2');
    	var oRank_play3 = document.getElementById('rank_play3');
    	var oRank_play4 = document.getElementById('rank_play4');
    	var oCommentTxtArea = document.getElementById('commentTxtArea');
    	oRank_play1.onclick = function(){
    		setTimeout(function(){
    			window.open('audio/audioTry1.html');
    		},500)
    		oCommentTxtArea.innerHTML = '亲爱的！如果您想对"他不愿"这首歌曲说点什么，请在此写上您的评论哦！';
    	}
    	 	
    	oRank_play2.onclick = function(){
    		setTimeout(function(){
    			window.open('audio/audioTry2.html');
    		},500)
    		oCommentTxtArea.innerHTML = '亲爱的！如果您想对"要死要活"这首歌曲说点什么，请在此写上您的评论哦！';
    	}   	
    	
    	oRank_play3.onclick = function(){
    		setTimeout(function(){
    			window.open('audio/audioTry3.html');
    		},500)
    		oCommentTxtArea.innerHTML = '亲爱的！如果您想对"天后"这首歌曲说点什么，请在此写上您的评论哦！';
    	}
    	oRank_play4.onclick = function(){
    		setTimeout(function(){
    			window.open('audio/audioTry4.html');
    		},500)
    		oCommentTxtArea.innerHTML = '亲爱的！如果您想对"我以为"这首歌曲说点什么，请在此写上您的评论哦！';
    	}
    	//排行榜播放结束
        
      //查看歌曲详情开始
        var oMoveWheel = document.getElementById('moveWheel');
        var oLookMsg_rightBox = document.getElementById('lookMsg_rightBox');
        var oLookMsg = document.getElementById('lookMsg');
        var oLookMsg_txt = document.getElementById('lookMsg_txt');
        oMoveWheel.onmousedown = function (ev) {
            var oEvent = ev || event;
            if(oEvent.preventDefault){
                oEvent.preventDefault();
            }
            else{
                oEvent.returnValue = false;
            }
            var disY = oEvent.clientY - oMoveWheel.offsetTop;
            document.onmousemove = function (ev) {
                var oEvent = ev || event;
                var wheelTop = oEvent.clientY - disY;
                if(wheelTop <= 0){
                    wheelTop = 0;
                }
                if(wheelTop >= oLookMsg_rightBox.clientHeight - oMoveWheel.clientHeight){
                    wheelTop = oLookMsg_rightBox.clientHeight - oMoveWheel.clientHeight;
                }
                var scale = wheelTop / (oLookMsg_rightBox.clientHeight - oMoveWheel.clientHeight);
                var cony = scale * (oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                oMoveWheel.style.top = wheelTop + 'px';
                oLookMsg_txt.style.top = -cony + 'px';
            }
            document.onmouseup = function () {
                document.onmousemove = null;
            }
        }

        //滚轮开始
        if(window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
            oLookMsg.addEventListener('DOMMouseScroll',function (ev) {
                var oEvent = ev || event;
                oEvent.preventDefault();
                if(oEvent.detail < 0){
                    var top = oLookMsg_txt.offsetTop + 20;
                    if(top >= 0){
                        top = 0;
                    }
                    if(top <= -(oLookMsg_txt.clientHeight - oLookMsg.clientHeight)){
                        top = -(oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                    }
                    var scale = top / (oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                    var cony = scale * (oLookMsg_rightBox.clientHeight - oMoveWheel.clientHeight);
                    oMoveWheel.style.top = -cony + 'px';
                    oLookMsg_txt.style.top = top + 'px';
                }
                if(oEvent.detail > 0){
                    var top = oLookMsg_txt.offsetTop - 20;
                    if(top >= 0){
                        top = 0;
                    }
                    if(top <= -(oLookMsg_txt.clientHeight - oLookMsg.clientHeight)){
                        top = -(oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                    }
                    var scale = top / (oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                    var cony = scale * (oLookMsg_rightBox.clientHeight - oMoveWheel.clientHeight);
                    oMoveWheel.style.top = -cony + 'px';
                    oLookMsg_txt.style.top = top + 'px';
                }
            },false)
        }
        else{
            oLookMsg.onmousewheel = function (ev) {
                var oEvent = ev || event;
                if(oEvent.preventDefault){
                    oEvent.preventDefault();
                }
                else{
                    oEvent.returnValue = false;
                }
                if(oEvent.wheelDelta < 0){
                    var top = oLookMsg_txt.offsetTop + 20;
                    if(top >= 0){
                        top = 0;
                    }
                    if(top <= -(oLookMsg_txt.clientHeight - oLookMsg.clientHeight)){
                        top = -(oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                    }
                    var scale = top / (oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                    var cony = scale * (oLookMsg_rightBox.clientHeight - oMoveWheel.clientHeight);
                    oMoveWheel.style.top = -cony + 'px';
                    oLookMsg_txt.style.top = top + 'px';
                }
                if(oEvent.wheelDelta > 0){
                    var top = oLookMsg_txt.offsetTop - 20;
                    if(top >= 0){
                        top = 0;
                    }
                    if(top <= -(oLookMsg_txt.clientHeight - oLookMsg.clientHeight)){
                        top = -(oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                    }
                    var scale = top / (oLookMsg_txt.clientHeight - oLookMsg.clientHeight);
                    var cony = scale * (oLookMsg_rightBox.clientHeight - oMoveWheel.clientHeight);
                    oMoveWheel.style.top = -cony + 'px';
                    oLookMsg_txt.style.top = top + 'px';
                }
            }
        }
        //查看歌曲详情结束
        
      //表情开始
        var oFace = document.getElementById('face');
        var overrideFace = document.getElementById('overrideFace');
        var oFaceNumber = document.getElementById('faceNumber');
        oFace.onmouseover = function (ev) {
            overrideFace.style.display = 'block';
            oFaceNumber.style.display = 'block';
        }
        overrideFace.onmouseover = oFaceNumber.onmouseover = function (ev) {
            clearTimeout(faceTimer);
        }
        oFace.onmouseout = overrideFace.onmouseout = oFaceNumber.onmouseout = function (ev) {
            faceTimer = setTimeout(function () {
                overrideFace.style.display = 'none';
                oFaceNumber.style.display = 'none';
            },500)
        }
        //表情结束

        //置顶操作开始
        var oScrollTop = document.getElementById('scrollTop');
        window.onscroll = function (ev) {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            if(top > 100){
                oScrollTop.style.display = 'block';
            }
        }
        //置顶操作结束

        //在网页打开的时候就创建一个验证码编码
        createCode();

        //歌手面板中的3D旋转图开始
        var o3D_play = document.getElementById('3D_play');
        var o3D_play_div = o3D_play.getElementsByTagName('div');
        var oImg = o3D_play.getElementsByTagName('img');

        for(var i = 0; i < oImg.length; i++){
            oImg[i].index = i;
            oImg[i].onmouseover = function () {
                for(var i = 0; i < oImg.length; i++){
                    oImg[i].style.opacity = 1;
                    oImg[i].style.filter = 'alpha(opacity='+100+')';
                    oImg[i].style.transition = '';
                    o3D_play_div[i].style.display = 'none';
                    o3D_play_div[i].style.animation = '';
                }
                    this.style.opacity = 0.5;
                    this.style.filter = 'alpha(opacity='+50+')';
                    this.style.transition = 'opacity 1s linear 0s';
                    o3D_play_div[this.index].style.display = 'block';
                    o3D_play_div[this.index].style.animation =
                        'moveSun_3D_play 5s linear 0s infinite alternate';
            }
        }
        //歌手面板中的3D旋转图结束

        //系统留言开始
        var oLan_area = document.getElementById('lan_area');
        oLan_area.onkeydown = function (ev) {
            var oEvent = ev || event;
            if(oEvent.keyCode == 13){
                oEvent.preventDefault();
                if(oLan_area.value.length == 0){
                    layer.alert('不能发送空留言信息，请重新输入！',{
                        title:'提示',
                        icon:5
                    });
                }
                else{
                    send_lan();
                    layer.msg('发送成功！',{               	
                    })
                    setTimeout(function(){
                    	oMyLanguageForm.submit();
                    },2000)
                    //......后台
                }
            }
        }
        var oSub_language = document.getElementById('sub_language');
        var oMyLanguageForm = document.getElementById('myLanguageForm');      
        oSub_language.onclick = function () {
            if(oLan_area.value.length == 0){
                layer.alert('不能发送空留言信息，请重新输入！',{
                    title:'提示',
                    icon:5
                });
            }
            else {
                send_lan();
                layer.msg('发送成功！',{               	
                })
                setTimeout(function(){
                	oMyLanguageForm.submit();
                },2000)
            }
        }
        //系统留言结束

        //登录界面的表单事件开始
        var oTxtUserName = document.getElementById('txtUserName');
        var oTxtPwd = document.getElementById('txtPwd');
        var oMyLoginForm = document.getElementById('myLoginForm');
        var oLoginState = document.getElementById('loginState');
        var oTxtUserName = document.getElementById('txtUserName');
        var oAlterMsg_txt = document.getElementById('alterMsg_txt');
        var oTxtPwd = document.getElementById('txtPwd');
        var oAlterMsg_pwd = document.getElementById('alterMsg_pwd');
        oTxtUserName.onfocus = function (ev) {
            oTxtUserName.placeholder = '';
            oTxtUserName.select();
        }
        oTxtUserName.onblur = function (ev) {
            oTxtUserName.placeholder = '请输入用户名';
        }
        oTxtPwd.onfocus = function (ev) {
            oTxtPwd.placeholder = '';
            oTxtPwd.select();
        }
        oTxtPwd.onblur = function (ev) {
            oTxtPwd.placeholder = '请输入密码';
        }
        oTxtUserName.onkeydown = oTxtPwd.onkeydown = function (ev) {
            var oEvent = ev || event;
            if(oEvent.keyCode == 13){
                if(oTxtUserName.value == '' || oTxtPwd.value == ''){
                    layer.alert('用户名/密码不能为空！',{
                        title:'提示',
                        icon:2
                    });
                }
                else{
                	layer.msg('登录中......');
                	setTimeout(function(){
                		oMyLoginForm.submit();
                		layer.alert('登录成功！',{
                			title:'提示',
                			icon:1
                		})
                	},2000)   
                	oLoginState.innerHTML = '已登录';
                	oAlterMsg_txt.value = oTxtUserName.value;
                	oAlterMsg_pwd.value = oTxtPwd.value;
                }
            }
            else{
            	
            }
        }
        //登录界面的表单事件结束

        //定义一个数组接收所有class选择器的元素，为了获取class选择器
        function getClass(oParent,sClass) {
            var arr = [];
            var oEle = oParent.getElementsByTagName('*');
            for(var i = 0; i < oEle.length; i++){
                if(oEle[i].className == sClass){
                    arr.push(oEle[i]);
                }
            }
            return arr;
        }

        //淡入开始
        function fadeIn(obj) {
            var value = 0;
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var speed = 5;
                speed = speed > 0 ? Math.floor(speed): Math.ceil(speed);
                if(value == 100){
                    clearInterval(obj.timer);
                }
                else{
                    value += speed;
                    obj.style.opacity = value/100;
                    obj.style.filter = 'alpha(opacity='+value+')';
                }
            },30)
        }

        //淡出开始
        function fadeOut(obj) {
            var value = 100;
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var speed = -5;
                speed = speed > 0 ? Math.floor(speed): Math.ceil(speed);
                if(value == 0){
                    clearInterval(obj.timer);
                }
                else{
                    value += speed;
                    obj.style.opacity = value/100;
                    obj.style.filter = 'alpha(opacity='+value+')';
                }
            },30)
        }

            //热门推荐开始
            var oUl2 = document.getElementById('ul_language');
            var ali3 = oUl2.getElementsByTagName('li');
            var oRec_txt = document.getElementById('rec_txt');
            var oUl3 = oRec_txt.getElementsByTagName('ul');

            var oPlay_mark = getClass(document,'play_mark')[0];
            var oDiv1 = getClass(oPlay_mark,'div1')[0];
            var oDiv2 = getClass(oPlay_mark,'div2')[0];
            var oRecord1 = document.getElementById('record1');

            function record_Num() {
                var oRecord_number = document.getElementById('record_number');
                oRecord_number.innerHTML = oRecord_number.innerHTML * 1 + 1;
            }
            function record_Num1() {
                var oRecord_number1 = document.getElementById('record_number2');
                oRecord_number1.innerHTML = oRecord_number1.innerHTML * 1 + 1;
            }
            function record_Num2() {
                var oRecord_number2 = document.getElementById('record_number3');
                oRecord_number2.innerHTML = oRecord_number2.innerHTML * 1 + 1;
            }
            function record_Num3() {
                var oRecord_number3 = document.getElementById('record_number4');
                oRecord_number3.innerHTML = oRecord_number3.innerHTML * 1 + 1;
            }
            function record_Num4() {
                var oRecord_number4 = document.getElementById('record_number5');
                oRecord_number4.innerHTML = oRecord_number4.innerHTML * 1 + 1;
            }
            function record_Num5() {
                var oRecord_number5 = document.getElementById('record_number6');
                oRecord_number5.innerHTML = oRecord_number5.innerHTML * 1 + 1;
            }
            function record_Num6() {
                var oRecord_number6 = document.getElementById('record_number7');
                oRecord_number6.innerHTML = oRecord_number6.innerHTML * 1 + 1;
            }
            function record_Num7() {
                var oRecord_number7 = document.getElementById('record_number8');
                oRecord_number7.innerHTML = oRecord_number7.innerHTML * 1 + 1;
            }
            function record_Num8() {
                var oRecord_number8 = document.getElementById('record_number9');
                oRecord_number8.innerHTML = oRecord_number8.innerHTML * 1 + 1;
            }
            function record_Num9() {
                var oRecord_number9 = document.getElementById('record_number10');
                oRecord_number9.innerHTML = oRecord_number9.innerHTML * 1 + 1;
            }
            function record_Num10() {
                var oRecord_number10 = document.getElementById('record_number11');
                oRecord_number10.innerHTML = oRecord_number10.innerHTML * 1 + 1;
            }
            function record_Num11() {
                var oRecord_number11 = document.getElementById('record_number12');
                oRecord_number11.innerHTML = oRecord_number11.innerHTML * 1 + 1;
            }
            function record_Num12() {
                var oRecord_number12 = document.getElementById('record_number13');
                oRecord_number12.innerHTML = oRecord_number12.innerHTML * 1 + 1;
            }
            function record_Num13() {
                var oRecord_number13 = document.getElementById('record_number14');
                oRecord_number13.innerHTML = oRecord_number13.innerHTML * 1 + 1;
            }function record_Num14() {
                var oRecord_number14 = document.getElementById('record_number15');
                oRecord_number14.innerHTML = oRecord_number14.innerHTML * 1 + 1;
            }
            function record_Num15() {
                var oRecord_number15 = document.getElementById('record_number16');
                oRecord_number15.innerHTML = oRecord_number15.innerHTML * 1 + 1;
            }
            function record_Num16() {
                var oRecord_number16 = document.getElementById('record_number17');
                oRecord_number16.innerHTML = oRecord_number16.innerHTML * 1 + 1;
            }
            function record_Num17() {
                var oRecord_number17 = document.getElementById('record_number18');
                oRecord_number17.innerHTML = oRecord_number17.innerHTML * 1 + 1;
            }
            function record_Num18() {
                var oRecord_number18 = document.getElementById('record_number19');
                oRecord_number18.innerHTML = oRecord_number18.innerHTML * 1 + 1;
            }
            function record_Num19() {
                var oRecord_number19 = document.getElementById('record_number20');
                oRecord_number19.innerHTML = oRecord_number19.innerHTML * 1 + 1;
            }
            function record_Num20() {
                var oRecord_number20 = document.getElementById('record_number21');
                oRecord_number20.innerHTML = oRecord_number20.innerHTML * 1 + 1;
            }
            function record_Num21() {
                var oRecord_number21 = document.getElementById('record_number22');
                oRecord_number21.innerHTML = oRecord_number21.innerHTML * 1 + 1;
            }
            function record_Num22() {
                var oRecord_number22 = document.getElementById('record_number23');
                oRecord_number22.innerHTML = oRecord_number22.innerHTML * 1 + 1;
            }
            function record_Num23() {
                var oRecord_number23 = document.getElementById('record_number24');
                oRecord_number23.innerHTML = oRecord_number23.innerHTML * 1 + 1;
            }
            function record_Num24() {
                var oRecord_number24 = document.getElementById('record_number25');
                oRecord_number24.innerHTML = oRecord_number24.innerHTML * 1 + 1;
            }
            function record_Num25() {
                var oRecord_number25 = document.getElementById('record_number26');
                oRecord_number25.innerHTML = oRecord_number25.innerHTML * 1 + 1;
            }
            function record_Num26() {
                var oRecord_number26 = document.getElementById('record_number27');
                oRecord_number26.innerHTML = oRecord_number26.innerHTML * 1 + 1;
            }
            function record_Num27() {
                var oRecord_number27 = document.getElementById('record_number28');
                oRecord_number27.innerHTML = oRecord_number27.innerHTML * 1 + 1;
            }
            function record_Num28() {
                var oRecord_number28 = document.getElementById('record_number29');
                oRecord_number28.innerHTML = oRecord_number28.innerHTML * 1 + 1;
            }
            function record_Num29() {
                var oRecord_number29 = document.getElementById('record_number30');
                oRecord_number29.innerHTML = oRecord_number29.innerHTML * 1 + 1;
            }
            function record_Num30() {
                var oRecord_number30 = document.getElementById('record_number31');
                oRecord_number30.innerHTML = oRecord_number30.innerHTML * 1 + 1;
            }
            function record_Num31() {
                var oRecord_number31 = document.getElementById('record_number32');
                oRecord_number31.innerHTML = oRecord_number31.innerHTML * 1 + 1;
            }


            oPlay_mark.onmouseover = oRecord1.onmouseover = function () {
                oDiv1.style.display = 'block';
                oPlay_mark.style.background = '#333';
                oPlay_mark.style.opacity = 0.8;
                oRecord1.style.display = 'block';
            }
            oPlay_mark.onmouseout = function () {
                oDiv1.style.display = 'none';
                oPlay_mark.style.background = '';
                oRecord1.style.display = 'none';
            }
            oDiv1.onclick = function () {
                oDiv1.style.display = 'none';
                oDiv2.style.display = 'block';
                record_Num();
                setTimeout(function () {
                    window.open('audio/audioDemo1.html');
                },500)
            }
            oDiv2.onclick = function () {
                oDiv2.style.display = 'none';
                oDiv1.style.display = 'block';
            }

            var oPlay_mark2 = getClass(document,'play_mark2')[0];
            var oDiv3 = getClass(oPlay_mark2,'div1')[0];
            var oDiv4 = getClass(oPlay_mark2,'div2')[0];
            var oRecord2 = document.getElementById('record2');

            oPlay_mark2.onmouseover = oRecord2.onmouseover = function () {
                oDiv3.style.display = 'block';
                oPlay_mark2.style.background = '#333';
                oPlay_mark2.style.opacity = 0.8;
                oRecord2.style.display = 'block';
            }
            oPlay_mark2.onmouseout = function () {
                oDiv3.style.display = 'none';
                oPlay_mark2.style.background = '';
                oRecord2.style.display = 'none';
            }
            oDiv3.onclick = function () {
                oDiv3.style.display = 'none';
                oDiv4.style.display = 'block';
                record_Num1();
                setTimeout(function () {
                    window.open('audio/audioDemo2.html');
                },500)
            }
            oDiv4.onclick = function () {
                oDiv4.style.display = 'none';
                oDiv3.style.display = 'block';
            }

            var oPlay_mark3 = getClass(document,'play_mark3')[0];
            var oDiv5 = getClass(oPlay_mark3,'div1')[0];
            var oDiv6 = getClass(oPlay_mark3,'div2')[0];
            var oRecord3 = document.getElementById('record3');

            oPlay_mark3.onmouseover = oRecord3.onmouseover = function () {
                oDiv5.style.display = 'block';
                oPlay_mark3.style.background = '#333';
                oPlay_mark3.style.opacity = 0.8;
                oRecord3.style.display = 'block';
            }
            oPlay_mark3.onmouseout = function () {
                oDiv5.style.display = 'none';
                oPlay_mark3.style.background = '';
                oRecord3.style.display = 'none';
            }
            oDiv5.onclick = function () {
                oDiv5.style.display = 'none';
                oDiv6.style.display = 'block';
                record_Num2();
                setTimeout(function () {
                    window.open('audio/audioDemo3.html');
                },500)
            }
            oDiv6.onclick = function () {
                oDiv6.style.display = 'none';
                oDiv5.style.display = 'block';
            }

            var oPlay_mark4 = getClass(document,'play_mark4')[0];
            var oDiv7 = getClass(oPlay_mark4,'div1')[0];
            var oDiv8 = getClass(oPlay_mark4,'div2')[0];
            var oRecord4 = document.getElementById('record4');

            oPlay_mark4.onmouseover = oRecord4.onmouseover = function () {
                oDiv7.style.display = 'block';
                oPlay_mark4.style.background = '#333';
                oPlay_mark4.style.opacity = 0.8;
                oRecord4.style.display = 'block';
            }
            oPlay_mark4.onmouseout = function () {
                oDiv7.style.display = 'none';
                oPlay_mark4.style.background = '';
                oRecord4.style.display = 'none';
            }
            oDiv7.onclick = function () {
                oDiv7.style.display = 'none';
                oDiv8.style.display = 'block';
                record_Num3();
                setTimeout(function () {
                    window.open('audio/audioDemo4.html');
                },500)
            }
            oDiv8.onclick = function () {
                oDiv8.style.display = 'none';
                oDiv7.style.display = 'block';
            }

            var oPlay_mark5 = getClass(document,'play_mark5')[0];
            var oDiv9 = getClass(oPlay_mark5,'div1')[0];
            var oDiv10 = getClass(oPlay_mark5,'div2')[0];
            var oRecord5 = document.getElementById('record5');

            oPlay_mark5.onmouseover = oRecord5.onmouseover = function () {
                oDiv9.style.display = 'block';
                oPlay_mark5.style.background = '#333';
                oPlay_mark5.style.opacity = 0.8;
                oRecord5.style.display = 'block';
            }
            oPlay_mark5.onmouseout = function () {
                oDiv9.style.display = 'none';
                oPlay_mark5.style.background = '';
                oRecord5.style.display = 'none';
            }
            oDiv9.onclick = function () {
                oDiv9.style.display = 'none';
                oDiv10.style.display = 'block';
                record_Num4();
                setTimeout(function () {
                    window.open('audio/audioDemo5.html');
                },500)
            }
            oDiv10.onclick = function () {
                oDiv10.style.display = 'none';
                oDiv9.style.display = 'block';
            }

            var oPlay_mark6 = getClass(document,'play_mark6')[0];
            var oDiv11 = getClass(oPlay_mark6,'div1')[0];
            var oDiv12 = getClass(oPlay_mark6,'div2')[0];
            var oRecord6 = document.getElementById('record6');

            oPlay_mark6.onmouseover = oRecord6.onmouseover = function () {
                oDiv11.style.display = 'block';
                oPlay_mark6.style.background = '#333';
                oPlay_mark6.style.opacity = 0.8;
                oRecord6.style.display = 'block';
            }
            oPlay_mark6.onmouseout = function () {
                oDiv11.style.display = 'none';
                oPlay_mark6.style.background = '';
                oRecord6.style.display = 'none';
            }
            oDiv11.onclick = function () {
                oDiv11.style.display = 'none';
                oDiv12.style.display = 'block';
                record_Num5();
                setTimeout(function () {
                    window.open('audio/audioDemo6.html');
                },500)
            }
            oDiv12.onclick = function () {
                oDiv12.style.display = 'none';
                oDiv11.style.display = 'block';
            }

            var oPlay_mark7 = getClass(document,'play_mark7')[0];
            var oDiv13 = getClass(oPlay_mark7,'div1')[0];
            var oDiv14 = getClass(oPlay_mark7,'div2')[0];
            var oRecord7 = document.getElementById('record7');

            oPlay_mark7.onmouseover = oRecord7.onmouseover = function () {
                oDiv13.style.display = 'block';
                oPlay_mark7.style.background = '#333';
                oPlay_mark7.style.opacity = 0.8;
                oRecord7.style.display = 'block';
            }
            oPlay_mark7.onmouseout = function () {
                oDiv13.style.display = 'none';
                oPlay_mark7.style.background = '';
                oRecord7.style.display = 'none';
            }
            oDiv13.onclick = function () {
                oDiv13.style.display = 'none';
                oDiv14.style.display = 'block';
                record_Num6();
                setTimeout(function () {
                    window.open('audio/audioDemo7.html');
                },500)
            }
            oDiv14.onclick = function () {
                oDiv14.style.display = 'none';
                oDiv13.style.display = 'block';
            }

            var oPlay_mark8 = getClass(document,'play_mark8')[0];
            var oDiv15 = getClass(oPlay_mark8,'div1')[0];
            var oDiv16 = getClass(oPlay_mark8,'div2')[0];
            var oRecord8 = document.getElementById('record8');

            oPlay_mark8.onmouseover = oRecord8.onmouseover = function () {
                oDiv15.style.display = 'block';
                oPlay_mark8.style.background = '#333';
                oPlay_mark8.style.opacity = 0.8;
                oRecord8.style.display = 'block';
            }
            oPlay_mark8.onmouseout = function () {
                oDiv15.style.display = 'none';
                oPlay_mark8.style.background = '';
                oRecord8.style.display = 'none';
            }
            oDiv15.onclick = function () {
                oDiv15.style.display = 'none';
                oDiv16.style.display = 'block';
                record_Num7();
                setTimeout(function () {
                    window.open('audio/audioDemo8.html');
                },500)
            }
            oDiv16.onclick = function () {
                oDiv16.style.display = 'none';
                oDiv15.style.display = 'block';
            }

            var oPlay_mark9 = getClass(document,'play_mark9')[0];
            var oDiv17 = getClass(oPlay_mark9,'div1')[0];
            var oDiv18 = getClass(oPlay_mark9,'div2')[0];
            var oRecord9 = document.getElementById('record9');

            oPlay_mark9.onmouseover = oRecord9.onmouseover = function () {
                oDiv17.style.display = 'block';
                oPlay_mark9.style.background = '#333';
                oPlay_mark9.style.opacity = 0.8;
                oRecord9.style.display = 'block';
            }
            oPlay_mark9.onmouseout = function () {
                oDiv17.style.display = 'none';
                oPlay_mark9.style.background = '';
                oRecord9.style.display = 'none';
            }
            oDiv17.onclick = function () {
                oDiv17.style.display = 'none';
                oDiv18.style.display = 'block';
                record_Num8();
            }
            oDiv18.onclick = function () {
                oDiv18.style.display = 'none';
                oDiv17.style.display = 'block';
            }

            var oPlay_mark10 = getClass(document,'play_mark10')[0];
            var oDiv19 = getClass(oPlay_mark10,'div1')[0];
            var oDiv20 = getClass(oPlay_mark10,'div2')[0];
            var oRecord10 = document.getElementById('record10');

            oPlay_mark10.onmouseover = oRecord10.onmouseover = function () {
                oDiv19.style.display = 'block';
                oPlay_mark10.style.background = '#333';
                oPlay_mark10.style.opacity = 0.8;
                oRecord10.style.display = 'block';
            }
            oPlay_mark10.onmouseout = function () {
                oDiv19.style.display = 'none';
                oPlay_mark10.style.background = '';
                oRecord10.style.display = 'none';
            }
            oDiv19.onclick = function () {
                oDiv19.style.display = 'none';
                oDiv20.style.display = 'block';
                record_Num9();
            }
            oDiv20.onclick = function () {
                oDiv20.style.display = 'none';
                oDiv19.style.display = 'block';
            }

            var oPlay_mark11 = getClass(document,'play_mark11')[0];
            var oDiv21 = getClass(oPlay_mark11,'div1')[0];
            var oDiv22 = getClass(oPlay_mark11,'div2')[0];
            var oRecord11 = document.getElementById('record11');

            oPlay_mark11.onmouseover = oRecord11.onmouseover = function () {
                oDiv21.style.display = 'block';
                oPlay_mark11.style.background = '#333';
                oPlay_mark11.style.opacity = 0.8;
                oRecord11.style.display = 'block';
            }
            oPlay_mark11.onmouseout = function () {
                oDiv21.style.display = 'none';
                oPlay_mark11.style.background = '';
                oRecord11.style.display = 'none';
            }
            oDiv21.onclick = function () {
                oDiv21.style.display = 'none';
                oDiv22.style.display = 'block';
                record_Num10();
            }
            oDiv22.onclick = function () {
                oDiv22.style.display = 'none';
                oDiv21.style.display = 'block';
            }

            var oPlay_mark12 = getClass(document,'play_mark12')[0];
            var oDiv23 = getClass(oPlay_mark12,'div1')[0];
            var oDiv24 = getClass(oPlay_mark12,'div2')[0];
            var oRecord12 = document.getElementById('record12');

            oPlay_mark12.onmouseover = oRecord12.onmouseover = function () {
                oDiv23.style.display = 'block';
                oPlay_mark12.style.background = '#333';
                oPlay_mark12.style.opacity = 0.8;
                oRecord12.style.display = 'block';
            }
            oPlay_mark12.onmouseout = function () {
                oDiv23.style.display = 'none';
                oPlay_mark12.style.background = '';
                oRecord12.style.display = 'none';
            }
            oDiv23.onclick = function () {
                oDiv23.style.display = 'none';
                oDiv24.style.display = 'block';
                record_Num11();
            }
            oDiv24.onclick = function () {
                oDiv24.style.display = 'none';
                oDiv23.style.display = 'block';
            }

            var oPlay_mark13 = getClass(document,'play_mark13')[0];
            var oDiv25 = getClass(oPlay_mark13,'div1')[0];
            var oDiv26 = getClass(oPlay_mark13,'div2')[0];
            var oRecord13 = document.getElementById('record13');

            oPlay_mark13.onmouseover = oRecord13.onmouseover = function () {
                oDiv25.style.display = 'block';
                oPlay_mark13.style.background = '#333';
                oPlay_mark13.style.opacity = 0.8;
                oRecord13.style.display = 'block';
            }
            oPlay_mark13.onmouseout = function () {
                oDiv25.style.display = 'none';
                oPlay_mark13.style.background = '';
                oRecord13.style.display = 'none';
            }
            oDiv25.onclick = function () {
                oDiv25.style.display = 'none';
                oDiv26.style.display = 'block';
                record_Num12();
            }
            oDiv26.onclick = function () {
                oDiv26.style.display = 'none';
                oDiv25.style.display = 'block';
            }

            var oPlay_mark14 = getClass(document,'play_mark14')[0];
            var oDiv27 = getClass(oPlay_mark14,'div1')[0];
            var oDiv28 = getClass(oPlay_mark14,'div2')[0];
            var oRecord14 = document.getElementById('record14');

            oPlay_mark14.onmouseover = oRecord14.onmouseover = function () {
                oDiv27.style.display = 'block';
                oPlay_mark14.style.background = '#333';
                oPlay_mark14.style.opacity = 0.8;
                oRecord14.style.display = 'block';
            }
            oPlay_mark14.onmouseout = function () {
                oDiv27.style.display = 'none';
                oPlay_mark14.style.background = '';
                oRecord14.style.display = 'none';
            }
            oDiv27.onclick = function () {
                oDiv27.style.display = 'none';
                oDiv28.style.display = 'block';
                record_Num13();
            }
            oDiv28.onclick = function () {
                oDiv28.style.display = 'none';
                oDiv27.style.display = 'block';
            }

            var oPlay_mark15 = getClass(document,'play_mark15')[0];
            var oDiv29 = getClass(oPlay_mark15,'div1')[0];
            var oDiv30 = getClass(oPlay_mark15,'div2')[0];
            var oRecord15 = document.getElementById('record15');

            oPlay_mark15.onmouseover = oRecord15.onmouseover = function () {
                oDiv29.style.display = 'block';
                oPlay_mark15.style.background = '#333';
                oPlay_mark15.style.opacity = 0.8;
                oRecord15.style.display = 'block';
            }
            oPlay_mark15.onmouseout = function () {
                oDiv29.style.display = 'none';
                oPlay_mark15.style.background = '';
                oRecord15.style.display = 'none';
            }
            oDiv29.onclick = function () {
                oDiv29.style.display = 'none';
                oDiv30.style.display = 'block';
                record_Num14();
            }
            oDiv30.onclick = function () {
                oDiv30.style.display = 'none';
                oDiv29.style.display = 'block';
            }

            var oPlay_mark16 = getClass(document,'play_mark16')[0];
            var oDiv31 = getClass(oPlay_mark16,'div1')[0];
            var oDiv32 = getClass(oPlay_mark16,'div2')[0];
            var oRecord16 = document.getElementById('record16');

            oPlay_mark16.onmouseover = oRecord16.onmouseover = function () {
                oDiv31.style.display = 'block';
                oPlay_mark16.style.background = '#333';
                oPlay_mark16.style.opacity = 0.8;
                oRecord16.style.display = 'block';
            }
            oPlay_mark16.onmouseout = function () {
                oDiv31.style.display = 'none';
                oPlay_mark16.style.background = '';
                oRecord16.style.display = 'none';
            }
            oDiv31.onclick = function () {
                oDiv31.style.display = 'none';
                oDiv32.style.display = 'block';
                record_Num15();
            }
            oDiv32.onclick = function () {
                oDiv32.style.display = 'none';
                oDiv31.style.display = 'block';
            }

            var oPlay_mark17 = getClass(document,'play_mark17')[0];
            var oDiv33 = getClass(oPlay_mark17,'div1')[0];
            var oDiv34 = getClass(oPlay_mark17,'div2')[0];
            var oRecord17 = document.getElementById('record17');

            oPlay_mark17.onmouseover = oRecord17.onmouseover = function () {
                oDiv33.style.display = 'block';
                oPlay_mark17.style.background = '#333';
                oPlay_mark17.style.opacity = 0.8;
                oRecord17.style.display = 'block';
            }
            oPlay_mark17.onmouseout = function () {
                oDiv33.style.display = 'none';
                oPlay_mark17.style.background = '';
                oRecord17.style.display = 'none';
            }
            oDiv33.onclick = function () {
                oDiv33.style.display = 'none';
                oDiv34.style.display = 'block';
                record_Num16();
            }
            oDiv34.onclick = function () {
                oDiv34.style.display = 'none';
                oDiv33.style.display = 'block';
            }

            var oPlay_mark18 = getClass(document,'play_mark18')[0];
            var oDiv35 = getClass(oPlay_mark18,'div1')[0];
            var oDiv36 = getClass(oPlay_mark18,'div2')[0];
            var oRecord18 = document.getElementById('record18');

            oPlay_mark18.onmouseover = oRecord18.onmouseover = function () {
                oDiv35.style.display = 'block';
                oPlay_mark18.style.background = '#333';
                oPlay_mark18.style.opacity = 0.8;
                oRecord18.style.display = 'block';
            }
            oPlay_mark18.onmouseout = function () {
                oDiv35.style.display = 'none';
                oPlay_mark18.style.background = '';
                oRecord18.style.display = 'none';
            }
            oDiv35.onclick = function () {
                oDiv35.style.display = 'none';
                oDiv36.style.display = 'block';
                record_Num17();
            }
            oDiv36.onclick = function () {
                oDiv36.style.display = 'none';
                oDiv35.style.display = 'block';
            }

            var oPlay_mark19 = getClass(document,'play_mark19')[0];
            var oDiv37 = getClass(oPlay_mark19,'div1')[0];
            var oDiv38 = getClass(oPlay_mark19,'div2')[0];
            var oRecord19 = document.getElementById('record19');

            oPlay_mark19.onmouseover = oRecord19.onmouseover = function () {
                oDiv37.style.display = 'block';
                oPlay_mark19.style.background = '#333';
                oPlay_mark19.style.opacity = 0.8;
                oRecord19.style.display = 'block';
            }
            oPlay_mark19.onmouseout = function () {
                oDiv37.style.display = 'none';
                oPlay_mark19.style.background = '';
                oRecord19.style.display = 'none';
            }
            oDiv37.onclick = function () {
                oDiv37.style.display = 'none';
                oDiv38.style.display = 'block';
                record_Num18();
            }
            oDiv38.onclick = function () {
                oDiv38.style.display = 'none';
                oDiv37.style.display = 'block';
            }

            var oPlay_mark20 = getClass(document,'play_mark20')[0];
            var oDiv39 = getClass(oPlay_mark20,'div1')[0];
            var oDiv40 = getClass(oPlay_mark20,'div2')[0];
            var oRecord20 = document.getElementById('record20');

            oPlay_mark20.onmouseover = oRecord20.onmouseover = function () {
                oDiv39.style.display = 'block';
                oPlay_mark20.style.background = '#333';
                oPlay_mark20.style.opacity = 0.8;
                oRecord20.style.display = 'block';
            }
            oPlay_mark20.onmouseout = function () {
                oDiv39.style.display = 'none';
                oPlay_mark20.style.background = '';
                oRecord20.style.display = 'none';
            }
            oDiv39.onclick = function () {
                oDiv39.style.display = 'none';
                oDiv40.style.display = 'block';
                record_Num19();
            }
            oDiv40.onclick = function () {
                oDiv40.style.display = 'none';
                oDiv39.style.display = 'block';
            }

            var oPlay_mark21 = getClass(document,'play_mark21')[0];
            var oDiv41 = getClass(oPlay_mark21,'div1')[0];
            var oDiv42 = getClass(oPlay_mark21,'div2')[0];
            var oRecord21 = document.getElementById('record21');

            oPlay_mark21.onmouseover = oRecord21.onmouseover = function () {
                oDiv41.style.display = 'block';
                oPlay_mark21.style.background = '#333';
                oPlay_mark21.style.opacity = 0.8;
                oRecord21.style.display = 'block';
            }
            oPlay_mark21.onmouseout = function () {
                oDiv41.style.display = 'none';
                oPlay_mark21.style.background = '';
                oRecord21.style.display = 'none';
            }
            oDiv41.onclick = function () {
                oDiv41.style.display = 'none';
                oDiv42.style.display = 'block';
                record_Num20();
            }
            oDiv42.onclick = function () {
                oDiv42.style.display = 'none';
                oDiv41.style.display = 'block';
            }

            var oPlay_mark22 = getClass(document,'play_mark22')[0];
            var oDiv43 = getClass(oPlay_mark22,'div1')[0];
            var oDiv44 = getClass(oPlay_mark22,'div2')[0];
            var oRecord22 = document.getElementById('record22');

            oPlay_mark22.onmouseover = oRecord22.onmouseover = function () {
                oDiv43.style.display = 'block';
                oPlay_mark22.style.background = '#333';
                oPlay_mark22.style.opacity = 0.8;
                oRecord22.style.display = 'block';
            }
            oPlay_mark22.onmouseout = function () {
                oDiv43.style.display = 'none';
                oPlay_mark22.style.background = '';
                oRecord22.style.display = 'none';
            }
            oDiv43.onclick = function () {
                oDiv43.style.display = 'none';
                oDiv44.style.display = 'block';
                record_Num21();
            }
            oDiv44.onclick = function () {
                oDiv44.style.display = 'none';
                oDiv43.style.display = 'block';
            }

            var oPlay_mark23 = getClass(document,'play_mark23')[0];
            var oDiv45 = getClass(oPlay_mark23,'div1')[0];
            var oDiv46 = getClass(oPlay_mark23,'div2')[0];
            var oRecord23 = document.getElementById('record23');

            oPlay_mark23.onmouseover = oRecord23.onmouseover = function () {
                oDiv45.style.display = 'block';
                oPlay_mark23.style.background = '#333';
                oPlay_mark23.style.opacity = 0.8;
                oRecord23.style.display = 'block';
            }
            oPlay_mark23.onmouseout = function () {
                oDiv45.style.display = 'none';
                oPlay_mark23.style.background = '';
                oRecord23.style.display = 'none';
            }
            oDiv45.onclick = function () {
                oDiv45.style.display = 'none';
                oDiv46.style.display = 'block';
                record_Num22();
            }
            oDiv46.onclick = function () {
                oDiv46.style.display = 'none';
                oDiv45.style.display = 'block';
            }

            var oPlay_mark24 = getClass(document,'play_mark24')[0];
            var oDiv47 = getClass(oPlay_mark24,'div1')[0];
            var oDiv48 = getClass(oPlay_mark24,'div2')[0];
            var oRecord24 = document.getElementById('record24');

            oPlay_mark24.onmouseover = oRecord24.onmouseover = function () {
                oDiv47.style.display = 'block';
                oPlay_mark24.style.background = '#333';
                oPlay_mark24.style.opacity = 0.8;
                oRecord24.style.display = 'block';
            }
            oPlay_mark24.onmouseout = function () {
                oDiv47.style.display = 'none';
                oPlay_mark24.style.background = '';
                oRecord24.style.display = 'none';
            }
            oDiv47.onclick = function () {
                oDiv47.style.display = 'none';
                oDiv48.style.display = 'block';
                record_Num23();
            }
            oDiv48.onclick = function () {
                oDiv48.style.display = 'none';
                oDiv47.style.display = 'block';
            }

            var oPlay_mark25 = getClass(document,'play_mark25')[0];
            var oDiv49 = getClass(oPlay_mark25,'div1')[0];
            var oDiv50 = getClass(oPlay_mark25,'div2')[0];
            var oRecord25 = document.getElementById('record25');

            oPlay_mark25.onmouseover = oRecord25.onmouseover = function () {
                oDiv49.style.display = 'block';
                oPlay_mark25.style.background = '#333';
                oPlay_mark25.style.opacity = 0.8;
                oRecord25.style.display = 'block';
            }
            oPlay_mark25.onmouseout = function () {
                oDiv49.style.display = 'none';
                oPlay_mark25.style.background = '';
                oRecord25.style.display = 'none';
            }
            oDiv49.onclick = function () {
                oDiv49.style.display = 'none';
                oDiv50.style.display = 'block';
                record_Num24();
            }
            oDiv50.onclick = function () {
                oDiv50.style.display = 'none';
                oDiv49.style.display = 'block';
            }

            var oPlay_mark26 = getClass(document,'play_mark26')[0];
            var oDiv51 = getClass(oPlay_mark26,'div1')[0];
            var oDiv52 = getClass(oPlay_mark26,'div2')[0];
            var oRecord26 = document.getElementById('record26');

            oPlay_mark26.onmouseover = oRecord26.onmouseover = function () {
                oDiv51.style.display = 'block';
                oPlay_mark26.style.background = '#333';
                oPlay_mark26.style.opacity = 0.8;
                oRecord26.style.display = 'block';
            }
            oPlay_mark26.onmouseout = function () {
                oDiv51.style.display = 'none';
                oPlay_mark26.style.background = '';
                oRecord26.style.display = 'none';
            }
            oDiv51.onclick = function () {
                oDiv51.style.display = 'none';
                oDiv52.style.display = 'block';
                record_Num25();
            }
            oDiv52.onclick = function () {
                oDiv52.style.display = 'none';
                oDiv51.style.display = 'block';
            }

            var oPlay_mark27 = getClass(document,'play_mark27')[0];
            var oDiv53 = getClass(oPlay_mark27,'div1')[0];
            var oDiv54 = getClass(oPlay_mark27,'div2')[0];
            var oRecord27 = document.getElementById('record27');

            oPlay_mark27.onmouseover = oRecord27.onmouseover = function () {
                oDiv53.style.display = 'block';
                oPlay_mark27.style.background = '#333';
                oPlay_mark27.style.opacity = 0.8;
                oRecord27.style.display = 'block';
            }
            oPlay_mark27.onmouseout = function () {
                oDiv53.style.display = 'none';
                oPlay_mark27.style.background = '';
                oRecord27.style.display = 'none';
            }
            oDiv53.onclick = function () {
                oDiv53.style.display = 'none';
                oDiv54.style.display = 'block';
                record_Num26();
            }
            oDiv54.onclick = function () {
                oDiv54.style.display = 'none';
                oDiv53.style.display = 'block';
            }

            var oPlay_mark28 = getClass(document,'play_mark28')[0];
            var oDiv55 = getClass(oPlay_mark28,'div1')[0];
            var oDiv56 = getClass(oPlay_mark28,'div2')[0];
            var oRecord28 = document.getElementById('record28');

            oPlay_mark28.onmouseover = oRecord28.onmouseover = function () {
                oDiv55.style.display = 'block';
                oPlay_mark28.style.background = '#333';
                oPlay_mark28.style.opacity = 0.8;
                oRecord28.style.display = 'block';
            }
            oPlay_mark28.onmouseout = function () {
                oDiv55.style.display = 'none';
                oPlay_mark28.style.background = '';
                oRecord28.style.display = 'none';
            }
            oDiv55.onclick = function () {
                oDiv55.style.display = 'none';
                oDiv56.style.display = 'block';
                record_Num27();
            }
            oDiv56.onclick = function () {
                oDiv56.style.display = 'none';
                oDiv55.style.display = 'block';
            }

            var oPlay_mark29 = getClass(document,'play_mark29')[0];
            var oDiv57 = getClass(oPlay_mark29,'div1')[0];
            var oDiv58 = getClass(oPlay_mark29,'div2')[0];
            var oRecord29 = document.getElementById('record29');

            oPlay_mark29.onmouseover = oRecord29.onmouseover = function () {
                oDiv57.style.display = 'block';
                oPlay_mark29.style.background = '#333';
                oPlay_mark29.style.opacity = 0.8;
                oRecord29.style.display = 'block';
            }
            oPlay_mark29.onmouseout = function () {
                oDiv57.style.display = 'none';
                oPlay_mark29.style.background = '';
                oRecord29.style.display = 'none';
            }
            oDiv57.onclick = function () {
                oDiv57.style.display = 'none';
                oDiv58.style.display = 'block';
                record_Num28();
            }
            oDiv58.onclick = function () {
                oDiv58.style.display = 'none';
                oDiv57.style.display = 'block';
            }

            var oPlay_mark30 = getClass(document,'play_mark30')[0];
            var oDiv59 = getClass(oPlay_mark30,'div1')[0];
            var oDiv60 = getClass(oPlay_mark30,'div2')[0];
            var oRecord30 = document.getElementById('record30');

            oPlay_mark30.onmouseover = oRecord30.onmouseover = function () {
                oDiv59.style.display = 'block';
                oPlay_mark30.style.background = '#333';
                oPlay_mark30.style.opacity = 0.8;
                oRecord30.style.display = 'block';
            }
            oPlay_mark30.onmouseout = function () {
                oDiv59.style.display = 'none';
                oPlay_mark30.style.background = '';
                oRecord30.style.display = 'none';
            }
            oDiv59.onclick = function () {
                oDiv59.style.display = 'none';
                oDiv60.style.display = 'block';
                record_Num29();
            }
            oDiv60.onclick = function () {
                oDiv60.style.display = 'none';
                oDiv59.style.display = 'block';
            }

            var oPlay_mark31 = getClass(document,'play_mark31')[0];
            var oDiv61 = getClass(oPlay_mark31,'div1')[0];
            var oDiv62 = getClass(oPlay_mark31,'div2')[0];
            var oRecord31 = document.getElementById('record31');

            oPlay_mark31.onmouseover = oRecord31.onmouseover = function () {
                oDiv61.style.display = 'block';
                oPlay_mark31.style.background = '#333';
                oPlay_mark31.style.opacity = 0.8;
                oRecord31.style.display = 'block';
            }
            oPlay_mark31.onmouseout = function () {
                oDiv61.style.display = 'none';
                oPlay_mark31.style.background = '';
                oRecord31.style.display = 'none';
            }
            oDiv61.onclick = function () {
                oDiv61.style.display = 'none';
                oDiv62.style.display = 'block';
                record_Num30();
            }
            oDiv62.onclick = function () {
                oDiv62.style.display = 'none';
                oDiv61.style.display = 'block';
            }

            var oPlay_mark32 = getClass(document,'play_mark32')[0];
            var oDiv63 = getClass(oPlay_mark32,'div1')[0];
            var oDiv64 = getClass(oPlay_mark32,'div2')[0];
            var oRecord32 = document.getElementById('record32');

            oPlay_mark32.onmouseover = oRecord32.onmouseover = function () {
                oDiv63.style.display = 'block';
                oPlay_mark32.style.background = '#333';
                oPlay_mark32.style.opacity = 0.8;
                oRecord32.style.display = 'block';
            }
            oPlay_mark32.onmouseout = function () {
                oDiv63.style.display = 'none';
                oPlay_mark32.style.background = '';
                oRecord32.style.display = 'none';
            }
            oDiv63.onclick = function () {
                oDiv63.style.display = 'none';
                oDiv64.style.display = 'block';
                record_Num31();
            }
            oDiv64.onclick = function () {
                oDiv64.style.display = 'none';
                oDiv63.style.display = 'block';
            }
        for(var i = 0; i < ali3.length; i++){
                ali3[i].index = i;
                ali3[i].onclick = function () {
                    for(var i = 0; i < ali3.length; i++){
                        ali3[i].className = '';
                        oUl3[i].style.display = 'none';
                        fadeOut(oUl3[i]);
                    }
                        this.className = 'language';
                        oUl3[this.index].style.display = 'block';
                        fadeIn(oUl3[this.index]);
                }
            }
            //热门推荐结束

            //搜索框开始
            var oTxt = document.getElementById('txt');
                oTxt.onkeydown = function (ev) {
                    var oEvent = ev || event;
                    if(oEvent.keyCode == 13){
                        if(oTxt.value == ''){
                            layer.alert('您输入的是空值，请重新输入！',{
                                title:'提示',
                                icon:5
                            });
                        }
                        else{
                            // 后台......数据库
                        }
                    }
                }
                var oSel = document.getElementById('sel');
                    oSel.onclick = function () {
                        if(oTxt.value == ''){
                            layer.alert('您输入的是空值，请重新输入！',{
                                title:'提示',
                                icon:5
                            });
                        }
                        else{
                            // 后台......数据库
                        }
                    }
            //搜索框结束


            //歌手开始
            var oSong_peo = document.getElementById('song_peo');
            var oUl4 = oSong_peo.getElementsByTagName('ul')[0];
            var oUl4_li = oUl4.getElementsByTagName('li');
            var oPrev_btn = document.getElementById('prev_btn');
            var oNext_btn = document.getElementById('next_btn');

            var nowSong = 0;
            var songs_timer = null;

            oUl4.innerHTML = oUl4.innerHTML + oUl4.innerHTML;
            oUl4.style.width = oUl4_li.length * oUl4_li[0].offsetWidth +'px';

            oPrev_btn.onclick = function () {
                clearInterval(songs_timer);
                left();
                songs_timer = setInterval(right,3000);
            }

            oNext_btn.onclick = function () {
                clearInterval(songs_timer);
                right();
                songs_timer = setInterval(right,3000);
            }

            function left() {
                if(nowSong == oUl4_li.length/2){
                    nowSong = 0;
                }
                moveLeft(oUl4,-nowSong*oUl4_li[0].offsetWidth,-(nowSong+1)*oUl4_li[0].offsetWidth);
                nowSong++;
            }

            function right() {
                if(nowSong == 0){
                    nowSong = oUl4_li.length/2;
                }
                moveLeft(oUl4,-nowSong*oUl4_li[0].offsetWidth,-(nowSong-1)*oUl4_li[0].offsetWidth);
                nowSong--;
            }

            songs_timer = setInterval(left,3000);

            oUl4.onmouseover = function () {
                clearInterval(songs_timer);
            }
            oUl4.onmouseout = function () {
                songs_timer = setInterval(left,3000);
            }

            function moveLeft(obj,old,iNew) {
                clearInterval(obj.songs_timer);
                obj.songs_timer = setInterval(function () {
                    var speed = (iNew - old)/10;
                    speed = speed > 0 ? Math.floor(speed) : Math.ceil(speed);
                    if(iNew == old){
                        clearInterval(obj.songs_timer);
                    }
                    else{
                        old += speed;
                        obj.style.left = old + 'px';
                    }
                },30)
            }
            //歌手结束

            //换肤开始
            var oSkin_header = document.getElementById('skin_header');
            var oSkin_header_ol = oSkin_header.getElementsByTagName('ol')[0];
            var oSkin_header_ol_li = oSkin_header_ol.getElementsByTagName('li');
            var oSkin_middle = document.getElementById('skin_middle');
            var oSkin_middle_ul = oSkin_middle.getElementsByTagName('ul')[0];

            for(var i = 0; i < oSkin_header_ol_li.length; i++){
                oSkin_header_ol_li[i].index = i;
                oSkin_header_ol_li[i].onclick = function () {
                    for(var i = 0; i < oSkin_header_ol_li.length; i++){
                        oSkin_header_ol_li[i].className = '';
                    }
                    this.className = 'skin_active';
                    skin_move(oSkin_middle_ul,-800*this.index,'left');
                }
            }

            var oPre_left = document.getElementById('pre_left');
            var oMoveBar_label = document.getElementById('moveBar_label');
            var oBox = document.getElementById('box');
            oPre_left.onmousedown = function (ev) {
                var oEvent = ev || event;
                var disY = oEvent.clientY - oPre_left.offsetTop;
                var i = 100;
            document.onmousemove = function (ev) {
                var oEvent = ev || event;
                oPre_left.style.top = oEvent.clientY - disY + 'px';
                oMoveBar_label.innerHTML = oMoveBar_label.innerHTML * 1 - 1;
                oBox.style.opacity = i--/100;
                oBox.style.filter = 'alpha(opacity='+i--/100+')';
                if(oPre_left.style.top == 100 + 'px'){
                    document.onmousemove = null;
                    oMoveBar_label.innerHTML = 0;
                }
            }
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    oPre_left.onmousedown = function (ev) {
                        var oEvent = ev || event;
                        var disY = oEvent.clientY - oPre_left.offsetTop;
                        var i = 0;
                        document.onmousemove = function (ev) {
                            var oEvent = ev || event;
                            oPre_left.style.top = oEvent.clientY - disY + 'px';
                            oMoveBar_label.innerHTML = oMoveBar_label.innerHTML * 1 + 1;
                            oBox.style.opacity = i++/100;
                            oBox.style.filter = 'alpha(opacity='+i++/100+')';
                            if (oPre_left.style.top == 0 + 'px') {
                                document.onmousemove = null;
                                oMoveBar_label.innerHTML = 100;
                            }
                        }
                        document.onmouseup = function () {
                            document.onmousemove = null;
                            document.onmouseup = null;
                        }
                    }
                }
        }

            var oMoveBar_pic = document.getElementById('moveBar_pic');
            var oPrecent = document.getElementById('precent');
                oPrecent.style.display = 'none';
                oMoveBar_pic.onclick = function () {
                    oPrecent.style.display = 'block';
                }
                oPrecent.onmouseover = function () {
                    clearTimeout(timer_precent);
                    oPrecent.style.display = 'block';
                }
                oPrecent.onmouseout = oMoveBar_pic.onmouseout = function () {
                    timer_precent = setTimeout(function () {
                        oPrecent.style.display = 'none';
                    },500)
                }



                var oCk_moveBar = document.getElementById('ck_moveBar');
                var oOverride = document.getElementById('override');
                    oCk_moveBar.onclick = function () {
                        if(oCk_moveBar.checked){
                            oOverride.style.display = 'none';
                        }
                        else{
                            oOverride.style.display = 'block';
                        }
                    }

           var oSkin_middle_top = document.getElementById('skin_middle_top');
           var oSkin_middle_top_oUl = oSkin_middle_top.getElementsByTagName('ul')[0];
           var oSkin_middle_top_oUl_aLi = oSkin_middle_top_oUl.getElementsByTagName('li');
           var oSkin_middle_top_oUl_aLi_div = oSkin_middle_top_oUl.getElementsByTagName('div');
           var skin_span = oSkin_middle_top_oUl.getElementsByTagName('span');
           var oSkin_middle_top_oUl_aLi4 = oSkin_middle_top_oUl.getElementsByTagName('li')[3];
           var oSkin_middle_top_oUl_aLi5 = oSkin_middle_top_oUl.getElementsByTagName('li')[4];
           var oSkin_middle_top_oUl_aLi6 = oSkin_middle_top_oUl.getElementsByTagName('li')[5];
           var oSkin_middle_top_oUl_aLi7 = oSkin_middle_top_oUl.getElementsByTagName('li')[6];
           var oSkin_middle_top_oUl_aLi8 = oSkin_middle_top_oUl.getElementsByTagName('li')[7];
           var oMany_line = document.getElementById('many_line');
           var oSkin_many = document.getElementById('skin_many');
           var oSkinQuilty = document.getElementById('skinQuilty');

           function host_vis() {
               oSkin_middle_top_oUl_aLi4.style.display = 'none';
               oSkin_middle_top_oUl_aLi5.style.display = 'none';
               oSkin_middle_top_oUl_aLi6.style.display = 'none';
               oSkin_middle_top_oUl_aLi7.style.display = 'none';
               oSkin_middle_top_oUl_aLi8.style.display = 'none';
               oMany_line.style.marginTop = -243 + 'px';
               oSkinQuilty.innerHTML = '更多';
               oSkinQuilty.className = '';
           }
            host_vis();
            oSkin_many.onclick = function () {
                if(oSkin_middle_top_oUl_aLi4.style.display == 'none'){
                    oSkin_middle_top_oUl_aLi4.style.display = 'block';
                    oSkin_middle_top_oUl_aLi5.style.display = 'block';
                    oSkin_middle_top_oUl_aLi6.style.display = 'block';
                    oSkin_middle_top_oUl_aLi7.style.display = 'block';
                    oSkin_middle_top_oUl_aLi8.style.display = 'block';
                    oMany_line.style.marginTop = -32 + 'px';
                    oSkinQuilty.innerHTML = '收起';
                    oSkinQuilty.className = 'test_skin';
                }
                else{
                    host_vis();
                }
            }

            var oMyRecHSkin = document.getElementById('myRecHSkin');
            var oMyRecHSkin_img = oMyRecHSkin.getElementsByTagName('img');
            var oHostName_rightPic = getClass(document,'hostName_rightPic');

            for(var i = 0; i < oSkin_middle_top_oUl_aLi.length; i++){
                oSkin_middle_top_oUl_aLi[0].onclick = function () {
                    layer.confirm('您将要更换此主题背景吗？',{
                        title:'提示',
                        icon:3,
                        area:['280px','150px']
                    },function () {
                        oHostName_rightPic[0].style.display = 'block';
                        oHostName_rightPic[1].style.display = 'none';
                        oHostName_rightPic[2].style.display = 'none';
                        oHostName_rightPic[3].style.display = 'none';
                        oHostName_rightPic[4].style.display = 'none';
                        oHostName_rightPic[5].style.display = 'none';
                        oHostName_rightPic[6].style.display = 'none';
                        oHostName_rightPic[7].style.display = 'none';
                        skin_span[0].innerHTML = skin_span[0].innerHTML * 1 + 1;
                        oBox.style.background = 'url("images/skinHostName1.jpg") no-repeat';
                        var oMyRecHSkin_li = document.createElement('li');
                        oMyRecHSkin_img[0].style.display = 'block';
                        oMyRecHSkin_li.innerHTML = '<img id="recMyHostSkinName1" width="200" height="90" src="images/skinHostName1.jpg">';
                        if(oMyRecHSkin.children.length > 0){
                            oMyRecHSkin.insertBefore(oMyRecHSkin_li,oMyRecHSkin.children[0]);
                            oSkin_middle_top_oUl_aLi[0].onclick = function (){}
                        }
                        else{
                            oMyRecHSkin.appendChild(oMyRecHSkin_li);
                            oSkin_middle_top_oUl_aLi[0].onclick = function (){}
                        }
                        oBox.style.backgroundSize = 'cover';
                        layer.alert('您已成功更换此主题背景！',{
                            title:'提示',
                            icon:1,
                            btn:'',
                            area:['150px','140px'],
                            time:3000
                        })
                    })
                }

                oSkin_middle_top_oUl_aLi[1].onclick = function () {
                    layer.confirm('您将要更换此主题背景吗？',{
                        title:'提示',
                        icon:3,
                        area:['280px','150px']
                    },function () {
                        oHostName_rightPic[1].style.display = 'block';
                        oHostName_rightPic[0].style.display = 'none';
                        oHostName_rightPic[2].style.display = 'none';
                        oHostName_rightPic[3].style.display = 'none';
                        oHostName_rightPic[4].style.display = 'none';
                        oHostName_rightPic[5].style.display = 'none';
                        oHostName_rightPic[6].style.display = 'none';
                        oHostName_rightPic[7].style.display = 'none';
                        skin_span[1].innerHTML = skin_span[1].innerHTML * 1 + 1;
                        oBox.style.background = 'url("images/skinHostName2.jpg") no-repeat';
                        var oMyRecHSkin_li = document.createElement('li');
                        oMyRecHSkin_li.innerHTML = '<img width="200" height="90" src="images/skinHostName2.jpg">';
                        oMyRecHSkin_img[0].style.display = 'block';
                        if(oMyRecHSkin.children.length > 0){
                            oMyRecHSkin.insertBefore(oMyRecHSkin_li,oMyRecHSkin.children[0]);
                            oSkin_middle_top_oUl_aLi[1].onclick = function (){}
                        }
                        else{
                            oMyRecHSkin.appendChild(oMyRecHSkin_li);
                            oSkin_middle_top_oUl_aLi[1].onclick = function (){}
                        }
                        oBox.style.backgroundSize = 'cover';
                        layer.alert('您已成功更换此主题背景!',{
                            title:'提示',
                            icon:1,
                            btn:'',
                            area:['150px','140px'],
                            time:3000
                        });
                    });
                }
                oSkin_middle_top_oUl_aLi[2].onclick = function () {
                    layer.confirm('您将要更换此主题背景吗？',{
                        title:'提示',
                        icon:3,
                        area:['280px','150px']
                    },function () {
                        oHostName_rightPic[2].style.display = 'block';
                        oHostName_rightPic[1].style.display = 'none';
                        oHostName_rightPic[0].style.display = 'none';
                        oHostName_rightPic[3].style.display = 'none';
                        oHostName_rightPic[4].style.display = 'none';
                        oHostName_rightPic[5].style.display = 'none';
                        oHostName_rightPic[6].style.display = 'none';
                        oHostName_rightPic[7].style.display = 'none';
                        skin_span[2].innerHTML = skin_span[2].innerHTML * 1 + 1;
                        oBox.style.background = 'url("images/skinHostName3.jpg") no-repeat';
                        var oMyRecHSkin_li = document.createElement('li');
                        oMyRecHSkin_li.innerHTML = '<img width="200" height="90" src="images/skinHostName3.jpg">';
                        oMyRecHSkin_img[0].style.display = 'block';
                        if(oMyRecHSkin.children.length > 0){
                            oMyRecHSkin.insertBefore(oMyRecHSkin_li,oMyRecHSkin.children[0]);
                            oSkin_middle_top_oUl_aLi[2].onclick = function (){}
                        }
                        else{
                            oMyRecHSkin.appendChild(oMyRecHSkin_li);
                            oSkin_middle_top_oUl_aLi[2].onclick = function (){}
                        }
                        oBox.style.backgroundSize = 'cover';
                        layer.alert('您已成功更换此主题背景!',{
                            title:'提示',
                            icon:1,
                            btn:'',
                            area:['150px','140px'],
                            time:3000
                        });
                    });
                }
                oSkin_middle_top_oUl_aLi[3].onclick = function () {
                    layer.confirm('您将要更换此主题背景吗？',{
                        title:'提示',
                        icon:3,
                        area:['280px','150px']
                    },function () {
                        oHostName_rightPic[3].style.display = 'block';
                        oHostName_rightPic[1].style.display = 'none';
                        oHostName_rightPic[2].style.display = 'none';
                        oHostName_rightPic[0].style.display = 'none';
                        oHostName_rightPic[4].style.display = 'none';
                        oHostName_rightPic[5].style.display = 'none';
                        oHostName_rightPic[6].style.display = 'none';
                        oHostName_rightPic[7].style.display = 'none';
                        skin_span[3].innerHTML = skin_span[3].innerHTML * 1 + 1;
                        oBox.style.background = 'url("images/skinHostName4.jpg") no-repeat';
                        var oMyRecHSkin_li = document.createElement('li');
                        oMyRecHSkin_li.innerHTML = '<img width="200" height="90" src="images/skinHostName4.jpg">';
                        oMyRecHSkin_img[0].style.display = 'block';
                        if(oMyRecHSkin.children.length > 0){
                            oMyRecHSkin.insertBefore(oMyRecHSkin_li,oMyRecHSkin.children[0]);
                            oSkin_middle_top_oUl_aLi[3].onclick = function (){}
                        }
                        else{
                            oMyRecHSkin.appendChild(oMyRecHSkin_li);
                            oSkin_middle_top_oUl_aLi[3].onclick = function (){}
                        }
                        oBox.style.backgroundSize = 'cover';
                        layer.alert('您已成功更换此主题背景!',{
                            title:'提示',
                            icon:1,
                            btn:'',
                            area:['150px','140px'],
                            time:3000
                        });
                    });
                }
                oSkin_middle_top_oUl_aLi[4].onclick = function () {
                    layer.confirm('您将要更换此主题背景吗？',{
                        title:'提示',
                        icon:3,
                        area:['280px','150px']
                    },function () {
                        oHostName_rightPic[4].style.display = 'block';
                        oHostName_rightPic[1].style.display = 'none';
                        oHostName_rightPic[2].style.display = 'none';
                        oHostName_rightPic[3].style.display = 'none';
                        oHostName_rightPic[0].style.display = 'none';
                        oHostName_rightPic[5].style.display = 'none';
                        oHostName_rightPic[6].style.display = 'none';
                        oHostName_rightPic[7].style.display = 'none';
                        skin_span[4].innerHTML = skin_span[4].innerHTML * 1 + 1;
                        oBox.style.background = 'url("images/skinHostName5.jpg") no-repeat';
                        var oMyRecHSkin_li = document.createElement('li');
                        oMyRecHSkin_li.innerHTML = '<img width="200" height="90" src="images/skinHostName5.jpg">';
                        oMyRecHSkin_img[0].style.display = 'block';
                        if(oMyRecHSkin.children.length > 0){
                            oMyRecHSkin.insertBefore(oMyRecHSkin_li,oMyRecHSkin.children[0]);
                            oSkin_middle_top_oUl_aLi[4].onclick = function (){}
                        }
                        else{
                            oMyRecHSkin.appendChild(oMyRecHSkin_li);
                            oSkin_middle_top_oUl_aLi[4].onclick = function (){}
                        }
                        oBox.style.backgroundSize = 'cover';
                        layer.alert('您已成功更换此主题背景!',{
                            title:'提示',
                            icon:1,
                            btn:'',
                            area:['150px','140px'],
                            time:3000
                        });
                    });
                }
                oSkin_middle_top_oUl_aLi[5].onclick = function () {
                    layer.confirm('您将要更换此主题背景吗？',{
                        title:'提示',
                        icon:3,
                        area:['280px','150px']
                    },function () {
                        oHostName_rightPic[5].style.display = 'block';
                        oHostName_rightPic[1].style.display = 'none';
                        oHostName_rightPic[2].style.display = 'none';
                        oHostName_rightPic[3].style.display = 'none';
                        oHostName_rightPic[4].style.display = 'none';
                        oHostName_rightPic[0].style.display = 'none';
                        oHostName_rightPic[6].style.display = 'none';
                        oHostName_rightPic[7].style.display = 'none';
                        skin_span[5].innerHTML = skin_span[5].innerHTML * 1 + 1;
                        oBox.style.background = 'url("images/skinHostName6.jpg") no-repeat';
                        var oMyRecHSkin_li = document.createElement('li');
                        oMyRecHSkin_li.innerHTML = '<img width="200" height="90" src="images/skinHostName6.jpg">';
                        oMyRecHSkin_img[0].style.display = 'block';
                        if(oMyRecHSkin.children.length > 0){
                            oMyRecHSkin.insertBefore(oMyRecHSkin_li,oMyRecHSkin.children[0]);
                            oSkin_middle_top_oUl_aLi[5].onclick = function (){}
                        }
                        else{
                            oMyRecHSkin.appendChild(oMyRecHSkin_li);
                            oSkin_middle_top_oUl_aLi[5].onclick = function (){}
                        }
                        oBox.style.backgroundSize = 'cover';
                        layer.alert('您已成功更换此主题背景!',{
                            title:'提示',
                            icon:1,
                            btn:'',
                            area:['150px','140px'],
                            time:3000
                        });
                    });
                }
                oSkin_middle_top_oUl_aLi[6].onclick = function () {
                    layer.confirm('您将要更换此主题背景吗？',{
                        title:'提示',
                        icon:3,
                        area:['280px','150px']
                    },function () {
                        oHostName_rightPic[6].style.display = 'block';
                        oHostName_rightPic[1].style.display = 'none';
                        oHostName_rightPic[2].style.display = 'none';
                        oHostName_rightPic[3].style.display = 'none';
                        oHostName_rightPic[4].style.display = 'none';
                        oHostName_rightPic[5].style.display = 'none';
                        oHostName_rightPic[0].style.display = 'none';
                        oHostName_rightPic[7].style.display = 'none';
                        skin_span[6].innerHTML = skin_span[6].innerHTML * 1 + 1;
                        oBox.style.background = 'url("images/skinHostName7.jpg") no-repeat';
                        var oMyRecHSkin_li = document.createElement('li');
                        oMyRecHSkin_li.innerHTML = '<img width="200" height="90" src="images/skinHostName7.jpg">';
                        oMyRecHSkin_img[0].style.display = 'block';
                        if(oMyRecHSkin.children.length > 0){
                            oMyRecHSkin.insertBefore(oMyRecHSkin_li,oMyRecHSkin.children[0]);
                            oSkin_middle_top_oUl_aLi[6].onclick = function (){}
                        }
                        else{
                            oMyRecHSkin.appendChild(oMyRecHSkin_li);
                            oSkin_middle_top_oUl_aLi[6].onclick = function (){}
                        }
                        oBox.style.backgroundSize = 'cover';
                        layer.alert('您已成功更换此主题背景!',{
                            title:'提示',
                            icon:1,
                            btn:'',
                            area:['150px','140px'],
                            time:3000
                        });
                    });
                }
                oSkin_middle_top_oUl_aLi[7].onclick = function () {
                    layer.confirm('您将要更换此主题背景吗？',{
                        title:'提示',
                        icon:3,
                        area:['280px','150px']
                    },function () {
                        oHostName_rightPic[7].style.display = 'block';
                        oHostName_rightPic[1].style.display = 'none';
                        oHostName_rightPic[2].style.display = 'none';
                        oHostName_rightPic[3].style.display = 'none';
                        oHostName_rightPic[4].style.display = 'none';
                        oHostName_rightPic[5].style.display = 'none';
                        oHostName_rightPic[6].style.display = 'none';
                        oHostName_rightPic[0].style.display = 'none';
                        skin_span[7].innerHTML = skin_span[7].innerHTML * 1 + 1;
                        oBox.style.background = 'url("images/skinHostName8.jpg") no-repeat';
                        var oMyRecHSkin_li = document.createElement('li');
                        oMyRecHSkin_li.innerHTML = '<img width="200" height="90" src="images/skinHostName8.jpg">';
                        oMyRecHSkin_img[0].style.display = 'block';
                        if(oMyRecHSkin.children.length > 0){
                            oMyRecHSkin.insertBefore(oMyRecHSkin_li,oMyRecHSkin.children[0]);
                            oSkin_middle_top_oUl_aLi[7].onclick = function (){}
                        }
                        else{
                            oMyRecHSkin.appendChild(oMyRecHSkin_li);
                            oSkin_middle_top_oUl_aLi[7].onclick = function (){}
                        }
                        oBox.style.backgroundSize = 'cover';
                        layer.alert('您已成功更换此主题背景!',{
                            title:'提示',
                            icon:1,
                            btn:'',
                            area:['150px','140px'],
                            time:3000
                        });
                    });
                }
            }

            for(var i = 0; i < oSkin_middle_top_oUl_aLi.length; i++){
                oSkin_middle_top_oUl_aLi[i].index = i;
                oSkin_middle_top_oUl_aLi[i].onmouseover = function (ev) {
                    var oEvent = ev || event;
                    if(window.navigator.userAgent.indexOf('MSIE') > 0){
                        oEvent.cancelBubble = true;
                    }
                    else {
                        oEvent.stopPropagation();
                    }
                    var _this = this;
                    for(var i = 0; i < oSkin_middle_top_oUl_aLi.length; i++){
                        oSkin_middle_top_oUl_aLi_div[i].style.display = 'none';
                    }
                        oSkin_middle_top_oUl_aLi_div[this.index].style.display = 'block';
                        document.onmouseover = function () {
                            oSkin_middle_top_oUl_aLi_div[_this.index].style.display = 'none';
                        }
                    }
            }
                var oLoginBtn = document.getElementById('loginBtn');
                oTxtPwd.onkeyup = function () {
                    oLoginBtn.style.opacity = 1;
                    oLoginBtn.style.filter = 'alpha(opacity='+100+')';
                    if(oTxtPwd.value.length == 0){
                        oLoginBtn.style.opacity = 0.5;
                        oLoginBtn.style.filter = 'alpha(opacity='+50+')';
                    }
                }

            var oSkinPic = document.getElementById('skinPic');
            // var oSkinPic_img = oSkinPic.getElementsByTagName('img');
            var oSkinPic_img = getClass(document,'skin_count');
            var oSkinPic_div = oSkinPic.getElementsByTagName('div');
            var oSkinPic_span = oSkinPic.getElementsByTagName('span');
            var oSkinPic_rightBottomMark = getClass(document,'skinPic_rightBottomMark');
            var oMyRecSkinPic = document.getElementById('myRecSkinPic');
            var oPosMyRecSkinPic_mark = document.getElementById('posMyRecSkinPic_mark');

            for(var i = 0; i < oSkinPic_div.length; i++){
                (function (k) {
                    oSkinPic_div[i].onclick = function () {
                        for(var i = 0; i < oSkinPic_div.length; i++){
                            if(i == k){
                                var oMyRecSkinPic_li = document.createElement('li');
                                oMyRecSkinPic_li.innerHTML = '<img width="176" height="87" src="images/skin'+(i+1)+'.jpg">';
                                oPosMyRecSkinPic_mark.style.display = 'block';
                                if(oMyRecSkinPic.children.length > 0){
                                    oMyRecSkinPic.insertBefore(oMyRecSkinPic_li,oMyRecSkinPic.children[0]);
                                    oSkinPic_div[i].onclick = function (){}
                                }
                                else{
                                    oMyRecSkinPic.appendChild(oMyRecSkinPic_li);
                                    oSkinPic_div[i].onclick = function (){}
                                }
                                oSkinPic_rightBottomMark[i].style.display = 'block';
                                oSkinPic_span[i].innerHTML = oSkinPic_span[i].innerHTML * 1 + 1;
                                oBox.style.background = 'url("images/skin'+(i+1)+'.jpg") no-repeat';
                                oBox.style.backgroundSize = 'cover';
                                layer.alert('恭喜您，您已成功更换此皮肤背景！',{
                                    title:'提示',
                                    icon:6,
                                    btn:'5秒后页面即将关闭！',
                                    area:['300px','150px'],
                                    time:5000
                                });
                            }
                            else{
                                oSkinPic_rightBottomMark[i].style.display = 'none';
                            }
                        }
                    }
                })(i)

            }

            for(var i = 0; i < oSkinPic_img.length; i++) {
                (function (n) {
                    oSkinPic_img[i].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                       for(var i = 0; i < oSkinPic_img.length; i++) {
                           if(i == n){
                               oSkinPic_div[i].style.display = 'block';
                           }
                           else{
                               oSkinPic_div[i].style.display = 'none';
                           }
                       }
                       document.onclick = function () {
                           for(var i = 0; i < oSkinPic_img.length; i++) {
                               if(i == n){
                                   oSkinPic_div[i].style.display = 'none';
                               }
                           }
                       }
                    }
                })(i)
            }
                var oSkinPurity_oUl = document.getElementById('skinPurity_oUl');
                var oSkinPurity_oUl_li = oSkinPurity_oUl.getElementsByTagName('li');
                var oSkinPurity_oUl_li_div = oSkinPurity_oUl.getElementsByTagName('div');
                var oSkinPurity_oUl_li_img = oSkinPurity_oUl.getElementsByTagName('img');

                for(var i = 0; i < oSkinPurity_oUl_li_div.length; i++){
                    oSkinPurity_oUl_li_div[0].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[0].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'skyblue';
                        },500)

                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[0].style.display = 'block';
                            oBox.style.background = 'skyblue';
                        }
                    }
                    oSkinPurity_oUl_li_div[1].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[1].style.display = 'block';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = '#9c9c9c';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[1].style.display = 'block';
                            oBox.style.background = '#9c9c9c';
                        }
                    }
                    oSkinPurity_oUl_li_div[2].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[2].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = '#ffe388';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[2].style.display = 'block';
                            oBox.style.background = '#ffe388';
                        }
                    }
                    oSkinPurity_oUl_li_div[3].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[3].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'wheat';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[3].style.display = 'block';
                            oBox.style.background = 'wheat';
                        }
                    }
                    oSkinPurity_oUl_li_div[4].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[4].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'greenyellow';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[4].style.display = 'block';
                            oBox.style.background = 'greenyellow';
                        }
                    }
                    oSkinPurity_oUl_li_div[5].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[5].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'coral';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[5].style.display = 'block';
                            oBox.style.background = 'coral';
                        }
                    }
                    oSkinPurity_oUl_li_div[6].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[6].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'mediumpurple';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[6].style.display = 'block';
                            oBox.style.background = 'mediumpurple';
                        }
                    }
                    oSkinPurity_oUl_li_div[7].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[7].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'springgreen';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[7].style.display = 'block';
                            oBox.style.background = 'springgreen';
                        }
                    }
                    oSkinPurity_oUl_li_div[8].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[8].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'pink';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[8].style.display = 'block';
                            oBox.style.background = 'pink';
                        }
                    }
                    oSkinPurity_oUl_li_div[9].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[9].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = '#ffcc33';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[9].style.display = 'block';
                            oBox.style.background = '#ffcc33';
                        }
                    }
                    oSkinPurity_oUl_li_div[10].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[10].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'palegoldenrod';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[10].style.display = 'block';
                            oBox.style.background = 'palegoldenrod';
                        }
                    }
                    oSkinPurity_oUl_li_div[11].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[11].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'cornflowerblue';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[11].style.display = 'block';
                            oBox.style.background = 'cornflowerblue';
                        }
                    }
                    oSkinPurity_oUl_li_div[12].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[12].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = '#d94b01';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[12].style.display = 'block';
                            oBox.style.background = '#d94b01';
                        }
                    }
                    oSkinPurity_oUl_li_div[13].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[13].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[14].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = '#666600';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'turquoise';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[14].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[13].style.display = 'block';
                            oBox.style.background = '#666600';
                        }
                    }
                    oSkinPurity_oUl_li_div[14].onclick = function () {
                        setTimeout(function () {
                            oSkinPurity_oUl_li_img[14].style.display = 'block';
                            oSkinPurity_oUl_li_img[1].style.display = 'none';
                            oSkinPurity_oUl_li_img[2].style.display = 'none';
                            oSkinPurity_oUl_li_img[3].style.display = 'none';
                            oSkinPurity_oUl_li_img[4].style.display = 'none';
                            oSkinPurity_oUl_li_img[5].style.display = 'none';
                            oSkinPurity_oUl_li_img[6].style.display = 'none';
                            oSkinPurity_oUl_li_img[7].style.display = 'none';
                            oSkinPurity_oUl_li_img[8].style.display = 'none';
                            oSkinPurity_oUl_li_img[9].style.display = 'none';
                            oSkinPurity_oUl_li_img[10].style.display = 'none';
                            oSkinPurity_oUl_li_img[11].style.display = 'none';
                            oSkinPurity_oUl_li_img[12].style.display = 'none';
                            oSkinPurity_oUl_li_img[13].style.display = 'none';
                            oSkinPurity_oUl_li_img[0].style.display = 'none';
                            oSkinPurity_oUl_li_img[15].style.display = 'none';
                            oBox.style.background = 'turquoise';
                        },500)

                        oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'skyblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[0].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffe388';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[2].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'wheat';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[3].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'greenyellow';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[4].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'coral';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[5].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'mediumpurple';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[6].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'springgreen';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[7].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'pink';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[8].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#ffcc33';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[9].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'palegoldenrod';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[10].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'cornflowerblue';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[11].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#d94b01';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[12].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#666600';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[13].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = '#9c9c9c';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[1].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }
                        oSkinPurity_oUl_li[15].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            oBox.style.background = 'orchid';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                        }
                        oSkinPurity_oUl_li[15].onmouseout = function () {
                            oBox.style.background = '';
                            oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                        }

                        document.onmouseover = function () {
                            oSkinPurity_oUl_li_img[14].style.display = 'block';
                            oBox.style.background = 'turquoise';
                        }
                    }
                    oSkinPurity_oUl_li_div[i].index = i;
                    oSkinPurity_oUl_li_div[i].onclick = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                    }
                        else{
                            oEvent.stopPropagation();
                        }
                        for(var i = 0; i < oSkinPurity_oUl_li_div.length; i++){
                            oSkinPurity_oUl_li_img[i].style.display = 'none';
                        }
                            oSkinPurity_oUl_li_img[this.index].style.display = 'block';
                    }
                }

                oSkinPurity_oUl_li_div[15].onclick = function () {
                    setTimeout(function () {
                        oSkinPurity_oUl_li_img[15].style.display = 'block';
                        oSkinPurity_oUl_li_img[1].style.display = 'none';
                        oSkinPurity_oUl_li_img[2].style.display = 'none';
                        oSkinPurity_oUl_li_img[3].style.display = 'none';
                        oSkinPurity_oUl_li_img[4].style.display = 'none';
                        oSkinPurity_oUl_li_img[5].style.display = 'none';
                        oSkinPurity_oUl_li_img[6].style.display = 'none';
                        oSkinPurity_oUl_li_img[7].style.display = 'none';
                        oSkinPurity_oUl_li_img[8].style.display = 'none';
                        oSkinPurity_oUl_li_img[9].style.display = 'none';
                        oSkinPurity_oUl_li_img[10].style.display = 'none';
                        oSkinPurity_oUl_li_img[11].style.display = 'none';
                        oSkinPurity_oUl_li_img[12].style.display = 'none';
                        oSkinPurity_oUl_li_img[13].style.display = 'none';
                        oSkinPurity_oUl_li_img[14].style.display = 'none';
                        oSkinPurity_oUl_li_img[0].style.display = 'none';
                        oBox.style.background = 'orchid';
                    },500)

                    oSkinPurity_oUl_li[0].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'skyblue';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[0].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[2].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = '#ffe388';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[2].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[3].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'wheat';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[3].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[4].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'greenyellow';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[4].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[5].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'coral';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[5].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[6].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'mediumpurple';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[6].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[7].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'springgreen';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[7].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[8].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'pink';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[8].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[9].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = '#ffcc33';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[9].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[10].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'palegoldenrod';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[10].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[11].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'cornflowerblue';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[11].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[12].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = '#d94b01';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[12].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[13].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = '#666600';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[13].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[14].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = 'turquoise';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[14].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[1].onmouseover = function (ev) {
                        var oEvent = ev || event;
                        if(window.navigator.userAgent.indexOf('MSIE') > 0){
                            oEvent.cancelBubble = true;
                        }
                        else{
                            oEvent.stopPropagation();
                        }
                        oBox.style.background = '#9c9c9c';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[1].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }

                    document.onmouseover = function () {
                        oSkinPurity_oUl_li_img[15].style.display = 'block';
                        oBox.style.background = 'orchid';
                    }
                }

                for(var i = 0; i < oSkinPurity_oUl_li.length; i++){
                    oSkinPurity_oUl_li[0].onmouseover = function () {
                        oBox.style.background = 'skyblue';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[0].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[1].onmouseover = function () {
                        oBox.style.background = '#9c9c9c';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[1].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[2].onmouseover = function () {
                        oBox.style.background = '#ffe388';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[2].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[3].onmouseover = function () {
                        oBox.style.background = 'wheat';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[3].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[4].onmouseover = function () {
                        oBox.style.background = 'greenyellow';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[4].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[5].onmouseover = function () {
                        oBox.style.background = 'coral';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[5].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[6].onmouseover = function () {
                        oBox.style.background = 'mediumpurple';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[6].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[7].onmouseover = function () {
                        oBox.style.background = 'springgreen';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[7].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[8].onmouseover = function () {
                        oBox.style.background = 'pink';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[8].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[9].onmouseover = function () {
                        oBox.style.background = '#ffcc33';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[9].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[10].onmouseover = function () {
                        oBox.style.background = 'palegoldenrod';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[10].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[11].onmouseover = function () {
                        oBox.style.background = 'cornflowerblue';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[11].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[12].onmouseover = function () {
                        oBox.style.background = '#d94b01';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[12].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[13].onmouseover = function () {
                        oBox.style.background = '#666600';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[13].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }
                    oSkinPurity_oUl_li[14].onmouseover = function () {
                        oBox.style.background = 'turquoise';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                    }
                    oSkinPurity_oUl_li[14].onmouseout = function () {
                        oBox.style.background = '';
                        oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                    }

                        oSkinPurity_oUl_li[i].index = i;
                        oSkinPurity_oUl_li[i].onmouseover = function (ev) {
                            var oEvent = ev || event;
                            if(window.navigator.userAgent.indexOf('MSIE') > 0){
                                oEvent.cancelBubble = true;
                            }
                            else{
                                oEvent.stopPropagation();
                            }
                            var _this = this;
                            for(var i = 0; i < oSkinPurity_oUl_li.length; i++){
                                oSkinPurity_oUl_li_div[i].style.display = 'none';
                            }
                                oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                                document.onmouseover = function () {
                                    oSkinPurity_oUl_li_div[_this.index].style.display = 'none';
                                }
                        }
                }
                oSkinPurity_oUl_li[15].onmouseover = function () {
                    oBox.style.background = 'orchid';
                    oSkinPurity_oUl_li_div[this.index].style.display = 'block';
                }
                oSkinPurity_oUl_li[15].onmouseout = function () {
                    oBox.style.background = '';
                    oSkinPurity_oUl_li_div[this.index].style.display = 'none';
                }

                //皮肤滚动条开始
                var oDefinedScroll = document.getElementById('definedScroll');
                var oDefinedScrollBar = document.getElementById('definedScrollBar');
                var oOO = document.getElementById('oo');
                oDefinedScrollBar.onmousedown = function (ev) {
                    var oEvent = ev || event;
                    if(oEvent.preventDefault){
                        oEvent.preventDefault();
                    }
                    else{
                        oEvent.returnValue = false;
                    }
                    var disY = oEvent.clientY - oDefinedScrollBar.offsetTop;
                    var i = 0;
                    document.onmousemove = function (ev) {
                        var oEvent = ev || event;
                        var t = oEvent.clientY - disY;
                        if(t > 0){
                            oOO.style.top = i-- +  'px';
                        }
                        if(t <= 0){
                            t = 0;
                        }
                        if(t >= oDefinedScroll.clientHeight - oDefinedScrollBar.clientHeight){
                            t = oDefinedScroll.clientHeight - oDefinedScrollBar.clientHeight;
                        }
                        oDefinedScrollBar.style.top = t + 'px';
                    }
                    document.onmouseup = function () {
                        document.onmousemove = null;
                    }
                }
                //皮肤滚动条结束
            //换肤结束

            //查看和修改个人资料开始     
            var oAlterMsg_newPwd = document.getElementById('alterMsg_newPwd');  
            var oAlterMsg_newRepPwd = document.getElementById('alterMsg_newRepPwd');
            var oAlterMsg_pwd = document.getElementById('alterMsg_pwd');  
                     
            oAlterMsg_pwd.onfocus = function (ev) {
                oAlterMsg_pwd.placeholder = '';
                oAlterMsg_pwd.select();
            }
            oAlterMsg_pwd.onblur = function (ev) {
                oAlterMsg_pwd.placeholder = '请先登录您的用户';               
            }
            
            oAlterMsg_newPwd.onfocus = function (ev) {
            	oAlterMsg_newPwd.placeholder = '';
            	oAlterMsg_newPwd.select();
            }
            oAlterMsg_newPwd.onblur = function (ev) {
            	oAlterMsg_newPwd.placeholder = '请输入您要修改的密码';               
            }
                      
            oAlterMsg_newRepPwd.onfocus = function (ev) {
            	oAlterMsg_newRepPwd.placeholder = '';
            	oAlterMsg_newRepPwd.select();
            }
            oAlterMsg_newRepPwd.onblur = function (ev) {
            	oAlterMsg_newRepPwd.placeholder = '请重复输入您要修改的密码';               
            }
            
            var oS_h_pwd = document.getElementById('s_h_pwd');          
            oS_h_pwd.onclick = function(){
            	if(oAlterMsg_pwd.type == 'password'){
            		oAlterMsg_pwd.type = 'text';
                	this.style.background = 'url("images/qqMusic_splice.png") -60px -200px';
            	}
            	else{
            		oAlterMsg_pwd.type = 'password';
                	this.style.background = 'url("images/qqMusic_splice.png") -80px -200px';
            	}
            }
            
            oAlterMsg_newPwd.onkeydown = 
            	oAlterMsg_newRepPwd.onkeydown = oAlterMsg_pwd.onkeydown =  function (ev) {
                var oEvent = ev || event;
                if(oEvent.keyCode == 13){
                    if(oAlterMsg_pwd.value.length == 0 || oAlterMsg_newPwd.value.length == 0 || 
                    		oAlterMsg_newRepPwd.value.length == 0){
                        layer.alert('新密码/重复输入新密码不能为空！',{
                            title:'提示',
                            icon:7
                        })
                    }
                    else if((oAlterMsg_newPwd.value != oAlterMsg_pwd.value
               			 && (oAlterMsg_newRepPwd.value == 
               				 oAlterMsg_newPwd.value))){
               		layer.msg('正在修改中...请稍后');
               		setTimeout(function(){
               			layer.alert('恭喜您，您已成功修改密码！',{
                   			title:'提示',
                   			icon:6
                   		});
                   		oMyAlterMsgForm.submit(); 
               		},2000)          		
               	}
           	else{
           		layer.alert('对不起，您修改失败！原因可能是您输入的新密码与原密码一致或者是您重复输入的新密码与新密码不一致，请您检查后重新修改。',{
           			title:'提示',
           			icon:7
           		});
           		}           
            }
        }
            
            
            oAlterMsg_newRepPwd.onkeyup = function(){
            	oEstablish_alter.style.background = 'black';
            	if(oAlterMsg_newRepPwd.value == 0){
            		oEstablish_alter.style.background = '';
            	}
            }
            
            var oEstablish_alter = document.getElementById('establish_alter');
            var oMyAlterMsgForm = document.getElementById('myAlterMsgForm');
            oEstablish_alter.onclick = function(){
            if(oAlterMsg_newPwd.value == 0 || oAlterMsg_newRepPwd.value == 0){
            	 layer.alert('新密码/重复输入新密码不能为空！',{
                     title:'提示',
                     icon:7
                 })
            }	
            else if((oAlterMsg_newPwd.value != oAlterMsg_pwd.value
            			 && (oAlterMsg_newRepPwd.value == 
            				 oAlterMsg_newPwd.value))){
            		layer.msg('正在修改中...请稍后');
            		setTimeout(function(){
            			layer.alert('恭喜您，您已成功修改密码！',{
                			title:'提示',
                			icon:6
                		});
                		oMyAlterMsgForm.submit(); 
            		},2000)          		
            	}
        	else{
        		layer.alert('对不起，您修改失败！原因可能是您输入的新密码与原密码一致或者是您重复输入的新密码与新密码不一致，请您检查后重新修改。',{
        			title:'提示',
        			icon:7
        		});
        	}            	         	
            }
            //查看和修改个人资料结束
            
            //评论区多行文本域开始            
            oCommentTxtArea.onclick = function(){
        		oCommentTxtArea.placeholder = '';
        		oCommentTxtArea.select();
        	}
        	oCommentTxtArea.onblur = function(){
        		oCommentTxtArea.placeholder = '期待您的神评论......';
        	} 
        	
        	//评论区发送评论消息开始
        	var oCommentSend = document.getElementById('commentSend');
        	var oRec_comment = document.getElementById('rec_comment');
        	var oCom_res = document.getElementById('com_res');
        	var oComment_num_bar = document.getElementById('comment_num_bar'); 
        	var oComment_hide = document.getElementById('comment_hide');
        	var oMyCommentForm = document.getElementById('myCommentForm');
        	  oCommentTxtArea.onkeydown =  function(ev){
        		var oEvent = ev || event;
        		if(oEvent.preventDefault){
        			oEvent.preventDefault();
        		}
        		else{
        			oEvent.returnValue = false;
        		}
        		if(oEvent.keyCode == 13){
        			if(oCom_res.innerHTML == 250){
            			layer.alert('不能发送空评论消息，请输入内容后再发送！',{
            				title:'提示',
            				icon:7
            			});
            		} 
            		else{
            			layer.msg('发送成功！',{      				
            				icon:1
            			});
            			oComment_num_bar.innerHTML = oComment_num_bar.innerHTML * 1 + 1;
            			var ali = document.createElement('li');
//            			ali.innerHTML = '<img src="images/chenHaoChen.jpg" width="50" height="50" style="border-radius:30px;margin:10px 13px;float:left;">' + 
//            			'<div style="width:160px;height:50px;float:left;margin:10px -5px;font-size:12px;font-weight:lighter;"><div style="width:100%;height:25px;line-height:25px;font-style:italic;color:#0f0;">再回首恍然如梦</div><div style="width:100%;height:25px;line-height:25px;color:pink;">聆听心声</div></div>' + oCommentTxtArea.value;
            			ali.innerHTML = oCommentTxtArea.value;           			
            			oCommentTxtArea.value = '';
            			oMyCommentForm.submit();
            			if(oRec_comment.children.length > 0){
            				oRec_comment.insertBefore(ali,oRec_comment.children[0]);
            			}
            			else{
            				oRec_comment.appendChild(ali);
            			}
            			var iHeight = ali.offsetHeight;
            			ali.style.height = 0;
    	    			 lan_move(ali,{height:iHeight},function () {
    	                     lan_move(ali,{opacity:100})
    	                 })
            		}
        		}        		
        	}
        	  oCommentSend.onclick = function(){
        		  if(oCom_res.innerHTML == 250){
          			layer.alert('不能发送空评论消息，请输入内容后再发送！',{
          				title:'提示',
          				icon:7
          			});
          		} 
          		else{
          			layer.msg('发送成功！',{      				
          				icon:1
          			});
          			oComment_num_bar.innerHTML = oComment_num_bar.innerHTML * 1 + 1;
          			var ali = document.createElement('li');
//          			ali.innerHTML = '<img src="images/chenHaoChen.jpg" width="50" height="50" style="border-radius:30px;margin:10px 13px;float:left;">' + 
//        			'<div style="width:160px;height:50px;float:left;margin:10px -5px;font-size:12px;font-weight:lighter;"><div style="width:100%;height:25px;line-height:25px;font-style:italic;color:#0f0;">再回首恍然如梦</div><div style="width:100%;height:25px;line-height:25px;color:pink;">聆听心声</div></div>' + oCommentTxtArea.value;
          			ali.innerHTML = oCommentTxtArea.value;
          			oComment_hide.value = ali.innerHTML;
          			oCommentTxtArea.value = '';
          			oMyCommentForm.submit();
          			if(oRec_comment.children.length > 0){
          				oRec_comment.insertBefore(ali,oRec_comment.children[0]);
          			}
          			else{
          				oRec_comment.appendChild(ali);
          			}
          			var iHeight = ali.offsetHeight;
          			ali.style.height = 0;
  	    			 lan_move(ali,{height:iHeight},function () {
  	                     lan_move(ali,{opacity:100})
  	                 })
          		}
        	  }
    }

            // $(function () {
            //     layer.alert('想欣赏佳哥组制作的火爆，独特，精致美观而又细化诱人的音乐网站' +
            //         '吗~~~赶快点击确定哦！！！',{
            //         title:'提示',
            //         icon:6
            //     });
            // })

            //使用layer插件弹出登录界面
            function showLoginBox() {
                layer.open({
                    type:1,
                    title:'登录',
                    area:['538px','293px'],
                    content:$('#loginBox'),
                });
            }

            //验证登录和密码
            function verifyLogin() {
                var userName = $.trim($('#txtUserName').val());
                var userPwd = $.trim($('#txtPwd').val());
                var oMyLoginForm = document.getElementById('myLoginForm');
                var oLoginState = document.getElementById('loginState');
                var oTxtUserName = document.getElementById('txtUserName');
                var oAlterMsg_txt = document.getElementById('alterMsg_txt');
                var oTxtPwd = document.getElementById('txtPwd');
                var oAlterMsg_pwd = document.getElementById('alterMsg_pwd');
                var oPosComment = document.getElementById('posComment');
                var oCommentTxtArea = document.getElementById('commentTxtArea');
                oPosComment.style.display = 'none';
                oCommentTxtArea.disabled = '';             
                if(userName == '' || userPwd == ''){
                    layer.alert('用户名/密码不能为空！',{
                        title:'提示',
                        icon:2
                    })
                }
                else{               	
                	layer.msg('登录中......');
                	setTimeout(function(){
                		oMyLoginForm.submit();
                		layer.alert('登录成功！',{
                			title:'提示',
                			icon:1
                		})
                	},2000)   
                	oLoginState.innerHTML = '已登录';               	
                	oAlterMsg_txt.value = oTxtUserName.value;
                	oAlterMsg_pwd.value = oTxtPwd.value;
                }
            }

            //使用layer插件弹出注册界面
            function showRegisterBox(){
                layer.open({
                    type:1,
                    title:'快速注册',
                    area:['515px','510px'],
                    content:$('#register_frame'),
                });
            }

            //验证注册用户名
            function verifyRegUserName() {
                var oReg_txt = document.getElementById('reg_txt');
                var oVerifyRegUserName = document.getElementById('verifyRegUserName');
                var oMyRegForm = document.getElementById('myRegForm');
                if(oReg_txt.value.length == 0){
                    oVerifyRegUserName.innerHTML = '用户名不能为空！';
                }
                else if(oReg_txt.value.length < 6){
                    oVerifyRegUserName.innerHTML = '用户名长度小于6个字符！';
                }
                else if(oReg_txt.value.length >= 6 && oReg_txt.value.length <= 16){
                    var Reg_UserName = /^[A-Za-z0-9]{6,16}$/;
                    if(oReg_txt.value.match(Reg_UserName)){
                        oVerifyRegUserName.innerHTML = '<font color="blue">' +
                            '用户名符规！</font>';
                        	
                    }
                }
                else if(oReg_txt.value.length > 16){
                    oVerifyRegUserName.innerHTML = '用户名长度大于16个字符！';
                }
    }

            //验证注册密码
            function verifyRegPassword() {
                var oReg_pwd = document.getElementById('reg_pwd');
                var oVer_pwd_small = document.getElementById('ver_pwd_small');
                var oVer_pwd_middle = document.getElementById('ver_pwd_middle');
                var oVer_pwd_big = document.getElementById('ver_pwd_big');
                var oMyRegForm = document.getElementById('myRegForm');
                if(oReg_pwd.value.length < 6){
                    oVer_pwd_small.style.borderTopColor = '#ccc';
                    oVer_pwd_middle.style.borderTopColor = '#ccc';
                    oVer_pwd_big.style.borderTopColor = '#ccc';
                }
                if(oReg_pwd.value.length >= 6 && oReg_pwd.value.length <= 16){
                    var reg1 = /^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/;
                    var reg2 = /^[A-Za-z0-9]{6,16}$/;
                    var reg3 = /^\w{6,16}$/;
                    if(oReg_pwd.value.match(reg1)){
                        oVer_pwd_small.style.borderTopColor = 'red';
                        oVer_pwd_middle.style.borderTopColor = '#ccc';
                        oVer_pwd_big.style.borderTopColor = '#ccc';
                        
                    }
                    else if(oReg_pwd.value.match(reg2)){
                        oVer_pwd_middle.style.borderTopColor = 'blue';
                        oVer_pwd_big.style.borderTopColor = '#ccc';
                        
                    }
                    else if(oReg_pwd.value.match(reg3)){
                        oVer_pwd_small.style.borderTopColor = 'red';
                        oVer_pwd_middle.style.borderTopColor = 'blue';
                        oVer_pwd_big.style.borderTopColor = 'green';

                    }
                }               
            }

            //验证重复密码
            function verifyRegRepPassword() {
                var oReg_pwd = document.getElementById('reg_pwd');
                var oReg_repPwd = document.getElementById('reg_repPwd');
                var oVerifyRegPwd = document.getElementById('verifyRegPwd');
                var oMyRegForm = document.getElementById('myRegForm');
                if(oReg_repPwd.value.length == 0){
                    oVerifyRegPwd.innerHTML = '重复密码不能为空!';
                }
                else if(oReg_repPwd.value.length < 6){
                    oVerifyRegPwd.innerHTML = '重复密码长度小于6个字符!';
                }
                else if(oReg_repPwd.value.length >= 6){
                    oVerifyRegPwd.innerHTML = '';
                    if(oReg_repPwd.value == oReg_pwd.value){
                        oVerifyRegPwd.innerHTML = '<font color="blue">两次密码输入一致！</font>';
                    }
                    else{
                        oVerifyRegPwd.innerHTML = '两次密码输入不一致！';
                    }
                }
            }
            
          //验证注册用户名
            function verifyRegUserName1() {
                var oReg_txt = document.getElementById('reg_txt');
                var oVerifyRegUserName = document.getElementById('verifyRegUserName');
                var oMyRegForm = document.getElementById('myRegForm');
                if(oReg_txt.value.length == 0){
                    oVerifyRegUserName.innerHTML = '用户名不能为空！';
                }
                else if(oReg_txt.value.length < 6){
                    oVerifyRegUserName.innerHTML = '用户名长度小于6个字符！';
                }
                else if(oReg_txt.value.length >= 6 && oReg_txt.value.length <= 16){
                    var Reg_UserName = /^[A-Za-z0-9]{6,16}$/;
                    if(oReg_txt.value.match(Reg_UserName)){
                        oVerifyRegUserName.innerHTML = '<font color="blue">' +
                            '用户名符规！</font>';
                        
                    }
                }
                else if(oReg_txt.value.length > 16){
                    oVerifyRegUserName.innerHTML = '用户名长度大于16个字符！';
                }
    }

            //验证注册密码
            function verifyRegPassword1() {
                var oReg_pwd = document.getElementById('reg_pwd');
                var oVer_pwd_small = document.getElementById('ver_pwd_small');
                var oVer_pwd_middle = document.getElementById('ver_pwd_middle');
                var oVer_pwd_big = document.getElementById('ver_pwd_big');
                var oMyRegForm = document.getElementById('myRegForm');
                if(oReg_pwd.value.length < 6){
                    oVer_pwd_small.style.borderTopColor = '#ccc';
                    oVer_pwd_middle.style.borderTopColor = '#ccc';
                    oVer_pwd_big.style.borderTopColor = '#ccc';
                }
                if(oReg_pwd.value.length >= 6 && oReg_pwd.value.length <= 16){
                    var reg1 = /^[0-9]{6,16}$|^[a-zA-Z]{6,16}$/;
                    var reg2 = /^[A-Za-z0-9]{6,16}$/;
                    var reg3 = /^\w{6,16}$/;
                    if(oReg_pwd.value.match(reg1)){
                        oVer_pwd_small.style.borderTopColor = 'red';
                        oVer_pwd_middle.style.borderTopColor = '#ccc';
                        oVer_pwd_big.style.borderTopColor = '#ccc';
                        
                    }
                    else if(oReg_pwd.value.match(reg2)){
                        oVer_pwd_middle.style.borderTopColor = 'blue';
                        oVer_pwd_big.style.borderTopColor = '#ccc';
                        
                    }
                    else if(oReg_pwd.value.match(reg3)){
                        oVer_pwd_small.style.borderTopColor = 'red';
                        oVer_pwd_middle.style.borderTopColor = 'blue';
                        oVer_pwd_big.style.borderTopColor = 'green';
                        
                    }
                }               
            }

            //验证重复密码
            function verifyRegRepPassword1() {
                var oReg_pwd = document.getElementById('reg_pwd');
                var oReg_repPwd = document.getElementById('reg_repPwd');
                var oVerifyRegPwd = document.getElementById('verifyRegPwd');
                var oMyRegForm = document.getElementById('myRegForm');
                if(oReg_repPwd.value.length == 0){
                    oVerifyRegPwd.innerHTML = '重复密码不能为空!';
                }
                else if(oReg_repPwd.value.length < 6){
                    oVerifyRegPwd.innerHTML = '重复密码长度小于6个字符!';
                }
                else if(oReg_repPwd.value.length >= 6){
                    oVerifyRegPwd.innerHTML = '';
                    if(oReg_repPwd.value == oReg_pwd.value){
                        oVerifyRegPwd.innerHTML = '<font color="blue">两次密码输入一致！</font>';
                        
                    }
                    else{
                        oVerifyRegPwd.innerHTML = '两次密码输入不一致！';
                    }
                }
            }

            //创建验证码编码
            function createCode() {
                var code = '';
                var codeLength = 4;
                var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D',
                    'E','F','G','H','I','J','K','L','M','N','O','P',
                    'Q','R', 'S','T','U','V','W','X','Y','Z');
                for(var  i = 0; i < codeLength; i++){
                    var index = Math.floor(Math.random()*36);
                    code += random[index];
                }
                document.getElementById('code').innerHTML = code;
            }

            //验证  验证码
            function validate() {
                var oCode = document.getElementById('code');
                var oVerify_code_txt = document.getElementById('verify_code_txt');
                var oReceiveCodeMessage = document.getElementById('receiveCodeMessage');
                var oMyRegForm = document.getElementById('myRegForm');
                if(oVerify_code_txt.value.length == 0){
                    oReceiveCodeMessage.innerHTML = '验证码不能为空！';
                }
                else if(oVerify_code_txt.value.length < 4){
                    oReceiveCodeMessage.innerHTML = '验证码长度小于4个字符！';
                }
                else if(oVerify_code_txt.value.length >= 4){
                    oReceiveCodeMessage.innerHTML = '';
                    if(oVerify_code_txt.value.toUpperCase() == oCode.innerHTML){
                        oReceiveCodeMessage.innerHTML = '<font color="blue">验证码输入正确!</font>';
                    }
                    else{
                        oReceiveCodeMessage.innerHTML = '验证码输入错误！';
                        createCode();
                    }
                }
            }
            
            function validate1() {
                var oCode = document.getElementById('code');
                var oVerify_code_txt = document.getElementById('verify_code_txt');
                var oReceiveCodeMessage = document.getElementById('receiveCodeMessage');
                var oMyRegForm = document.getElementById('myRegForm');
                if(oVerify_code_txt.value.length == 0){
                    oReceiveCodeMessage.innerHTML = '验证码不能为空！';
                }
                else if(oVerify_code_txt.value.length < 4){
                    oReceiveCodeMessage.innerHTML = '验证码长度小于4个字符！';
                }
                else if(oVerify_code_txt.value.length >= 4){
                    oReceiveCodeMessage.innerHTML = '';
                    if(oVerify_code_txt.value.toUpperCase() == oCode.innerHTML){
                        oReceiveCodeMessage.innerHTML = '<font color="blue">验证码输入正确!</font>';
                        
                    }
                    else{
                        oReceiveCodeMessage.innerHTML = '验证码输入错误！';
                        createCode();
                    }
                }
            }

            //立即注册  点击事件
            function regSubClickEvent() {
                var oReg_pwd = document.getElementById('reg_pwd');
                var oVerify_code_txt = document.getElementById('verify_code_txt');
                var oReg_repPwd = document.getElementById('reg_repPwd');
                var oReg_txt = document.getElementById('reg_txt');
                var oMyRegForm = document.getElementById('myRegForm');
                var oVerifyRegUserName = document.getElementById('verifyRegUserName');
                var oLoginState = document.getElementById('loginState');
                
                var oVerifyRegUserName = document.getElementById('verifyRegUserName');
                var oReceiveCodeMessage = document.getElementById('receiveCodeMessage');
                var oVerifyRegPwd = document.getElementById('verifyRegPwd');
                var oVer_pwd_small = document.getElementById('ver_pwd_small');
                var oVer_pwd_middle = document.getElementById('ver_pwd_middle');
                var oVer_pwd_big = document.getElementById('ver_pwd_big');
                    if(oReg_txt.value.length == 0 || oReg_pwd.value.length == 0
                        || oReg_repPwd.value.length == 0 || oVerify_code_txt.value.length == 0){
                        layer.alert('用户名/密码/重复密码/验证码不能为空!',{
                            title:'提示',
                            icon:2
                        });                       
                    }
                    else if((oVerifyRegUserName.innerHTML == '<font color="blue">' +
                            '用户名符规！</font>') && ( oVer_pwd_small.style.borderTopColor
                            		== 'red' || oVer_pwd_middle.style.borderTopColor
                            		== 'blue' || oVer_pwd_big.style.borderTopColor == 'green')
                            		&& (oVerifyRegPwd.innerHTML == '<font color="blue">两次密码输入一致！</font>')
                            		&& (oReceiveCodeMessage.innerHTML == '<font color="blue">验证码输入正确!</font>')){
                    	layer.alert('恭喜您，您已成功注册!',{
                    		title:'提示',
                    		icon:6
                    	});
                    	setTimeout(function(){                   		
                    		oMyRegForm.submit(); 
                    	},2000)                      	
                    }
                    else{
                    	layer.alert('注册失败',{
                    		title:'提示',
                    		icon:2
                    	});
                    	//通过Ajax验证用户名是否已经存于数据库
//                    	var xmlHttp = new XMLHttpRequest();
//                    	var dealUrl = "Ajax/chk_username.html?username=" + obj.value;
//                    	xmlHttp.open("GET",dealUrl,true);
//                    	xmlHttp.send(null);
//                    	xmlHttp.onreadystatechange = function(){
//                    		if(xmlHttp.readyState == 4){
//                    			if(xmlHttp.status == 200){
//                    				if(xmlHttp.responseText == 'ok'){
//                    					oVerifyRegUserName.innerHTML = '您输入的用户名可以注册';
//                    					return true;
//                    				}
//                    				else{
//                    					oVerifyRegUserName.innerHTML = '您输入的用户名已存在';
//                    					return false;
//                    				}                   				
//                    			}
//                    		}
//                    		else{
//                    			oVerifyRegUserName.innerHTML = '正在验证中......';
//                    		}                    		
//                    	}
                                     	               	
                    }
            }

            //系统留言开始
            function show_lan_box() {
                layer.open({
                    type:1,
                    title:"系统留言",
                    area:["550px","510px"],
                    content:$('#language'),
                })
            }
            function lan_num_move(check) {
                document.all.control_lan_num.innerHTML = 150 - check.value.length;
            }
            function getStyle(obj,name) {
                return obj.currentStyle ? obj.currentStyle[name] :
                    getComputedStyle(obj,false)[name];
            }
            function lan_move(obj,json,fnEnd) {
                clearInterval(obj.language_timer);
                obj.language_timer = setInterval(function () {
                    var stop = true;
                    for(var attr in json){
                        var cur = 0;
                        if(attr == 'opacity'){
                            cur = getStyle(obj,attr)*100;
                        }
                        else{
                            cur = parseInt(getStyle(obj,attr));
                        }

                        var speed = (json[attr]-cur)/6;
                        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                        if(cur != json[attr])stop = false;

                        if(attr == 'opacity'){
                            obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                            obj.style.opacity=(cur+speed)/100;
                        }
                        else{
                            obj.style[attr] = cur + speed + 'px';
                        }
                    }
                    if(stop){
                        clearInterval(obj.language_timer);
                        if(fnEnd)fnEnd();
                    }
                },30)
            }
            function send_lan() {
                var oLanguage_ul = document.getElementById('language_ul');
                var oLan_area = document.getElementById('lan_area');
                var oLan_hide = document.getElementById('lan_hide');
                var aLi = document.createElement('li');              
                aLi.innerHTML = oLan_area.value;
                oLan_hide.value = aLi.innerHTML;
                oLan_area.value = '';
                if(oLanguage_ul.children.length > 0){
                    oLanguage_ul.insertBefore(aLi,oLanguage_ul.children[0]);
                }
                else{
                    oLanguage_ul.appendChild(aLi);
                }
                var iHeight = aLi.offsetHeight;
                aLi.style.height = 0;
                lan_move(aLi,{height:iHeight},function () {
                    lan_move(aLi,{opacity:100})
                })
            }
            //系统留言结束

            //使用layer插件弹出皮肤界面
            function showSkinBox() {
                layer.open({
                    type:1,
                    title:'主题皮肤背景',
                    area:['800px','550px'],
                    content:$('#skinBox'),
                })
            }

            //封装 推荐，纯色，我的 互相切换的运动函数
            function skin_move(obj,target,name) {
                clearInterval(obj.skin_timer);
                obj.skin_timer = setInterval(function () {
                    var cur = 0;
                    if(name == 'opacity'){
                        cur = getStyle(obj,name)*100;
                    }
                    else{
                        cur = parseInt(getStyle(obj,name));
                    }
                    var speed = (target - cur) / 2;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if(cur == target){
                        clearInterval(obj.skin_timer);
                    }
                    else{
                        if(name == 'opacity'){
                            obj.style.opacity = (cur + speed) / 100;
                            obj.style.filter = 'alpha(opacity='+cur+speed+')';
                        }
                        else{
                            obj.style[name] = cur + speed + 'px';
                        }
                    }
                },30)
            }

            //使用layer插件弹出个人资料界面
            function showAlterMsg() {
                layer.open({
                    type:1,
                    title:'我的资料',
                    area:['410px','398px'],
                    content:$('#alterMsg')
                })
            }

            //验证个人资料
//            function verifyAlterMsg() {
//                var oAlterMsg_txt = document.getElementById('alterMsg_txt');
//                var oVerify_alterMsgTxt = document.getElementById('verify_alterMsgTxt');
//                if(oAlterMsg_txt.value.length < 6){
//                    oVerify_alterMsgTxt.style.display = '';
//                    oVerify_alterMsgTxt.innerHTML = '';
//                }
//                else if(oAlterMsg_txt.value.length >= 6 && oAlterMsg_txt.value.length <= 16){
//                    var alter_reg1 = /^[A-Za-z0-9]{6,16}$/;
//                    if(oAlterMsg_txt.value.match(alter_reg1)){
//                        oVerify_alterMsgTxt.style.display = 'block';
//                        oVerify_alterMsgTxt.innerHTML = '用户名合法通过！';
//                    }
//                    else{
//                        layer.alert('用户名必须是数字或字母，请重新输入！',{
//                            title:'提示',
//                            icon:7
//                        });
//                    }
//                }
//                else if(oAlterMsg_txt.value.length > 16){
//                    layer.alert('用户名不能大于16个字符',{
//                        title:'提示',
//                        icon:7
//                    });
//                }
//            }
//            function verifyAlterPwd() {
//                var oAlterMsg_pwd = document.getElementById('alterMsg_pwd');
//                var oVerify_alterMsgPwd = document.getElementById('verify_alterMsgPwd');
//                var oEstablish_alter = document.getElementById('establish_alter');
//                oEstablish_alter.onmouseover = function () {
//                    oEstablish_alter.style.background = 'tomato';
//                }
//                oEstablish_alter.onmouseout = function () {
//                    oEstablish_alter.style.background = '#000';
//                }
//                oEstablish_alter.style.background = '#000';
//                if(oAlterMsg_pwd.value.length == 0){
//                    oEstablish_alter.style.background = '#ccc';
//                }
//                if(oAlterMsg_pwd.value.length < 6){
//                    oVerify_alterMsgPwd.style.display = '';
//                    oVerify_alterMsgPwd.innerHTML = '';
//                }
//                else if(oAlterMsg_pwd.value.length >= 6 && oAlterMsg_pwd.value.length <= 16){
//                    var alter_reg2 = /^[0-9]{6,16}$|^[a-zA-Z]{6,16}$|^[A-Za-z0-9]{6,16}$|^\w{6,16}$/;
//                    if(oAlterMsg_pwd.value.match(alter_reg2)){
//                        oVerify_alterMsgPwd.style.display = 'block';
//                        oVerify_alterMsgPwd.innerHTML = '密码合法通过！';
//                    }                
//                }
//                else if(oAlterMsg_pwd.value.length > 16){
//                    layer.alert('密码不能大于16个字符！',{
//                        title:'提示',
//                        icon:7
//                    });
//                }
//            }

            //商城与购物车
            function showShoppingBox() {
                layer.open({
                    type:1,
                    title:'商城与购物车',
                    area:['900px','600px'],
                    content:$('#shopping')
                })
            }

            //购物车
            function showInShopBox() {
                layer.open({
                    type:1,
                    title:'购物车',
                    area:['750px','570px'],
                    content:$('#shopping_in')
                })
            }

            //收藏歌曲箱开始
            function showStoreBox() {
                layer.open({
                    type:1,
                    title:'收藏箱',
                    area:['350px','299px'],
                    content:$('#store')
                })
            }
            $(function () {
                $('#store .store_top span').each(function (index) {
                    $(this).click(function () {
                        $(this).attr('class','myLike').siblings().removeClass('myLike');
                        $('#store .store_bottom:eq('+index+')').show().siblings().hide();
                    })
                })

                var collFlag1 = true;
                $('#collection1').click(function () {
                    if(collFlag1){
                        var store_bottom1_childred = $('<div>张阳明-他不愿</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag1 = false;
                    }
                })
                var collFlag2 = true;
                $('#collection2').click(function () {
                    if(collFlag2){
                        var store_bottom1_childred = $('<div>陈皓宸-要死要活</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag2 = false;
                    }
                })
                var collFlag3 = true;
                $('#collection3').click(function () {
                    if(collFlag3){
                        var store_bottom1_childred = $('<div>薛之谦-天后</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag3 = false;
                    }
                })
                var collFlag4 = true;
                $('#collection4').click(function () {
                    if(collFlag4){
                        var store_bottom1_childred = $('<div>萱萱-我以为</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag4 = false;
                    }
                })
                var collFlag5 = true;
                $('#collection5').click(function () {
                    if(collFlag5){
                        var store_bottom1_childred = $('<div>孟朕霆-真的没关系</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag5 = false;
                    }
                })
                var collFlag6 = true;
                $('#collection6').click(function () {
                    if(collFlag6){
                        var store_bottom1_childred = $('<div>潘辰-只会更寂寞</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag6 = false;
                    }
                })
                var collFlag7 = true;
                $('#collection7').click(function () {
                    if(collFlag7){
                        var store_bottom1_childred = $('<div>杨启斯-怎么还没睡</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag7 = false;
                    }
                })
                var collFlag8 = true;
                $('#collection8').click(function () {
                    if(collFlag8){
                        var store_bottom1_childred = $('<div>贺敬轩-罗曼蒂克的爱情</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag8 = false;
                    }
                })
                var collFlag9 = true;
                $('#collection9').click(function () {
                    if(collFlag9){
                        var store_bottom1_childred = $('<div>霍尊-粉墨</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag9 = false;
                    }
                })
                var collFlag10 = true;
                $('#collection10').click(function () {
                    if(collFlag10){
                        var store_bottom1_childred = $('<div>蒋雪儿-真的好可惜</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag10 = false;
                    }
                })
                var collFlag11 = true;
                $('#collection11').click(function () {
                    if(collFlag11){
                        var store_bottom1_childred = $('<div>大壮-差一步</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag11 = false;
                    }
                })
                var collFlag12 = true;
                $('#collection12').click(function () {
                    if(collFlag12){
                        var store_bottom1_childred = $('<div>江苏泷-追光者</div>');
                        $('#store_bottom1').append(store_bottom1_childred);
                        layer.msg('您已收藏',{
                            area:['150px','50px'],
                            icon:1
                        });
                        $(this).text('已收藏');
                        collFlag12 = false;
                    }
                })
            })
            //收藏歌曲箱结束           
            
            //查看歌曲详情开始(由于需要改id值，显得麻烦，这里我只做了四个，只把具体原理分析一下，
            // 其余的偷个懒，没搞了，)
            var lookTimer;
            $(function () {
                $('#look1,#look_ge_details').hover(function () {
                    clearTimeout(lookTimer);
                    $('#look_ge_details').show();
                    $('#look_ge_details2').hide();
                    $('#look_ge_details3').hide();
                    $('#look_ge_details4').hide();
                },function () {
                    lookTimer = setTimeout(function () {
                        $('#look_ge_details').hide();
                    },500)
                })
                $('#look2,#look_ge_details2').hover(function () {
                    clearTimeout(lookTimer);
                    $('#look_ge_details2').show();
                    $('#look_ge_details').hide();
                    $('#look_ge_details3').hide();
                    $('#look_ge_details4').hide();
                },function () {
                    lookTimer = setTimeout(function () {
                        $('#look_ge_details2').hide();
                    },500)
                })
                $('#look3,#look_ge_details3').hover(function () {
                    clearTimeout(lookTimer);
                    $('#look_ge_details3').show();
                    $('#look_ge_details').hide();
                    $('#look_ge_details2').hide();
                    $('#look_ge_details4').hide();
                },function () {
                    lookTimer = setTimeout(function () {
                        $('#look_ge_details3').hide();
                    },500)
                })
                $('#look4,#look_ge_details4').hover(function () {
                    clearTimeout(lookTimer);
                    $('#look_ge_details4').show();
                    $('#look_ge_details').hide();
                    $('#look_ge_details3').hide();
                    $('#look_ge_details2').hide();
                },function () {
                    lookTimer = setTimeout(function () {
                        $('#look_ge_details4').hide();
                    },500)
                })

                //播放mv
                $('.mv_mid > li').each(function (index) {
                    $(this).hover(function () {
                        $('.mv_name:eq('+index+')').hide();
                        $('.mv_btn:eq('+index+')').show();
                    },function () {
                        $('.mv_name:eq('+index+')').show();
                        $('.mv_btn:eq('+index+')').hide();
                    })
                })

                $('.mv_btn').each(function (index) {
                    var i = 0;
                    $(this).click(function () {
                        $('.mv_num strong:eq('+index+')').text(i+1);
                        setTimeout(function () {
                            window.open('video/video'+(index+1)+'.html');
                        },500)
                        i++;
                    })
                })

                var mv_many_flag = true;
                $('#mv_many').click(function () {
                    if(mv_many_flag){
                        $('.mv_mid').css('overflow','auto');
                        layer.msg('您可以查看更多MV了哦！',{
                            area:['300px','50px']
                        })
                        mv_many_flag = false;
                    }
                })
            })
            
            //评论区文字限制
            function comment_zi_limit(check) {
             document.all.com_res.innerHTML = 250 - check.value.length;
            }