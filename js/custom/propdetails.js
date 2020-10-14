//const srl = 'http://localhost:5000/api/v1.0/'

var locid = getParameterByName('locid');
var propid = getParameterByName('propid');

const srl = 'http://104.248.155.81:5010/api/v1.0/'

$(document).ready(function(){
	_initPage();
	getPropImages();
	getPropDetails();
	getAmenDetails();
	
	_getSimilarProps();
});

function _initPage(){
	$('#rntrbn').hide();
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function _getSimilarProps(){
	//var locid = 2;
	
	var owl = $('.owl-carousel-icons');
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
			type: 'get',
			data: {'locid':locid},
			success: function(result){
				$(result).each(function(i,data){
					console.log(data);
					
					_imgtxt = '<div class="item-card2-img">'
								+'<a href="propsummary.html"></a>'
								+	'<img src="img/banner/b2.jpg" alt="img" class="cover-image">'
								+'<div class="tag-text">'
								+'	<span class="bg-custom tag-option">For '+data.prop_adv_for+' </span>'
								+'</div>'
								+'</div>' ;
								
					_bodytxt = '<div class="card-body">'
								+'<div class="item-card2">'
								+	'<div class="item-card2-text">'
								+		'<p class="ptitle text-dark">Ranga Sai Nilayam </p>'
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
					owl.trigger('add.owl.carousel', [jQuery('<div class="card mb-0">'+_imgtxt+_bodytxt+_footertxt+'</div>')]);
					owl.trigger('refresh.owl.carousel');
				});
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
}
//Get latest property id 

function getPropImages(){
	//var propid=13 ;
	$.ajax({
		url: srl+'props',
		type: 'get',
		data: {'imgid':propid},
		success: function(result){
			//console.log(result);
			$(result).each(function(i,data){
					var _img = data.imgpath;
					if(i==0){
						_div = '<div class="carousel-item active"><img src='+_img+' alt="img"></div>';
					}else{
						_div = '<div class="carousel-item"><img src='+_img+' alt="img" ></div>';
					}
					$('#crinner').append(_div);
				});
				
			$(result).each(function(i,data){
					var _img = data.imgpath;
					if(i<=5){
						_thmbdivact = '<div data-target="#carousel" data-slide-to="'+i+'" class="thumb">'
										+'<img src="'+_img+'" alt="img"></div>' ;
						$('#thmbactv').append(_thmbdivact);
					}else{
						_thmbdiv = '<div data-target="#carousel" data-slide-to="'+i+'" class="thumb">'
										+'<img src="'+_img+'" alt="img"></div>' ;
						$('#thmb').append(_thmbdiv);
					}
					
				});
	$('.carousel').carousel()
		},
		error:function (xhr, ajaxOptions, thrownError) {
			console.log(xhr.status);
			//alert(thrownError);
	}
});
}

//Get location details based on city code 


// Get property amenities details
function getAmenDetails(){
	//var propid=11 ;
	
	$.ajax({
			url: srl+'props',
			type: 'get',
			data: {'amenid':propid},
			success: function(result){
				$(result).each(function(i,data){
					var _amen = data.amen_short_code;
					var _li = '<li class="col-xl-4 col-md-12 dtamen"><i class="fa fa-bed text-muted w-5 "></i>'+_amen+'</li>'
					
					$('#amen-summary').append(_li);
					
				});
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
			
}
//Location selection based on default city value
function getPropDetails(){
	//var propid=13 ;

		$.ajax({
			url: srl+'props',
			type: 'get',
			data: {'propid':propid},
			success: function(result){
				console.log(result);
				
				postedby = result[0].ownr_type;
				rentamt = result[0].rent_amt;
				bhk = result[0].bhk_tot;
				bathroom = result[0].bathroom_tot;
				bltuparea = result[0].built_up_area;
				crptarea = result[0].carpet_area;
				proptype = result[0].category;
				city = result[0].city;
				depamt = result[0].dep_amt;
				
				floor = result[0].floor_no;
				loc = result[0].loc_name;
				maintamt = result[0].maint_amt;
				advtype = result[0].prop_adv_for;
				furnishtype = result[0].prop_furnish_type;
				tenanttype = result[0].prop_tenant_type;
				totfloors = result[0].tot_floors;
				
				rentdesc = rentamt.concat(' / month');
				propdesc = bhk+' BHK '+proptype+' Available at '+loc;
				console.log(rentamt);
				$('#rentbdg').text(rentdesc);
				$('#propdesc').text(propdesc);
				
				$('#loctit').text(loc+' , '+city);
				$('#proptypetit').text(proptype);
				$('#renttit').text(rentamt+' / month (negotiable)');
				
				$('#areatit').text(bltuparea + ' sqft');
				$('#deposittit').text(depamt+' deposit');

				//Amenities table population
				$('#tdfurntype').text(furnishtype);
				$('#tdfacing').text('NA');
				$('#tdwatersply').text('NA');
				$('#tdfloor').text(floor+' of '+totfloors);
				$('#tdbathroom').text(bathroom);
				$('#tdsecurity').text('NA');
				
				$('#postedbytit').text('Posted By '+postedby);
				$('#amenbedroom').text(bhk+' Bedroom');
				$('#amenproptype').text(proptype);
				$('#amentenant').text(tenanttype);
				$('#amenposs').text('NA');
				$('#amenparking').text('NA');
				$('#amentotage').text('NA');
				$('#amenfurnsh').text(furnishtype);
				$('#amenpostage').text('NA');
				
				$('#rntrbn').show();
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
}

