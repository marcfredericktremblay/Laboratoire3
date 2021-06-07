// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3) {
    var s3 = document.getElementById(slct3);
	
	// s3 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s3.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts();
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	for (i = 0; i < optionArray.length; i+=3) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.price = optionArray[1+i];
		//checkbox.image = optionArray[2+i];
		s3.appendChild(document.createElement("hr"));
		s3.appendChild(checkbox);
		//s3.appendChild(optionArray[2+i]);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s3.appendChild(label);


		if(productName == "Broccoli - $1.99"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/broccoli.jpg";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Bread - $2.35"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/bread.png";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Salmon - $10"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/salmon.png";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Milk - $5.31"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/milk.jpg";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Orange Juice - $4.28"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/orange_juice.png";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Chicken - $7.21"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/chicken.png";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Cheese - $2.79"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/cheese.jpg";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Almonds - $2.79"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/almonds.png";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Pistachio Ice Cream - $5.31"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/pistachio_ice_cream.jpg";
			img.width = "250";
			s3.appendChild(img);
		}
		if(productName == "Yogurt - $4.28"){
			s3.appendChild(document.createElement("br"));
			var img = document.createElement("img");
			img.src = "Images/yogurt.png";
			img.width = "250";
			s3.appendChild(img);
		}

		//var img = document.createElement("img");
		//img.src = "Images/almonds.png";
		//s3.appendChild(img);
	}

	// create a separation line
	s3.appendChild(document.createElement("hr"));
		
	// create a breakline node and add in HTML DOM
	s3.appendChild(document.createElement("br"));

}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	var images = [];
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].price);
			para.appendChild(document.createElement("br"));
		}
	}
		
	// add paragraph
	c.appendChild(para);
	// putting separation line
	c.appendChild(document.createElement("hr"))
	// total price
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

// This function display changes for each next button click
// It is adapted from https://www.htmlgoodies.com/javascript/making-a-wizard-with-javascript/
function handleWizardNext(){
	if((document.getElementById("ButtonNext").name == "Step3") && !(document.getElementById("Organic").checked) && !(document.getElementById("NonOrganic").checked) && !(document.getElementById("None").checked) && !(document.getElementById("LactoseFree").checked) && !(document.getElementById("NutFree").checked)){
	}
	else if((document.getElementById("ButtonNext").name == "Step3") && (document.getElementById("None").checked) && ((document.getElementById("NonOrganic").checked) || (document.getElementById("Organic").checked) || (document.getElementById("LactoseFree").checked) || (document.getElementById("NutFree").checked))){
		populateListProductChoices('dietSelect', 'preferenceSelect', 'displayProduct');
	}
	else if((document.getElementById("ButtonNext").name == "Step3") && (document.getElementById("Organic").checked) && (document.getElementById("NonOrganic").checked)){
		populateListProductChoices('dietSelect', 'preferenceSelect', 'displayProduct');
	}
	else{
    	if (document.getElementById("ButtonNext").name == "Step2"){
    	    // Change the button name – we use this to keep track of which step to display on a click
    	    document.getElementById("ButtonNext").name = "Step3";
   		    document.getElementById("ButtonPrevious").name = "Step1";
    	    // Disable/enable buttons when reach reach start and review steps
        	document.getElementById("ButtonPrevious").disabled = "";
        	// Display next step
			openInfo(event, "Client");
    	}

    	else if (document.getElementById("ButtonNext").name == "Step3"){
        	// Change the button name – we use this to keep track of which step to display on a click
        	document.getElementById("ButtonNext").name = "Step4";
        	document.getElementById("ButtonPrevious").name = "Step2";
        	// Generate pesonalized product list
        	populateListProductChoices('dietSelect', 'preferenceSelect', 'displayProduct');
        	// Display next step
			openInfo(event, "Products");
    	}

    	else if (document.getElementById("ButtonNext").name == "Step4"){
        	// Change the button name – we use this to keep track of which step to display on a click
        	document.getElementById("ButtonNext").name = "Step5";
        	document.getElementById("ButtonPrevious").name = "Step3";
        	// Display next step
			openInfo(event, "Cart");
    	}

    	else if (document.getElementById("ButtonNext").name == "Step5"){

			document.getElementById("ButtonNext").disabled = "disabled";
			document.getElementById("ButtonPrevious").disabled = "disabled";
			document.getElementById("ButtonCancel").disabled = "disabled";

			// Display next step
			openInfo(event, "Goodbye");
		}
	}
}


// This function display changes for each previous button click
// It is adapted from https://www.htmlgoodies.com/javascript/making-a-wizard-with-javascript/
function handleWizardPrevious(){
    if (document.getElementById("ButtonPrevious").name == "Step1"){
        // Change the button name – we use this to keep track of which step to display on a click
        document.getElementById("ButtonNext").name = "Step2";
        document.getElementById("ButtonPrevious").name = "";
        // Disable/enable buttons when reach reach start and review steps
        document.getElementById("ButtonPrevious").disabled = "disabled";
        // Display previous step
        openInfo(event, "Hello");
        
    }
    else if (document.getElementById("ButtonPrevious").name == "Step2"){
        // Change the button name – we use this to keep track of which step to display on a click
        document.getElementById("ButtonNext").name = "Step3";
        document.getElementById("ButtonPrevious").name = "Step1";
        // Display previous step
        openInfo(event, "Client");
    }
    else if (document.getElementById("ButtonPrevious").name == "Step3"){
        // Change the button name – we use this to keep track of which step to display on a click
        document.getElementById("ButtonNext").name = "Step4";
        document.getElementById("ButtonPrevious").name = "Step2";
        // Display previous step
        openInfo(event, "Products");
    }
}