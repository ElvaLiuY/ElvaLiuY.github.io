
var speed=4; //数字越大速度越慢

var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var Zit=document.getElementById("ziti");
var Zit1=document.getElementById("ziti1");
var Zit2=document.getElementById("ziti2");
var tab2=document.getElementById("demo2");
var chet=document.getElementById("chet");
var imgt=document.getElementById('imgt');
var Pic=document.getElementById('pic4');
var Pic1=document.getElementById('pic1');
var Pic2=document.getElementById('pic2');
var aImg=document.getElementById('img2');
var MyMar=null;
tab2.innerHTML=tab1.innerHTML;
clearInterval(MyMar);
function Marquee(){
    Zit.style.display="none";
    //向右
    if(tab.scrollLeft<=0)
    {
        tab.scrollLeft+=tab1.offsetWidth-2000;
    }
    else{
        tab.scrollLeft--;
    }

    if(tab.scrollLeft==4000){
        clearInterval(MyMar);
        Zit1.style.display="block";
        chet.style.display="none";
        //zd.style.display="block";

        var arr=['pic4.png', 'pic5.png', 'pic6.png'];
        var to=null;
        var n=0;
        to=setInterval(function (){
            n++;
            Pic.src=arr[n%arr.length];
        }, 1000);

        setTimeout(function(){
            Pic.style.display="none";
            aImg.style.display="none";
            Pic1.style.display="block";
            Zit1.style.display="none";

            setTimeout(function(){
                Pic1.style.display="none";
                Zit2.style.display="block";
                Pic2.style.display="block";
            },4000)


        },3000)
    }
}


//运动
// var che=document.getElementById('che');
var zd=document.getElementById("zd");
var Cd=document.getElementById("chongdian");
var timer=null;
var iSpeed=0.1;
var oImg;
clearInterval(timer);
$(document).ready(function(){
    tab.scrollLeft=8192-window.screen.width ;
    setTimeout(function(){
        timer=setInterval(function(){
            iSpeed-=0.2;
            che.style.left=che.offsetLeft+iSpeed+'px';

            //遇到椅子 关定时器 换车
            if(che.offsetLeft-iSpeed<=-1450){
                //clearInterval(MyMar);
                clearInterval(to);
                clearInterval(timer);
                oImg=document.getElementById('img1');
                che.style.display="none";
                zd.style.display="block";
                imgt.style.display="none";
                oImg.style.display="block";
                Zit.style.display="block";
                //行走的人
                var arr=['pic1.png', 'pic2.png', 'pic3.png'];
                oImg=document.getElementById('img1');
                var to=null;
                var n=0;
                to=setInterval(function (){
                    n++;
                    oImg.src=arr[n%arr.length];
                }, 1000);
                setTimeout(function(){
                    oImg.style.display="none";
                    zd.style.display="none";
                    Cd.style.display="block";
                    MyMar=setInterval(Marquee,speed);
                },2000)
            }
        },50)
    },4000);

});
