<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Gharabhada 1.0 | Admin</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="bower_components/Ionicons/css/ionicons.min.css">
  
  <link rel="stylesheet" href="bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
  <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
        page. However, you can choose any other skin. Make sure you
        apply the skin class to the body tag so the changes take effect. -->
  <link rel="stylesheet" href="css/skin.css">
  <link rel="stylesheet" href="css/custom.css">
  

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>

<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

  <!-- Main Header -->
  <header class="main-header">

    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>GHB</b></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Gharabhada 1.0</b></span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">

          <!-- User Account Menu -->
          <li class="dropdown user user-menu">
            <!-- Menu Toggle Button -->
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <span class="hidden-xs">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel" style='min-height: 80px;'>
        <div class="pull-left info">
          <p>Abhimanyu</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i>Online</a>
        </div>
      </div>


<!-- Sidebar Menu -->
      <ul class="sidebar-menu" id='navul' data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
      </ul>
<!-- /.sidebar-menu -->

    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>Home</a></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
		<div class='row'>
			<button class='btn btn-primary navbttn' id='summlocbttn' style='margin:1%;float:right'>Summary</button>
		</div>
		<div class="row">
			<div class='col-xs-1'></div>
			<div class="col-xs-10">
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">Posting Details</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form class="form-horizontal">
              <div class="box-body">
				<div class='row'>
				<div class='col-md-6'>
					<div class="form-group">
					  <label for="propid" class="col-sm-3 control-label">ID</label>
					  <div class="col-sm-4">
						<input type="text" class="form-control" id="propid">
					  </div>
					</div>
					<div class="form-group">
					  <label for="poston" class="col-sm-3 control-label">Posted On</label>
					  <div class="col-sm-4">
						<input type="text" class="form-control" id="poston">
					  </div>
					</div>
					<div class="form-group">
					  <label for="posttype" class="col-sm-3 control-label">Type</label>
					  <div class="col-sm-4">
						<input type="text" class="form-control" id="posttype">
					  </div>
					</div>
				</div>
				<div class='col-md-6'>
					<div class="form-group">
					  <label for="postby" class="col-sm-3 control-label">Posted By</label>
					  <div class="col-sm-6">
						<input type="text" class="form-control" id="postby">
					  </div>
					</div>
					<div class="form-group">
					  <label for="ownername" class="col-sm-3 control-label">Owner Name</label>
					  <div class="col-sm-6">
						<input type="text" class="form-control" id="ownername">
					  </div>
					</div>
					<div class="form-group">
					  <label for="emailid" class="col-sm-3 control-label">Email ID</label>
					  <div class="col-sm-6">
						<input type="text" class="form-control" id="emailid">
					  </div>
					</div>
					<div class="form-group">
					  <label for="mobno" class="col-sm-3 control-label">Mob No</label>
					  <div class="col-sm-6">
						<input type="text" class="form-control" id="mobno">
					  </div>
					</div>
				</div>
                </div>
				
				<div class='row'>
					<p class='frm-txt' style='padding:5%'>Location Details</p>
					<div class='col-md-6'>
						<div class="form-group">
						  <label for="city" class="col-sm-3 control-label">City</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="city">
						  </div>
						</div>
						<div class="form-group">
						  <label for="street" class="col-sm-3 control-label">Street/Landmark</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="street">
						  </div>
						</div>
					</div>
					<div class='col-md-6'>
					<div class="form-group">
						  <label for="locname" class="col-sm-3 control-label">Locality</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="locname">
						  </div>
						</div>
						<div class="form-group">
						  <label for="project" class="col-sm-3 control-label">Project Name</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="project">
						  </div>
						</div>
					</div>
				</div>
				
				<div class='row'>
					<p class='frm-txt' style='padding:5%'>Rental Details</p>
					<div class='col-md-6'>
						<div class="form-group">
						  <label for="rent" class="col-sm-3 control-label">Monthly Rent</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="rent">
						  </div>
						</div>
						<div class="form-group">
						  <label for="maintamt" class="col-sm-3 control-label">Maintenance</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="maintamt">
						  </div>
						</div>
					</div>
					<div class='col-md-6'>
					<div class="form-group">
						  <label for="avlfrom" class="col-sm-3 control-label">Available From</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="avlfrom">
						  </div>
						</div>
						<div class="form-group">
						  <label for="depamt" class="col-sm-3 control-label">Deposit</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="depamt">
						  </div>
						</div>
					</div>
				</div>
				
				
				<div class='row'>
					<p class='frm-txt' style='padding:5%'>Property Details</p>
					<div class='col-md-6'>
						<div class="form-group">
						  <label for="proptype" class="col-sm-3 control-label">Property Type</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="proptype">
						  </div>
						</div>
						<div class="form-group">
						  <label for="propcat" class="col-sm-3 control-label">Category</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="propcat">
						  </div>
						</div>
						<div class="form-group">
						  <label for="bltarea" class="col-sm-3 control-label">Built Up Area</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="bltarea">
						  </div>
						</div>
						<div class="form-group">
						  <label for="crptarea" class="col-sm-3 control-label">Carpet Area</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="crptarea">
						  </div>
						</div>
						<div class="form-group">
						  <label for="furnish" class="col-sm-3 control-label">Furnish Type</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="furnish">
						  </div>
						</div>
						<div class="form-group">
						  <label for="facing" class="col-sm-3 control-label">Facing</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="facing">
						  </div>
						</div>
					</div>
					<div class='col-md-6'>
					<div class="form-group">
						  <label for="tenant" class="col-sm-3 control-label">Tenant Type</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="tenant">
						  </div>
						</div>
						<div class="form-group">
						  <label for="bhk" class="col-sm-3 control-label">BHK</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="bhk">
						  </div>
						</div>
						<div class="form-group">
						  <label for="floor" class="col-sm-3 control-label">Floor</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="floor">
						  </div>
						</div>
						<div class="form-group">
						  <label for="totfloor" class="col-sm-3 control-label">Total Floor</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="totfloor">
						  </div>
						</div>
						<div class="form-group">
						  <label for="bathroom" class="col-sm-3 control-label">Bathrooms</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="bathroom" >
						  </div>
						</div>
						<div class="form-group">
						  <label for="parking" class="col-sm-3 control-label">Parking</label>
						  <div class="col-sm-6">
							<input type="text" class="form-control" id="parking">
						  </div>
						</div>
					</div>
				</div>
				
				<div class='row'>
					<p class='frm-txt' style='padding:5%'>Amenities Details</p>
					<div class='col-md-12' id='amen-summary'>
					<!--
					<div class='col-md-2 amen-div'>AC</div>
					-->
					</div>
				</div>
				
				<div class='row'>
				<p class='form-txt' style='padding:5%'>Property Description</p>
					<div class="form-group">
					  <label for="propdesc" class="col-sm-2 control-label">Description</label>
					  <div class="col-sm-8">
						<textarea class="form-control" name="propdesc" rows="6" id='propdesc' readonly></textarea>
					  </div>
					</div>
				</div>
				
				<div class='row'>
				<p class='frm-txt' style='padding:5%'>Property Images</p>
				<div class='col-md-12' id='img-summary'>
				<!--
					<div class="col-sm-3" style='margin:1%'>
						<img class='img-responsive' src='http://104.248.155.81/ghb/img/P0029/g1.jpg'></img>
					</div>
					-->
				
				</div>
				</div>

              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="button" id="rejprop" class="btn btn-danger pull-right">Reject</button>
                <button type="button" id="approveprop" class="btn btn-primary pull-right" style='margin-right:1%'>Approve</button>
              </div>
              <!-- /.box-footer -->
            </form>
          </div>
			</div>
		</div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery 3 -->
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<script src="bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>

<script src="js/custom/nav.js"></script>
<script src="js/custom/postmng.js"></script>

<!-- Optionally, you can add Slimscroll and FastClick plugins.
     Both of these plugins are recommended to enhance the
     user experience. -->
</body>
</html>