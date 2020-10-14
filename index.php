<!doctype html>
<html class="no-js" lang="eng">
<head>
	<!-- Meta data -->
	<meta charset="UTF-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<!-- Favicon -->
	<link rel="icon" href="icon.png" type="image/x-icon" />
	<link rel="shortcut icon" type="image/x-icon" href="icon.png" />

	<!-- Title -->
	<title>Gharabhada | Home</title>
	<?php include("css.php"); ?>

</head>

<body>

	<!--Loader-->
	<div id="global-loader">
		<img src="img/loader.svg" class="loader-img" alt="">
	</div>
	<!-- End of loader -->

	<!--Topbar-->	
	<?php include("topbar.php"); ?>
	<!-- End -->

	<!--Sliders Section-->
	<?php include("search.php"); ?>
	<!--Sliders Section-->

	<!--Property Count-->
	<?php include("propertycount.php"); ?>
	<!--Property Count-->

	<!--Featured Ads -->
	<?php include("featuredAds.php"); ?>
	<!--Latest Ads-->

    <?php include("categorysection.php"); ?>	
	<!--Categories-->

	<!--Blogs-->
	 <?php include("blog.php"); ?>	
	<!--Blogs-->

	<!--Testimonials-->
	 <?php include("testimonial.php"); ?>	
	<!--/Testimonials-->

    <!-- Newsletter-->
	 <?php include("newsletter.php"); ?>
	<!--/Newsletter-->
    
	<!--Footer Section-->
	<?php include("footer.php"); ?>


	<!-- Back to top -->
	<a href="#top" id="back-to-top"><i class="fa fa-rocket"></i></a>

	<!-- JQuery js-->
	<script src="js/jquery-3.2.1.min.js"></script>

	<!-- Bootstrap js -->
	<script src="assets/bootstrap-4.3.1-dist/js/popper.min.js"></script>
	<script src="assets/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>


	<!--Owl Carousel js -->
	<script src="assets/owl-carousel/owl.carousel.js"></script>

	<!--Horizontal Menu-->
	<script src="assets/Horizontal2/Horizontal-menu/horizontal.js"></script>

	<!--JQuery TouchSwipe js-->
	<script src="js/jquery.touchSwipe.min.js"></script>


	<!-- sticky Js-->
	<script src="js/sticky.js"></script>


	<!-- Swipe Js-->
	<script src="js/swipe.js"></script>

	<!-- Scripts Js-->
	<script src="js/scripts2.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

	<!-- Custom Js-->
	<script src="js/custom.js"></script>
	<script src="js/custom/searchautocomplete.js"></script>
	<script src="js/custom/home.js"></script>

</body>

</html>