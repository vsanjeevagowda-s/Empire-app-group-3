$(document).ready(function(){
	$(function() {

		$("form[name='feedback']").validate({

			rules: {

				firstname: "required",
				lastname: "required",
				email: {
					required: true,

					email: true
				},
				city:"reqired",
				phone: {
					required: true,
					minlength: 10
				}

			},
			messages: {
				firstname: "Please enter your firstname",
				lastname: "Please enter your lastname",
				city: "please enter your city",
				phone: {
					required: "Please confirm your phone number",
					minlength: "Your password must be at least 10 characters long"
				},
				email: "Please enter a valid email address"
			},

			submitHandler: function(form) {
				form.send-feedback();
			}
		});
	});
// function checkPasswordMatch() {
// debugger;
// var password = $("#password").val();
// var confirmPassword = $("#cnpassword").val();
// debugger;
// if (password != confirmPassword){
// $("#divCheckPasswordMatch").html("Passwords do not match!");
// }
// else{
// $("#divCheckPasswordMatch").html("Passwords match.");
// }
// }
// $("#cnpassword").keyup(function() {
// 	var password = $("#password").val();
// 	$("#divCheckPasswordMatch").html(password == $(this).val() ? "Passwords match." : "Passwords do not match!");
// });


});