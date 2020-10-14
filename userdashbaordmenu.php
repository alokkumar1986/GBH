<?php $url = explode(".", end(explode("/",$_SERVER['REQUEST_URI']))); 
      $pageName = $url[0]; ?>
<div class="col-xl-3 col-lg-12 col-md-12">
	<div class="card">

		<div class="card-body text-center item-user border-bottom">
			<div class="profile-pic">
				<h4 class="mt-3 mb-0 font-weight-semibold">Welcome</h4>
				<h5 class="mt-3 mb-0 font-weight-semibold" id='username'><?php echo $_SESSION['name']; ?></h5>
			</div>
		</div>
		<div class="item1-links  mb-0">
			<a href="userhome.php" class="<?php if($pageName=='userhome'){ echo "active"; } ?>  d-flex border-bottom">
				<span class="icon1 mr-3"><i class="icon icon-user"></i></span> Home
			</a>
			<a href="userprofile.php" class="<?php if($pageName=='userprofile'){ echo "active"; } ?> d-flex border-bottom" >
				<span class="icon1 mr-3"><i class="icon icon-user"></i></span> Manage Profile
			</a>

			<a href="postad.php" class="<?php if($pageName=='postad'){ echo "active"; } ?> d-flex border-bottom menulink" id='userpost'>
				<span class="icon1 mr-3"><i class="icon icon-plus"></i></span> Post Ad
			</a>
			<a href="myads.php" class="<?php if($pageName=='myads'){ echo "active"; } ?> d-flex  border-bottom">
				<span class="icon1 mr-3"><i class="icon icon-diamond"></i></span> My Properties
			</a>
			<a href="myfavorite.php" class="<?php if($pageName=='myfavorite'){ echo "active"; } ?> d-flex border-bottom">
				<span class="icon1 mr-3"><i class="icon icon-heart"></i></span> Tenant Search
			</a>
		</div>
	</div>
</div>