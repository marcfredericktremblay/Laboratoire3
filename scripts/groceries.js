// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		nutFree: true,
		lactoseFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		nutFree: true,
		lactoseFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Milk",
		nutFree: true,
		lactoseFree: false,
		organic: false,
		price: 5.31
	},
	{
		name: "Orange Juice",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 4.28
	},
	{
		name: "Chicken",
		nutFree: true,
		lactoseFree: true,
		organic: false,
		price: 7.21
	},
	{
		name: "Cheese",
		nutFree: true,
		lactoseFree: false,
		organic: false,
		price: 2.79
	},
	{
		name: "Almonds",
		nutFree: false,
		lactoseFree: true,
		organic: true,
		price: 2.79
	},
	{
		name: "Pistachio Ice Cream",
		nutFree: false,
		lactoseFree: false,
		organic: false,
		price: 5.31
	},
	{
		name: "Yogurt",
		nutFree: true,
		lactoseFree: false,
		organic: false,
		price: 4.28
	}
];


// Quicksort algorithm from https://www.guru99.com/quicksort-in-javascript.html
// Functions included in the Quicksort algorithm :
//		swap(items, leftIndex, rightIndex)
//		partition(items, left, right)
//		quickSort(items, left, right)
//
// Functions were modified as needed for this particular lab

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i].price < pivot.price) {
            i++;
        }
        while (items[j].price > pivot.price) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts() {
	let product_names = [];
	//Sorting Product List with the Quicksort Algorithm
	var sorted_prods = quickSort(products, 0, products.length-1);
	if((document.getElementById("None").checked) && ((document.getElementById("NonOrganic").checked) || (document.getElementById("Organic").checked) || (document.getElementById("LactoseFree").checked) || (document.getElementById("NutFree").checked))){
		alert("You cannot select <No Filter> and apply a filter at the same time.");
	}
	
	else if((document.getElementById("Organic").checked) && (document.getElementById("NonOrganic").checked)){
		alert("You cannot select <Organic> and <Non Organic> at the same time.");
	}
	else{
		for (let i=0; i<(sorted_prods.length); i++) {
			if((document.getElementById("NonOrganic").checked) && !(document.getElementById("Organic").checked) && (sorted_prods[i].organic == false)){
				if ((document.getElementById("NutFree").checked) && (sorted_prods[i].nutFree == true)){
					if ((document.getElementById("LactoseFree").checked) && (sorted_prods[i].lactoseFree == true)){
						product_names.push(sorted_prods[i].name + " - $" +sorted_prods[i].price);
						product_names.push(sorted_prods[i].price);
						product_names.push(sorted_prods[i].imgSource);
					}
					else if (!(document.getElementById("LactoseFree").checked)){
						product_names.push(sorted_prods[i].name + " - $" + sorted_prods[i].price);
						product_names.push(sorted_prods[i].price);
						product_names.push(sorted_prods[i].imgSource);
					}
				}
				else if (!(document.getElementById("NutFree").checked) && (document.getElementById("LactoseFree").checked) && (sorted_prods[i].lactoseFree == true)){
					product_names.push(sorted_prods[i].name + " - $" +sorted_prods[i].price);
					product_names.push(sorted_prods[i].price);
					product_names.push(sorted_prods[i].imgSource);
				}
				else if (!(document.getElementById("LactoseFree").checked) && !(document.getElementById("NutFree").checked)){
					product_names.push(sorted_prods[i].name + " - $" + sorted_prods[i].price);
					product_names.push(sorted_prods[i].price);
					product_names.push(sorted_prods[i].imgSource);
				}
			}
			else if((document.getElementById("Organic").checked) && !(document.getElementById("NonOrganic").checked) && (sorted_prods[i].organic == true)){
				if ((document.getElementById("NutFree").checked) && (sorted_prods[i].nutFree == true)){
					if ((document.getElementById("LactoseFree").checked) && (sorted_prods[i].lactoseFree == true)){
						product_names.push(sorted_prods[i].name + " - $" +sorted_prods[i].price);
						product_names.push(sorted_prods[i].price);
						product_names.push(sorted_prods[i].imgSource);
					}
					else if (!(document.getElementById("LactoseFree").checked)){
						product_names.push(sorted_prods[i].name + " - $" + sorted_prods[i].price);
						product_names.push(sorted_prods[i].price);
						product_names.push(sorted_prods[i].imgSource);
					}
				}
				else if (!(document.getElementById("NutFree").checked) && (document.getElementById("LactoseFree").checked) && (sorted_prods[i].lactoseFree == true)){
					product_names.push(sorted_prods[i].name + " - $" + sorted_prods[i].price);
					product_names.push(sorted_prods[i].price);
					product_names.push(sorted_prods[i].imgSource);
				}
				else if (!(document.getElementById("LactoseFree").checked) && !(document.getElementById("NutFree").checked)){
					product_names.push(sorted_prods[i].name + " - $" + sorted_prods[i].price);
					product_names.push(sorted_prods[i].price);
					product_names.push(sorted_prods[i].imgSource);
				}
			}
			else if(!(document.getElementById("Organic").checked) && !(document.getElementById("NonOrganic").checked)){
				if ((document.getElementById("NutFree").checked) && (sorted_prods[i].nutFree == true)){
					if ((document.getElementById("LactoseFree").checked) && (sorted_prods[i].lactoseFree == true)){
						product_names.push(sorted_prods[i].name + " - $" +sorted_prods[i].price);
						product_names.push(sorted_prods[i].price);
						product_names.push(sorted_prods[i].imgSource);
					}
					else if (!(document.getElementById("LactoseFree").checked)){
						product_names.push(sorted_prods[i].name + " - $" + sorted_prods[i].price);
						product_names.push(sorted_prods[i].price);
						product_names.push(sorted_prods[i].imgSource);
					}
				}
				else if (!(document.getElementById("NutFree").checked) && (document.getElementById("LactoseFree").checked) && (sorted_prods[i].lactoseFree == true)){
					product_names.push(sorted_prods[i].name + " - $" + sorted_prods[i].price);
					product_names.push(sorted_prods[i].price);
					product_names.push(sorted_prods[i].imgSource);
				}
				else if (!(document.getElementById("LactoseFree").checked) && !(document.getElementById("NutFree").checked)){
					product_names.push(sorted_prods[i].name + " - $" + sorted_prods[i].price);
					product_names.push(sorted_prods[i].price);
					product_names.push(sorted_prods[i].imgSource);
				}
			}
		}
	}
	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		//if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += parseFloat(chosenProducts[i]);
		//}
	}
	return Number((totalPrice).toFixed(2));
}
