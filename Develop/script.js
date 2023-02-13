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

// To allow users to easily clear the data saved in local storage
document.getElementById('resetButton').addEventListener('click', clearStorage);
function clearStorage(){
  localStorage.clear();
};

  
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

  window.setInterval(function() {
    document.getElementById("currentDay").innerHTML = dayjs().format("dddd, MMMM, D, h:mm A");
  }, 60000);
  