window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip() {
    let amount = parseFloat(document.querySelector('#amount').value);
    let persons = parseInt(document.querySelector('#persons').value, 10);
    let service = parseFloat(document.querySelector('#services').value);
    let paymentMethod = document.querySelector('#payment-method').value;

    if (isNaN(amount) || isNaN(persons) || service === 'Selecione' || persons <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    if (paymentMethod === 'none' || paymentMethod === 'pix') {
        amount *= 0.95; // Aplica o desconto de 5%
    }

    let total = (amount * service) / persons;
    total = total.toFixed(2);

    if (persons === 1) {
        document.querySelector('#each').style.display = 'none';
    } else {
        document.querySelector('#each').style.display = 'block';
    }

    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}
