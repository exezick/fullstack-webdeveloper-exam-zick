<?= $this->extend('layout') ?>
<?= $this->section('content') ?>

<?php
  $editing = (bool)$employee;
  $role = $role ?? 'Manager';
?>

<h5>:: Form Page ::</h5>

<form method="post" action="<?= $editing ? '/employees/'.$employee['id'] : '/employees' ?>">
  <?= csrf_field() ?>

  <div class="mb-3">
    <label class="form-label text-muted small">First name</label>
    <input 
      type="text" 
      name="first_name" 
      class="form-control border-0 border-bottom rounded-0 shadow-none" 
      required
      value="<?= esc(old('first_name', $employee['first_name'] ?? '')) ?>">
  </div>

  <div class="mb-3">
    <label class="form-label text-muted small">Last name</label>
    <input 
      type="text" 
      name="last_name" 
      class="form-control border-0 border-bottom rounded-0 shadow-none" 
      required
      value="<?= esc(old('last_name', $employee['last_name'] ?? '')) ?>">
  </div>

  <div class="mb-3">
    <label class="form-label text-muted small">Position</label>
    <?php if ($role === 'Manager'): ?>
      <select 
        class="form-select border-0 border-bottom rounded-0 shadow-none" 
        name="position" 
        required>
        <?php foreach($positions as $p): ?>
          <option value="<?= $p ?>" <?= old('position', $employee['position'] ?? '') === $p ? 'selected' : '' ?>>
            <?= $p ?>
          </option>
        <?php endforeach; ?>
      </select>
    <?php else: ?>
      <input class="form-control border-0 border-bottom rounded-0 shadow-none" value="<?= $role ?>" disabled>
      <input type="hidden" name="position" value="<?= $role ?>">
    <?php endif; ?>
  </div>

  <div class="text-end">
    <button class="btn btn-success px-4 rounded-0"><?= $editing ? 'Save changes' : 'Save' ?></button>
  </div>
</form>

<?= $this->endSection() ?>
