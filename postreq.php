<!doctype html>
<html lang="zxx" dir="ltr">

<head>
	<!-- Meta data -->
	<meta charset="UTF-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<!-- Favicon -->
		<link rel="icon" href="icon.png" type="image/x-icon" />
		<link rel="shortcut icon" type="image/x-icon" href="icon.png" />

		<!-- Title -->
		<title>Gharabhada | Post Ad</title>
			
		<?php include("css.php"); ?>
	
	<style>
	
	input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>

</head>

<body>

	<!--Loader-->
	<div id="global-loader">
		<img src="img/loader.svg" class="loader-img" alt="">
	</div>

	<!--Topbar-->
	<div class="header-main">
	
	<!--Topbar-->	
	<?php include("topbar.php"); ?>
	<!-- End -->


		<!-- Duplex Houses Header -->
		<!-- <div class="horizontal-header clearfix ">
			<div class="container">
				<a id="horizontal-navtoggle" class="animated-arrow"><span></span></a>
				<span class="smllogo"><img src="img/logo.jpg" width="120" alt="" /></span>
				<a href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a>
			</div>
		</div> -->
		<!-- /Duplex Houses Header -->

		
	<!-- </div>
	</div>
 -->

	<!--Breadcrumb-->
	<div class="border-bottom" style='padding: 1em;'>
		<div class="container">

			<div class='row'>
				<div class="page-header">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="#">Home</a></li>
						<li class="breadcrumb-item"><a href="#">Restaurants</a></li>
						<li class="breadcrumb-item active"><a href="#">Raipur</a></li>

					</ol>
				</div>
			</div>
		</div>
	</div>
	<!--/Breadcrumb-->

	<!--Add listing-->
	<section class="sptb" style='padding-top: 1rem;'>
		<div class="container">
			<div class="row">
				<!--Left Side Content-->
				<div class="col-xl-12 col-lg-12 col-md-12">
					<form class="form-horizontal">
						
						<div class="form-group " id='errcntnr'>
							<div class="row" id='errdiv'>
								<p style='color:red' id='errmsg' style='display:none'></p>
							</div>
						</div>
						
						<div class="card sec sec0">
							<div class="card-body">
								<div class="" id="container">
									<div class="form-group ">
										<div class="row" id='usertype'>
											<div class="col-md-3"></div>
											<div class="col-md-3">
												<input type="text" class="form-control text-center inputbttn bg-custom inplg navuserdiv" id="existuser"
													name="owner" readonly value="Already a member">
											</div>
											<div class="col-md-3">
												<input type="text" class="form-control text-center inputbttn bg-custom inplg navuserdiv" id="newuser"
													name="agent" readonly value="New to Gharabhada">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
			</div>
		</div>
	</section>
	<!--/Add Listings-->


	<!-- Newsletter-->
	 <?php include("newsletter.php"); ?>
	<!--/Newsletter-->
    
	<!--Footer Section-->
	<?php include("footer.php"); ?>

	<!-- Back to top -->
	<a href="#top" id="back-to-top"><i class="fa fa-rocket"></i></a>

	<!-- JQuery js-->
	<script src="assets/js/jquery-3.2.1.min.js"></script>

	<!-- Bootstrap js -->
	<script src="assets/bootstrap-4.3.1-dist/js/popper.min.js"></script>
	<script src="assets/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>


	<!--Horizontal Menu-->
	<script src="assets/Horizontal2/Horizontal-menu/horizontal.js"></script>
	<script src="assets/owl-carousel/owl.carousel.js"></script>
	<script src="js/jquery.rating-stars.min.js"></script>

	<!--JQuery TouchSwipe js-->
	<script src="assets/jquery.touchSwipe.min.js"></script>

	<!--Select2 js -->
	<script src="assets/select2/select2.full.min.js"></script>
	<script src="js/select2.js"></script>


	<!-- Ion.RangeSlider -->
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

	<!-- sticky Js-->
	<script src="js/sticky.js"></script>

	<!-- Scripts Js-->
	<script src="js/scripts2.js"></script>
	<script src="assets/date-picker/spectrum.js"></script>
	<script src="assets/scroll-bar/jquery.mCustomScrollbar.concat.min.js"></script>
	

	<!-- Custom Js-->
	<script src="assets/js/custom.js"></script>
<script src="js/custom/postformval.js"></script>
	<script src="js/custom/adpost.js"></script>

	<!-- Map Detection APIs -->
	
		<script src="js/custom/map.js"></script>
		<script async defer  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmmNfp3JlN-9B0nkcv-UofIkiDwoJcGBk&callback=initMap">  </script>
	

</body>

</html>