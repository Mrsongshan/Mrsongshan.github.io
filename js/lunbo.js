/*
* @Author: Marte
* @Date:   2020-10-19 15:19:45
* @Last Modified by:   Marte
* @Last Modified time: 2020-10-19 15:21:05
*/

'use strict';
/*
三大功能
1、自动播放
2、手动切换
3、左右切换
实现方法：
1、找对象:slide lis spans prev next
2、声明两个公共变量  ： i   timer(定时器);
timer = setInterval(func,1000);
clearInterval(timer);
3、自动播放
4、手动切换
5、左右切换
 */

window.onload = function  () {
  var slide = document.getElementById('slide');
  var lis   = slide.getElementsByTagName('li');
  var spans = slide.getElementsByTagName('span');
  var prev  = document.getElementById('prev');
  var next  = document.getElementById('next');
  var i = 0;
  var timer;

//自动切换
    timer = setInterval(auto,3000);

//手动切换

for(var k = 0 ; k<=spans.length-1 ; k++){
  spans[k].index = k;
  spans[k].onmouseenter = function(){
    clearInterval(timer);
    i = this.index;
    show();

  }
  spans[k].onmouseleave = function(){
    timer = setInterval(auto,3000);

  }
}
//左右切换
prev.onclick = function(){
    clearInterval(timer);
    i--;
    if(i==-1){i=spans.length-1}
   show();

  timer = setInterval(auto,3000);

}
next.onclick = function(){
    clearInterval(timer);
    i++;
    if(i==spans.length){i=0}
    show();
timer = setInterval(auto,3000);

}

//图片自动切换函数
function auto () {
  i++;
  if(i==spans.length){ i=0;}
   show();

}
function show(){
  //改变其它的
  for(var j= 0; j<= spans.length-1; j++){
    lis[j].style.display = 'none';
    spans[j].style.background = "blue";

  }
  //改变的当前的
  lis[i].style.display =  'block';
  spans[i].style.background = 'orange';
}

}

