<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RequisitionController extends Controller
{
    function index(){

    	return view('AddRequisition');
    }
}
