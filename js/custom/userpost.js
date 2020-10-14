//const srl = 'http://localhost:5000/api/v1.0/'

const srl = 'http://104.248.155.81:5010/api/v1.0/'
var userid = getParameterByName('id');

var usertype;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function(){
	
	_initPage();

	_prepareFormNav();
	_prepareBackNav();

	getPropID();
	getLocationDefault();
	getLocation();
	getLocCoords();
	_setActiveInput();
	
	//_uploadImg();
	
	_loadPostFields();
	
	//_delImage();

	
	$(document).on("wheel", "input[type=number]", function (e) {
    $(this).blur();
});



function _initPage(){
	
	$('#userid').val(userid);
	$('.loc-placeholder').select2();
	$('.sec').hide();
	$('.sec1').show();
}


//Get latest property id 

function getPropID(){
	$.ajax({
		url: srl+'props/currid',
		type: 'get',
		success: function(data){
			$('#propid').val(data);
			//alert($('#propid').val());
		},
		error:function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.status);
			//alert(thrownError);
	}
});
}

// Form Navigation PLan


function _prepareFormNav(){
	
	$(document).on('click','.secbttn',function(e){
		var bttnId = $(this).attr('id');
		var classname = '.'.concat(bttnId.substring(0, 4));
		//classname = '.sec1' ;
		//var msg = _prepareValidation(classname);
		msg = _getVal(classname);
		//console.log(valFlag);
		if(msg == 0){
			switch(bttnId){
			case 'sec1bttn':
				$('.sec').hide();
				$('.sec2').show();
				break;
			case 'sec2bttn':
				$('.sec').hide();
				$('.sec3').show();
				break;
			case 'sec3bttn':
				$('.sec').hide();
				$('.sec4').show();
				break;
			case 'sec4bttn':
				$('.sec').hide();
				$('.sec5').show();
				break;
			case 'sec5bttn':
				$('.sec').hide();
				$('.sec6').show();
				break;
		}
		}
	});
}


$(function(){
   'use strict'
   // Datepicker
   $('.fc-datepicker').datepicker({
	 showOtherMonths: true,
	 selectOtherMonths: true
   });

   $('#datepickerNoOfMonths').datepicker({
	 showOtherMonths: true,
	 selectOtherMonths: true,
	 numberOfMonths: 2
   });

 });
 

$(document).ready(function(){
    $( document ).on( 'focus', ':input', function(){
        $( this ).attr( 'autocomplete', 'off' );
    });
});
	

	
});





//Get location details based on city code 

//Location selection based on default city value
function getLocationDefault(){
	$('#locality').empty();
	var cityid = $('#city').val();
		$.ajax({
			url: srl+'locs',
			type: 'get',
			data: {'cityid':cityid},
			success: function(result){
				//console.log(result);
				$(result).each(function(i,data){
					var _op = $('<option></option>').val(data.loc_id).text(data.loc_name);
					$('#locality').append(_op);
				});
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
}


function getLocation(){
	$(document).on('change','#city',function(e){
		$('#locality').empty();
		var cityid = $(this).val();

		$.ajax({
			url: srl+'locs',
			type: 'get',
			data: {'cityid':cityid},
			success: function(result){
				console.log(result);
				$(result).each(function(i,data){
					var _op = $('<option></option>').val(data.loc_id).text(data.loc_name);
					$('#locality').append(_op);
				});
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
	});
}

// Get location co-ordinates to display on the map

function getLocCoords(){
	$(document).on('change','#locality',function(e){
		var locid = $('#locality').val();
		
		$.ajax({
			url: srl+'locs',
			type: 'get',
			data: {'locid':locid},
			success: function(result){
				console.log(result);
				/*$(result).each(function(i,data){
					var _op = $('<option></option>').val(data.loc_id).text(data.loc_name);
					$('#locality').append(_op);
				});*/
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
	});
	
}

/* Remove an image from a property */

function _delImage(){
		$(document).on('click','.delimg',function(e){
			var id = $(this).attr('id');
			var propid = $('#propid').val();
			var dt = {'imgid':id};
			$.ajax({
					url: srl+'img',
					type: 'post',
					
					contentType: 'application/json;charset=UTF-8',
					data: JSON.stringify(dt),
					success: function(data){
						//alert('Succesfully deleted');
						//_getImgbyProp(propid);
						alert(data);
					},
					error:function (xhr, ajaxOptions, thrownError) {
						console.log(xhr.status);
						//alert(thrownError);
				}
			});
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
					console.log(data);
					var _img = '<image class="mb-3" id="'+data.image_id+'" src='+data.imgpath+'/>'
					var _div = '<div class="col-md-2">'+_img+
							'<div class="tag-text delimg" id="'+data.image_id+'"><span class="bg-red tag-option">Delete</span></div></div>'
					$('#img-summary').append(_div);
				});
            },
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
        }
    });
}


function _uploadImg(){
	$("#but_upload").click(function(){
		//getPropID();
		var fd = new FormData();
		var id = $('#propid').val();
		//var id = 21;
        var files = $('#image')[0].files[0];
		fd.append('image',files);
		fd.append('id',id);

        $.ajax({
            url: srl+'upload',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
			cache:false,
            success: function(data){
				_getImgbyProp(id)
            },
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
        }
    });
});
}

function _loadPostFields(){
	$(document).on('click','#sec5bttn',function(e){
		var op='postprop';
		
		var propid = $('#propid').val();
		var iam = $('#iamdiv').find('.inpactive').val();
		var advname = $('#fullname').val();
		var emailid = $('#emailid').val();
		var mobno = $('#userid').val();
		
		var propfor = $('#propfor').find('.inpactive').val();
		var city = $('#city').val();
		var locality = $('#locid').val();
		var addrline1 = $('#currlocation').val();
		var project = $('#project').val();
		
		var propdesc = $('#propdesc').val();

		var currlat = $('#currlat').val();
		var currlng = $('#currlng').val();
		
		var proptype = $('#proptype').find('.inpactive').attr('id');
		var propcat = $('#propcat').find('.inpactive').attr('id');
		var tenanttype = $('#tenanttype').find('.inpactive').val();
		
		var bltuparea = $('#bltuparea').val();
		var crptarea = $('#crptarea').val();
		var floorno = $('#floorno').val();
		var totfloor = $('#totfloor').val();
		var bhk = $('#bhk').find('.inpactive').attr('id');
		var bathroom = $('#bathroom').find('.inpactive').val();
		
		var furnishtype = $('#furnishtype').find('.inpactive').val();
		var facing = $('#facing').find('.inpactive').val();
		var parking = $('#parking').find('.inpactive').val();
		
		var amenities = [];
		$('#amentype').find('.inpactive').each(function(i){
			var id=i;
			var amen = $(this).val();
			amenities.push(amen);
			
		});
		
		var rent = $('#rentamt').val();
		var maintchrg = $('#maintchrg').val();
		var secdeposit = $('#secdeposit').val();
		var avlfmdt = $('#avldate').val();
		
		
		var formObj = [];
		var postdata = {
			'op':op,
			'usertype':usertype,
			'propid':propid,
			'iam':iam,
			'name':advname,
			'emailid':emailid,
			'mobno':mobno,
			
			'propfor':propfor,
			'addrline1':addrline1,
			'city':city,
			'locality':locality,
			'currlat':currlat,
			'currlng':currlng,
			'project':project,
			
			'propdesc':propdesc,
			
			'proptype':proptype,
			'propcat':propcat,
			'tenanttype':tenanttype,
			
			'bltuparea':bltuparea,
			'crptarea':crptarea,
			'floorno':floorno,
			'totfloor':totfloor,
			'bhk':bhk,
			'bathroom':bathroom,
			'furnishtype':furnishtype,
			
			'rent':rent,
			'maintchrg':maintchrg,
			'secdeposit':secdeposit,
			'avlfmdt':avlfmdt,
			
			'facing':facing,
			'parking':parking,
			'amen':amenities
			
		};
		formObj.push(postdata);
		console.log(formObj);
		
		
		$.ajax({
           type: "POST",
           url: srl+"postad",
           //dataType: "json",
		   contentType: 'application/json;charset=UTF-8',
		   data: JSON.stringify(postdata),
           success: function (msg) {
               if (msg) {
                   alert("Property succesfully uploaded");
                   location.href = 'propimgupload.html?id='+propid;
               } else {
                   alert("Cannot add to list !");
               }
           },

           
       });
	});
}


function _setActiveInput(){
	$(document).on('click','.inputbttn',function(e){
		var parentId = '#'.concat($(this).parent().parent().attr('id'));
		
		if(parentId !='#amentype'){
			$(parentId).find('.inputbttn').removeClass('inpactive');
			$(this).toggleClass('inpactive');
		}else{
			$(this).toggleClass('inpactive');
		}
	});
}



function _gatherFieldDetails(classname){
	var panel= $(classname);
	var inputs = panel.find("input");
	//console.log(inputs);
	msgArray = [];
	
	$( inputs ).each(function( index ) {
		var val = 0 ;
		var id = $(this).attr('id');
		var val = $(this).val();
		var msg = {};
		
		//console.log(id + ','+val);
		if(val.length == 0){
			msg = id + ' cannot be blank' ;
			//alert(id + 'is blank');
		}else{
			msg = 'pass';	
		}
		msgArray.push(msg);
	});
	
	return msgArray ;
}

function _prepareValidation(classname){
	var inpArray = [];
	inpArray = _gatherFieldDetails(classname);
	var ok = 1 ;
	$( inpArray ).each(function( i ) {
		//console.log(inpArray[i]);
		if(inpArray[i] != 'pass'){
			ok = 0 ;
			alert(inpArray[i]);
		}
	});
	return ok;
}

function _prepareBackNav(){
	
	$(document).on('click','.secbackbttn',function(e){
		var bttnId = $(this).attr('id');
		var classname = '.'.concat(bttnId.substring(0, 4));

			switch(bttnId){
			
			case 'sec2backbttn':
				$('.sec').hide();
				$('.sec1').show();
				break;
			case 'sec3backbttn':
				$('.sec').hide();
				$('.sec2').show();
				break;
			case 'sec4backbttn':
				$('.sec').hide();
				$('.sec3').show();
				break;
			case 'sec5backbttn':
				$('.sec').hide();
				$('.sec4').show();
				break;
			case 'sec6backbttn':
				$('.sec').hide();
				$('.sec5').show();
				break;
		}
	});
}

function _gatherFieldDetails(classname){
	var panel= $(classname);
	var inputs = panel.find(".required");
	//alert($('#locality').val());
	//console.log(inputs);
	msgArray = [];
	
	$( inputs ).each(function( index ) {
		var val = 0 ;
		var id = $(this).attr('id');
		var val = $(this).val();
		var msg = {};
		
		//console.log(id + ','+val);
		if(val.length == 0){
			msg = id + ' cannot be blank' ;
			//alert(id + 'is blank');
		}else{
			msg = 'pass';	
		}
		msgArray.push(msg);
	});
	return msgArray ;
}

function _prepareValidation(classname){
	var inpArray = [];
	inpArray = _gatherFieldDetails(classname);
	var ok = 1 ;
	$( inpArray ).each(function( i ) {
		//console.log(inpArray[i]);
		if(inpArray[i] != 'pass'){
			ok = 0 ;
			alert(inpArray[i]);
		}
	});
	return ok;
}	