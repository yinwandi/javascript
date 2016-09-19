 var cat={
           name:"mimi",
           
           age:2,
           sayName:function(){
           	alert(this.name)
            return this
           },
           sayHello:function(){
           	alert("大家好我是"+this.name)
            return this
           },
           eat:function(food){
                  alert("我喜欢吃"+food)
                  return this
           },
           cont:function(nub1,nub2,sign){
           	var result=0;
           	switch(sign){
           		case "+" :result=Number(nub1)+Number(nub2);break;
           		case "-" :result=Number(nub1)-Number(nub2);break;
           		case "*" :result=Number(nub1)*Number(nub2);break;
           		case "/" :result=Number(nub1)/Number(nub2);break;
           	}
            var jiguo=nub1+sign+nub2+"="+result
           	alert(jiguo);
           }
     }