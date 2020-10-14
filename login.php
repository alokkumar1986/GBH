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
		<title>Gharabhada | User Login</title>
			<?php include("css.php"); ?>
	</head>

	<body>

		<!--Loader-->
		<div id="global-loader">
			<img src="img/loader.svg" class="loader-img" alt="">
		</div>

	<!--Topbar-->
	<?php include("topbar.php"); ?>
	<!-- Topbar --->
		<!--Login-Section-->
		<section class="sptb mt-8">
			<div class="container customerpage">
				<div class="row">
					<div class="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
						<div class="row">
							<div class="col-xl-12 col-md-12 col-md-12 register-right">
								<div class="tab-content" id="myTabContent">
									<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
										<div class="single-page  w-100  p-0">
											<div class="wrapper wrapper2">
												<form id="login" class="card-body" tabindex="500">
													<h3 class="pb-2">Sign In</h3>
													<div class="mail">
														<input type="text" name="mobno" id="mobno">
														<label>Mobile No</label>
													</div>
													
													<div class="passwd">
														<input type="password" name="password" id='pswd'>
														<label>Password</label>
													</div>
													<div class="submit">
														<button class="btn btn-primary btn-block" id='signinbttn'>Login</button>
													</div>
													<p class="mb-2"><a href="forgotpassword.php" >Forgot Password</a></p>
													<p class="text-dark mb-0">Don't have account?<a href="register.php" class="text-primary ml-1">Sign Up</a></p>
												</form>
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--/Login-Section-->

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
		<!-- <script src="assets/js/vendors/circle-progress.min.js"></script> -->

		<!--Horizontal Menu-->
		<script src="assets/Horizontal2/Horizontal-menu/horizontal.js"></script>
		<script src="assets/owl-carousel/owl.carousel.js"></script>
		<script src="js/jquery.rating-stars.min.js"></script>

		<!--JQuery TouchSwipe js-->
		<script src="js/jquery.touchSwipe.min.js"></script>

		<!--Select2 js -->
		<script src="assets/select2/select2.full.min.js"></script>
	    <script src="js/select2.js"></script>


		<!-- Ion.RangeSlider -->
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

		<!-- sticky Js-->
		<script src="js/sticky.js"></script>

		<!-- Custom scroll bar Js-->
		<script src="assets/scroll-bar/jquery.mCustomScrollbar.concat.min.js"></script>


		<!-- Scripts Js-->
		<script src="js/scripts2.js"></script>

		<!-- Custom Js-->
		<script src="assets/js/custom.js"></script>
		<script src="js/custom/user.js"></script>
		<?php include("modal.php"); ?>
	</body>
</html>