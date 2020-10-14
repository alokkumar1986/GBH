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
		<title>Gharabhada | User Registration</title>
			
		<?php include("css.php"); ?>

	</head>

	<body>

		<!--Loader-->
		<div id="global-loader">
			<img src="img/loader.svg" class="loader-img" alt="">
		</div>

		<!--Topbar-->
		<!-- <div class="header-main">
			<div class="top-bar">
				<div class="container">
					<div class="row">
						<div class="col-xl-8 col-lg-8 col-sm-4 col-7">
							<div class="top-bar-left d-flex">
								<div class="clearfix">
									<ul class="socials">
										<li>
											<a class="social-icon text-dark" href="#"><i class="fa fa-facebook"></i></a>
										</li>
										<li>
											<a class="social-icon text-dark" href="#"><i class="fa fa-twitter"></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-4 col-sm-8 col-5">
							<div class="top-bar-right">
								<ul class="custom">
									<li>
										<a href="login.html" class="text-dark"><i class="fa fa-sign-in mr-1"></i> <span>Login/Sign In</span></a>
									</li>
									<li class="dropdown">
										<a href="#" class="text-dark" data-toggle="dropdown"><i class="fa fa-home mr-1"></i><span> My Dashboard</span></a>
										<div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
											<a href="mydash.html" class="dropdown-item" >
												<i class="dropdown-icon icon icon-user"></i> My Profile
											</a>
											<a class="dropdown-item" href="#">
												<i class="dropdown-icon icon icon-speech"></i> Inbox
											</a>
											<a class="dropdown-item" href="#">
												<i class="dropdown-icon icon icon-bell"></i> Notifications
											</a>
											<a href="mydash.html" class="dropdown-item" >
												<i class="dropdown-icon  icon icon-settings"></i> Account Settings
											</a>
											<a class="dropdown-item" href="#">
												<i class="dropdown-icon icon icon-power"></i> Log out
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div> -->

			<!-- Duplex Houses Header -->
			<!-- <div class="horizontal-header clearfix ">
				<div class="container">
					<a id="horizontal-navtoggle" class="animated-arrow"><span></span></a>
					<span class="smllogo"><img src="img/logo.jpg" width="120" alt=""/></span>
					<a href="tel:245-6325-3256" class="callusbtn"><i class="fa fa-phone" aria-hidden="true"></i></a>
				</div>
			</div> -->
			<!-- /Duplex Houses Header -->

			<!-- <div class="horizontal-main bg-dark-transparent clearfix">
				<div class="horizontal-mainwrapper container clearfix">
					<div class="desktoplogo">
						<a href="index.html"><img src="img/logo.jpg" alt=""></a>
					</div>
					<div class="desktoplogo-1">
						<a href="index.html"><img src="img/logo.jpg" alt=""></a>
					</div> -->
					<!--Nav-->
					<!-- <div class="horizontal-main bg-dark-transparent clearfix">
				<div class="horizontal-mainwrapper container clearfix">
					<div class="desktoplogo">
						<a href="index.html"><img src="img/logo.jpg" alt=""></a>
					</div>
					<div class="desktoplogo-1">
						<a href="index.html"><img src="img/logo.jpg" alt=""></a>
					</div>
					
					<nav class="horizontalMenu clearfix d-md-flex">
						<ul class="horizontalMenu-list">
						<li aria-haspopup="true"><a href="index.html" >Home</a></li>
						<li aria-haspopup="true"><a href="postreq.html">Post Your Requirement</a></li>
						<li aria-haspopup="true"><a href="login.html" class="active">My Account</a></li>
						<li aria-haspopup="true"><a href="adpost.html" class="active btn-secondary ad-post">For Owners</a></li>
					</ul>
					</nav> 
					
				</div>
			</div>
					
				</div>
			</div>
		</div>-->
		<?php include("topbar.php"); ?>



		<!--Login-Section-->
		<section class="sptb mt-8">
			<div class="container customerpage">
				
				<div class="row">
					<div class="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
						<div class="row">
							<div class="col-xl-12 col-md-12 col-md-12 register-right">
								<div id='msg-box'>
									<div class="alert alert-danger">
									  <strong>Success!</strong> Indicates a successful or positive action.
									</div>
								</div>
								<div class="tab-content" id="myTabContent">
									<div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
										<div class="single-page w-100  p-0">
											<div class="wrapper wrapper2">
												<form id="regform" method="POST" action="" class="card-body" tabindex="500">
													<h3 class="pb-1">Register</h3>
													<div class="name">
														<input type="text" name="name" id='name'>
														<label>Name</label>
													</div>
													<div class="mail">
														<input type="text" name="mobno" id='mobno'>
														<label>Mobile No</label>
													</div>
													<div class="mail">
														<input type="text" name="email" id="email">
														<label>Email ID</label>
													</div>
													<div class="passwd">
														<input type="password" name="password" id='password'>
														<label>Password</label>
													</div>
													<div class="passwd">
														<input type="password" name="cnfrmpwd" id='cnfrmpwd'>
														<label>Confirm Password</label>
													</div>
													<div class="submit">
														<button type="submit" class="btn btn-primary btn-block" id='regbttn'>Register</button>
													</div>
													<p class="text-dark mb-0">Already have an account?<a href="login.php" class="text-primary ml-1">Sign In</a></p>
												</form>
												<!--
												<hr class="divider">
												<div class="p-3 pb-0">
													<div class="row">
														<div class="col-6 mb-2">
															<a href="https://www.facebook.com/" class="btn btn-light btn-block text-left">
																<img src="../assets/images/svg/facebook.svg" alt="" class="w-4 h-4 mr-2">
																<span class="font-weight-bold fs-15">Facebook</span>
															</a>
														</div>
														<div class="col-6  mb-2">
															<a href="https://www.google.com/gmail/" class="btn btn-light btn-block text-left">
																<img src="../assets/images/svg/google.svg" alt="" class="w-4 h-4 mr-2">
																<span class="font-weight-bold fs-15">Google</span>
															</a>
														</div>
														
													</div>
												</div>-->
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
		<script src="js/jquery.min.js"></script>
       
		<!-- Bootstrap js -->
		<script src="assets/bootstrap-4.3.1-dist/js/popper.min.js"></script>
		<script src="assets/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>



		<!--Horizontal Menu-->
		<script src="assets/Horizontal2/Horizontal-menu/horizontal.js"></script>
		<script src="assets/owl-carousel/owl.carousel.js"></script>
		<script src="js/jquery.rating-stars.min.js"></script>

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