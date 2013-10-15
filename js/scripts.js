// Prototype scripts


// Page load state

$('.weekly').hide();

$('.weekly-event-dates').hide();

$('.remove').hide();


// Selector

$('.event-freq').change(function() {
  var val = $(this).val();
  if (val === "One or more dates") {
    $('.recurrent').show();
    $('.weekly').hide();
    $('.add-date').show();
    $('.more-dates').removeClass('height');
  }
  else if (val === "Weekly"){
    $('.recurrent').hide();
    $('.weekly').show();
    $('.weekly-event-dates .remove').show();
    $('.add-date').hide();
    $('.more-dates').addClass('height');
  }
})


// Add date

$('body').on('click', '.add-date', function() {
  $('.original .more-dates').clone().removeClass('more-dates').appendTo('.multiple-dates .original').addClass('bam').find('.extra-date').remove();
  $('.bam .remove').show();

  $('div.bfh-datepicker').each(function () {
      var $datepicker = $(this)

      $datepicker.bfhdatepicker($datepicker.data())
    })
  updateTimepicker();
})


// Add time

$('body').on('click', '.add-time', function() {
  // var val = $('.more-times').closest('.origin');
  var $this = $(this);
  var wat = $this.parents('.more-times');
  var clone = wat.clone().addClass('extra-date');
  $this.parents('.origin').append(clone);
  $('.extra-date .remove').show();
  updateTimepicker();
})

function updateTimepicker() {
  $('div.bfh-timepicker').each(function () {
    var $timepicker = $(this)

    $timepicker.bfhtimepicker($timepicker.data())
  })
}


// Add weekly events

// Sunday

$('body').on('click', '.sun', function() {
  if ($('button.sun').hasClass('active') == false) {
    $('.weekly-event-dates.sun').show();
  }
  else {
    $('.weekly-event-dates.sun').hide();
  }
})

// Monday

$('body').on('click', '.mon', function() {
  if ($('button.mon').hasClass('active') == false) {
    $('.weekly-event-dates.mon').show();
  }
  else {
    $('.weekly-event-dates.mon').hide();
  }
})

// Tuesday

$('body').on('click', '.tue', function() {
  if ($('button.tue').hasClass('active') == false) {
    $('.weekly-event-dates.tue').show();
  }
  else {
    $('.weekly-event-dates.tue').hide();
  }
})

// Wednesday

$('body').on('click', '.wed', function() {
  if ($('button.wed').hasClass('active') == false) {
    $('.weekly-event-dates.wed').show();
  }
  else {
    $('.weekly-event-dates.wed').hide();
  }
})

// Thursday

$('body').on('click', '.thu', function() {
  if ($('button.thu').hasClass('active') == false) {
    $('.weekly-event-dates.thu').show();
  }
  else {
    $('.weekly-event-dates.thu').hide();
  }
})

// Friday

$('body').on('click', '.fri', function() {
  if ($('button.fri').hasClass('active') == false) {
    $('.weekly-event-dates.fri').show();
  }
  else {
    $('.weekly-event-dates.fri').hide();
  }
})

// Saturday

$('body').on('click', '.sat', function() {
  if ($('button.sat').hasClass('active') == false) {
    $('.weekly-event-dates.sat').show();
  }
  else {
    $('.weekly-event-dates.sat').hide();
  }
})


// Remove

$('body').on('click', '.remove', function() {
  $(this).closest('.row, .add-date').hide();
})