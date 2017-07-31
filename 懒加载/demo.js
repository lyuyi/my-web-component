var oLi=document.getElementsByTagName("li")[0];//获取第一个li
var oUl=document.getElementsByTagName("ul")[0];
var oFooter=document.getElementsByTagName("footer")[0];
var oFrag=document.createDocumentFragment();//创建文档碎片节点
var num=16;
var timer=null;
var bloo=true;

function get(event){//当滚动条滚动的距离+可见区域的高度=文档的高度：可以判断到达底部
	//浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离
	var rollTop=oUl.scrollTop;
	//可见(ul)高度区域
	var clientHeight=oUl.clientHeight;
	//整个文档(ul)的高度
	var AllHeight=oUl.scrollHeight;

	console.log(AllHeight,rollTop + clientHeight);
	
	if (AllHeight === rollTop + clientHeight && bloo) { //判断已到文档底部并且显示loading,执行完成后加载内容
		bloo=false;
		//classList 属性返回元素的类名,classList 属性返回元素的类名
		oFooter.classList.remove('vision');//显示loading
		for(var i=0;i<15;i++){
			oLi=oLi.cloneNode();
			oLi.innerHTML='item'+ num++;
			oFrag.appendChild(oLi);
		}
		timer=setTimeout(function(){ //1.5秒后隐藏load，并将增加的内容显示到区域上
			oFooter.classList.add('vision');
			oUl.appendChild(oFrag);
			clearTimeout(timer);
			bloo=true;
		},1500);
	}
}

//绑定事件
document.addEventListener('mousewheel',get);
oUl.addEventListener('touchmove',get);//当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。