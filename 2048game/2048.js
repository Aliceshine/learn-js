window.onload=function(){
				var box=document.getElementById("container");
				var div=box.getElementsByClassName("a");
				var arr=[];
				var c=0,d;
				for(var i=0;i<4;i++){
					arr[i]=[];
					for(var j=0;j<4;j++){
						arr[i][j]=c;
						c++;
					}
				}
				
				for(var i=0;i<16;i++){
					div[i].innerHTML=" ";
					
				}
				div[0].innerHTML="<span>2</span>";
				div[15].innerHTML="<span>4</span>";
				
				//随机添加
				function add(){
					var b=Math.floor(Math.random()*16);
					if(div[b].innerHTML==" "){
						div[b].innerHTML="<span>2</span>";
					}else{
						add();
					}
				}
				
				function moveLeft(){
					for(var i=0;i<4;i++){
						for(var j=3;j>0;j--){
							d=arr[i][j];
							if(div[d-1].innerHTML==" "){
								div[d-1].innerHTML=div[d].innerHTML;
								div[d].innerHTML=" ";
							}else if(div[d].innerHTML==div[d-1].innerHTML&&div[d]!=" "){
								var c=parseInt(div[d].innerText)+parseInt(div[d-1].innerText);
             					div[d-1].innerHTML="<span>"+c+"</span";
             					div[d].innerHTML=" ";
							}
						}
					}
				}
				
				function moveRight(){
					for(var i=0;i<4;i++){
						for(var j=0;j<3;j++){
							d=arr[i][j];
							if(div[d+1].innerHTML==" "){
								div[d+1].innerHTML=div[d].innerHTML;
								div[d].innerHTML=" ";
							}else if(div[d].innerHTML==div[d+1].innerHTML&&div[d]!=" "){
								var c=parseInt(div[d].innerText)+parseInt(div[d+1].innerText);
             					div[d+1].innerHTML="<span>"+c+"</span";
             					div[d].innerHTML=" ";
							}
						}
					}
				}
				
				function moveUp(){
					for(var j=0;j<4;j++){
						for(var i=3;i>0;i--){
							d=arr[i][j];
							if(div[d-4].innerHTML==" "){
								div[d-4].innerHTML=div[d].innerHTML;
								div[d].innerHTML=" ";
							}else if(div[d].innerHTML==div[d-4].innerHTML&&div[d]!=" "){
								var c=parseInt(div[d].innerText)+parseInt(div[d-4].innerText);
             					div[d-4].innerHTML="<span>"+c+"</span";
             					div[d].innerHTML=" ";
							}
						}
					}
				}
            	
            	function moveDown(){
					for(var j=0;j<4;j++){
						for(var i=0;i<3;i++){
							d=arr[i][j];
							if(div[d+4].innerHTML==" "){
								div[d+4].innerHTML=div[d].innerHTML;
								div[d].innerHTML=" ";
							}else if(div[d].innerHTML==div[d+4].innerHTML&&div[d]!=" "){
								var c=parseInt(div[d].innerText)+parseInt(div[d+4].innerText);
             					div[d+4].innerHTML="<span>"+c+"</span";
             					div[d].innerHTML=" ";
							}
						}
					}
				}
				
				document.onkeydown=function(e){
					e=window.event||e;
					switch(e.keyCode){
            		case 37: //左键
            			moveLeft();
						add();
             			break;
             		case 38: //向上键
             			moveUp();
             			add();
             			break;
             		case 39: //右键
             			moveRight();
             			add();
             			break;
             		case 40: //向下键
             			add();
             			break;
             		}
				}
			}
			
