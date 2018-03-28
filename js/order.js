
$(document).ready(function() {
   
$('.minus-btn').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $input = $this.closest('div').find('input');
            var value = parseInt($input.val());
            
            
            if (value > 1) {
                value = value - 1;
            } else {
                value = 0;
            }
        debugger

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
            $demo.val(value);
        });
        $("#veg").hide();
        $("non_veg").click(function(){
            $("non").show();
            $("#veg").hide();

        });
         $("#non").hide();
        $("veg").click(function(){
            $("#non_veg").hide();
            $("#veg").show();

        });
        $('.plus-btn').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $a=$(".add").$this;
    });