//your JS code here. If required.
var resolveAfter=(value,delay)=>
	setTimeout(()=>{
		return new Promise(resolve(value))
		
	},1000);

document.getElementById("output").innerHTML=resolveAfter("Hello, world!",1000);
