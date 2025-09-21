<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Backend-Exam</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-white">
<nav class="navbar navbar-dark bg-dark mb-4">
  <div class="container">
    <a class="navbar-brand" href="/">Backend-Exam Zick</a>
    <?php if (session('isLoggedIn')): ?>
      <span class="text-white me-3">Hello, <?= esc(session('name')) ?> (<?= esc(session('role')) ?>)</span>
      <a class="btn btn-outline-light btn-sm" href="/logout">Logout</a>
    <?php endif; ?>
  </div>
</nav>
<div class="container">
  <?php if (session('message')): ?><div class="alert alert-success"><?= esc(session('message')) ?></div><?php endif; ?>
  <?php if (session('error')): ?><div class="alert alert-danger"><?= esc(session('error')) ?></div><?php endif; ?>
  <?= $this->renderSection('content') ?>
</div>
</body>
</html>
