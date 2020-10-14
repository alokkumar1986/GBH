<?php include("session_check.php"); ?>
<!doctype html>
<html lang="en" dir="ltr">
		<head>
		<meta charset="UTF-8">
		<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Favicon -->
		<!-- Favicon -->
		<link rel="icon" href="icon.png" type="image/x-icon" />
		<link rel="shortcut icon" type="image/x-icon" href="icon.png" />

		<!-- Title -->
		<title>Gharabhada | User Dashboard</title>
			
		<?php include("css.php"); ?>

	</head>

	<body>

		<!--Loader-->
		<div id="global-loader">
			<img src="img/loader.svg" class="loader-img" alt="">
		</div>

		<!--Topbar-->
	<?php include("topbar.php"); ?>


			<!-- Duplex Houses Header -->
			<!-- <div class="horizontal-header clearfix ">
				<div class="container">
					<a id="horizontal-navtoggle" class="animated-arrow"><span></span></a>
					<span class="smllogo"><img src="img/logo.jpg" width="120" alt=""/></span>
					<a href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a>
				</div>
			</div> -->
			<!-- /Duplex Houses Header -->

	<?php include("userMenu.php"); ?>		
		<!-- </div>


			
		</div> -->

		<!--Breadcrumb-->
	<?php include("breadcum.php"); ?>			
		<!--Breadcrumb-->

		<!--User Dashboard-->
		<section class="sptb">
			<div class="container">
				<div class="row">
					<?php include("userdashbaordmenu.php"); ?>	

					
					<div class="col-xl-9 col-lg-12 col-md-12">
						<div class="card mb-0">
							<div class="card-body">
								<div class="row">
									<div class="col-md-3 form-control text-center inputbttn bg-custom navuserdiv inplg">
										<h3>30</h3>
										<h5>Total Postings</h5>
									</div>
									<div class="col-md-3 form-control text-center inputbttn bg-custom navuserdiv inplg">
										<h3>30</h3>
										<h5>Requirement Postings</h5>
									</div>
									<div class="col-md-3 form-control text-center inputbttn bg-custom navuserdiv inplg">
										<h3>30</h3>
										<h5>Verified Postings</h5>
									</div>
									<div class="col-md-3 form-control text-center inputbttn bg-custom navuserdiv inplg">
										<h3>30</h3>
										<h5>Pending Postings</h5>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
		<!--/User Dashboard-->

		<!--Footer Section-->
		<section>
			<footer class="">
				
				<div class="p-0">
					<div class="container">
						<div class="row d-flex">
							<div class="col-lg-12 col-sm-12 mt-3 mb-3 text-center ">
								Copyright © 2019 <a href="#" class="fs-14 text-primary">Gharabhada.com </a>All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>
		<!--/Footer Section-->

		<!-- Back to top -->
		<a href="#top" id="back-to-top" ><i class="fa fa-rocket"></i></a>

		<!-- JQuery js-->
		<!-- JQuery js-->
		<script src="assets/js/jquery-3.2.1.min.js"></script>

		<!-- Bootstrap js -->
		<script src="assets/bootstrap-4.3.1-dist/js/popper.min.js"></script>
		<script src="assets/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>


		<!-- Circle Progress Js-->
		<script src="assets/js/vendors/circle-progress.min.js"></script>

		<!--Horizontal Menu-->
		<script src="assets/Horizontal2/Horizontal-menu/horizontal.js"></script>
		<script src="assets/owl-carousel/owl.carousel.js"></script>
		<script src="js/jquery.rating-stars.min.js"></script>

		<!--JQuery TouchSwipe js-->
		<script src="../assets/js/jquery.touchSwipe.min.js"></script>

		<!--Select2 js -->
		<script src="assets/select2/select2.full.min.js"></script>
	    <script src="js/select2.js"></script>


		<!-- Ion.RangeSlider -->
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

		<!-- sticky Js-->
		<script src="js/sticky.js"></script>

		<!-- Custom scroll bar Js-->
		<script src="../assets/plugins/scroll-bar/jquery.mCustomScrollbar.concat.min.js"></script>


		<!-- Scripts Js-->
		<script src="js/scripts2.js"></script>

		<!-- Custom Js-->
		<script src="assets/js/custom.js"></script>
		<script src="js/custom/userhome.js"></script>
	</body>
</html>