<?php

namespace App\Models;

use CodeIgniter\Model;

class EmployeeModel extends Model
{
    protected $table      = 'employees';
    protected $primaryKey = 'id';
    protected $allowedFields = ['first_name','last_name','position'];
    protected $useTimestamps = true;

    // Restrict queries by role
    public function scopeByRole(?string $role)
    {
        // Manager sees all
        if ($role === 'Manager' || $role === null) return $this;

        // Others see only their position
        return $this->where('position', $role);
    }
}
