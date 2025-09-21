# How to Run This App

## Requirements

- PHP **8.1 or higher**
- Composer
- MySQL/MariaDB (XAMPP is fine)
- Ports in this setup:
  - **App** → `http://localhost:8080`
  - **phpMyAdmin** → `http://localhost:8088/phpmyadmin`
  - **MySQL** → `3306`

---

## 1. Install dependencies

```bash
composer install
```

---

## 2. Configure environment

Copy `env` → `.env`, then set these values:

```ini
CI_ENVIRONMENT = development

app.baseURL = 'http://localhost:8080/'

database.default.hostname = localhost
database.default.database = backend_ci4_db
database.default.username = root
database.default.password =
database.default.DBDriver = MySQLi
database.default.port = 3306
database.default.charset = utf8mb4
database.default.DBCollat = utf8mb4_general_ci
```

Clear cached config if needed:

```bash
php spark config:clear
```

---

## 3. Create the database

Open phpMyAdmin → [http://localhost:8088/phpmyadmin](http://localhost:8088/phpmyadmin)

Or via SQL:

```sql
CREATE DATABASE backend_ci4_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;
```

or You can import the database found in backend-exam-zick\database\backend_ci4_db.sql

---

## 4. Run migrations & seed users

```bash
php spark migrate
php spark db:seed UserSeeder
```

This will create tables and seed 3 accounts:

## Username and passwords

- **Manager** → `manager / secret`
- **Web Developer** → `webdev / secret`
- **Web Designer** → `webdes / secret`

---

## 5. Start the dev server

```bash
php spark serve --port=8080
```

Now visit: [http://localhost:8080/login](http://localhost:8080/login)

---

## 6. Use the app

- Log in with one of the seeded accounts.
- Dashboard (Employees) will load after login.
- Roles:
  - **Manager** → Full CRUD access to employees.
  - **WebDev / WebDes** → Limited to their own role’s records.

---

--- Developed by: Exequiel Vibar ---
