<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\InsuranceCompany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Services\RegistrationService;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $patient_id = null;
        $first_name = null;
        $last_name = null;
        $insurance_company_name = null;

        if ($user->role === 'patient') {
            $patient = $user->patient;
                $patient_id = $patient->id;
                $first_name = $patient->first_name;
                $last_name = $patient->last_name;
        }
        if ($user->role === 'insurance') {
                $insurance_company_name = $user->insuranceCompany->name;
        }
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'patient_id' => $patient_id,
            'first_name' => $first_name,
            'last_name' => $last_name,
            'insurance_company_name' => $insurance_company_name,
            'authorisation' => [
                'token' => $token,
            ]
        ]);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
    
 }