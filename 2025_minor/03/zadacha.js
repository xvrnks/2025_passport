function verify() {
        let seat = parseInt(elementSeat.value);
        let res = "";

        if (isNaN(seat) || seat < 1 || seat > 54) {
            res = "введите номер места от 1 до 54";
            check = false;
        } else {
        

            if (seat >= 1 && seat <= 36) {
                let position = (seat % 2 === 1) ? "нижнее" : "верхнее";
                res = position + " купейное";
                check = true;
                
            } else {
                let position = (seat % 2 === 1) ? "нижнее" : "верхнее";
                res = position + " боковое";
                check = true;
            }
        }
        document.getElementById("result").value = res;
    }

    function send() {
        if (check) {
            document.getElementById("UserEnter").submit();
        } else {
            alert("ошибка: проверьте правильность ввода");
        }
    }

    let check = false;

    const elementSeat = document.getElementById("seatNumber");
    const elementVerify = document.getElementById("verify");
    elementVerify.addEventListener('click', verify);

    const elementSend = document.getElementById("send");
    elementSend.addEventListener('click', send)







