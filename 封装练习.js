function $(selector){
	return $.prototype.init(selector);
}
$.prototype={
	init:function(selector){
       this.dom=document.querySelectorAll(selector);
       return this;
	},
	click:function(fun){
		for(var i=0;i<this.dom.length;i++){
			this.dom[i].addEventListener("click",fun,false);
		}
		
	},
	attr:function(){
		if(arguments.length==1){
			return this.dom[arguments[0]]
		}else if(arguments.length==2){
		    for(var i=0;i<this.dom.length;i++){
		    	this.dom[i][arguments[0]]=arguments[1]
		    }
		}
	},
}





// function $(selector){
// 	this.dom=document.querySelectorAll(selector)  //传进来的数组
// }
// $.prototype.click=function(fun){  
// 	for(var i =0;i<this.dom.length;i++){   //遍历这个数组
// 		this.dom[i].addEventListener("click",fun,false)
// 	}
	
// }