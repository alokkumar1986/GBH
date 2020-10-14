
$(document).ready(function(){
	_initPage();
	_authLogin();
	_getCity();

});

function _initPage(){
	$('#errmsg').hide();
}

function _getCity(){
	
}

function _authLogin(){
	$(document).on('click','#loginbttn',function(e){
		e.preventDefault();
		var userid= $('#userid').val();
		var pswd= $('#pswd').val();
	    if(userid == ''){
			$("#errmsg").html("<strong>Error!</strong> User ID can not be blank.");
			$('#errmsg').show();
			return 0;
		}
		if(pswd == ''){
			$("#errmsg").html("<strong>Error!</strong> Password can not be blank.");
			$('#errmsg').show();
			return 0;
		}
		if (userid != '' && pswd != ''){
	
		  $.post('../api/api.php', { userid:userid, password:pswd, function: "login" }, function(data){

		  	console.log( JSON.parse(data));
		  	data = JSON.parse(data);
		  	if(data.msg=='success'){
		  		location.href = 'home.php';
		  	}else if(data.msg=='fail'){
		  		$("#errmsg").html("<strong>Error!</strong> Invalid User Id / Password.");
		  		$('#errmsg').show();
		  	}
            // show the response
           // $('#response').html(data);
		  	
        }).fail(function() {
         
            // just in case posting your form failed
           $('#errmsg').show();
             
        });
			//location.href = 'home.html';
		}else{
			$('#errmsg').show();
			return 0;
		}		
		
	});
}

function _createLoc(){
	$(document).on('click','#createloc',function(e){
		e.preventDefault();
		
		var cityid = $('#city').val();
		var locname = $('#locname').val();
		var lattd = $('#lattd').val();
		var longtd = $('#longtd').val();
		
		var formObj = [];
		var postdata = {
			'cityid':cityid,
			'locname':locname,
			'lattd':lattd,
			'longtd':longtd,
		}
		formObj.push(postdata);
		console.log(formObj);
		
		$.ajax({
           type: "POST",
           url: srl+"postlocs",
           //dataType: "json",
		   contentType: 'application/json;charset=UTF-8',
		   data: JSON.stringify(postdata),
           success: function (msg) {
               if (msg) {
                   alert("Location succesfully created");
                   location.reload(true);
               } else {
                   alert("Cannot add to list !");
               }
           },

           
       });
	});
}