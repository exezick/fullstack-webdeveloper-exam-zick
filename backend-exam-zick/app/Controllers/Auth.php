<?php

namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\Controller;

class Auth extends Controller
{
    public function index()
    {
        if (session()->get('isLoggedIn')) {
            return redirect()->to('/dashboard'); // go to dashboard
        }
        return redirect()->to('/login'); // guest → login
    }


    public function login()
    {
        if (session()->get('isLoggedIn')) {
            return redirect()->to('/'); // already logged in → dashboard
        }

        return view('auth/login');
    }


    public function attempt()
    {
        $username = $this->request->getPost('username');
        $password = $this->request->getPost('password');

        $user = (new UserModel())->findByUsername($username);
        if (!$user || !password_verify($password, $user['password_hash'])) {
            return redirect()->back()->with('error', 'Invalid credentials');
        }

        session()->set([
            'isLoggedIn' => true,
            'user_id'    => $user['id'],
            'name'       => $user['name'],
            'role'       => $user['role'],
            'username'   => $user['username'],
        ]);

        $redirect = $this->request->getGet('redirect') ?? '/';
        return redirect()->to($redirect);
    }

    public function logout()
    {
        session()->destroy();
        return redirect()->to('/login');
    }
}
