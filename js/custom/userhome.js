//const srl = 'http://localhost:5000/api/v1.0/'

const srl = 'http://104.248.155.81:5010/api/v1.0/'

var userid = getParameterByName('id');

var usertype;

$(document).ready(function(){
	_getUserDetails();
	_navPrep();
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function _getUserDetails(){
	
		var mobno = userid;
		var op='getuserbymob';

		var formObj = [];
		var postdata = {
			'opstype':op,
			'mobno':mobno
		}
		formObj.push(postdata);
		
		$.ajax({
           type: "POST",
           url: srl+"user",
           //dataType: "json",
		   contentType: 'application/json;charset=UTF-8',
		   data: JSON.stringify(postdata),
           success: function (msg) {
			   var name = msg[0].full_name;
			   $('#username').text(name);
               
           },
       });
	}

function _navPrep(){
		$(document).on('click','.menulink',function(e){
		_clkid = $(this).attr('id');
		
		switch(_clkid){
			case 'userpost' :
				url = 'userpost.html?id='+userid ;
				location.href = url ;
				break;
		}
			
		});
}