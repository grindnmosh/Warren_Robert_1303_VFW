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
	var time = document.getElementById("ontime");
	var late = document.getElementById("late");
	var fee = document.getElementById("lfee");
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
	var hFields = [bnData, costData, whenData, comData];
	var checkBoxes = [time, late, fee];
	//var reload = document.location.reload(true)
	
	function displaySavedInfo(field) {
		var theBill = document.getElementById(field);
		return theBill
	};
	
	function highlightBord() {
		this.setAttribute("class", "hasFocus")
	};
	
	function normBord() {
		this.removeAttribute("class", "hasFocus")
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
		return paidValue
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
   			item.btData = ["Bill Type: ", displaySavedInfo("btype").value];
    		item.bnData = ["Bill Name: ", displaySavedInfo("bname").value];
    		item.costData = ["Bill Amount: $", displaySavedInfo("amt").value];
    		item.importance = ["Bill Priority: ", displaySavedInfo("prio").value];
   		 	item.whenData = ["Bill Due Date: ", displaySavedInfo("due").value];
   		 	item.freqs = ["Bill Frequency: ", displaySavedInfo("freqs").value];
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
		var editButton = document.createElement("input");
		editButton.setAttribute("type", "button");
		editButton.setAttribute("value", "Edit Bill");
		editButton.setAttribute("id", "editBill");
		editButton.href = "#";
		editButton.key = key;
		editButton.addEventListener("click", makeEdits);
		buttons.appendChild(editButton);
		var pageBreak = document.createElement("br");
		buttons.appendChild(pageBreak);
		var delButton = document.createElement("input");
		delButton.setAttribute("type", "button");
		delButton.setAttribute("value", "Delete Bill");
		delButton.setAttribute("id", "delBill");
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
			if(radioSelected[i].value == recallData.paid[1]) {
				radioSelected[i].setAttribute("checked", "checked");
			};
		};
		displaySavedInfo("pdwith").value = recallData.paymentCard[1];    	
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
		
		var money = /\d{1,5}\.\d{2}/;
		if(!(money.exec(getAmt.value))) {
			var amtError = "Please enter amount due in 150.00 format.";
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
			onClick = document.location.reload(true)
		};
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
	for(i=0, f=hFields.length; i<f; i++) {
		hFields[i].addEventListener("focus", highlightBord)
		hFields[i].addEventListener("blur", normBord)
	};
	saveBill.addEventListener("click", validate);
	clearBill.addEventListener("click", clearAll);
	localClear.addEventListener("click", cleanHouse);
});



 