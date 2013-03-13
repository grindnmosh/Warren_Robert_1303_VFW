/*

Robert Warren
Term 1303
Visual Frame Works
I Owe, I Owe * Bill List
https://github.com/grindnmosh/Warren_Robert_1303_VFW

*/

window.addEventListener("DOMContentLoaded", function() {
	var btData = document.getElementById("btype");
	var bnData = document.getElementById("bname");
	var costData = document.getElementById("amt");
	var importance = document.getElementById("prio");
	var whenData = document.getElementById("due");
	var comData = document.getElementById("textArea");
	var checkBox = document.forms[0].paymentTime;
	var payer = document.forms[0].status;
	var cardCash = document.getElementById("pdwith");
	var saveSuccess = "Your Bill Is Saved!"
	var saveBill = document.getElementById("saveMe");
	var clearBill = document.getElementById("resetMe");
	var backBill = document.getElementById("back");
	var localClear = document.getElementById("clearAllData");
	var frequency = ["--select frequency of bill--", "one time", "weekly", "biweekly", "monthly", "quarterly", "annually"];
	var displayLink = displaySavedInfo("displayLink");
	
	function displaySavedInfo(field) {
	var theBill = document.getElementById(field);
	return theBill
	};
	
	function highlightBill() {
		bnData.setAttribute("class", "hasFocus");
		return highlightBill;
	};

	function highlightAmt() {
		costData.setAttribute("class", "hasFocus");
		return highlightAmt;
	};

	function highlightPayable() {
		whenData.setAttribute("class", "hasFocus");
		return highlightPayable;
	};

	function highlightNotable() {
		comData.setAttribute("class", "hasFocus");
		return highlightNotable;
	};		

	function normBordBill() {
		bnData.removeAttribute("class", "hasFocus");
		return normBordBill;
	};

	function normBordAmt() {
		costData.removeAttribute("class", "hasFocus");
		return normBordAmt;
	};

	function normBordPayable() {
		whenData.removeAttribute("class", "hasFocus");
		return normBordPayable;
	};

	function normBordNotable() {
		comData.removeAttribute("class", "hasFocus");
		return normBordNotable;
	}; 
	
	function addBillType() {
		var grabForm = document.getElementsByTagName("form"[0]);
		var grabSelect = displaySavedInfo("top");
		var newSelect = document.createElement("select");
			newSelect.setAttribute("id", "freqs");
		for(var i=0, f=frequency.length; i<f; i++) {
			var newOption = document.createElement("option");
			var insertText = frequency[i];
			newOption.setAttribute("value", insertText);
			newOption.innerHTML = insertText;
			newSelect.appendChild(newOption);
		};
		grabSelect.appendChild(newSelect);
	};
	
	function getSelectedRadio() {
		var radioSelected = document.forms[0].status;
		for(i=0; i<radioSelected.length; i++) {
			if(radioSelected[i].checked) {
				paidValue = radioSelected[i].value;
			};
		};
	};
	
	function getCheckBoxValue() {
		var checkBoxesSelected = document.forms[0].paymentTime;
		for(i=0; i<checkBoxesSelected.length; i++) {
			if(checkBoxesSelected[i].checked) {
				ptValue = checkBoxesSelected[i].value
			} else {
				ptValue = " "
			};
		};
	};
	
	function howPaid() {
		var paidWith = document.getElementById("pdwith");
		if(pd.checked) {
    		paymentValue = paidWith.value;
    	} else {
    		paymentValue = "N/A";
    	};	
	};
	
	function switchPages(status) {
		switch(status) {
			case "on":
				displaySavedInfo("addBill").style.display = "none";
				displaySavedInfo("clearAllData").style.display = "block";
				displaySavedInfo("displayLink").style.display = "none";
				displaySavedInfo("addNewBill").style.display = "block";
				displaySavedInfo("footer").style.display = "none";
				break;
			case "off":
				displaySavedInfo("addBill").style.display = "block";
				displaySavedInfo("clearAllData").style.display = "block";
				displaySavedInfo("displayLink").style.display = "block";
				displaySavedInfo("addAnotherBill").style.display = "none";
				displaySavedInfo("bill").style.display = "none";
				break;
			default:
				return false;
		};
	};
	
	function getForm() {
		var id = "z"+(Math.floor(Math.random()*1000000001))
		getSelectedRadio();
		howPaid();
		getCheckBoxValue();
		var item = {};
   			item.btData = ["Type: ", displaySavedInfo("btype").value];
    		item.bnData = ["Name: ", displaySavedInfo("bname").value];
    		item.costData = ["Amount: ", displaySavedInfo("amt").value];
    		item.importance = ["Priority: ", displaySavedInfo("prio").value];
   		 	item.whenData = ["Due: ", displaySavedInfo("due").value];
   		 	item.freqs = ["frequency: ", displaySavedInfo("freqs").value];
    		item.paid = ["Paid: ", paidValue];
   		 	item.paymentCard = ["Paid with: ", paymentValue];
   		 	item.when = ["On time? Late fee?: ", ptValue];
   		 	item.comData = ["Comments: ", displaySavedInfo("textArea").value];
    	localStorage.setItem(id, JSON.stringify(item));
    	alert(saveSuccess);
  	 	saveMe.setAttribute("type", "reset");  
    	return getForm;
  	};

	function getBill() {
		switchPages("on"); 
		if(localStorage.length === 0) {
			alert("There is no data to view.");
		};
		var newForm = document.createElement("form");
		newForm.setAttribute("id", "bill");
		var newList = document.createElement("ul");
		newForm.appendChild(newList);
		var img = document.createElement("img");
			img.src = "img/bill.jpg";
			img.setAttribute("id", "billimg");
			newForm.appendChild(img);	
		document.body.appendChild(newForm);
		displaySavedInfo("bill").style.display = "block";
		for(i=0, l=localStorage.length; i<l; i++) {
			var newItem = document.createElement("li");
			newList.appendChild(newItem);
			var category = localStorage.key(i);
			var input = localStorage.getItem(category);
			var totalData = JSON.parse(input);
			var newSub = document.createElement("ul");
			newItem.appendChild(newSub);
			for(var d in totalData) {
				var newSubList = document.createElement("li");
				newSub.appendChild(newSubList);
				var insertText = totalData[d][0] + " " + totalData[d][1];
				newSubList.innerHTML = insertText;
			};
		};
	};
	
	function clearAll() {
		var areYouSure = confirm("Are you sure you want to clear the form and start over?");
		if(areYouSure) {
			resetMe.setAttribute("type", "reset");
			alert("Form was reset.");
		} else {
			alert("No changes were made to your input.");
		};
		return clearAll
	};
	
	function cleanHouse() {
		if(localStorage.length === 0) {
			alert("There is no data to clear!!");
		} else {
		localStorage.clear();
		alert("All bills are deleted");
		window.location.reload();
		};
		return false;
	};//updated with conditional per instruction

// storing it in alpha order and calling it in the order saved not by the value name. 
//Used array numbers. even using loops did it out of order

	/*function savedData() {
		localStorage.setItem("bType", btData.value);
		localStorage.setItem("Name", bnData.value);
		localStorage.setItem("Amount", costData.value);
		localStorage.setItem("Priority", importance.value);
		localStorage.setItem("Due Date", whenData.value);
		localStorage.setItem("Comments", comData.value);
		for(i=0, c=payer.length; i<c; i++) {
     		if(payer[i].checked) {
        		localStorage.setItem("Payment Status: ", payer[i].value)
    		};
    	};
    	if(pd.checked) {
     		 localStorage.setItem("Payment Method: ", pdwith.value)
  		};
    	for(i=0, c=checkBox.length; i<c; i++) {
    		if(checkBox[i].checked) {
    			localStorage.setItem("On Time or Late? Fee?: ", checkBox[i].value)
    		};
		};
		return savedData;
	}; 

	function magicFill() {
		var btDataKey = localStorage.key(8);
		var btDataValue = localStorage.getItem(btDataKey);
		btData.value = btDataValue;
		var bnDataKey = localStorage.key(3);
		var bnDataValue = localStorage.getItem(bnDataKey);
		bnData.value = bnDataValue;
		var costDataKey = localStorage.key(0);
		var costDataValue = localStorage.getItem(costDataKey);
		costData.value = costDataValue;
		var prioDataKey = localStorage.key(7);
		var prioDataValue = localStorage.getItem(prioDataKey);
		importance.value = prioDataValue;
		var dueDataKey = localStorage.key(2);
		var dueDataValue = localStorage.getItem(dueDataKey);
		whenData.value = dueDataValue;
		var comDataKey = localStorage.key(1);
		var comDataValue = localStorage.getItem(comDataKey);
		comData.value = comDataValue;
		payer.value = getSelectedRadio();
		cardCash.value = howPaid();
		checkBox.value = getCheckBoxValue();
		return magicFill
	};*/
	
	/*btData.addEventListener("blur", savedData);
	bnData.addEventListener("blur", savedData);
	costData.addEventListener("blur", savedData);
	importance.addEventListener("change", savedData);
	whenData.addEventListener("blur", savedData);
	comData.addEventListener("blur", savedData);
	magicFill();*/


	addBillType();
	displayLink.addEventListener("click", getBill);
	bnData.addEventListener("focus", highlightBill);
	bnData.addEventListener("blur", normBordBill);
	costData.addEventListener("focus", highlightAmt);
	costData.addEventListener("blur", normBordAmt);
	whenData.addEventListener("focus", highlightPayable);
	whenData.addEventListener("blur", normBordPayable);
	saveBill.addEventListener("click", getForm);
	clearBill.addEventListener("click", clearAll);
	localClear.addEventListener("click", cleanHouse);
});



 