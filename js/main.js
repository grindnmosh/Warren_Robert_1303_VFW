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
	var costData = document.getElementById("amt");
	var anyNotes = document.getElementById("textArea");
	var checkBox = document.forms[0].paymentTime;
	var payer = document.forms[0].status;
	var anyNotes = document.getElementById("textArea");
	var saveSuccess = "Your Bill Is Saved!"
	var myField = document.getElementById("bname");
	var myAmt = document.getElementById("amt");
	var payIt = document.getElementById("due");
	var takeNote = document.getElementById("textArea");
	var saveBill = document.getElementById("saveMe");
	var clearBill = document.getElementById("resetMe");
	var backBill = document.getElementById("back");
	var thankYou = document.createElement("p");
	var myForm = document.getElementById("addBill");
	var thanksAlot = "Thank you for submitting your new bill!";
	var btData = document.getElementById("btype"); 
	var localClear = document.getElementById("clearAllData");

	var highlightBill = function() {
		myField.setAttribute("class", "hasFocus");
		return highlightBill;
	};

	var highlightAmt = function() {
		myAmt.setAttribute("class", "hasFocus");
		return highlightAmt;
	};

	var highlightPayable = function() {
		payIt.setAttribute("class", "hasFocus");
		return highlightPayable;
	};

	var highlightNotable = function() {
		takeNote.setAttribute("class", "hasFocus");
		return highlightNotable;
	};		

	var normBordBill = function() {
		myField.removeAttribute("class", "hasFocus");
		return normBordBill;
	};

	var normBordAmt = function() {
		myAmt.removeAttribute("class", "hasFocus");
		return normBordAmt;
	};

	var normBordPayable = function() {
		payIt.removeAttribute("class", "hasFocus");
		return normBordPayable;
	};

	 normBordNotable = function() {
		takeNote.removeAttribute("class", "hasFocus");
		return normBordNotable;
	};

	var getForm = function() {
		localStorage.setItem("bType", btData.value)
		localStorage.setItem("Name", bnData.value)
		localStorage.setItem("Amount", costData.value)
		localStorage.setItem("Priority", importance.value)
		localStorage.setItem("Due Date", whenData.value)
		localStorage.setItem("Comments", anyNotes.value)
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
		alert(saveSuccess);
		saveMe.setAttribute("type", "reset");	
		for(i=0, l=localStorage.length; i<l; i++) {
			var category = localStorage.key(i);
			var input = localStorage.getItem(category)
			console.log(category + ": " + input);
		};	
		return getform;
	};

	var clearAll = function() {
		var areYouSure = confirm("Are you sure you want to clear the form and start over?");
		if(areYouSure) {
			resetMe.setAttribute("type", "reset");
			alert("Form was reset.");
		} else {
			alert("No changes were made to your input.");
		};
		return clearAll
	};


// storing it in alpha order and calling it in the order saved not by the value name. 
//Used array numbers. even using loops did it out of order

	var savedData = function() {
		localStorage.setItem("bType", btData.value);
		localStorage.setItem("Name", bnData.value);
		localStorage.setItem("Amount", costData.value);
		localStorage.setItem("Priority", importance.value);
		localStorage.setItem("Due Date", whenData.value);
		localStorage.setItem("Comments", anyNotes.value);
		return savedData;
	};

	var magicFill = function() {
		var btDataKey = localStorage.key(5);
		var btDataValue = localStorage.getItem(btDataKey);
		btData.value = btDataValue;
		var bnDataKey = localStorage.key(3);
		var bnDataValue = localStorage.getItem(bnDataKey);
		bnData.value = bnDataValue;
		var costDataKey = localStorage.key(0);
		var costDataValue = localStorage.getItem(costDataKey);
		costData.value = costDataValue;
		var prioDataKey = localStorage.key(4);
		var prioDataValue = localStorage.getItem(prioDataKey);
		importance.value = prioDataValue;
		var dueDataKey = localStorage.key(2);
		var dueDataValue = localStorage.getItem(dueDataKey);
		whenData.value = dueDataValue;
		var comDataKey = localStorage.key(1);
		var comDataValue = localStorage.getItem(comDataKey);
		anyNotes.value = comDataValue;
		return magicFill
	};

	var cleanHouse = function() {
		localStorage.clear();
		return cleanHouse;
	};

	btData.addEventListener("blur", savedData);
	bnData.addEventListener("blur", savedData);
	costData.addEventListener("blur", savedData);
	importance.addEventListener("change", savedData);
	whenData.addEventListener("blur", savedData);
	anyNotes.addEventListener("blur", savedData);
	magicFill()


	myField.addEventListener("focus", highlightBill);
	myField.addEventListener("blur", normBordBill);
	myAmt.addEventListener("focus", highlightAmt);
	myAmt.addEventListener("blur", normBordAmt);
	payIt.addEventListener("focus", highlightPayable);
	payIt.addEventListener("blur", normBordPayable);
	takeNote.addEventListener("focus", highlightNotable);
	takeNote.addEventListener("blur", normBordNotable);
	saveBill.addEventListener("click", getForm);
	clearBill.addEventListener("click", clearAll);

	localClear.addEventListener("click", cleanHouse);

});



 