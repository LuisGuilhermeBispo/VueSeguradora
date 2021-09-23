<template>
  <div>
    <div class="form-container">
      <div class="form-group">
        <label for="exampleFormControlInput1">CPF</label>
        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="300.000.000-57">
      </div>
      <div class="form-group form-btn">
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
          aria-expanded="false" aria-controls="collapseExample">
          Button swith data-target
        </button>
      </div>
    </div>
    <table class="table collapse" id="collapseExample">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">
              Small modal</button>
            <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
              <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                  ...
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>

</style>
