//For "Auto Generate"
var tempImgSources = [ 
	['Scene', 'interface-image-samples/alex-ryan2.jpg'],
	['Scene', 'interface-image-samples/ben-pep.jpg'],
	['Scene', 'interface-image-samples/bruno12.jpg'],
	['Scene', 'interface-image-samples/gundogan.jpg'],
	['Scene', 'interface-image-samples/james3.jpg'],
	['Scene', 'interface-image-samples/klopp16.jpg']	
];

var initialCopy;


var tempVideoSources = [ 
	['Scene 1', 'video-samples/cat.mp4'],
	['Scene 2', 'video-samples/cat1.mp4'],
	['Scene 3', 'video-samples/cat2.mp4'],
	['Scene 4', 'video-samples/cat3.mp4'],
	['Scene 5', 'video-samples/parrot1.mp4'],
	['Scene 6', 'video-samples/parrot2.mp4']	
];


//For "Add"
var selectedShots = [
	['Shot 1', 'video-shots/parrot1.mp4'],
	['Shot 2', 'video-shots/parrot2.mp4'],
	['Shot 3', 'video-shots/parrot3.mp4'],
	['Shot 4', 'video-shots/parrot4.mp4'],
	['Shot 5', 'video-shots/parrot5.mp4'],
	['Shot 6', 'video-shots/parrot6.mp4'],
	['Shot 7', 'video-shots/parrot7.mp4']
];




window.addEventListener('load', function () {
	document.getElementById("editable-story-plot").style.display = "none";
	document.getElementById("video-shot-selector").style.display = "none";
	document.getElementById("final-video").style.display = "none";
	document.getElementById("final-story-plot").style.display = "none";
	document.getElementById("btn-home").style.display = "none";
	document.getElementById("return-buttons-for-check-result").style.display = "none";
	
	
	
	
})


function autoGenerateHandler() {
	//alert("Vse");
	//document.getElementById("story-plot").innerHTML="<img src='interface-image-samples/alex-ryan2.jpg' />";
	//document.getElementById("story-plot").innerHTML="<img src='interface-image-samples/ben-pep.jpg' />";

	document.getElementById("story-plot").innerHTML = "";
	//var narrativeValue = document.getElementById("narrative-value").value;
	//var narrativeValueElements = narrativeValue.split("-");

	initialCopy = tempVideoSources.slice();

	for (var i = 0; i < tempVideoSources.length; i++) {
		var div = document.createElement('div');
		div.setAttribute("class", "scene-shot");
		div.style.height = "110px";
		div.style.width = "195px";


		var paragraph = document.createElement('p');
		paragraph.setAttribute("class", "scene-number");
		//paragraph.innerHTML = tempVideoSources[i][0] + ' ' + (i + 0);
		paragraph.innerHTML = tempVideoSources[i][0];
		div.appendChild(paragraph);

	  // <video width="320" height="240" controls>
	  // <source src="movie.mp4" type="video/mp4">
	  // <source src="movie.ogg" type="video/ogg">
	  // Your browser does not support the video tag.
	  // </video>

		// var img = document.createElement('img');
		// img.style.width = "100%";
		// img.style.height = "100%";
		// img.src = tempVideoSources[i][1];
		// div.appendChild(img);
		// document.getElementById('story-plot').appendChild(div);


		var video = document.createElement('VIDEO');
		video.style.width = "100%";
		video.style.height = "100%";

		var sourceMP4 = document.createElement("source"); 
		sourceMP4.type = "video/mp4";
		sourceMP4.src = tempVideoSources[i][1];
		
		video.appendChild(sourceMP4);
		video.controls = true;
		div.appendChild(video);
		document.getElementById('story-plot').appendChild(div);
	}

	document.getElementById("btn-story-edit").disabled = false;
	document.getElementById("btn-story-edit").setAttribute("class", "btn btn-primary col-lg-12 col-md-12 col-sm-12");

	document.getElementById("btn-check-result").disabled = false;
	document.getElementById("btn-check-result").setAttribute("class", "btn btn-primary col-lg-12 col-md-12 col-sm-12");	


}


function homeButtonHandler() {
	tempVideoSources = initialCopy.slice();


	document.getElementById("video-story-plot-auto-generator").style.display = "";
	document.getElementById("editable-story-plot").innerHTML = "";
	document.getElementById("selectable-shot-displayer").innerHTML = "";
	document.getElementById("editable-story-plot").style.display = "none";
	document.getElementById("btn-home").style.display = "none";
	document.getElementById("video-shot-selector").style.display = "none";
	


	autoGenerateHandler();
	
}

function homeButtonHandlerForCheckResult() {

	location.reload();
}

function backToEditorHandler() {

    document.getElementById("return-buttons-for-check-result").style.display = "none";

    document.getElementById("btn-home").style.display = "";	
	document.getElementById("editable-story-plot").style.display = "";
	document.getElementById("btn-check-result").style.display = "";

	document.getElementById("final-story-plot").innerHTML = "";
	document.getElementById("final-video").innerHTML = "";
	document.getElementById("final-video").style.display = "none";
	document.getElementById("final-story-plot").style.display = "none";

    storyEditHandler();

}

/*Draw/redraw the story shots from a given array*/
function storyEditHandler() {
	document.getElementById("btn-home").style.display = "";

    document.getElementById("video-story-plot-auto-generator").innerHTML = "";
	document.getElementById("video-story-plot-auto-generator").style.display = "none";
	document.getElementById("btn-check-result").disabled = false;
	document.getElementById("btn-check-result").setAttribute("class", "btn btn-primary col-lg-12 col-md-12 col-sm-12");

	document.getElementById("editable-story-plot").style.display = "";
	document.getElementById("editable-story-plot").innerHTML = "";

	document.getElementById("editable-story-plot").setAttribute("class", "border border-primary");


	var i = 0;

	for (i; i < tempVideoSources.length; i++) {
		
		// Edit Div containing Paragraph, Image, Remove Button 
		var editableDiv = document.createElement('div');
		editableDiv.setAttribute("class", "editable-scene-shot");
		editableDiv.style.height = "180px";
		editableDiv.style.width = "195px";

		var paragraph = document.createElement('p');
		paragraph.setAttribute("class", "editable-scene-number");
		//paragraph.innerHTML = tempVideoSources[i][0] + ' ' + (i + 0);
		paragraph.innerHTML = tempVideoSources[i][0];
		

		var imageContainerDiv = document.createElement('div');
		imageContainerDiv.setAttribute("class", "editable-scene-image-container");
		imageContainerDiv.style.height = "110px";
		imageContainerDiv.style.width = "195px";

		// var img = document.createElement('img');
		// img.style.width = "100%";
		// img.style.height = "100%";
		// img.src = tempVideoSources[i][1];

		var video = document.createElement('VIDEO');
		video.style.width = "100%";
		video.style.height = "100%";

		var sourceMP4 = document.createElement("source"); 
		sourceMP4.type = "video/mp4";
		sourceMP4.src = tempVideoSources[i][1];
		
		video.appendChild(sourceMP4);
		video.controls = true;
		imageContainerDiv.appendChild(video);

		var removeButton = document.createElement('button');
		removeButton.setAttribute("id", "remove-button-" + i);
		removeButton.setAttribute("class", "btn btn-danger btn-sm")
		removeButton.style.width = "100%";		
		removeButton.style.marginTop = "10px";
		removeButton.style.clear = "both";
		removeButton.style.float = "left";
		removeButton.innerHTML = "Remove";

		//Click Even Listener for Remove Button
		//removeButton.addEventListener("click", removeButtonHandler(removeButton.id));
		removeButton.setAttribute("onclick", "removeButtonHandler(event)");

		// Initialize Editable Div with Paragraph, Image, Remove Button 
		editableDiv.appendChild(paragraph);
		editableDiv.appendChild(imageContainerDiv);
		editableDiv.appendChild(removeButton);        

		

        document.getElementById('editable-story-plot').appendChild(addButtonCreator(i));
		document.getElementById('editable-story-plot').appendChild(editableDiv);

	}

    document.getElementById('editable-story-plot').appendChild(addButtonCreator(i));


}


function addButtonCreator(i) {
	// Div containing only Add Button
	var addButtonDiv = document.createElement('div');
	addButtonDiv.setAttribute("class", "add-button-div");
	addButtonDiv.style.height = "180px";
	addButtonDiv.style.width = "30px";

	// Add button
	var addButton = document.createElement('button');
	addButton.setAttribute("id", "add-button-" + i);
	addButton.setAttribute("class", "add-button-cls btn btn-primary btn-sm");
	addButton.style.width = "30px";
	addButton.style.height = "110px";
	addButton.style.marginTop = "-10px";	
	addButton.style.color = "white";		
	addButton.innerHTML = "<span id=\"span-button-" + i + "\" class=\"add-button-text\" style=\"color:white; margin-top: 10px;\">Add</span>";
	
    //Click Even Listener for Add Button
	addButton.setAttribute("onclick", "addButtonHandler(event)");

    //Initialize Add Button Div with Add Button
	addButtonDiv.appendChild(addButton);

	return addButtonDiv;


}


function removeButtonHandler(e) {
	
	var element = e.target || e.srcElement;
    //get clicked element's ID
    var id = element.id.split("-")[2];
    

    //execute Remove
    tempVideoSources.splice(id, 1);
     
    if (tempVideoSources.length == 0) 
    	globalAddButtonClicked = -1;

    //clear the displayed screen of scenes
    document.getElementById('editable-story-plot').innerHTML="";

    // redraw the editable scenes shots
    storyEditHandler();

    if (globalAddButtonClicked != -1) { 

	    //document.getElementById("add-button-" + globalAddButtonClicked).style.backgroundColor = "red";
	     document.getElementById("add-button-" + globalAddButtonClicked).setAttribute("class", "add-button-cls btn btn-success btn-sm");
	    
	}


}

var globalAddButtonClicked = -1;

function addButtonHandler(e) {
	//document.getElementById("btn-check-result").style.display = "none";
	document.getElementById("video-shot-selector").style.display = "";

	var element = e.target || e.srcElement;
    //get clicked element's ID
    var id = element.id.split("-")[2];

    if (globalAddButtonClicked != -1) { 

	    //document.getElementById("add-button-" + globalAddButtonClicked).style.backgroundColor = "blue";
	    document.getElementById("add-button-" + globalAddButtonClicked).setAttribute("class", "add-button-cls btn btn-primary btn-sm");
	    
	}

	globalAddButtonClicked = id;

	//document.getElementById("add-button-" + id).style.backgroundColor = "red";
	document.getElementById("add-button-" + id).setAttribute("class", "add-button-cls btn btn-success btn-sm");
    //create Search field Div containing Span, Input, Search Button to browse for Video Shots Scenes   


}

function searchButtonHandler() {
	//In order to make this function work
	// Id of Clicked Add Button should be global somehow
	// so Search Button will bring results depeneding on that ID of Add Button!

	//Below code follows scenario after qeuary already got executed
	document.getElementById("video-story-plot-auto-generator").style.display = "none";
	document.getElementById("btn-check-result").disabled = false;
	//document.getElementById("btn-check-result").style.backgroundColor = 'blue';

	document.getElementById("selectable-shot-displayer").style.display = "";
	document.getElementById("selectable-shot-displayer").innerHTML = "";


	var i;

	for (i = 0; i < selectedShots.length; i++) {

		
		// Edit Div containing Paragraph, Image, Remove Button 
		var selectableDiv = document.createElement('div');
		selectableDiv.setAttribute("class", "editable-scene-shot");
		selectableDiv.style.height = "180px";
		selectableDiv.style.width = "195px";

		var paragraph = document.createElement('p');
		paragraph.setAttribute("class", "editable-scene-number");
		// paragraph.innerHTML = selectedShots[i][0] + ' ' + (i + 0);
		paragraph.innerHTML = selectedShots[i][0];

		var imageContainerDiv = document.createElement('div');
		imageContainerDiv.setAttribute("class", "editable-scene-image-container");
		imageContainerDiv.style.height = "110px";
		imageContainerDiv.style.width = "195px";

		// var img = document.createElement('img');
		// img.style.width = "100%";
		// img.style.height = "100%";
		// img.src = selectedShots[i][1];
		// imageContainerDiv.appendChild(img);

		var video = document.createElement('VIDEO');
		video.style.width = "100%";
		video.style.height = "100%";

		var sourceMP4 = document.createElement("source"); 
		sourceMP4.type = "video/mp4";
		sourceMP4.src = selectedShots[i][1];
		
		video.appendChild(sourceMP4);
		video.controls = true;
		imageContainerDiv.appendChild(video);


		var selectButton = document.createElement('button');
		selectButton.setAttribute("id", "select-button-" + i);
		selectButton.setAttribute("class", "btn btn-primary btn-sm w-100");
			
		selectButton.style.marginTop = "10px";
		
		selectButton.style.color = "white";
		selectButton.style.clear = "both";
		selectButton.style.float = "left";
		selectButton.innerHTML = "Select";



		//Click Even Listener for Remove Button
		//removeButton.addEventListener("click", removeButtonHandler(removeButton.id));
		selectButton.setAttribute("onclick", "selectButtonHandler(event)");

		// Initialize Editable Div with Paragraph, Image, Remove Button 
		selectableDiv.appendChild(paragraph);
		selectableDiv.appendChild(imageContainerDiv);
		selectableDiv.appendChild(selectButton);        

		

        
		document.getElementById('selectable-shot-displayer').appendChild(selectableDiv);

	}   


}


function selectButtonHandler(e) {

	var element = e.target || e.srcElement;
    //get clicked element's ID
    var id = element.id.split("-")[2];

     //add to this id in tempVideoSources => selectedShots[id]
     //refresh div

     /*arr.splice(index, 0, item); will insert item into arr at the 
     specified index (deleting 0 items first, that is, it's just an insert).*/

    tempVideoSources.splice(globalAddButtonClicked, 0, selectedShots[id]);


	//clear the displayed screen of scenes
	document.getElementById('editable-story-plot').innerHTML="";
	//globalAddButtonClicked = globalAddButtonClicked + 1;

	// redraw the editable scenes shots
	storyEditHandler();

	//document.getElementById("add-button-" + globalAddButtonClicked).style.backgroundColor = "red";
	document.getElementById("add-button-" + globalAddButtonClicked).setAttribute("class", "add-button-cls btn btn-success btn-sm");


}

function cancelButtonHandler() {
	document.getElementById("video-shot-selector").style.display = "none";
	globalAddButtonClicked = -1;
	document.getElementById('editable-story-plot').innerHTML="";

	storyEditHandler();

	document.getElementById("selectable-shot-displayer").style.display = "none";

}

function checkResultHandler() {
	document.getElementById("return-buttons-for-check-result").style.display = "";
    document.getElementById("btn-home").style.display = "none";
	document.getElementById("video-shot-selector").style.display = "none";
	
	document.getElementById("selectable-shot-displayer").innerHTML = "";
	document.getElementById("editable-story-plot").style.display = "none";
	document.getElementById("editable-story-plot").innerHTML = "";
	document.getElementById("btn-check-result").style.display = "none";
	document.getElementById("final-video").style.display = "";
	document.getElementById("final-story-plot").style.display = "";
	document.getElementById("video-story-plot-auto-generator").style.display = "none";


	document.getElementById("final-story-plot").innerHTML = "";
	//var narrativeValue = document.getElementById("narrative-value").value;
	//var narrativeValueElements = narrativeValue.split("-");

	//document.getElementById("final-video").innerHTML= "Working";
    fullVideoPlayer();

	for (var i = 0; i < tempVideoSources.length; i++) {
		var div = document.createElement('div');
		div.setAttribute("class", "scene-shot");
		div.style.height = "110px";
		div.style.width = "195px";


		var paragraph = document.createElement('p');
		paragraph.setAttribute("class", "scene-number");
		// paragraph.innerHTML = tempVideoSources[i][0] + ' ' + (i + 0);
		paragraph.innerHTML = tempVideoSources[i][0];
		div.appendChild(paragraph);

		var video = document.createElement('VIDEO');
		video.setAttribute("onclick", "clickedVideoHandler(event)");
		video.setAttribute("id", i);
		video.style.width = "100%";
		video.style.height = "100%";

		var sourceMP4 = document.createElement("source"); 
		sourceMP4.type = "video/mp4";
		sourceMP4.src = tempVideoSources[i][1];
		
		video.appendChild(sourceMP4);
		video.controls = true;
		div.appendChild(video);
		document.getElementById('final-story-plot').appendChild(div);
	}



}

function fullVideoPlayer() {
	document.getElementById("final-video").style.display = "";
	document.getElementById("final-video").innerHTML = "";

	var imageContainerDiv = document.createElement('div');
		imageContainerDiv.setAttribute("class", "editable-scene-image-container");
		imageContainerDiv.style.height = "300px";
		imageContainerDiv.style.width = "auto";

		play1by1(0);
		imageContainerDiv.appendChild(videomain);		
		document.getElementById("final-video").appendChild(imageContainerDiv);	


}

var videomain = document.createElement('VIDEO');
videomain.style.width = "100%";
videomain.style.height = "100%";
var sourceMP4 = document.createElement("source"); 
sourceMP4.type = "video/mp4";


function play1by1(start_id){
		playing_idx = start_id;

		videomain.src = tempVideoSources[playing_idx][1];
		
		videomain.appendChild(sourceMP4);
		videomain.controls = true;
		videomain.load();
		videomain.play();

		videomain.onended = function(){
			if (playing_idx == (tempVideoSources.length - 1))
				playing_idx = 0;
			else
				playing_idx +=1;

			videomain.src = tempVideoSources[playing_idx][1];
			videomain.play();
		}
}



function clickedVideoHandler(e) {
	
    // videomain.currentTime = 0;
    // videomain.innerHTML = "";
	var element = e.target || e.srcElement;
	// element.currentTime = 0; 
   
    play1by1(parseInt(element.id));  

}

