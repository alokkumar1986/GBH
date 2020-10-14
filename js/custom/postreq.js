//const srl = 'http://localhost:5000/api/v1.0/'

const srl = 'http://104.248.155.81:5010/api/v1.0/'


$(document).ready(function(){
	
	_validateUser();
	getUserDetails();
	_prepareFormNav();

	getLocationDefault();
	getLocation();
	//getLocCoords();
	_setActiveInput();
	_loadPostFields();

	
	$(document).on("wheel", "input[type=number]", function (e) {
    $(this).blur();
});

$(document).ready(function(){
    $( document ).on( 'focus', ':input', function(){
        $( this ).attr( 'autocomplete', 'off' );
    });
});
	
	$(document).ready(function() {
    $('.loc-placeholder').select2({
		multiple: true,
		maximumSelectionLength: 3,
		tokenSeparators: [',']
	});
});
	
});

function _validateUser(){
	$('.sec').hide();
	$('.sec0').show();
	$(document).on('click','.navuserdiv',function(e){
		e.preventDefault();
		
		var id = $(this).attr('id');
		if(id == 'newuser'){
			_popUserSection(1);
		}else{
			_popUserSection(0);
		};
	});
}

function _popUserSection(optype){
	
		if(optype == 0){
			$('.sec0').hide();
			$('.sec1').show();
			$('.usedetel').hide();
		}else{
			$('.sec0').hide();
			$('.sec1').show();
			$('#popusrbttn').hide();
		};
}

//Get User details for existing users

function getUserDetails(){
	
	$(document).on('click','#popusrbttn',function(e){
		var mobno = $('#mobno').val();
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
			   console.log(msg[0]);
               if (msg.length > 0) {
					$('.usedetel').show();
					$('#popusrbttn').prop('disabled',true);
					$('#fullname').val(msg[0]['full_name']).prop('readonly',true);
					$('#mobno').val(msg[0]['mob_no']).prop('readonly',true);
					$('#emailid').val(msg[0]['email_id']).prop('readonly',true);
               } else {
                   alert("Could not find details, please try again !");
               }
           },
       });
	});


}

function _prepareFormNav(){
	$('.sec').hide();
	$('.sec0').show();
	
	$(document).on('click','.secbttn',function(e){
		var bttnId = $(this).attr('id');
		var classname = '.'.concat(bttnId.substring(0, 4));
		//classname = '.sec1' ;
		//var msg = _prepareValidation(classname);
		msg = _getVal(classname);
		//alert(msg);
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
			case 'sec2backbttn':
				$('.sec').hide();
				$('.sec1').show();
				break;
			case 'sec3backbttn':
				$('.sec').hide();
				$('.sec2').show();
				break;

		}
		}
	});
}	
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


function _loadPostFields(){
	$(document).on('click','#sec3bttn',function(e){
		
		var reqtype = $('#reqtype').find('.inpactive').val();
		var fullname = $('#fullname').val();
		var emailid = $('#emailid').val();
		var mobno = $('#mobno').val();
		
		var city = $('#city').val();
		var locality = $('#locality').val();
		
		var minamt = $('#minamt').val();
		var maxamt = $('#maxamt').val();
		
		var proptype = $('#proptype').find('.inpactive').attr('id');
		var propcat = $('#propcat').find('.inpactive').attr('id');
		var tenanttype = $('#tenanttype').find('.inpactive').val();
		
		var bhk = $('#bhk').find('.inpactive').attr('id');
		
		var furnishtype = $('#furnishtype').find('.inpactive').val();
		
		var selected = [];
			if ($("#locality").select2('data').length){
			  $.each($("#locality").select2('data'), function(key, item){
				//loc1 = item.text
				//alert(loc1);
				selected.push(item.text);
			  });
			}

		var formObj = [];
		var postdata = {

			'reqtype':reqtype,
			'fullname':fullname,
			'emailid':emailid,
			'mobno':mobno,
			
			'city':city,
			'locality':selected,
			'minamt':minamt,
			'maxamt':maxamt,
			
			'proptype':proptype,
			'propcat':propcat,
			'tenanttype':tenanttype,
			
			'bhk':bhk,
			
			'furnishtype':furnishtype,
			
			
	
		};
		
		
		formObj.push(postdata);
		console.log(selected);
		console.log(formObj);
		
		$.ajax({
           type: "POST",
           url: srl+"postreq",
           //dataType: "json",
		   contentType: 'application/json;charset=UTF-8',
		   data: JSON.stringify(postdata),
           success: function (msg) {
               if (msg) {
                   alert("Requirement succesfully uploaded");
                   location.reload(true);
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

