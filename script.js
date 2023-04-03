let myPromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{resolve("Hello, world")},100)
})
myPromise.then((value)=>{
	document.getElementById("output").innerHTML=value
})
