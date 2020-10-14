<?php include("session_check.php"); ?>
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
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/AdminLTE.min.css">

  <link rel="stylesheet" href="css/skin.css">

  <!-- Google Font -->
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

  <!-- Favicon -->
  <link rel="icon" href="../icon.png" type="image/x-icon"/>
  <link rel="shortcut icon" type="image/x-icon" href="../icon.png" />
  <!-- jQuery 3 -->
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <!-- Bootstrap 3.3.7 -->
  <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
</head>

<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

  <!-- Main Header -->
  <header class="main-header">

    <!-- Logo -->
    <a href="index.php" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><img src="../icon.png" width="20" height="20"><b>GHB</b></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><img src="../icon.png" width="40" height="40"><b>Gharabhada 1.0</b></span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="logout.php" >
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
          <p></p>
          <p align="center" style="color:#fff"><?php echo $_SESSION['name']; ?>
          <!-- Status -->
          <br /><br />
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a></p>
         </div> 
      </div>


      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" id='navul' data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <!-- Optionally, you can add icons to the links -->
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <?php $page = $_GET['page'];
         switch($page){
         case 'loccreate':
            $brdcum = '<a href="home.php?page=locsummary">Manage Locations</a>  >  Add Location';
            break;
         case 'locview':
            $brdcum = '<a href="home.php?page=locsummary">Manage Locations</a>  >  Edit Location';
            break;
            case 'citycreate':
            $brdcum = '<a href="home.php?page=locsummary">Manage Locations</a>  >  Add City';
            break;
         case 'locsummary':
            $brdcum = 'Manage Locations';
            break;
        case 'citysummary':
            $brdcum = '<a href="home.php?page=locsummary">Manage Locations</a>  >  Manage City';
            break;
         case 'postsummary':
            $brdcum = 'Manage Postings';
            break;
         case 'reqsummary':
            $brdcum = 'Manage Requirements';
            break;
         default:
            $brdcum = 'Dashboard';
         }
         ?>
      <h1>
        <?php echo ucwords($brdcum); ?>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i>Home</a></li>
         <?php if($page!=''){ ?>
          <li class="active"><?php echo ucwords($brdcum); ?></li>
         <?php
         }else{ ?>
          <li class="active">Dashboard</li>
         <?php } ?>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">

      <!--------------------------
        | Your Page Content Here |
        -------------------------->
        <?php

        $url = $page.".php";
        include($url); 

        ?>

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<!-----------------Modal ------------------->

<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close btnClose" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
          <h1><i class="fa fa-spinner fa-spin"></i> Please wait.</h1>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-default btnClose" data-dismiss="modal">Close</button>
        </div> -->
      </div>
      
    </div>
  </div>
  <div class="modal fade" id="myModal1" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close btnClose" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"></h4>
        </div>
        <div class="modal-body">
          <h1><i class="fa fa-spinner fa-spin"></i> Please wait.</h1>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-default btnClose" data-dismiss="modal">Close</button>
        </div> -->
      </div>
      
    </div>
  </div>

 <div class="modal" id="confirmModal" style="display: none; z-index: 1050;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body" id="confirmMessage">
              <h3>Are you sure ?</h3>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal" id="btnOk">Yes</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
            </div>
        </div>
    </div>
</div>

<!-----------------End Modal ---------------->
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js"></script>
<script src="js/custom/nav.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
     let page = "<?php echo $page; ?>";
     if(page != ''){
      $("."+page).addClass("active");
      $(".home").removeClass("active");
     }
  });
</script>

</body>
</html>