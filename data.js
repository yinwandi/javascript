var student=(function(){
	var data=[
	                   {
		                   	name:"超人",
		                   	age:20,
		                   	score:77,
	                   },
	                   { 
		                 	name:"钢铁侠",
		                   	age:27,
		                   	score:90,
	                   },
	                   {
		                   	name:"黑寡妇",
		                   	age:39,
		                   	score:69,
	                   },
	                   {
		                   	name:"雷神",
		                   	age:68,
		                   	score:87,
	                   },
	                   {
		                   	name:"蚁人",
		                   	age:36,
		                   	score:81,
	                   },
                   ];

        return {
        	data:data,
        	fun:function(member){
        		var len=this.data.length
	    	for(var i=len;i>=2;i--){
	    		for(var j=0;j<i-1;j++){
	    			if(this.data[j][member]>this.data[j+1][member]){
	                	var k=this.data[j];
	                	this.data[j]=this.data[j+1];
	                	this.data[j+1]=k;
	                }
	    		}
	    	}
         },
          age:function (){
    	       this.fun("age");
           },
		  score:function (){
		       this.fun("score");
		    }      
      }

})()