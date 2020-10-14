//const srl = 'http://localhost:5000/api/v1.0/'

const srl = 'http://104.248.155.81:5010/api/v1.0/'

$(document).ready(function(){
	_navSummbySrch();
	_navSummbyCat();
	
	_setOpType();
	_setLocation();

	_getFeaturedProps();
	_navFrmFtrdProp();
	_setCity(0);
});


function _getImgbyProp(propid){
		//$('#img-summary').empty();

        $.ajax({
            url: srl+'props',
            type: 'get',
            data: {'imgid':propid},
            success: function(result){
                
				$(result).each(function(i,data){
					console.log(data);
					var _imgpath = data.imgpath ;
					var _imgtxt =  '<div class="item-card2-img">'
								+'<a href="propdetails.html"></a>'
								+	'<img src="'+_imgpath+'" alt="img" class="cover-image">'
								+'<div class="tag-text">'
								+'	<span class="bg-custom tag-option">For '+'1'+' </span>'
								+'</div>'
								+'</div>' ;
				});
            },
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
        }
    });
}

function _navFrmFtrdProp(){
	$(document).on('click','.ftrdprop',function(e){
		var propid = $(this).attr('id');
		var locid = '0';
		location.href = 'propdetails.html?propid='+propid + '&locid='+locid;
	});	
}

function _getFeaturedProps(){
	
	var owl = $('.owl-carousel-icons2');
	owl.owlCarousel({
		margin: 25,
		loop: true,
		nav: true,
		autoplay: false,
		dots: false,
		
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
	$.ajax({
			url: srl+'props',
			method: "GET",
			//data:'ftrd',
			dataType: 'json',
			crossDomain: true,
			contentType: 'application/json',
			crossDomain: true,
			success: function(result){
				$(result).each(function(i,data){
					console.log(data);
					
					var propid = data.prop_id ;
					//alert(propid);
					
					
					_imgtxt = '<div class="item-card2-img" >'
								+	'<img src="'+data.image_path+'" alt="img" class="cover-image">'
								+'<div class="tag-text">'
								+'	<span class="bg-custom tag-option">For '+data.prop_adv_for+' </span>'
								+'</div>'
								+'</div>' ;
								
					_prophdr = data.bhk_tot+' BHK '+data.category ;	
					_bodytxt = '<div class="card-body">'
								+'<div class="item-card2">'
								+	'<div class="item-card2-text">'
								+		'<p class="ptitle text-dark">'+_prophdr+'</p>'
								+		'<p class="mb-2"><i class="fa fa-map-marker text-muted mr-1"></i>'+data.loc_name+' , '+data.city +'</p>'
								+	'<h5 class="font-weight-bold mb-3"><i class="fa fa-rupee mr-1"></i>'
								+ data.rent_amt+'<span	class="fs-12  font-weight-normal"> Per Month</span></h5></div>'
								+'<ul class="item-card2-list">'
								+	'<li>'
								+	'	<p class="pfooter mb-0"><i class="fa fa-arrows-alt text-muted mr-1"></i>'+data.built_up_area
								+	'		Sqft</p>'
								+	'</li>'
								+	'<li>'
								+	'	<p class="pfooter mb-0"><i class="fa fa-bed text-muted mr-1"></i>'+data.bhk_tot +' Beds</p>'
								+	'</li>'
								+	'<li>'
								+	'	<p class="pfooter mb-0"><i class="fa fa-bath text-muted mr-1"></i>'+data.bathroom_tot+' Bath</p>'
								+	'</li>'
								+	'<li>'
								+	'	<p class="pfooter mb-0"><i class="fa fa-car text-muted mr-1"></i> 1 Car</p>'
								+	'</li>'
								+'</ul>'
							+'</div>'
						+'</div>' ;
						
					_footertxt = '<div class="card-footer">'
							+'<div class="footerimg d-flex mt-0 mb-0">'
								+'<div class="d-flex footerimg-l mb-0">'
									+'<h5 class="time-title text-muted p-0 leading-normal mt-1 mb-0">'+data.ownr_type +'<i'
										+'	class="si si-check text-success fs-12 ml-1" data-toggle="tooltip"'
									+'		data-placement="top" title="verified"></i></h5>'
								+'</div>'
								+'<div class="mt-2 footerimg-r ml-auto">'
								+'	<small class="text-muted">'+data.post_age+' day ago</small>'
							+'	</div>'
							+'</div>'
						+'</div>'
					owl.trigger('add.owl.carousel', [jQuery('<div class="card mb-0 ftrdprop" id="'+data.prop_id+'">'+_imgtxt+_bodytxt+_footertxt+'</div>')]);
					owl.trigger('refresh.owl.carousel');
				});
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
}

function _setOpType(){
	$(document).on('click','.optype',function(e){
		e.preventDefault();
		$('.optype').removeClass('opact');
		$(this).addClass('opact');
	});
}

function _navSummbySrch(){
	$(document).on('click','#submit_srch',function(e){
		e.preventDefault();
		var locname = $('#locsrch').val();
		var optype = $('.op_menu').find('.opact').text();
		
		//alert(optype);
		//alert(locname);
		$.ajax({
			url: 'api/frontapi.php',
			type: 'get',
			data: {'locname':locname},
			success: function(result){
				//console.log(result);
				locid = result[0]['loc_id'];
				location.href = 'propsummary.html?optype='+optype + '&id='+locid;
			}
		});
		//alert(locid);
		//location.href = 'propsummary.html?optype='+optype + '&id='+locid;
	});
}

function _navSummbyCat(){
	$(document).on('click','.propcat',function(e){
		e.preventDefault();
		var optype = $(this).attr('id');
		location.href = 'propsummary.html?optype='+optype;
	});
}

function _setDefLocation(){
	var cityId = $('#cityid').children("option:selected").val();//$('#cityid').val();
	//alert(cityId);
		$.ajax({
			url: 'api/frontapi.php',
			type: 'get',
			data: {'cityid':cityId, 'function':'getLocation'},
			success: function(result){
				result=JSON.parse(result);
				console.log(result);
				autocomplete(document.getElementById("locsrch"), result);
			}
	});
}
	
function _setLocation(){
	$(document).on('change','#cityid',function(e){
		cityId = $('#cityid').children("option:selected").val();;
		$.ajax({
			url: 'api/frontapi.php',
			type: 'get',
			data: {'cityid':cityId, 'function':'getLocation'},
			success: function(result){
				result=JSON.parse(result);
				//console.log(result);
				autocomplete(document.getElementById("locsrch"), result);
			}
	});
	});
}

function _setCity(locid=0){
	$.ajax({
		url: 'api/api.php',
		method: "GET",
		data: {'function':'getCity'},
		contentType: 'application/json',
		success: function(result){
				result = JSON.parse(result);
				//console.log(locid);
				var _select = "";
				var id = 1 ;
				result.result.forEach(function(data, i){
					 if(locid>0){
					 	if(data.id==locid){
					 		id=data.id;
					 	}
					 	//console.log(data.id);
					 }
					 _select =_select+" <option value='"+data.cityId+"'>"+data.cityName+"</option>"; 
				});
				//console.log(_select);
				$('#cityid').append(_select);
				$(document).ready(function() {
				    $('[id=cityid]').val( id ).prop('selected');
				    _setDefLocation();
				    //$('[id=city]').addClass("slecetd");
				});
		}
});
}