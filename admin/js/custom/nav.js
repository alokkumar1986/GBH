
$(document).ready(function(){
	_initnav();
	
});

function _initnav(){
	_dsh = '<li class="home active"><a href="home.php"><i class="fa fa-tachometer"></i> <span>Dashboard</span></a></li>' ;	
	_men1 = '<li class="locsummary"><a href="?page=locsummary"><i class="fa fa-map"></i> <span>Manage Locations</span></a></li>';
	_men2 = '<li class="postsummary"><a href="?page=postsummary"><i class="fa fa-th"></i> <span>Manage Postings</span></a></li>';
	_men3 = '<li class="reqsummary"><a href="?page=reqsummary"><i class="fa fa-table"></i> <span>Manage Requirements</span></a></li>';
	
	/*
	_men3 = '<li class="treeview"><a href="locsummary.html"><i class="fa fa-link"></i> <span>Operations</span>'
            +'<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i>'
            +  '</span></a>'
			+'<ul class="treeview-menu">'
            +'<li><a href="locsummary.html">Manage Location</a></li>'
			+'<li><a href="postsummary.html">Manage Postings</a></li>'
			+'<li><a href="reqsummary.html">Manage Requirements</a></li>'
           +'</ul>'
        +'</li>'
	*/
	$('#navul').append(_dsh).append(_men1).append(_men2).append(_men3);
}