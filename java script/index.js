// off/on slider
$(function() {
            $("#button_off").click(function() {
              $(".container_slider").css("display", "none");

              $("#button_off").css("display", "none");

              $("#button_on").css("display", "block");
            });

            $("#button_on").click(function() {
              $(".container_slider").css("display", "block");

              $("#button_off").css("display", "block");

              $("#button_on").css("display", "none");
            });
          });

