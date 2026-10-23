//your JS code here. If required.
let button=document.getElementById("enterBtn");
let status=document.getElementById("status");

button.addEventListener("click",()=>{
	let heading=document.createElement("h1");
	heading.textContent="Entered Metaverse";

	status.replacedWith(heading);
	
})