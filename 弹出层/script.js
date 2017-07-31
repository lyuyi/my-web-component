//纸飘落
(function(){ 
	function snow(left,height,src){ 
	var div = document.createElement("div"); 
	var img = document.createElement("img"); 
	div.appendChild(img); 
	img.className = "roll"; 
	img.src = src; 
	div.style.left=left+"px"; 
	div.style.height=height+"px"; 
	div.className="div"; 
	document.getElementById("snowzone").appendChild(div); 
	setTimeout(function(){ 
	document.getElementById("snowzone").removeChild(div); 
	},3000); 
	} 
	setInterval(function(){ 
	var left = Math.random()*window.innerWidth; 
	var height = Math.random()*window.innerHeight; 
	var src ="img/"+"d"+Math.floor(Math.random()*2+1)+".png";//两张图片分别为"d1.png"、"d2.png" 
	snow(left,height,src); 
	},200); 
	})();

	//弹出层
	function openNew(){
	//获取页面的高度和宽度
	var sWidth=document.body.scrollWidth;
	var sHeight=document.body.scrollHeight;
	// alert('sHeight')
	//获取页面的可视区域高度和宽度
	var wHeight=document.documentElement.clientHeight;
	
	var oMask=document.createElement("div");
		oMask.id="mask";
		oMask.style.height=sHeight+"px";
		oMask.style.width=sWidth+"px";
		document.body.appendChild(oMask);
	var oLogin=document.createElement("div");
		oLogin.id="login";
		oLogin.innerHTML="<div class='loginCon'><p>大家好！我是弹出层</p><div id='close'>点击关闭</div></div>";
		document.body.appendChild(oLogin);
	
	//获取登陆框的宽和高
	var dHeight=oLogin.offsetHeight;
	var dWidth=oLogin.offsetWidth;
		//设置登陆框的left和top
		oLogin.style.left=sWidth/2-dWidth/2+"px";
		oLogin.style.top=wHeight/2-dHeight/2+"px";
	//点击关闭按钮
	var oClose=document.getElementById("close");
	
	//点击登陆框以外的区域也可以关闭登陆框
	oClose.onclick=oMask.onclick=function(){
		document.body.removeChild(oLogin);
		document.body.removeChild(oMask);
		};
	}
					
	window.onload=function(){
		var oBtn=document.getElementById("btnLogin");
			//点击登录按钮
			oBtn.onclick=function(){
				openNew();
				return false;
			};
			
	};