<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

// Default route
$routes->get('/', 'Auth::index');

// Authentication
$routes->get('login', 'Auth::login');
$routes->post('login', 'Auth::attempt');
$routes->get('logout', 'Auth::logout');

// Protected routes
$routes->group('/', ['filter' => 'auth'], static function($routes) {
    $routes->get('dashboard', 'Employee::index'); // renamed to /dashboard
    $routes->get('employees/create', 'Employee::create');
    $routes->post('employees', 'Employee::store');
    $routes->get('employees/(:num)/edit', 'Employee::edit/$1');
    $routes->post('employees/(:num)', 'Employee::update/$1');
    $routes->post('employees/(:num)/delete', 'Employee::delete/$1');
});

// API routes
$routes->group('api', ['filter' => 'apiauth'], static function($routes) {
    $routes->get('employees', 'Api\EmployeeApi::index');
    $routes->post('employees', 'Api\EmployeeApi::create');
    $routes->put('employees/(:num)', 'Api\EmployeeApi::update/$1');
    $routes->delete('employees/(:num)', 'Api\EmployeeApi::delete/$1');
});
