
(function(){
    var nowShow={
        nowShowPage:$('.daily-information'),
        hide:function(){
            this.nowShowPage.addClass('hide');
        },
        show:function(){
            this.nowShowPage.removeClass('hide');
        },
        pushPageAndShow:function(page){
            this.hide();
            this.nowShowPage=page;
            this.show();
        }
    }

    Q.reg('home',function(){//增加首页路由
        nowShow.pushPageAndShow($('.daily-information'));
     });

    Q.reg('realTime',function(){//增加实时信息路由
        nowShow.pushPageAndShow($('.real-time-information'));
    });

    Q.reg('realVideoTime',function(){//增加实时视频路由
        nowShow.pushPageAndShow($('.real-time-video-information'));
    });

    Q.init({
       
        index:'home'/* 首页地址 */
    });




})()
