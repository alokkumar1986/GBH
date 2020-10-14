//const srl = 'http://localhost:5000/api/v1.0/'

const srl = 'http://104.248.155.81:5010/api/v1.0/'

var locid = getParameterByName('id');
var optype = getParameterByName('optype');

$(document).ready(function(){
	//_setLocId();
	_initPage(locid);
	_navPropDetails();
	_propCatfilter();
	
});

function _initPage(locid){
	if(locid.length > 0){
		_popPropbyLoc();
	}
	if(optype.length > 0){
		_popPropbyCat();
	}
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function _getTopImg(propid){
	var imgpath ;
	$.ajax({
			url: srl+'props',
			type: 'get',
			data: {'imgall':propid},
			success: function(result){
				//console.log(result);
				$(result).each(function(i,data){
					imgpath = data.imgpath;;
				});
			}
	});
	return imgpath;
}

function _popPropbyLoc(){
	var imgpath ;

		$.ajax({
			url: srl+'props',
			type: 'get',
			data: {'locid':locid},
			success: function(result){
				$(result).each(function(i,data){
					console.log(data);
					
					_str = '<div class="card overflow-hidden propdiv" style="cursor:pointer" id="'+data.prop_id+'">'
								+'<div class="d-md-flex">'
									+'<div class="item-card9-img">'
										//+'<div class="arrow-ribbon bg-primary">Premium</div>'
										+'<div class="item-card9-imgs">'
											+'<a href="#"></a>'
												+'<img src="'+data.image_url+'" alt="img" class="cover-image">'
										+'</div>'
									+'</div>'
								+'<div class="card border-0 mb-0">'
									+'<div class="card-body ">'
										+'<div class="item-card9">'
											+'<p class="text-muted mr-2 mb-2"><i class="fa fa-tag mr-1"></i>'+data.category+'</p>'
											+'<p class="text-dark font-weight-bold mt-1 mb-0" style="font-size: 1.3rem;">'+data.bhk_tot+'BHK flat</p>'
											+'<p class="text-dark font-weight-bold m-0 mb-1" style="font-size:1rem">'
												+'<i class="fa fa-inr inrcust "></i>'+data.rent_amt+' / Month'
											+'</p>'
											+'<div class="mb-1">'
												+'<a href="#" class="icons text-muted mr-4"><i class="fa fa-arrows-alt text-muted mr-1"></i>'+data.built_up_area+' Sqft</a>'
												+'<a href="#" class="icons text-muted mr-4"><i class="fa fa-bed text-muted mr-1"></i>'+data.bhk_tot+' Beds</a>'
												+'<a href="#" class="icons text-muted mr-4"><i class="fa fa-bath text-muted mr-1"></i>'+data.bathroom_tot+' Bath</a>'
												+'<a href="#" class="icons text-muted mr-4"><i class="fa fa-car text-muted mr-1"></i>Parking</a>'
											+'</div>'
										+'</div>'
									+'</div>'
								+'<div class="card-footer pt-2 pb-2">'
									+'<div class="item-card9-footer d-flex">'
										+'<div class="item-card9-cost">'
											+'<p class="mr-3 mb-0 pfooter"><i class="fa fa-map-marker text-muted mr-1"></i>'+data.city+'</p>'
											+'<p class="pfooter"><i class="fa fa-user text-muted mr-1"></i>'+data.ownr_type+'</p>'
										+'</div>'
										+'<div class="ml-auto">'
										+'	<p class="pfooter"><i class="fa fa-calendar-o text-muted mr-1"></i>'+data.post_age+' days ago</p>'
									+'	</div>'
								+'	</div>'
							+'	</div>'
						+'	</div>'
					+'	</div>'
					+'</div>' ;
					$('#tab-11').append(_str);
				});
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
}

function _popPropbyCat(){
	var imgpath ;

		$.ajax({
			url: srl+'props',
			type: 'get',
			data: {'cat':optype},
			success: function(result){
				$(result).each(function(i,data){
					console.log(data);
					
					_str = '<div class="card overflow-hidden propdiv" style="cursor:pointer" id="'+data.prop_id+'">'
								+'<div class="d-md-flex">'
									+'<div class="item-card9-img">'
										//+'<div class="arrow-ribbon bg-primary">Premium</div>'
										+'<div class="item-card9-imgs">'
											+'<a href="#"></a>'
												+'<img src="'+data.image_url+'" alt="img" class="cover-image">'
										+'</div>'
									+'</div>'
								+'<div class="card border-0 mb-0">'
									+'<div class="card-body ">'
										+'<div class="item-card9">'
											+'<p class="text-muted mr-2 mb-2"><i class="fa fa-tag mr-1"></i>'+data.category+'</p>'
											+'<p class="text-dark font-weight-bold mt-1 mb-0" style="font-size: 1.3rem;">'+data.bhk_tot+'BHK flat</p>'
											+'<p class="text-dark font-weight-bold m-0 mb-1" style="font-size:1rem">'
												+'<i class="fa fa-inr inrcust "></i>'+data.rent_amt+' / Month'
											+'</p>'
											+'<div class="mb-1">'
												+'<a href="#" class="icons text-muted mr-4"><i class="fa fa-arrows-alt text-muted mr-1"></i>'+data.built_up_area+' Sqft</a>'
												+'<a href="#" class="icons text-muted mr-4"><i class="fa fa-bed text-muted mr-1"></i>'+data.bhk_tot+' Beds</a>'
												+'<a href="#" class="icons text-muted mr-4"><i class="fa fa-bath text-muted mr-1"></i>'+data.bathroom_tot+' Bath</a>'
												+'<a href="#" class="icons text-muted mr-4"><i class="fa fa-car text-muted mr-1"></i>Parking</a>'
											+'</div>'
										+'</div>'
									+'</div>'
								+'<div class="card-footer pt-2 pb-2">'
									+'<div class="item-card9-footer d-flex">'
										+'<div class="item-card9-cost">'
											+'<p class="mr-3 mb-0 pfooter"><i class="fa fa-map-marker text-muted mr-1"></i>'+data.city+'</p>'
											+'<p class="pfooter"><i class="fa fa-user text-muted mr-1"></i>'+data.ownr_type+'</p>'
										+'</div>'
										+'<div class="ml-auto">'
										+'	<p class="pfooter"><i class="fa fa-calendar-o text-muted mr-1"></i>'+data.post_age+' days ago</p>'
									+'	</div>'
								+'	</div>'
							+'	</div>'
						+'	</div>'
					+'	</div>'
					+'</div>' ;
					$('#tab-11').append(_str);
				});
			},
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
		}
	});
}

function _navPropDetails(){
	$(document).on('click','.propdiv', function(e){
		var propid = $(this).attr('id');
		location.href = 'propdetails.html?propid='+propid + '&locid='+locid;
	});
}

function _propCatfilter(){
	$(document).on('click','#applyfltr', function(e){
		filterData = [];
		propcat=[];
		postby = [];
		bhk=[];
		furntype=[];
		
		var minamt = $('#slider-range').slider("values")[0];
		var maxamt = $('#slider-range').slider("values")[1];
		//alert(amt);
		
		$(".catfltr:checked").each(function() {
			propcat.push(this.value);
		});
		$(".postbyfltr:checked").each(function() {
			postby.push(this.value);
		});
		$(".bhkfltr:checked").each(function() {
			bhk.push(this.value);
		});
		$(".furntypefltr:checked").each(function() {
			furntype.push(this.value);
		});
		var filter={
			'propcat':propcat,
			//'op':'filter',
			'postby':postby,
			'bhk':bhk,
			'furntype':furntype,
			'minamt':minamt,
			'maxamt':maxamt
		}
		filterData.push(filter);
		console.log(filterData);
		
		$.ajax({
           type: "POST",
           url: srl+"propfltr",
           //dataType: "json",
		   contentType: 'application/json;charset=UTF-8',
		   data: JSON.stringify(filterData),
           success: function (data) {
               console.log(data);
           },

           
       });
	});
	
}