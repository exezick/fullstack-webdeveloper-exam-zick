<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateUsers extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'            => ['type' => 'INT','constraint' => 11,'unsigned' => true,'auto_increment' => true],
            'username'      => ['type' => 'VARCHAR','constraint' => 50,'unique' => true],
            'password_hash' => ['type' => 'VARCHAR','constraint' => 255],
            'name'          => ['type' => 'VARCHAR','constraint' => 100],
            'role'          => ['type' => 'ENUM','constraint' => ['Manager','Web Developer','Web Designer']],
            'api_token'     => ['type' => 'VARCHAR','constraint' => 64,'null' => true, 'unique' => true],
            'created_at'    => ['type' => 'DATETIME','null' => true],
            'updated_at'    => ['type' => 'DATETIME','null' => true],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('users');
    }

    public function down()
    {
        $this->forge->dropTable('users');
    }
}
