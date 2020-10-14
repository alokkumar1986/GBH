 
		<div class='row'>
			<button class='btn btn-primary navbttn' id='crlocbttn' style='margin:1%;float:right'>Create New</button>
			<button class='btn btn-primary navbttn' id='summlocbttn' style='margin:1%;float:right'>Summary</button>
			
		</div>
		<div class="row">
			
			<div class="col-xs-12">
          <div class="box box-info">
            <div class="box-header with-border">
              <h3 class="box-title">Edit Location</h3>   
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                   <input type="hidden" class="form-control" id="id" value="">
                  <label for="city" class="col-sm-2 control-label">City</label>
                  <div class="col-sm-4">
                    <select class="form-control" id='city' readonly>
						         
					          </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="locname" class="col-sm-2 control-label">Location Name</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="locname" readonly autocomplete=off>
                  </div>
                </div>
				<div class="form-group">
                  <label for="lattd" class="col-sm-2 control-label">Latitude</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="lattd" readonly autocomplete=off>
                  </div>
                </div>
				<div class="form-group">
                  <label for="longtd" class="col-sm-2 control-label">Longitude</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="longtd" readonly autocomplete=off>
                  </div>
                </div>
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="button" id='cnclbttn' class="btn btn-default pull-right navbttn"><< Back</button>
                <button type="button" id="subeditloc" class="btn btn-primary pull-right" style='margin-right:1%'>Submit</button>
				<button type="button" id="editloc" class="btn btn-primary pull-right" style='margin-right:1%'>Edit</button>
              </div>
              <!-- /.box-footer -->
            </form>
          </div>
			</div>
		</div>
    

<!-- jQuery 3 -->
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<script src="bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<!-- AdminLTE App -->

<script src="js/custom/loc/locsummary.js"></script>
<script src="js/custom/loc/locview.js"></script>

