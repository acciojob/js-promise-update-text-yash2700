let myPromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{resolve("Hello, world!")},1000)
})
myPromise.then((value)=>{
	document.getElementById("output").innerHTML=value
})
