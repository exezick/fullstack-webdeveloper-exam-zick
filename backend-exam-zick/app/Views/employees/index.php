<?= $this->extend('layout') ?>
<?= $this->section('content') ?>

<h5>:: List Page ::</h5>

<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Position</th>
      <th>Created At</th>
      <th>Actions</th>
      <th style="width: 1%;"><a href="/employees/create" class="btn btn-success btn-sm rounded-0">Add</a></th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($employees as $i => $e): ?>
      <tr>
        <td><?= $i+1 ?></td>
        <td><?= esc($e['first_name']) ?></td>
        <td><?= esc($e['last_name']) ?></td>
        <td><?= esc($e['position']) ?></td>
        <td><?= date('M. d, Y', strtotime($e['created_at'])) ?></td>
        <td>
          <a href="/employees/<?= $e['id'] ?>/edit" class="btn btn-warning btn-sm rounded-0">Edit</a>
          <form action="/employees/<?= $e['id'] ?>/delete" method="post" style="display:inline-block;">
            <?= csrf_field() ?>
            <button type="submit" class="btn btn-danger btn-sm rounded-0" onclick="return confirm('Delete this record?')">Delete</button>
          </form>
        </td>
        <td></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>

<?= $this->endSection() ?>
