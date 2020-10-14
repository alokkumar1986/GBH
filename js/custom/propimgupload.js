//const srl = 'http://localhost:5000/api/v1.0/'

const srl = 'http://104.248.155.81:5010/api/v1.0/'

var propid = getParameterByName('id');


$(document).ready(function(){
	//_prepareFormNav();
	_getImgbyProp(propid)
	_uploadImg();
	_delImage();
	_compSubmission();
	
	$(document).on("wheel", "input[type=number]", function (e) {
    $(this).blur();
});




});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/* Remove an image from a property */

function _delImage(){
		$(document).on('click','.delimg',function(e){
			var id = $(this).attr('id');
			//var propid = $('#propid').val();
			var dt = {'imgid':id};
			$.ajax({
					url: srl+'img',
					type: 'post',
					
					contentType: 'application/json;charset=UTF-8',
					data: JSON.stringify(dt),
					success: function(data){
						alert('Succesfully deleted');
						_getImgbyProp(propid);
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
        var files = $('#image')[0].files[0];
		fd.append('image',files);
		fd.append('id',propid);
		
        $.ajax({
            url: srl+'upload',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
			cache:false,
            success: function(data){
				_getImgbyProp(propid)
            },
			error:function (xhr, ajaxOptions, thrownError) {
				console.log(xhr.status);
				//alert(thrownError);
        }
    });
});
}

function _compSubmission(){
		$(document).on('click','#sec6bttn',function(e){
			alert('property Succesfully submitted ');
			location.href = 'adpost.html';
		});
	
}
