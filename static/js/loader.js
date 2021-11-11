function load(){
	
	var age=document.getElementById('age').value;
	var preg=document.getElementById('preg').value;
	var bp=document.getElementById('bp').value;
	var skin=document.getElementById('skin').value;
	var insu=document.getElementById('insu').value;
	var bmi=document.getElementById('bmi').value;
	
	if(age==0 || preg==0 || bp==0 || skin==0  || insu==0 || bmi==0)
	{
		alert("Please enter non-zero / non-null values.");
		return false;
	}
	else
	{
	console.log("age: ",age,"preg: ",preg,"bp: ",bp,"skin: ",skin,"insu: ",insu,"bmi: ",bmi);
	
	document.getElementById("loading").classList.add("loading");
	document.getElementById("loading2").classList.add("uil-ring-css");
	var loadingOverlay = document.querySelector('.loading');
	function toggleLoading(event){
	if (event.keyCode !== 13) return;
  
		document.activeElement.blur();
  
	if (loadingOverlay.classList.contains('hidden')){
		loadingOverlay.classList.remove('hidden');
		} else {
		loadingOverlay.classList.add('hidden');
		}
	}

	document.addEventListener('keydown', toggleLoading);
	}
}


