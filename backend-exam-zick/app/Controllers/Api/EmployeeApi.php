<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Models\EmployeeModel;
use App\Models\UserModel;

class EmployeeApi extends BaseController
{
    private function currentApiRole(): ?string
    {
        $sess = session()->get('api_user');
        return $sess['role'] ?? null;
    }

    public function index()
    {
        $role = $this->currentApiRole();
        $rows = (new EmployeeModel())->scopeByRole($role)->findAll();
        return $this->response->setJSON($rows);
    }

    public function create()
    {
        $role = $this->currentApiRole();
        $data = $this->request->getJSON(true);

        if ($role !== 'Manager') {
            $data['position'] = $role;
        }

        $rules = [
            'first_name' => 'required|min_length[2]',
            'last_name'  => 'required|min_length[2]',
            'position'   => 'required|in_list[Web Developer,Web Designer]'
        ];
        if (! $this->validate($rules)) {
            return $this->response->setJSON(['errors'=>$this->validator->getErrors()])->setStatusCode(422);
        }

        $id = (new EmployeeModel())->insert($data, true);
        return $this->response->setJSON(['id'=>$id])->setStatusCode(201);
    }

    public function update($id)
    {
        $role = $this->currentApiRole();
        $model = new EmployeeModel();
        $emp = $model->find($id);
        if (!$emp) return $this->response->setStatusCode(404);

        if ($role !== 'Manager' && $emp['position'] !== $role) {
            return $this->response->setStatusCode(403);
        }

        $data = $this->request->getJSON(true);
        if ($role !== 'Manager') {
            $data['position'] = $role;
        }

        $rules = [
            'first_name' => 'permit_empty|min_length[2]',
            'last_name'  => 'permit_empty|min_length[2]',
            'position'   => 'required|in_list[Web Developer,Web Designer]',
        ];
        if (! $this->validate($rules)) {
            return $this->response->setJSON(['errors'=>$this->validator->getErrors()])->setStatusCode(422);
        }

        $model->update($id, $data);
        return $this->response->setStatusCode(204);
    }

    public function delete($id)
    {
        $role = $this->currentApiRole();
        $model = new EmployeeModel();
        $emp = $model->find($id);
        if (!$emp) return $this->response->setStatusCode(404);

        if ($role !== 'Manager' && $emp['position'] !== $role) {
            return $this->response->setStatusCode(403);
        }

        $model->delete($id);
        return $this->response->setStatusCode(204);
    }
}
