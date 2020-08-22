<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requisition extends Model
{
    protected $fillable = [
    	'date', 'month', 'year', 'requisition_no', 'budget_head', 'benificiary_id', 'pic_id', 'quantity', 'unit', 'per_unit_price', 'total', 'all_total', 'cash_payment', 'bank_payment', 'tentative_date', 'status', 'files', 'create_status', 'review_status', 'approval_status',
    	];
    public function user(){  
        return $this->belongsTo('App\User', 'pic_id');
    }
    
    public function banificiary(){  
        return $this->belongsTo('App\Banificiary', 'benificiary_id');
    }	

}
