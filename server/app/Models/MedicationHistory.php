<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicationHistory extends Model
{
    protected $fillable = ['patient_id', 'doctor_id', 'medication_description' ];

public function patient()
{
    return $this->belongsTo(Patient::class, 'patient_id');
}

public function doctor()
{
    return $this->belongsTo(Doctor::class, 'doctor_id');
}
public function insuranceApprovals()
    {
        return $this->hasMany(InsuranceApproval::class, 'medication_histories_id');
    }
}
