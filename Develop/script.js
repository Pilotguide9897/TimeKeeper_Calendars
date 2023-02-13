// Ready method is used to make sure that the code within runs once the DOM is ready to execute the JavaScript code.
$(document).ready(function () {

  //Handles saving and retrieving user input in local storage. When the user inputs data into the "description" field and clicks the "btn" button, the data is saved in local storage using the "id" of the "time-block" element as the key. When the page is reloaded, the code retrieves the saved data from local storage and sets the value of the "description" field to the retrieved data.
  $(".btn").click(function() {
    var timeBlockId = $(this).parent().attr('id');
    var savePlans = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, savePlans);
  });
  
  $('.time-block').each(function() {
    var blockId = $(this).attr('id');
    var myPlans = localStorage.getItem(blockId);
    if (myPlans) {
      $(this).find('.description').val(myPlans);
    }
  });
});

// Allows users to easily clear the data saved in local storage and reset the text boxes to their default state. 
document.getElementById('resetButton').addEventListener('click', clearStorage);
function clearStorage(){
  localStorage.clear(); 
  $('.time-block').each(function() {
    $(this).find('.description').val('');
  });
};
  
  //Calculates the current hour using dayjs.
  var currentHour = dayjs().hour();
  //console.log(currentHour);

  // Uses jQuery to iterate over all elements with the class "time-block". For each element, retrieves the "id" attribute and uses the split method to separate the hour from the id and converts the hour to an integer. Essentially, the purpose of this code is to retrieve the hour from the "id" attribute of each "time-block" element, and store it as an integer for later use in the code.
  $('.time-block').each(function() {
    var blockId = $(this).attr('id');
    var blockHour = parseInt(blockId.split('-')[1]);
    //console.log(blockHour);

    //Compares the hour with the time block to update classes dynamically.
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

    //Sets the date at the top of the page using dayjs.
    document.getElementById("currentDay").innerHTML = dayjs().format("dddd, MMMM, D, h:mm A");
    //Sets dayjs to update every minute to make sure that the minute and hour.
    window.setInterval(function() {
      document.getElementById("currentDay").innerHTML = dayjs().format("dddd, MMMM, D, h:mm A");
    }, 60000);

  });

 
  