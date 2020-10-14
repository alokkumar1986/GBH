function _getVal(classname){
	$('#errcntnr').empty();
	//i1 = _valInputDiv('#reqtype');
	i1 = _valInputDiv(classname);
	i2 = _valInput1(classname);
	i3 = _valSelect(classname);
	
	var i = i1+i2+i3;
	return i ;
}

function _valInputDiv(classname){
		var i1=0;
		msgArray = [];
		
		if(classname=='.sec1'){
			divid='#reqtype';
		}
		var iam = $(divid).children().find('.inpactive');

		if(iam.length < 1){
			i1 = 1 ;
			var msg = {};
			msg = 'Requirement Type cannot be blank';
			msgArray.push(msg);
			genErrorbyMsg(msgArray);
		}
	return i1;
}



function _valSelect(classname){
		var i1=0;
		msgArray = [];
		
		if(classname == '.sec2'){
			var iam = $('#locality').val();
		//alert(iam);
		if(iam.length < 1){
			i1 = 1 ;
			var msg = {};
			msg = 'Please specify your preferred Location';
			msgArray.push(msg);
			genErrorbyMsg(msgArray);
		}
		}
		
	return i1;
}

function _valInput1(classname){
	var i1=0;
	msgArray = [];
	//alert(classname);
	
	var panel= $(classname);
	var inputs = panel.find(".required");
	
	$( inputs ).each(function( index ) {
		var id = $(this).attr('id');
		var val = $(this).val();
		
		if(val.length < 1){
			i1 = 1 ;
			var msg = {};
			msg = id ; //+' cannot be blank';
			msgArray.push(msg);
		}
		//alert(id);
	});
		genErrorbyID(msgArray);
	return i1;
}

function genErrorbyMsg(errmsg){
	//console.log(errmsg);
	$( errmsg ).each(function( i,data ) {
		//console.log(data);
		_err2 = '<p style="color:red">'+data+'</p>';
		_div2 = $('<div></div>').addClass('errdiv').append(_err2);
		$('#errcntnr').append(_div2);
	});
}

function genErrorbyID(errmsg){
	var txt ;
	//console.log(errmsg);
	$( errmsg ).each(function( i,data ) {
		//console.log(data);
		switch(data){
		case 'fullname':
			txt='Full Name cannot be Blank';
			break;
		case 'emailid':
			txt='Email ID cannot be Blank';
			break;
		case 'mobno':
			txt='Mobile No Name cannot be Blank';
			break;
		case 'minamt':
			txt='Please specify a minimum Amount';
			break;
		case 'maxamt':
			txt='Please specify a maximum Amount';
			break;
		}
		_err2 = '<p style="color:red">'+txt+'</p>';
		_div2 = $('<div></div>').addClass('errdiv').append(_err2);
		$('#errcntnr').append(_div2);
	});
}

/* Posting form upload validation */


