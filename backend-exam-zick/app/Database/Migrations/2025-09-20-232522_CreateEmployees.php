<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateEmployees extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'         => ['type' => 'INT','constraint' => 11,'unsigned' => true,'auto_increment' => true],
            'first_name' => ['type' => 'VARCHAR','constraint' => 100],
            'last_name'  => ['type' => 'VARCHAR','constraint' => 100],
            'position'   => ['type' => 'ENUM','constraint' => ['Web Developer','Web Designer']],
            'created_at' => ['type' => 'DATETIME','null' => true],
            'updated_at' => ['type' => 'DATETIME','null' => true],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('employees');
    }

    public function down()
    {
        $this->forge->dropTable('employees');
    }
}
