
$(document).ready(function() {
   
$('.minus-btn').on('click', function(e) {
            // e.preventDefault();
            var $this = $(this);
            var $input = $this.closest('div').find('input');
            var value = parseInt($input.val());
            
            
            if (value > 1) {
                value = value - 1;
            } else {
                value = 0;
            }

        $input.val(value);
        
        });
 
        $('.plus-btn').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $input = $this.closest('div').find('input');
            var value = parseInt($input.val());
            if (value < 100) {
            value = value + 1;
            } else {
                value =100;
            }

            $input.val(value);
            // $demo.val(value);
        });
        $("#veg").hide();
        $("#shw").click(function(){
            $("#non1").show();
            $("#veg").hide();

        });
        $("#hid").click(function(){
            $("#non1").hide();
            $("#veg").show();

        });
        $("#hid1").click(function(){
            $("#shw").hide();
            $("#veg").show();
        });
function plus(field) {
 nr = parseInt(document.getElementById(field).value);
 document.getElementById(field).value = nr + 1;
}
 
function minus(field) {
 nr = parseInt(document.getElementById(field).value);
 if (nr > 0) {
   if( (nr - 1) > 0) {
     document.getElementById(field).value = nr - 1;
   }
 }
} 

    });
    //     $('.plus-btn').on('click', function(e) {
    //         e.preventDefault();
    //         var $this = $(this);
    //         var $a=$(".add").$this;
    // });