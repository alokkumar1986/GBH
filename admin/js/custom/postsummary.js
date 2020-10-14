const srl = 'http://104.248.155.81:5010/api/v1.0/'

//const srl = 'localhost:5000/api/v1.0/'

$(document).ready(function(){
	$('#detdiv').hide();
	_dispPostKPI();
	_dispPostDetails();
	_navPropDetails();
	
});

function _dispPostKPI(){
		$.ajax({
		url: srl+'props',
		method: "GET",
		data:'propsumm',
		dataType: 'json',
		crossDomain: true,
		contentType: 'application/json',
		crossDomain: true,
		
		success: function(result){
				
				$(result).each(function(i,data){
					switch(data.apprvd_stat){
						case 'N':
							$('#newpostkpi').text(data.cnt);
							break;
						case 'Y':
							$('#verpostkpi').text(data.cnt);
							break;
						case 'R':
							$('#rejpostkpi').text(data.cnt);
							break;
						case 'T':
							$('#totpostkpi').text(data.cnt);
							break;
					}
					
				});
		}
});
	
}

function _dispPostDetails(){
	$(document).on('click','.kpi-div',function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		switch(id){
			case 'totpostdiv':
				id='all'
				_dispPostSumm(id);
				break;
			case 'newpostdiv':
				id='new'
				_dispPostSumm(id);
				break;
			case 'verpostdiv':
				id='ver'
				_dispPostSumm(id);
				break;
			case 'rejpostdiv':
				id='rej'
				_dispPostSumm(id);
				break;
		};
		
	});
}

function _dispPostSumm(dt){
	
	$('#postsumm tbody').empty();
	$.ajax({
		url: srl+'props',
		method: "GET",
		data:dt,
		dataType: 'json',
		crossDomain: true,
		contentType: 'application/json',
		
		success: function(result){
				//console.log(result);
				$(result).each(function(i,data){
					_td1 = $('<td></td>').text(data.prop_id);
					_td2 = $('<td></td>').text(data.city);
					_td3 = $('<td></td>').text(data.loc_name);
					
					_td4 = $('<td></td>').text(data.prop_adv_for);
					_td5 = $('<td></td>').text(data.ownr_type);
					_td6 = $('<td></td>').text(data.prop_tenant_type);
					_td7 = $('<td></td>').text(data.apprvd_stat);
					
					//_btn1 = '<button class="btn btn-primary detbttn">View Details</button>' ;
					_btn1 = $('<button></button>').addClass('btn btn-primary detbttn').attr('id',data.prop_id).text('View Details');
					_td8= $('<td></td>').append(_btn1);
					
					_tr = $('<tr></tr>').append(_td1).append(_td2).append(_td3).append(_td4).append(_td5).append(_td6).append(_td7).append(_td8);
					$('#postsumm').append(_tr);
					
					
				});
				$('#detdiv').show();
			/*	$('#postsumm').DataTable({
				  'paging'      : true,
				  'lengthChange': false,
				  'searching'   : true,
				  'ordering'    : false,
				  'info'        : false,
				  'autoWidth'   : true
				})*/
		}
});
}

function _navPropDetails(){
	$(document).on('click','.detbttn',function(e){
		var id =  $(this).attr('id');
		//alert(id);
		location.href='postdetails.html?id='+id;
	});
}

function _dispPostbyID(){
	
	
	$.ajax({
		url: srl+'props',
		method: "GET",
		data:'all',
		crossDomain: true,
		contentType: 'application/json',
		success: function(result){
				//console.log(result);
				$(result).each(function(i,data){
					_td1 = $('<td></td>').text(data.prop_id);
					_td2 = $('<td></td>').text(data.city);
					_td3 = $('<td></td>').text(data.loc_name);
					
					_td4 = $('<td></td>').text(data.prop_adv_for);
					_td5 = $('<td></td>').text(data.ownr_type);
					_td6 = $('<td></td>').text(data.prop_tenant_type);
					_td7 = $('<td></td>').text('N');
					
					//_btn1 = '<button class="btn btn-primary detbttn">View Details</button>' ;
					_btn1 = $('<button></button>').addClass('btn btn-primary detbttn').attr('id',data.prop_id).text('View Details');
					_td8= $('<td></td>').append(_btn1);
					
					_tr = $('<tr></tr>').append(_td1).append(_td2).append(_td3).append(_td4).append(_td5).append(_td6).append(_td7).append(_td8);
					$('#postsumm').append(_tr);
				});
				
				
		}
});
}

