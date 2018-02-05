
$(document).ready(function() { // do this when the document is loaded
  $("#contentDialer").show(); // show the element with ID "element"
	$("#contentList").hide(); // hide the element with ID "otherElement"
  $("#contentAdd").hide();
});

$("#Dialer").click(function() { // when "button_id" is clicked
	$("#contentDialer").show(); // show element
	$("#contentList").hide();	// hide other element
  $("#contentAdd").hide();
});

$("#ContactList").click(function() { // when "button_id" is clicked
	$("#contentList").show(); // show element
	$("#contentDialer").hide();	// hide other element
  $("#contentAdd").hide();
});

$("#ContactAdd").click(function() { // when "button_id" is clicked
	$("#contentAdd").show(); // show element
	$("#contentDialer").hide();	// hide other element
  $("#contentList").hide();
});
$("#Test").click(function() { // when "button_id" is clicked
  $("#contentTest").show();
  $("#contentAdd").hide(); // show element
	$("#contentDialer").hide();	// hide other element
  $("#contentList").hide();
});

$("#B1").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"1")
});

$("#B2").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"2")
});

$("#B3").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"3")
});

$("#B4").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"4")
});

$("#B5").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"5")
});

$("#B6").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"6")
});

$("#B7").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"7")
});

$("#B8").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"8")
});

$("#B9").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"9")
});

$("#B0").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"0")
});

$("#BS").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"*")
});

$("#BJ").click(function() { // when "button_id" is clicked
  $("#Dname").val($("#Dname").val()+"#")
});

$("#BC").click(function() { // when "button_id" is clicked
  $("#Dname").val(" ")
});

/**$( "#gesture_area" ).click(function() {
  alert( "Handler for .mousedown() called." );
  $("#movedown").show(); // show element
	$("#moveup").hide();
});

$( "#gesture_area" ).clck(function() {

  $("moveup").show(); // show element
	$("#movedown").hide();
});**/

$(document).ready(function(event) { // do this when the document is loaded
$("#ready").show(); // show the element with ID "element"
$("#moveup").hide(); // hide the element with ID "otherElement"
$("#movedown").hide();
$("#swipeleft").hide();
$("#swiperight").hide();
});

$("#gesture_area").mousedown(function() {
$("#movedown").show();
$("#moveup").hide();
$("#ready").hide();
$("#swipeleft").hide();
$("#swiperight").hide();
downx=event.pageX

});

$( "#gesture_area" ).mouseup(function() { // show element
$("#ready").hide();
$("#swipeleft").hide();
$("#swiperight").hide();
upx=event.pageX

if(upx<downx){
  $("#movedown").hide();
  $("#swipeleft").show();
}
else if(upx>downx){
  $("#movedown").hide();
  $("#swiperight").show();
}
else if(upx==downx){
  $("#movedown").hide();
  $("#moveup").show(); // show element
}
});
