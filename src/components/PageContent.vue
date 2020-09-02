<template>
  <div class="container-fluid other-content">
    <div class="row">
      <div class="col-12">
        <div class="alert alert-primary">
          عند تفعيلك لبوابات الدفع الموضحة ادناه، ستتمكن من ربط متجرك الإلكتروني بإحدى تلك البوابات
          المختلفة. كل بوابة من البوابات لديها إشتراطات معينة لتفعيل حسابك لديهم. خيارات الدفع تتيح
          لك استقبال المدفوعات الإلكترونية عبر البطاقات الإئتمانية وبعضهم يدعم خيار: مدى، للدفع
          الإلكتروني سنقوم بربطك الكترونيًا معهم ولكنك بحاجة أيضًا الى تفعيل اشتراكك لديهم وتعبئة
          النماذج اللازمة.
        </div>
      </div>
      <div class="col-12">
        <div class="other-box extended">
          <div class="other-box-head with-border">
            <div class="row">
              <div class="col-sm-12">
                <div class="content-title other-color">بوابات الدفع</div>
              </div>
            </div>
          </div>
          <div class="other-box-content">
            <div class="row">
              <div class="col-md-6">
                <div class="mini-info-box with-border">
                  <span class="featured-badge">الاختيار المفضل</span>
                  <i class="zid zid-tap-logo"></i>
                  <div class="title">بوابة تاب</div>
                  <div class="subtitle">يمكنك تفعيل بوابة تاب للدفع</div>
                  <a href="payment-options-tap.html" class="btn btn-primary btn-sm"
                    >اضغط لمزيد من التفاصيل</a
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="mini-info-box with-border">
                  <i class="fas fa-money-check-alt"></i>
                  <div class="title">بوابات دفع أخرى</div>
                  <div class="subtitle">من هنا يمكنك تفعيل بوابات أخرى</div>
                  <a href="payment-options-gateways.html" class="btn btn-primary btn-sm"
                    >اضغط لمزيد من التفاصيل</a
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="info-with-img">
                  <div class="comp-logo-holder">
                    <img class="img" src="images/apple-pay-logo.svg" alt="" />
                  </div>
                  <span class="text">يمكنك الان تفعيل Apple Pay في متجرك</span>
                  <a href="payment-options-apple-pay.html" class="btn btn-success btn-sm"
                    >اضغط لمعرفة المزيد</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="other-box extended">
          <div class="other-box-head with-border">
            <div class="row">
              <div class="col-6 my-auto">
                <div class="content-title other-color">التحويل البنكي</div>
              </div>
              <div class="col-6">
                <div class="opp-dir">
                  <a
                    href="#"
                    class="btn btn-success btn-sm"
                    data-toggle="modal"
                    data-target="#bankModal"
                    >إضافة حساب جديد</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="other-box-content">
            <div class="row">
              <div class="col-md-12">
                <div class="bank-list">
                  <div class="row">
                    <div class="col-6 my-auto">
                      <h6>مصرف الراجحي</h6>
                    </div>
                    <div class="col-6">
                      <div class="options opp-dir">
                        <a
                          href="#"
                          class="btn btn-icon-sm"
                          data-toggle="modal"
                          data-target="#bankModal"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a href="#" class="btn btn-icon-sm"><i class="far fa-trash-alt"></i></a>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="img-with-details">
                        <div class="comp-logo-holder">
                          <img class="img" src="images/al-rajhi.png" alt="" />
                        </div>
                        <div class="details">
                          <strong>المالك:</strong>&nbsp;محمد سامي<br />
                          <strong>رقم الحساب:</strong>&nbsp;123456789012345<br />
                          <strong>الأيبان:</strong>&nbsp;SA1234567890123456789011<br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 my-auto">
                      <h6>البنك الأهلي التجاري</h6>
                    </div>
                    <div class="col-6">
                      <div class="options opp-dir">
                        <a
                          href="#"
                          class="btn btn-icon-sm"
                          data-toggle="modal"
                          data-target="#bankModal"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a href="#" class="btn btn-icon-sm"><i class="far fa-trash-alt"></i></a>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="img-with-details">
                        <div class="comp-logo-holder">
                          <img class="img" src="images/bank_ahli.png" alt="" />
                        </div>
                        <div class="details">
                          <strong>المالك:</strong>&nbsp;متجرر اللبس الجميل للتجارة<br />
                          <strong>رقم الحساب:</strong>&nbsp;123457889<br />
                          <strong>الأيبان:</strong>&nbsp;SA98002876190018718901<br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 my-auto">
                      <h6>البنك الأول</h6>
                    </div>
                    <div class="col-6">
                      <div class="options opp-dir">
                        <a
                          href="#"
                          class="btn btn-icon-sm"
                          data-toggle="modal"
                          data-target="#bankModal"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a href="#" class="btn btn-icon-sm"><i class="far fa-trash-alt"></i></a>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="img-with-details">
                        <div class="comp-logo-holder">
                          <img class="img" src="images/bank_holandi.png" alt="" />
                        </div>
                        <div class="details">
                          <strong>المالك:</strong>&nbsp;Test@test<br />
                          <strong>رقم الحساب:</strong>&nbsp;3456789765437<br />
                          <strong>الأيبان:</strong>&nbsp;Sa5467890-98765435567890<br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="learn-more-btn-holder">
          <a href="#" class="btn btn-outline-primary btn-sm"
            >لمعرفة المزيد عن الدفع<i class="fas fa-question"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContent",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
