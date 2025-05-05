const form = document.querySelector(".form");
const notification = document.getElementById("notification");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const secondName = form.secondName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const agree = form.agree.checked;

    fetch('https://polinashneider.space/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer AnDemyanova'
            },
            body: JSON.stringify({
                name,
                secondName,
                email,
                phone,
                agree
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при отправке данных');
            }
            return response.json();
        })
        .then(data => {
            showNotification("Данные успешно отправлены!", "success");
            form.reset();
        })
        .catch(error => {
            showNotification(error.message || "Произошла ошибка!", "error");
        });
});

function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type}`
    visible;


    setTimeout(() => {
        notification.classList.remove("visible");
        notification.classList.add("hidden");
    }, 3000);
}