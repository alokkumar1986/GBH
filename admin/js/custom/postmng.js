//const srl = 'http://localhost:5010/api/v1.0/'

const srl = 'http://104.248.155.81:5010/api/v1.0/'

var propid = getParameterByName('id');

$(document).ready(function(){
	_dispPostbyID();
	_getImgbyProp(propid);
	_getAmenDetails(propid);
	_approvePost(propid);
	_rejectPost(propid);

});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function _dispPostbyID(){
	
	$('input').attr('readonly','readonly');
	
	$.ajax({
		url: srl+'props',
		method: "GET",
		data:{'propid': propid},
		crossDomain: true,
		contentType: 'application/json',
		success: function(result){
				//console.log(result);
				$(result).each(function(i,data){
					$('#propid').val(data.prop_id);
					$('#poston').val(data.prop_id);
					$('#posttype').val(data.ownr_type);
					$('#postby').val(data.prop_id);
					$('#ownername').val(data.ownr_name);
					$('#emailid').val(data.ownr_email_id);
					$('#mobno').val(data.ownr_mob_no);
					
					$('#city').val(data.city);
					$('#street').val(data.prop_addr_line_1);
					$('#locname').val(data.loc_name);
					$('#project').val(data.project_name);
					
					$('#rent').val(data.rent_amt);
					$('#maintamt').val(data.maint_amt);
					$('#avlfrom').val(data.avl_from_dt);
					$('#depamt').val(data.dep_amt);
					
					$('#proptype').val(data.prop_adv_for);
					$('#propcat').val(data.category);
					$('#bltarea').val(data.built_up_area);
					$('#crptarea').val(data.carpet_area);
					$('#furnish').val(data.prop_furnish_type);
					$('#facing').val(data.facing);
					$('#tenant').val(data.prop_tenant_type);
					$('#bhk').val(data.bhk_tot);
					$('#floor').val(data.floor_no);
					$('#totfloor').val(data.tot_floors);
					$('#bathroom').val(data.bathroom_tot);
					$('#parking').val(data.parking);
					
					$('#propdesc').val(data.prop_desc);

				});
				
		}
});
}

function _getImgbyProp(propid){
		$('#img-summary').empty();

        $.ajax({
            url: srl+'props',
            type: 'get',
            data: {'imgid':propid},
            success: function(result){
                
				$(result).each(function(i,data){
					//console.log(data);
					var _img = '<image class="img-responsive" style="margin:2%" id="'+data.image_id+'" src='+data.imgpath+'/>'
					var _div = '<div class="col-sm-3">'+_img+'</div>'
					$('#img-summary').append(_div);
				});
            },
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
        }
    });
}

// Get property amenities details
function _getAmenDetails(propid){

	$.ajax({
			url: srl+'props',
			type: 'get',
			data: {'amenid':propid},
			success: function(result){
				$(result).each(function(i,data){
					console.log(data);
					var _amen = data.amen_short_code;
					var _div = $('<div></div>').addClass('col-md-2 amen-div').text(_amen);
					$('#amen-summary').append(_div);
				});
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
}

// Get property amenities details
function _approvePost(propid){
	$(document).on('click','#approveprop',function(e){
		$.ajax({
           type: "POST",
           url: srl+"postad",
		   
           //dataType: "json",
		   contentType: 'application/json;charset=UTF-8',
		   data: JSON.stringify({'op':'approve','id':propid}),
		   //data: JSON.stringify(postdata),
           success: function (msg) {
               if (msg) {
                   alert("Succesfully Approved");
                   location.reload(true);
               } else {
                   alert("Cannot add to list !");
               }
           },

           
       });
	});

}

// Get property amenities details
function _rejectPost(propid){
	$(document).on('click','#rejprop',function(e){
		$.ajax({
           type: "POST",
           url: srl+"postad",
		   
           //dataType: "json",
		   contentType: 'application/json;charset=UTF-8',
		   data: JSON.stringify({'op':'reject','id':propid}),
		   //data: JSON.stringify(postdata),
           success: function (msg) {
               if (msg) {
                   alert("Succesfully Rejected");
                   location.reload(true);
               } else {
                   alert("Cannot add to list !");
               }
           },

           
       });
	});

}