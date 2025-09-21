<?= $this->extend('layout') ?>
<?= $this->section('content') ?>

<div class="container mt-4">
  <h5>::Login::</h5>

  <div class="row justify-content-center mt-3">
    <div class="col-md-6 col-lg-4">
      <div class="card">
        <div class="card-header">
          LOGIN
        </div>
        <div class="card-body">
          <form method="post" action="/login">
            <?= csrf_field() ?>

            <div class="mb-3">
              <label class="form-label">Username</label>
              <input 
                type="text" 
                name="username" 
                class="form-control rounded-0" 
                value="<?= old('username') ?>"
                required>
            </div>

            <div class="mb-3">
              <label class="form-label">Password</label>
              <input 
                type="password" 
                name="password" 
                class="form-control rounded-0"
                required>
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-primary px-4 rounded-0">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<?= $this->endSection() ?>
