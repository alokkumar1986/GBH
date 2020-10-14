// const srl = 'http://localhost:5010/api/v1.0/'
// const srl = 'http://104.248.155.81:5010/api/v1.0/'

$(document).ready(function(){
	_initPage();
	_createUser();
	_getUserDetails();
	$( document ).on( 'focus', ':input', function(){
        $( this ).attr( 'autocomplete', 'off' );
    });

    
    
});

//Initialize page with pre loaded settings
function _initPage(){
	$('#msg-box').hide();
}

function _prepMsgbox(msgtype){
	$('#msg-box').empty();
	_scsdiv = '<div class="alert alert-success">'
					+ '<strong>Success!</strong> User successfully registered</div>' ;
	_errdiv = '<div class="alert alert-danger">'
					+ '<strong>Failed!</strong> Registration Failed, Please try again</div>' ;
	_dupdiv = '<div class="alert alert-danger">'
					+ '<strong>Failed!</strong> Mobile No / Email exists in our database. </div>' ;
	switch(msgtype){
		case 'S':
			$('#msg-box').append(_scsdiv);
			$('#msg-box').show();
			break;
		case 'E':
			$('#msg-box').append(_errdiv);
			$('#msg-box').show();
		case 'D':
			$('#msg-box').append(_dupdiv);
			$('#msg-box').show();
			break;
	}
}
//Get User details for existing users

function _getUserDetails(){
	
	$(document).on('click','#signinbttn',function(e){
		
		e.preventDefault();
		
		var mobno = $('#mobno').val();
		var pswd = $('#pswd').val();
		var op='authuser';
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

		
		if(mobno=='' || mobno==null){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Mobile No cann't be blank!");
			return 0;
		}
		if(!mobno.match(phoneno)){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Please enter a valid mobile number!");
			return 0;
		}
		if(mobno.length!=10){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Mobile No cann't be less than or greater than 10 digits!");
			return 0;
		}

		if(pswd=='' || pswd==null){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Password cann't be blank!");
			return 0;
		}

		// var formObj = [];
		// var postdata = {
		// 	'opstype':op,
		// 	'mobno':mobno,
		// 	'pswd':pswd
		// }
		// formObj.push(postdata);
		$("#myModal").modal();
		setTimeout(function(){
		$.ajax({
           type: "POST",
           url: "api/frontapi.php",
           dataType: "text",
		   //contentType: 'application/json;charset=UTF-8',
		   data: {'opstype':op,
			'mobno':mobno,
			'pswd':pswd,
		    'function':'userLogin'},
           success: function (data) {
			   console.log(data);
			   data = JSON.parse(data);
			    console.log(data);
               if (data.msg=="success") {
					//var id = msg[0]['user_id'];
					location.href = 'userhome.php';
					//alert(id);
               } else if(data.msg=="fail"){
               	    $("#myModal").modal('hide');
                    $("#myModal1").modal();
					$("#myModal1 .modal-header").css("color","red")
					$("#myModal1 .modal-header").text("Error!");
					$("#myModal1 .modal-body").text("Invalid Mobile No and Password!");
					return 0;
               }
           },
       });
	  }, 3000);
	});
}
	
function _createUser(){
	$(document).on('click','#regbttn',function(e){
		
		e.preventDefault();
		$("#confirmModal").modal();
		$("#btnOk").on("click", function(){
		$("#myModal").modal();
		setTimeout(function(){
			$("#myModal").modal("hide");
		var op='createuser';
		var name = $('#name').val();
		var mobno = $('#mobno').val();
		var pwd = $('#password').val();
		var email = $('#email').val();
		var cnfrmpwd = $('#cnfrmpwd').val();
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

		if(name=='' || name==null){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Name cann't be blank!");
			return 0;
		}
		if(mobno=='' || mobno==null){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Mobile No cann't be blank!");
			return 0;
		}
		if(!mobno.match(phoneno)){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Please enter a valid mobile number!");
			return 0;
		}
		if(mobno.length!=10){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Mobile No cann't be less than or greater than 10 digits!");
			return 0;
		}
		if(email=='' || email==null){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Email cann't be blank!");
			return 0;
		}
		var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if(!email.match(mailformat))
		{
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Please enter a valid email address!");
			return 0;
		}
		if(pwd=='' || pwd==null){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Password cann't be blank!");
			return 0;
		}
		if(cnfrmpwd=='' || cnfrmpwd==null){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Confirm Password cann't be blank!");
			return 0;
		}
		if(pwd!=cnfrmpwd){
			$("#myModal1").modal();
			$("#myModal1 .modal-header").css("color","red")
			$("#myModal1 .modal-header").text("Error!");
			$("#myModal1 .modal-body").text("Confirm Password does not match with password!");
			return 0;
		}
		
		$.ajax({
           type: "POST",
           url: "api/frontapi.php",
           data: {
           	'opstype':op,
			'name':name,
			'mobno':mobno,
			'emailid':email,
			'iam':'C',
			'pwd':pwd,
			'function':'createUser'
		   },
           dataType: "text",
		   //contentType: 'application/json;charset=UTF-8',
           success: function (data) {
           	alert(data);
           	data = JSON.parse(data);
           	alert(data);
              if (data.msg == 'success') {
                   _prepMsgbox('S');
				   setTimeout(function(){
				    location.href = 'login.php';
				   }, 2000);                   
               }else if(data.msg == 'failed'){
                   _prepMsgbox('E');
               }else if(data.msg == 'duplicate'){
               		_prepMsgbox('D');
               }
           },
       });
	 }, 3000);
	});
});
}
