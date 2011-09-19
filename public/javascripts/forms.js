jQuery(document).ready(function() {
  //Custom validator to treat DOB fields as one.
  $.validator.addMethod("dobValidator", function(value, element, params) {
    var dobDay = $('#dobday').val();
    var dobMonth = $('#dobmonth').val();
    var dobYear = $('#dobyear').val();

    if (dobDay === '' || dobMonth === '' || dobYear === '') {
      return false;
    } else {
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth();
      var year = today.getFullYear();

      if ((year - dobYear) <= 18 && ((month < dobMonth) || (month == dobMonth && day < dobDay))) {
        return false;
      }

      return true;
    }

  }, "You must be 18+ to enter.");

  $('#dobday,#dobmonth,#dobyear').change(function() {
    $('#dobday').valid();
  });

  $("form#entry_form").validate({
    errorPlacement: function(error, $element) {
      var $wrapper = $element.parent('div.input');
      $wrapper.append(error);
    },
    errorElement: "span",
    rules: {
      "idea[title]": {
        required: true,
        minlength: 2,
        maxlength: 30
      },
      "idea[content]": {
        required: true
      },
      "idea[custom1]": {
        required: true,
        email: true
      },
      "idea[custom2]": {
        required: true
      },
      dobday: "dobValidator",
      "idea[images_attributes][0][file]": "required"
    },
    messages: {
      "idea[title]": {
        required: "Tee title is required.",
        minlength: "At least 2 characters required.",
        maxlength: "Maximum 30 characters please."
      },
      "idea[custom1]": {
        required: "Your email address is required.",
        email: "A valid email is required."
      },
      "idea[custom2]": {
        required: "Your name is required."
      },
      "idea[content]": {
        required: "Please describe your Tee",
      },
      "idea[images_attributes][0][file]": "Photo is required."
    },
    submitHandler: function(form) {
      
      console.log(form);
      
      var $submit = $("input[type=submit]", form);
      console.log($submit);
      
      $submit.val("Uploading image...");
      $submit.attr('disabled', 'disabled');

      //Concat date.
      $('#dobhidden').val($('#dobmonth').val() + '/' + $('#dobday').val() + '/' + $('#dobyear').val());

      form.submit();

    },
    
    invalidHandler: function(form, validator) {
          var errors = validator.numberOfInvalids();
          if (errors) {
            var message = errors == 1
              ? 'You missed 1 field. It has been highlighted'
              : 'You missed ' + errors + ' fields. They have been highlighted';
            $("p.error").html(message);
            $("p.error").show();
          } else {
            $("p.error").hide();
          }
        }
    
  });
  
  
  
  
  
  
  
  $("form#mc-embedded-subscribe-form").validate({
    errorPlacement: function(error, $element) {
      var $wrapper = $element.parent('div.mc-field-group');
      $wrapper.append(error);
    },
    errorElement: "span",
    rules: {
      "EMAIL": {
        required: true,
        email: true
      }
    },
    messages: {
      "EMAIL": {
        required: "Your email address is required.",
        email: "A valid email is required."
      }
    },
    submitHandler: function(form) {
      
      $.fancybox.close;
      
      form.submit();

    },
    
    invalidHandler: function(form, validator) {
          var errors = validator.numberOfInvalids();
          if (errors) {
            var message = errors == 1
              ? 'You missed 1 field. It has been highlighted'
              : 'You missed ' + errors + ' fields. They have been highlighted';
            $("p.error").html(message);
            $("p.error").show();
          } else {
            $("p.error").hide();
          }
        }
    
  });
  
  
  
  
  
  
  
  
  
});
