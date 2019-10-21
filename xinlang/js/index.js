$(function () {
    // 0.监听内容的时时输入
    $("body").delegate(".comment","propertychange input", function () {
        // 判断是否输入了内容
        if($(this).val().length > 0){
            // 让按钮可用
            $(".send").prop("disabled", false);
        }else{
            // 让按钮不可用
            $(".send").prop("disabled", true);
        }
    });
//判断页码
    getMsgPage();
    // var number =$.getCookie("pageNumber")||1;
    var number =window.location.hash.substring(1)||1
function getMsgPage(){
    $(".page").html("");
        $.ajax({
            type:"get",
            url:"weibo.php",
            data:"act=get_page_count",
            success: function (msg) {
                var obj= eval("("+msg+")");
                for(var i =0 ;i<obj.count;i++){
                    var $a =$("<a href=\"javascript:;\">"+(i+1)+"</a>");
                    if(i===(number-1)){
                        $a.addClass("cut")
                    }
                    $(".page").append($a);
                }


            },error:function (xhr) {
                console.log(xhr.status);
            }
        })
}
    //获取数据
    getMsgList(number);
    function getMsgList(number){
        $(".messageList").html("");
        $.ajax({
            type:"get",
            url:"weibo.php",
            data:"act=get&page="+number,
            success: function (msg) {
                var obj= eval("("+msg+")");
                $.each(obj,function (key,value) {
                    // 根据内容创建节点
                    var $weibo = createEle(value);
                    $weibo.get(0).obj=value;
                    // 插入微博
                    $(".messageList").append($weibo);
                });
            },error:function (xhr) {
                console.log(xhr.status);
            }
        })
    }
    // 1.监听发布按钮的点击
    $(".send").click(function () {
        // 拿到用户输入的内容
        var $text = $(".comment").val();
        $.ajax({
            type:"get",
            url:"weibo.php",
            data:"act=add&content="+$text,
            success: function (msg) {
                var obj= eval("("+msg+")");
                obj.content = $text;
                // 根据内容创建节点
                var $weibo = createEle(obj);
                $weibo.get(0).obj=obj;
                // 插入微博
                $(".messageList").prepend($weibo);
                // 清空输入框的内容
                $(".comment").val("");
                getMsgPage();
                //删除前面的一条微博
                if($(".info").length>5){
                    $(".info:last-child").remove();
                }
            },error:function (xhr) {
                console.log(xhr.status);
            }
        })
    });

    // 2.监听顶点击
    $("body").delegate(".infoTop", "click", function () {
        $(this).text(parseInt($(this).text()) + 1);
        var obj=$(this).parents(".info").get(0).obj;
       $.ajax({
           type:"get",
           url:"weibo.php",
           data:"act=acc&id="+obj.id,
           success: function (msg) {
               console.log(msg);
           },error:function (xhr) {
               console.log(xhr.status);
           }
       })
    });
    // 3.监听踩点击
    $("body").delegate(".infoDown", "click", function () {
        $(this).text(parseInt($(this).text()) + 1);
        var obj=$(this).parents(".info").get(0).obj;
        $.ajax({
            type:"get",
            url:"weibo.php",
            data:"act=ref&id="+obj.id,
            success: function (msg) {
                console.log(msg);
            },error:function (xhr) {
                console.log(xhr.status);
            }
        })
    });
    // 4.监听删除点击
    $("body").delegate(".infoDel", "click", function () {
        $(this).parents(".info").remove();
        var obj=$(this).parents(".info").get(0).obj;
        $.ajax({
            type:"get",
            url:"weibo.php",
            data:"act=del&id="+obj.id,
            success: function (msg) {
                console.log(msg);
            },error:function (xhr) {
                console.log(xhr.status);
            }
        })
        //重新获取当前这一页数据
        getMsgList($(".cut").html())
    });
    //5监听页码的点击
    $("body").delegate(".page>a", "click", function () {
        $(this).addClass("cut");
        $(this).siblings().removeClass("cut");
        // console.log($(this).html());
        getMsgList($(this).html());
        //保存点击的页码
        // $.addCookie("pageNumber",$(this).html())
        window.location.hash =$(this).html();
    });


    // 创建节点方法
    function createEle(obj) {
        var $weibo = $("<div class=\"info\">\n" +
            "            <p class=\"infoText\">"+obj.content+"</p>\n" +
            "            <p class=\"infoOperation\">\n" +
            "                <span class=\"infoTime\">"+formartDate(obj.time)+"</span>\n" +
            "                <span class=\"infoHandle\">\n" +
            "                    <a href=\"javascript:;\" class='infoTop'>"+obj.acc+"</a>\n" +
            "                    <a href=\"javascript:;\" class='infoDown'>"+obj.ref+"</a>\n" +
            "                    <a href=\"javascript:;\" class='infoDel'>删除</a>\n" +
            "                </span>\n" +
            "            </p>\n" +
            "        </div>");
        return $weibo;
    }

    // 生成时间方法
    function formartDate(time) {
        var date = new Date(time*1000);
        // 2018-4-3 21:30:23
        var arr = [date.getFullYear() + "-",
            date.getMonth() + 1 + "-",
            date.getDate() + " ",
            date.getHours() + ":",
            date.getMinutes() + ":",
            date.getSeconds()];
        return arr.join("");

    }
});