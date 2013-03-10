/*

Robert Warren
Term 1303
Visual Frame Works
I Owe, I Owe * Bill List
https://github.com/grindnmosh/Warren_Robert_1303_VFW

*/

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

var highlightBill = function() {
	myField.setAttribute("class", "hasFocus")
};

var highlightAmt = function() {
	myAmt.setAttribute("class", "hasFocus")
};

var highlightPayable = function() {
	payIt.setAttribute("class", "hasFocus")
};

var highlightNotable = function() {
	takeNote.setAttribute("class", "hasFocus")
};		

var normBordBill = function() {
	myField.removeAttribute("class", "hasFocus")
};

var normBordAmt = function() {
	myAmt.removeAttribute("class", "hasFocus")
};

var normBordPayable = function() {
	payIt.removeAttribute("class", "hasFocus")	
};

var normBordNotable = function() {
	takeNote.removeAttribute("class", "hasFocus")	
};

var saveTap = function() {
	saveBill.setAttribute("class", "hasFocus")
};	

var clearTap = function() {
	clearBill.setAttribute("class", "hasFocus")
};	

var backTap = function() {
	backBill.setAttribute("class", "hasFocus")
};		

var saveOff = function() {
	saveBill.removeAttribute("class", "hasFocus")
};

var clearOff = function() {
	clearBill.removeAttribute("class", "hasFocus")
};

var backOff = function() {
	backBill.removeAttribute("class", "hasFocus")
};

var newBill = function() {
	mainButt.setAttribute("class", "hasFocus")
};		

var noNewBill = function() {
	mainButt.removeAttribute("class", "hasFocus")
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
	
	for(i=0, l=localStorage.length; i<l; i++) {
		var category = localStorage.key(i);
		var input = localStorage.getItem(category)
		console.log(category + ": " + input);
	};
		
};

var clearAll = function() {
	var areYouSure = confirm("Are you sure you want to clear the form and start over?");
	if(areYouSure) {
		resetMe.setAttribute("type", "reset");
		alert("Form was reset.");
	} else {
		alert("No changes were made to your input.");
	};
};


// storing it in alpha order and calling it in the order saved not by the value name.
var btSaves = function() {
	localStorage.setItem("bType", btData.value);
};

var bnSaves = function() {
	localStorage.setItem("Name", bnData.value);
};

var costSaves = function() {
	localStorage.setItem("Amount", costData.value);
};

var prioSaves = function() {
	localStorage.setItem("Priority", importance.value);
};

var dueSaves = function() {
	localStorage.setItem("Due Date", whenData.value);
};

var comSaves = function() {
	localStorage.setItem("Comments", anyNotes.value);
};


/*var autoRefill = function() {
	for(i=0, l=localStorage.length; i<l; i++) {
		var category = localStorage.key(i);
		var input = localStorage.getItem(category)
		localStorage.value = input;
	};
};*/

var bnRefill = function() {
	var bnDataKey = localStorage.key("Name");
	var bnDataValue = localStorage.getItem(bnDataKey);
	bnData.value = bnDataValue;
};


btData.addEventListener("blur", btSaves);
bnData.addEventListener("blur", bnSaves);
costData.addEventListener("blur", costSaves);
importance.addEventListener("change", prioSaves);
whenData.addEventListener("blur", dueSaves);
anyNotes.addEventListener("blur", comSaves);
bnRefill()


myField.addEventListener("focus", highlightBill);
myField.addEventListener("blur", normBordBill);
myAmt.addEventListener("focus", highlightAmt);
myAmt.addEventListener("blur", normBordAmt);
payIt.addEventListener("focus", highlightPayable);
payIt.addEventListener("blur", normBordPayable);
takeNote.addEventListener("focus", highlightNotable);
takeNote.addEventListener("blur", normBordNotable);
btData.addEventListener("blur", btSaves);
bnData.addEventListener("blur", bnSaves);
costData.addEventListener("blur", costSaves);
importance.addEventListener("change", prioSaves);
whenData.addEventListener("blur", dueSaves);
anyNotes.addEventListener("blur", comSaves);
saveBill.addEventListener("click", getForm);
clearBill.addEventListener("click", clearAll);





 