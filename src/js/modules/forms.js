const forms = (state) => {
  const windows = document.querySelectorAll("[data-modal]");

  const closeAllModals = () => {
    windows.forEach((item) => {
      item.style.display = "none";
    });
  };

  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
    });
  });

  const message = {
    loading: "Загрузка...",
    success: "Дякуємо, заявка отримана !",
    failure: "Помилка при відправці! Спробуйте пізніше.",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
          state = {};
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            closeAllModals();
          }, 3000);
        });
    });
  });
};

export default forms;
