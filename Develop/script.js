$(document).ready(function () {
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

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var currentHour = dayjs().hour();
  console.log(currentHour);

  $('.time-block').each(function() {
    var blockId = $(this).attr('id');
    var blockHour = parseInt(blockId.split('-')[1]);
    console.log(blockHour);

    
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  document.getElementById("currentDay").innerHTML = dayjs().format("dddd, MMMM, D, h:mm A");




