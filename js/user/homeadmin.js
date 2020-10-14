const srl = 'http://localhost:5000/api/v1.0/'

//const srl = 'http://104.248.155.81:5000/api/v1.0/'

var userid = getParameterByName('id');


$(document).ready(function(){
	//_setLocId();
	_getPropbyUser(userid);

});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function _getPropbyUser(userid){
	
	$.ajax({
			url: srl+'user',
			type: 'get',
			data: {'getprop':userid},
			success: function(result){
				console.log(result);
				$(result).each(function(i,data){
					$(result).each(function(i,data){
					_td1 = $('<td></td>').text(data.prop_id);
					_td2 = $('<td></td>').text(data.city);
					_td3 = $('<td></td>').text(data.loc_name);
					
					_td4 = $('<td></td>').text(data.category);
					_td5 = $('<td></td>').text(data.prop_adv_for);
					_td6 = $('<td></td>').text(data.posted_on);
					
					_btn1 = '<button class="btn btn-primary">Details</button>' ;
					_btn2 = '<button class="btn btn-danger" style="margin-left:1%">Delete</button>' ;
					_td7= $('<td></td>').append(_btn1).append(_btn2);
					
					_tr = $('<tr></tr>').append(_td1).append(_td2).append(_td3).append(_td4).append(_td5).append(_td6).append(_td7);
					$('#posttabs').append(_tr);
				});
				});
			}
	});
	return imgpath;
}
