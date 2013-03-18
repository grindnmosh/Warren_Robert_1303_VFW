/*
Robert Warren
Term 1303
Visual Frameworks
I Owe, I Owe * Bill List
http://grind-design.com
https://www.dropbox.com/sh/8bkisi092jahhs9/0IygmesVE8
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
	var toErr = displaySavedInfo("errors");
	
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
	
	function getCheckBoxOnTime() {
		 if(displaySavedInfo('ontime').checked){
			 onTime = displaySavedInfo('ontime').value;
		 }else{
			 onTime = "N/A";
		 }
	};
	
	function getCheckBoxLate() {
		 if(displaySavedInfo('late').checked){
			 late = displaySavedInfo('late').value;
		 }else{
			 late = "N/A";
		 }
	};
	
	function getCheckBoxLateFee() {
		 if(displaySavedInfo('lfee').checked){
			 lateFee = displaySavedInfo('lfee').value;
		 }else{
			 lateFee = "N/A";
		 }
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
				displaySavedInfo("addNewBill").style.display = "none";
				displaySavedInfo("bill").style.display = "none";
				break;
			default:
				return false;
		};
	};
	
	function getForm(key) {
		if(!key) {
			var id = (Math.floor(Math.random()*1000000001));
		} else {
			id = key;
		};
		getSelectedRadio();
		howPaid();
		getCheckBoxOnTime();
		getCheckBoxLate();
		getCheckBoxLateFee();
		var item = {};
   			item.btData = ["Type: ", displaySavedInfo("btype").value];
    		item.bnData = ["Name: ", displaySavedInfo("bname").value];
    		item.costData = ["Amount: ", displaySavedInfo("amt").value];
    		item.importance = ["Priority: ", displaySavedInfo("prio").value];
   		 	item.whenData = ["Due: ", displaySavedInfo("due").value];
   		 	item.freqs = ["frequency: ", displaySavedInfo("freqs").value];
    		item.paid = ["Paid: ", paidValue];
   		 	item.paymentCard = ["Paid with: ", paymentValue];
   		 	item.onTime = ["On time?: ", onTime];
   		 	item.late = ["Late?: ", late];
   		 	item.lateFee = ["Late Fee?: ", lateFee];
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
		var newDiv = document.createElement("div");
		newDiv.setAttribute("id", "bill");
		var newList = document.createElement("ul");
		newDiv.appendChild(newList);	
		document.body.appendChild(newDiv);
		displaySavedInfo("bill").style.display = "block";
		for(i=0, l=localStorage.length; i<l; i++) {
			var newItem = document.createElement("li");
			var buttons = document.createElement("li");
			newList.appendChild(newItem);
			var category = localStorage.key(i);
			var input = localStorage.getItem(category);
			var totalData = JSON.parse(input);
			var newSub = document.createElement("ul");
			newItem.appendChild(newSub);
			var img = document.createElement("img");
			img.src = "img/bill.jpg";
			img.setAttribute("id", "billimg");
			newItem.appendChild(img);
			for(var d in totalData) {
				var newSubList = document.createElement("li");
				newSub.appendChild(newSubList);
				var insertText = totalData[d][0] + " " + totalData[d][1];
				newSubList.innerHTML = insertText;
				newSub.appendChild(buttons);
			};
			createButtons(localStorage.key(i), buttons);
		};
	};
	
	function createButtons(key, buttons) {
		var editButton = document.createElement("a");
		editButton.href = "#";
		editButton.key = key;
		var editText = "Edit Bill";
		editButton.addEventListener("click", makeEdits);
		editButton.innerHTML = editText;
		buttons.appendChild(editButton);
		var pageBreak = document.createElement("br");
		buttons.appendChild(pageBreak);
		var delButton = document.createElement("a");
		delButton.href = "#";
		delButton.key = key;
		var delText = "Delete Bill";
		delButton.addEventListener("click", runDelete);
		delButton.innerHTML = delText;
		buttons.appendChild(delButton);
	};
	
	function makeEdits() {
		var value = localStorage.getItem(this.key);
		var recallData = JSON.parse(value);
		switchPages("off");
		displaySavedInfo("btype").value = recallData.btData[1];
		displaySavedInfo("bname").value = recallData.bnData[1];
		displaySavedInfo("amt").value = recallData.costData[1];
		displaySavedInfo("prio").value = recallData.importance[1];
		displaySavedInfo("due").value = recallData.whenData[1];
		displaySavedInfo("freqs").value = recallData.freqs[1];
		var radioSelected = document.forms[0].status;
		for(i=0; i<radioSelected.length; i++) {
			if(radioSelected[i].checked == "Paid" && recallData == "Paid") {
				radioSelected[i].setAttribute("checked", "checked");
			} else if(radioSelected[i].value == "UnPaid" && recallData == "UnPaid");
				radioSelected[i].setAttribute("checked", "checked");
		};
		var paidWith = document.getElementById("pdwith");
		if(recallData.paid = "Paid") {
    		paymentValue = paidWith.value;
    	};
    	if(recallData.onTime[1] == "On Time") {
	    	displaySavedInfo("ontime").setAttribute("checked", "checked");
    	};
    	if(recallData.late[1] == "Late") {
	    	displaySavedInfo("late").setAttribute("checked", "checked");
    	};
    	if(recallData.lateFee[1] == "Late Fee") {
	    	displaySavedInfo("lfee").setAttribute("checked", "checked");
    	};
		displaySavedInfo("textArea").value = recallData.comData[1];
		saveBill.removeEventListener("click", validate);
		displaySavedInfo("saveMe").value = "Edit Bill";
		var changeSubmit = displaySavedInfo("saveMe");
		changeSubmit.addEventListener("click", validate);
		changeSubmit.key = this.key
	};
	
	function validate(d) {
		var getBt = displaySavedInfo("btype");
		var getBn = displaySavedInfo("bname");
		var getAmt = displaySavedInfo("amt");
		var getDue = displaySavedInfo("due");
		var getFreqs = displaySavedInfo("freqs");
		toErr.innerHTML = "";
		toErr.removeAttribute("class", "errors")
		getBt.style.border = "1px solid black";
		getBn.style.border = "1px solid black";
		getAmt.style.border = "1px solid black";
		getDue.style.border = "1px solid black";
		getFreqs.style.border = "1px solid black";
		var errors = [];
		if(getBt.value === "--Choose Bill Type--") {
			var btError = "Please choose a bill type.";
			getBt.style.border = "1px solid red";
			errors.push(btError);
		};
		if(getBn.value === "") {
			var bnError = "Please name your bill.";
			getBn.style.border = "1px solid red";
			errors.push(bnError);
		};
		
		var money = /\$\d{1,5}\.\d{2}/;
		if(!(money.exec(getAmt.value))) {
			var amtError = "Please enter amount due in $150.00 format.";
			getAmt.style.border = "1px solid red";
			errors.push(amtError); // validate regex dollar input
			};
		
		if(getDue.value === "") {
			var dueError = "Please enter due date.";
			getDue.style.border = "1px solid red";
			errors.push(dueError); 
		};
		if(getFreqs.value === "--select frequency of bill--") {
			var freqsError = "Please choose the frequency of your bill.";
			getFreqs.style.border = "1px solid red";
			errors.push(freqsError);
		};
		if(errors.length >= 1) {
			toErr.setAttribute("class", "errors")
			for(var i=0, e=errors.length; i < e; i++) {
				var err = document.createElement("li");
				err.innerHTML = errors[i];
				toErr.appendChild(err);
			};
			d.preventDefault();
			return false
		} else {
			getForm(this.key);
		}
		
	};
	
	function runDelete() {
		var verify = confirm("Are you sure you want to delete this bill. This can not be undone.");
		if(verify) {
			localStorage.removeItem(this.key);
			window.location.reload();
			alert("Bill was deleted");
		} else {
			alert("No changes have been made.");
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
	comData.addEventListener("focus", highlightNotable);
	comData.addEventListener("blur", normBordNotable);
	saveBill.addEventListener("click", validate);
	clearBill.addEventListener("click", clearAll);
	localClear.addEventListener("click", cleanHouse);
});



 