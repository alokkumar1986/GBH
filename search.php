<style type="text/css">
	.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}

.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff; 
  border-bottom: 1px solid #d4d4d4; 
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9; 
}

/*when navigating through the items using the arrow keys:*/
.autocomplete-active {
  background-color: DodgerBlue !important; 
  color: #ffffff; 
}
</style>
<section>
		<div class="col-md-12">
			<div class="banner-1 pt-0 card cover-image spacing  pb-10 bg-background2"
				data-image-src="img/banner/b1.jpg">
				<div class="header-text mb-0">
					<div class="container">

						<div class="row">
							<div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
								<div class="item-search-tabs">
									<div class="item-search-menu text-center op_menu">
										<ul class="nav">
											<li class="opact optype">Rent</li>
											<li class="optype">Buy</li>
										</ul>
									</div>
									<div class="tab-content">
										<div class="tab-pane active">
											<div class="form row">
												<div class="form-group  col-xl-3 col-lg-3 col-md-12 mb-0">
													<select class="form-control srchsel" id='cityid'>
														
													</select>
												</div>
												<div class="form-group col-xl-8 col-lg-9  col-md-12 mb-0">
													<div class="row no-gutters bg-white br-2">
														<div
															class="form-group autocomplete col-xl-8 col-lg-7 col-md-12 mb-0">
															
															<input type="text"
																class="form-control border srchsel bg-white"
																id="locsrch" placeholder="Location">
															<span>
																<i	class="fa fa-map-marker location-gps mr-1"></i>
															</span>
														</div>
														<div class="col-xl-4 col-lg-5 col-md-12 mb-0">
															<a href="#" class="btn btn-block btn-primary fs-14" id='submit_srch'><i
																	class="fa fa-search"></i> Search Now</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div><!-- /header-text -->
			</div>
		</div>
	</section>