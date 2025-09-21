<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $data = [
            [
                'username'      => 'manager',
                'password_hash' => password_hash('secret', PASSWORD_DEFAULT),
                'name'          => 'Manager User',
                'role'          => 'Manager',
                'api_token'     => null,
                'created_at'    => date('Y-m-d H:i:s'),
                'updated_at'    => date('Y-m-d H:i:s'),
            ],
            [
                'username'      => 'webdev',
                'password_hash' => password_hash('secret', PASSWORD_DEFAULT),
                'name'          => 'Web Developer User',
                'role'          => 'Web Developer',
                'api_token'     => null,
                'created_at'    => date('Y-m-d H:i:s'),
                'updated_at'    => date('Y-m-d H:i:s'),
            ],
            [
                'username'      => 'webdes',
                'password_hash' => password_hash('secret', PASSWORD_DEFAULT),
                'name'          => 'Web Designer User',
                'role'          => 'Web Designer',
                'api_token'     => null,
                'created_at'    => date('Y-m-d H:i:s'),
                'updated_at'    => date('Y-m-d H:i:s'),
            ],
        ];

        // Using Query Builder
        $this->db->table('users')->insertBatch($data);
    }
}
