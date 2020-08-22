@extends('Layout.app')

@section('removeRowJs')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

@endsection

@section('content')

<div class="app-content content">
	<div class="content-wrapper">
		<div class="content-header row">
			<div class="content-header-left col-md-8 col-12 mb-2 breadcrumb-new">
				<h3 class="content-header-title mb-0 d-inline-block">Add New Requisition</h3>
			</div>
		</div>
		<div class="content-body">
			<form action="#" method="POST" class="form">
				@csrf 
				@method('POST')
				<section id="horizontal-form-layouts" class="basic-select2">
					<div class="row" id="row-color">
						<div class="col-12">
							<div class="card">
								<div class="card-header">
									<h2 class="">Technometrics Limited</h2>
									<h3 class="">Monthly Fund Requisition - {{date("M Y")}}</h3>
									<h4 class="">Function: Official</h4>
									<h4 class="">Requisition No.: </h4>
									<h4 class="">Date: {{date("d-M-y")}}</h4>
									<br>
									<a href="#" type="button" id="addRow" class=" addRow btn btn-info mr-1 mb-1">Add New Row<a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a></a>
									<div class="heading-elements">
										<ul class="list-inline mb-0">
											<li><a data-action="collapse"><i class="ft-minus"></i></a>
											</li>
											<li><a data-action="reload"><i class="ft-rotate-cw"></i></a>
											</li>
											<li><a data-action="expand"><i class="ft-maximize"></i></a>
											</li>
											<li><a data-action="close"><i class="ft-x"></i></a>
											</li>
										</ul>
									</div>
								</div>
								<div class="card-content collapse show">
									<div class="table-responsive">
										<table id="requisitionTable" class="table table-bordered table-striped">
											<thead>
												<tr class="text-center">
													<th></th>
													<th>Purpose</th>
													<th>Budget Head</th>
													<th>Benificiary Name</th>
													<th>PIC</th>
													<th>Quantity/Unit</th>
													<th>Per Unit Price</th>
													<th>Total</th>
													<th>Cash Payment</th>
													<th>Bank Payment</th>
													<th>Tentative Date</th>
													<th>Status</th>
													<th>Files</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><a href="#" class="btn btn-danger remove">Remove</a>
													</td>
													<td>
														<input type="text" class="@error('purpose') is-invalid @enderror" name="purpose[]" value="{{ old('purpose') }}" style="height: 41px">
														@error('purpose')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<input type="text" class=" @error('budget_head') is-invalid @enderror" name="budget_head[]" value="{{ old('budget_head') }}" style="height: 41px">@error('budget_head')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<select class="select2" multiple="multiple" name="benificiary_id[]" style="width: 200px">
															<option value="1">irfan ahmed ayan</option>
															<option value="2">pitu</option>
															<option value="3">pasha</option>
														</select>
													</td>
													<td>
														<select class="select2" multiple="multiple" name="pic_id[]" style="width: 200px">
															<option value="1">irfan</option>
															<option value="2">pitu</option>
															<option value="3">pasha</option>
														</select>
													</td>
													<td>
														<input id="quantity" type="text" class="@error('quantity') is-invalid @enderror text-right quantity" name="quantity[]" value="{{ old('quantity') }}" style="height: 41px">
														@error('quantity')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<input id="unitPrice" type="text" class=" @error('per_unit_price') is-invalid @enderror text-right unitPrice" name="per_unit_price[]" value="{{ old('per_unit_price') }}" style="height: 41px">@error('per_unit_price')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<input id="total" type="text" class=" @error('total') is-invalid @enderror text-right total" name="total[]" value="{{ old('total') }}" style="height: 41px">@error('total')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<input type="text" class=" @error('cash_payment') is-invalid @enderror" name="cash_payment[]" value="{{ old('cash_payment') }}" style="height: 41px">@error('cash_payment')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<input type="text" class=" @error('bank_payment') is-invalid @enderror" name="bank_payment[]" value="{{ old('cash_payment') }}" style="height: 41px">@error('bank_payment')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<input type="text" class="@error('tentative_date') is-invalid @enderror" name="tentative_date[]" value="{{ old('tentative_date') }}" style="height: 41px">@error('tentative_date')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<input type="text" class="@error('status') is-invalid @enderror" name="status[]" value="{{ old('status') }}" style="height: 41px">@error('status')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
													<td>
														<input type="text" class="@error('files') is-invalid @enderror" name="files[]" value="{{ old('files') }}" style="height: 41px">@error('files')
														<div class="alert alert-danger">{{ $message }}
														</div>
														@enderror
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td class="text-right"><b class="allTotal"></b></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
													<td style="border: none"></td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
								<br>
								<div class="card-header">
									<input type="button" id="bt" class="btn btn-success mr-1 mb-1" value="Submit Data" onclick="submit()">
								</div>
								<p id='output'></p>
							</div>
						</div>
					</div>
				</section>
			</form>
		</div>
	</div>
</div>

@endsection

@section('jsCode')

<script type="text/javascript">
    
    var item = 1;
    $('tbody').delegate('.quantity,.unitPrice','keyup', function(){
    	var tr = $(this).parent().parent();
    	var quantity = tr.find('.quantity').val();
    	var unitPrice = tr.find('.unitPrice').val();
    	var total = (quantity*unitPrice);
    	tr.find('.total').val(total);
    	allTotal();
    });
    
    function allTotal(){
    	var allToatl = 0;
    	$('.total').each(function(i,e){
    		var total = $(this).val()-0;
    		console.log(total);
    		allToatl += total;
    	});
    	$('.allTotal').html("Sub Total: "+allToatl+" BDT");
    }
    
    $('.addRow').on('click',function(){
    	addRow();
    });

    function addRow()
    {
    	item++;
    	var tr = '<tr>' + 
    	'<td><a href="#" class="btn btn-danger remove">Remove</a></td>' +
    	'<td><input type="text" class="" name="purpose[]" style="height: 41px"></td>' + 
    	'<td><input type="text" class="" name="budget_head[]" style="height: 41px"></td>' +


    	'<td><select class="select2" multiple="multiple" name="benificiary_id[]" style="width: 200px"><option value="1">irfan ahmed ayan</option><option value="2">pitu</option><option value="3">pasha</option></select></td>' +

    	'<td><select class="select2" multiple="multiple" name="pic_id[]" style="width: 200px"><option value="1">irfan ahmed ayan</option><option value="2">pitu</option><option value="3">pasha</option></select></td>' +


    	'<td><input id="quantity'+item+'" type="text" class="text-right quantity" name="quantity[]" style="height: 41px"></td>' +
    	'<td><input id="unitPrice'+item+'" type="text" class="text-right unitPrice" name="per_unit_price[]" style="height: 41px"></td>' +
    	'<td><input id="total'+item+'" type="text" class="text-right total" name="total[]" style="height: 41px"></td>' +
    	'<td><input type="text" class="" name="cash_payment[]" style="height: 41px"></td>' +
    	'<td><input type="text" class="" name="bank_payment[]" style="height: 41px"></td>' +
    	'<td><input type="text" class="" name="status[]" style="height: 41px"></td>' +
    	'<td><input type="text" class="" name="tentative_date[]" style="height: 41px"></td>' +
    	'<td><input type="text" class="" name="files[]" style="height: 41px"></td>' +
		'</tr>';

    	$('tbody').append(tr);
    	$('.select2').select2();
    	
	};

	$("#requisitionTable").on('click','.remove',function(){
		var last = $('tbody tr').length;
		console.log(last);
		if(last == 1){
			alert("Last Row");
		}
		else{
			$(this).closest('tr').remove();
		}
       
     });


</script>


@endsection
