<?php

namespace App\Controllers;

use App\Models\EmployeeModel;
use CodeIgniter\Controller;

class Employee extends Controller
{
    private array $positions = ['Web Developer','Web Designer'];

    private function currentRole(): string
    {
        return session('role') ?? 'Manager';
    }

    public function index()
    {
        $role = $this->currentRole();
        $employees = (new EmployeeModel())
            ->scopeByRole($role)
            ->orderBy('id','asc')
            ->findAll();

        return view('employees/index', [
            'employees' => $employees,
            'role'      => $role,
        ]);
    }

    public function create()
    {
        return view('employees/form', [
            'employee'  => null,
            'positions' => $this->positions,
            'role'      => $this->currentRole(),
        ]);
    }

    public function store()
    {
        $role = $this->currentRole();

        $data = $this->request->getPost([
            'first_name','last_name','position'
        ]);

        // Enforce role rule on position
        if ($role !== 'Manager') {
            $data['position'] = $role;
        }

        $rules = [
            'first_name' => 'required|min_length[2]',
            'last_name'  => 'required|min_length[2]',
            'position'   => 'required|in_list[Web Developer,Web Designer]'
        ];

        if (! $this->validate($rules)) {
            return redirect()->back()->with('error', implode(' ', $this->validator->getErrors()))->withInput();
        }

        (new EmployeeModel())->insert($data);
        return redirect()->to('/')->with('message', 'Saved');
    }

    public function edit($id)
    {
        $model = new EmployeeModel();
        $emp = $model->find($id);
        if (!$emp) return redirect()->to('/');

        // If not manager, ensure they can only edit same-position rows
        if ($this->currentRole() !== 'Manager' && $emp['position'] !== $this->currentRole()) {
            return redirect()->to('/')->with('error','Forbidden');
        }

        return view('employees/form', [
            'employee'  => $emp,
            'positions' => $this->positions,
            'role'      => $this->currentRole(),
        ]);
    }

    public function update($id)
    {
        $model = new EmployeeModel();
        $emp = $model->find($id);
        if (!$emp) return redirect()->to('/');

        $role = $this->currentRole();

        if ($role !== 'Manager' && $emp['position'] !== $role) {
            return redirect()->to('/')->with('error','Forbidden');
        }

        $data = $this->request->getPost(['first_name','last_name','position']);
        if ($role !== 'Manager') {
            $data['position'] = $role;
        }

        $rules = [
            'first_name' => 'required|min_length[2]',
            'last_name'  => 'required|min_length[2]',
            'position'   => 'required|in_list[Web Developer,Web Designer]'
        ];
        if (! $this->validate($rules)) {
            return redirect()->back()->with('error', implode(' ', $this->validator->getErrors()))->withInput();
        }

        $model->update($id, $data);
        return redirect()->to('/')->with('message', 'Updated');
    }

    public function delete($id)
    {
        $model = new EmployeeModel();
        $emp = $model->find($id);
        if (!$emp) return redirect()->to('/');

        $role = $this->currentRole();
        if ($role !== 'Manager' && $emp['position'] !== $role) {
            return redirect()->to('/')->with('error','Forbidden');
        }

        $model->delete($id);
        return redirect()->to('/')->with('message', 'Deleted');
    }
}
