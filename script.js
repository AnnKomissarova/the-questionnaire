const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код

  const sendBtn = document.querySelector("#button");  

  sendBtn.addEventListener('click', () => {
    fetch(`http://46.21.248.81:3001/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: AnnKomissarova'
      },

      body: JSON.stringify({
        "name": document.querySelector("#name").value,
        "secondName": document.querySelector("#secondName").value,
        "email": document.querySelector("#email").value,
        "phone": document.querySelector("#phone").value,
        "agree": document.querySelector("#agree").value,
      }),  

    })
    .then((result) => {
      return result.json();
    })

    .then((data) => {
      document.querySelector(".form").reset();
      console.log(data);
  })

    .catch((result) => {
      console.log(result);
    })

  })

});
