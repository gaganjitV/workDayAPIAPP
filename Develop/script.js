// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var currentDay = $("#currentDay") //geting the current day id
currentDay.text(dayjs().format('dddd, MMM D YYYY')) //Setting the current day text feild

var currentHour = dayjs().hour(); //get the current hour

$(".time-block").each(function () 
{

  var eachBlockHour = $(this).attr("id").split("-")[1]; //geting the hour from each block. 

  var textEntry = localStorage.getItem(eachBlockHour);
  var textArea = $(this).find(".description");
  textArea.val (textEntry);
  //Compare Current Hour to Time Block, Add Appropriate Class to Display Correct Color
  if (eachBlockHour < currentHour){
    $(this).find(".description").addClass("past");
}else if(eachBlockHour == currentHour){
    $(this).find(".description").addClass("present");
}else{
    $(this).find(".description").addClass("future");
 }

});


//Save Button Clicked Function
$(".saveBtn").on("click", function()
{
  // getting on what hour the user input
  var hour = $(this).parent().attr("id").split("-")[1];  //Using jqury to get the spsecific hour in the id. [1] is the index which is the interger value of the current hour in the id attr
  //console.log(hour); //do
  // the user input
  var input = $(this).parent().find(".description").val();
  //Save to Local Storage
  localStorage.setItem(hour,input);
});