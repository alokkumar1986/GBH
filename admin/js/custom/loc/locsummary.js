//const srl = 'http://104.248.155.81:5010/api/v1.0/'

$(document).ready(function(){
	_initpage();
	_navCreateLoc();
	_createLoc();
	_navLocDetails();
    _deleteLocation();
    //fetchCity(0)
	
});

function _initpage(){
	
	$.ajax({
    'url': '../api/api.php',
    'method': "GET",
	'data': {'function':'locationDtl'},
    'contentType': 'application/json',
	success: function(result){
				console.log(result);
				result = JSON.parse(result);
				//$(JSON.parse(result)).each(function(i,data){
					result.result.forEach(function(data, i){
					if(data.length!=0){
					_td0 = $('<td style="display:none;"></td>').text(data.id);
					_td1 = $('<td></td>').text(data.cityId);
					_td2 = $('<td></td>').text(data.cityName);
					_td3 = $('<td></td>').text(data.location);
					
					_td4 = $('<td></td>').text(data.latitude);
					_td5 = $('<td></td>').text(data.longitude);
					_td6 = $('<td></td>').text('Active');
					
					_btn1 = '<button class="btn btn-primary editlocbttn">Edit</button>' ;
					_btn2 = '<button class="btn btn-danger deletelocbttn" style="margin-left:1%">Delete</button>' ;
					_td7= $('<td></td>').append(_btn1).append(_btn2);
					
					_tr = $('<tr></tr>').append(_td0).append(_td1).append(_td2).append(_td3).append(_td4).append(_td5).append(_td6).append(_td7);
					$('#locsumm').append(_tr);
			    	}
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


function _navCreateLoc(){
	$(document).on('click','.navbttn',function(e){
		e.preventDefault();
		var id= $(this).attr('id');
		switch(id){
			case 'crlocbttn':
				location.href='home.php?page=loccreate';
				break;
			case 'cnclbttn':
				location.href='home.php?page=locsummary';
				break;
			case 'summlocbttn':
				location.href='home.php?page=locsummary';
				break;
			case 'summcitybttn':
				location.href='home.php?page=citysummary';
				break;
			case 'crcitybttn':
				location.href='home.php?page=citycreate';
				break;
		}
		
	});
}

function _createLoc(){
	$(document).on('click','#createloc',function(e){
		//e.preventDefault();
		$("#confirmModal").modal();
		$("#btnOk").on("click", function(){
		$("#myModal").modal();
		setTimeout(function(){
		var cityId = $('#city').children("option:selected").val();
		var cityName =  $('#city').children("option:selected").text();
		var locname = $('#locname').val();
		var lattd = $('#lattd').val();
		var longtd = $('#longtd').val();

		if(cityId=='' || cityId==null){
			$("#myModal").modal("hide");
			$("#myModal1").modal();
			$("#myModal1 .modal-body").text("City cann't be blank.");
			$("#city").focus();
			return 0;
		}
		if(locname=='' || locname==null){
			$("#myModal").modal("hide");
			$("#myModal1").modal();
			$("#myModal1 .modal-body").text("Location cann't be blank.");
			$("#locname").focus();
			return 0;
		}
		if(lattd=='' || lattd==null){
			$("#myModal").modal("hide");
			$("#myModal1").modal();
			$("#myModal1 .modal-body").text("Latitude cann't be blank.");
			$("#lattd").focus();
			return 0;
		}
		if(longtd=='' || longtd==null){
			$("#myModal").modal("hide");
			$("#myModal1").modal();
			$("#myModal1 .modal-body").text("Longitude cann't be blank.");
			$("#longtd").focus();
			return 0;
		}		
		
		$.ajax({
           type: "POST",
           url: "../api/api.php",
           dataType: "text",
		  
		   data: {'cityId':cityId,
			'cityName':cityName,
			'locname':locname,
			'lattd':lattd,
			'longtd':longtd,
			'function':'addLocation'},
           success: function (data) {
               data = JSON.parse(data);
               if (data.msg == 'success'){
                   //alert("Location Succesfully Updated");
                   setTimeout(function(){
					   $("#myModal").modal();
	                   $(".modal-title").text("Success");
	                   $(".modal-title").css("color", "green")
	                   $(".modal-body").text("Location succesfully added.");
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
			   //location.reload(true);
           },           
          });
	     }, 3000);
	   })
	});
}

function _navLocDetails(){
	$(document).on('click','.editlocbttn',function(e){
		e.preventDefault();		
		var locid = $(this).closest('tr').children('td:first').text();
		location.href = 'home.php?page=locview&locid='+locid;

	});
}

function _deleteLocation(){
	$(document).on('click', '.deletelocbttn', function(){
		//e.preventDefault();	
		var locid = $(this).closest('tr').children('td:first').text();
		$('#confirmModal ').modal();
		$("#btnOk").on('click', function(){
			$("#myModal").modal();
			$.ajax({
	           type: "POST",
	           url: "../api/api.php",
	           dataType: "text",
			   data: {"locid":locid,"function":"deleteLocation"},
	           success: function (data) {
           	   console.log( JSON.parse(data));
		  	   data = JSON.parse(data);
               if (data.msg == 'success'){
                   //alert("Location Succesfully Updated");
                   setTimeout(function(){
					   $("#myModal").modal();
	                   $(".modal-title").text("Success");
	                   $(".modal-title").css("color", "green")
	                   $(".modal-body").text("Location succesfully deleted.");
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

           }
           });
		});
	});
}

function fetchCity(locid=0){
	$.ajax({
		url: '../api/api.php',
		method: "GET",
		data: {'function':'getCity'},
		contentType: 'application/json',
		success: function(result){
				result = JSON.parse(result);
				//console.log(locid);
				var _select = "";
				var id = 0 ;
				result.result.forEach(function(data, i){
					 if(locid>0){
					 	if(data.id==locid){
					 		id=data.id;
					 	}
					 	console.log(data.id);
					 }
					 _select =_select+" <option value='"+data.cityId+"'>"+data.cityName+"</option>"; 
				});
				console.log(id);
				$('#city').append(_select);
				$(document).ready(function() {
				    $('[id=city]').val( id ).prop('selected');
				    //$('[id=city]').addClass("slecetd");
				});
		}
});
}
