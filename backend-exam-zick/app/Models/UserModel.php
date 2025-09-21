<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table      = 'users';
    protected $primaryKey = 'id';
    protected $allowedFields = ['username','password_hash','name','role','api_token'];
    protected $useTimestamps = true;

    public function findByUsername(string $username)
    {
        return $this->where('username', $username)->first();
    }

    public function findByToken(?string $token)
    {
        if (!$token) return null;
        return $this->where('api_token', $token)->first();
    }
}
