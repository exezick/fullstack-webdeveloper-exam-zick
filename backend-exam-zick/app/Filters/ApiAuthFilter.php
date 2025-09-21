<?php

namespace App\Filters;

use App\Models\UserModel;
use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;

class ApiAuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $auth = service('request')->getHeaderLine('Authorization'); // e.g. Bearer x
        $token = null;
        if (stripos($auth, 'Bearer ') === 0) {
            $token = substr($auth, 7);
        }

        $user = (new UserModel())->findByToken($token);
        if (!$user) {
            return service('response')->setJSON(['message' => 'Unauthorized'])->setStatusCode(401);
        }

        // Stash user in the service container for controllers to read
        service('session')->set('api_user', [
            'id' => $user['id'],
            'role' => $user['role'],
            'name' => $user['name'],
            'username' => $user['username'],
        ]);
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null) {}
}
