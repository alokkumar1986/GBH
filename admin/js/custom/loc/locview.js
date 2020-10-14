//const srl = 'http://104.248.155.81:5010/api/v1.0/'

var locid = getParameterByName('locid');

$(document).ready(function(){
	_initpage(locid);
	initEdit();
	submitEdit(locid);
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function initEdit(){
	$(document).on('click','#editloc',function(e){
		e.preventDefault();
		$("input").prop('readonly', false);	
		$("select").prop('readonly', false);		
	});
}

function submitEdit(locid){
	$(document).on('click','#subeditloc',function(e){
		//$("#Wait").modal();
		$('#confirmModal').modal();
		$("#btnOk").on('click', function(){
		$("#myModal").modal();
		
		e.preventDefault();
		var cityId = $('#city').children("option:selected").val();
		var cityName =  $('#city').children("option:selected").text();
		var locname = $('#locname').val();
		var lattd = $('#lattd').val();
		var longtd = $('#longtd').val();
		var opstype = 'U'		
		var formObj = [];
		
		$.ajax({
		   url: "../api/api.php",
           method: "POST",
           data : { 'locid':locid,
			'cityId':cityId,
			'cityName':cityName,
			'locname':locname,
			'lattd':lattd,
			'longtd':longtd,
			'opstype':opstype,
			'function':'submitLocation'},
           //dataType: "json",
		   'dataType': 'text',
		   //data: JSON.stringify(postdata),
           success: function (data) {
           	   console.log( JSON.parse(data));
		  	   data = JSON.parse(data);
               if (data.msg == 'success'){
                   //alert("Location Succesfully Updated");
                   setTimeout(function(){
					   $("#myModal").modal();
	                   $(".modal-title").text("Success");
	                   $(".modal-title").css("color", "green")
	                   $(".modal-body").text("Location succesfully updated.");
	                   $('.btnClose').on("click", function(){
		               	 location.reload(true);
		               });
					},3000);
                  
               }else if(data.msg == 'fail'){
               	   setTimeout(function(){
	               	   $("#myModal").modal();
	               	   $(".modal-title").text("Failed");
	               	   $(".modal-title").css("color", "red")
	                   $(".modal-body").text("Something went wrong!");
                   },3000);
               }
			  // location.reload(true);
           },
       });	

	});

	});
	//}, 300);

}

function _initpage(locid){
	
	
	$.ajax({
		url: '../api/api.php',
		method: "GET",
		data: {'locid':locid,'function':'editLocation'},
		contentType: 'application/json',
		success: function(result){
				//console.log(result);
				$(JSON.parse(result)).each(function(i,data){                    
					//$('#city').val(data.cityName);
					var cityId = data.cityId;
					$('#id').val(data.id);
					$('#locname').val(data.location);
					$('#lattd').val(data.latitude);
					$('#longtd').val(data.longitude);
					fetchCity(cityId);					
				});
				
				$('#locsumm').DataTable({
				  'paging'      : true,
				  'lengthChange': false,
				  'searching'   : true,
				  'ordering'    : false,
				  'info'        : false,
				  'autoWidth'   : true
				})
		}
});

	
}

