import emailjs from 'emailjs-com';

class App {
  constructor() {
    this.emailInput = document.querySelector('.js-email');
    this.nameInput = document.querySelector('#name');
    this.sendBtn = document.querySelector('.js-send-btn');
    this.htmlContent = `<!DOCTYPE html>
<html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <!--[if mso]>
    <style>
        table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
        div, td {padding:0;}
        div {margin:0 !important;}
    </style>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
    </style>
  </head>

  <body style="margin:0 auto;padding:0;word-spacing:normal;height:100%; max-width: 600px;">
    <table role="presentation"
      style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width:100%; box-sizing: border-box; height:100%;"
      width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td width="100%" height="100%" style="text-align: center;">
          <table role="presentation"
            style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%"
            height="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td style="width:100%;height:40vh;background-size: cover;" width="100%"
                background="https://www.panstwa.com/zabytki-zdj/luwr.webp">
              </td>
            </tr>
            <tr>
              <td align="center" width="100%" style="padding: 0 5%;">
                <header style="text-align: center;">
                  <h1 style="font-weight: 300;">Lorem ipsum</h1>
                  <p style="margin: 0; font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                    totam, at non
                    adipisci
                    repudiandae accusamus quos nulla praesentium, illo ratione architecto nam, minima distinctio enim
                    iusto saepe sit eius nostrum!</p>
                </header>
              </td>
            </tr>
            <tr>
              <td width="100%" style="width: 100%; font-size: 14px; padding:5vh 0;">
                <div style="display: inline-block; width: 30%;">
                  <p>a</p>
                  <p>1111111111</p>
                </div>
                <div style="display: inline-block; width: 30%;">
                  <p>s</p>
                  <p>email@email.com</p>
                </div>
                <div style="display: inline-block; width: 30%;">
                  <p>c</p>
                  <p>test@test:com</p>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 0 5%; font-size: 13px;">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Harum
                repellendus ratione
                provident illo
                voluptates quisquam vitae, culpa quidem ex animi adipisci blanditiis soluta illum labore eius
                distinctio voluptatem vero suscipit.</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>

</html>`
  }

  getInputValue = (input) => {
    return input.value;
  }

  validateInputData = (data, pattern) => {
    const ptrn = pattern ? new RegExp(pattern) : '';
    if (!data) return false;
    if (pattern) return ptrn.test(data);
    return true;
  }

  sendRequest = async ({ email_to, html_content }) => {
    try {
      await emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, {
        html_content,
        email_to,
        reply_to: "xyz@xyz.pl",
        from_name: "LukasP",
      }, process.env.EMAILJS_USER_ID);
    } catch (err) {
      console.log(err);
    }
  }

  handleSendBtn = async () => {
    const email = this.getInputValue(this.emailInput);
    const name = this.getInputValue(this.nameInput);
    const isEmailValid = this.validateInputData(email, '.+\@.+\..+');
    const isNameValid = this.validateInputData(name);
    if (!isEmailValid) {
      this.emailInput.classList.add('input-invalid');
      return;
    }
    if (!isNameValid) {
      this.nameInput.classList.add('input-invalid');
      return;
    }
    await this.sendRequest({ email_to: email, html_content: this.htmlContent });
    sessionStorage.setItem('UserName', name);
    window.location.replace('pages/thank-you-page.html');
  }

  handleLabelVisibility = (e) => {
    const content = e.currentTarget.value;
    e.currentTarget.nextElementSibling.classList.add('hide-label');
    if (!content) e.currentTarget.nextElementSibling.classList.remove('hide-label');
  }

  bindListeners = () => {
    this.sendBtn.addEventListener('click', () => this.handleSendBtn());
    this.nameInput.addEventListener('change', (e) => this.handleLabelVisibility(e));
    this.emailInput.addEventListener('change', (e) => this.handleLabelVisibility(e));
  }

  init = () => {
    this.bindListeners();
  }

}

const app = new App();
app.init();



