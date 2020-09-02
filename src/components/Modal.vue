<template>
  <div
    class="modal modal-side-text-align fade"
    id="bankModal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title-sm">أضف حساب بنكي</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="">اسم البنك</label>
                  <div class="select-chosen-container select-chosen-container-sm">
                    <select data-placeholder="Choose a Bank..." class="chosen-select">
                      <option>البنك الأهلي التجاري</option>
                      <option>ساب</option>
                      <option>البنك السعودي الفرنسي</option>
                      <option>البنك الأول</option>
                      <option>البنك السعودي للاستثمار</option>
                      <option>البنك العربي الوطني</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="input1">رقم الحساب</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="input1"
                    placeholder="123456789XXXXXX"
                  />
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="input2">الأيبان</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="input2"
                    placeholder="SA03 8000 0000 6080 XXXX XXXX"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="input3">اسم المستفيد</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="input3"
                    placeholder="Name of the account owner"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-accept btn-sm">حفظ</button>
          <button type="button" class="btn btn-grey btn-sm" data-dismiss="modal">إغلاق</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
