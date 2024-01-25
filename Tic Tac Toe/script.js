
        let button = document.querySelectorAll(".btn");
        let newbtn = document.getElementById("newbtn");
        let msgcontainer = document.querySelector(".msgcontainer");
        let msg = document.getElementById("msg")

        let turno = true;

        let winpattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]]


        button.forEach(box => {
            box.addEventListener("click", () => {
                if (turno) {
                    box.innerHTML = 'O';
                    box.style.color = "blue"
                    turno = false;
                }
                else {
                    box.innerHTML = 'X';
                    box.style.color = "red"
                    turno = true;
                }
                box.disabled = true;
                checkwinner()
            })
        });


        const checkwinner = () => {
            for (let pattern of winpattern) {
                let poval1 = button[pattern[0]].innerText;
                let poval2 = button[pattern[1]].innerText;
                let poval3 = button[pattern[2]].innerText;

                if (poval1 != '' && poval2 != '' && poval3 != '') {
                    if (poval1 === poval2 && poval2 === poval3) {
                        showwinner(poval1)
                    }
                }
            }
        }

        const showwinner = (winner) => {
            msg.innerText = `winner is : '${winner}'`;
            msgcontainer.classList.remove("hide");
            disble()
        }


        const disble = () => {
            for (const btn of button) {
                btn.disabled = true
            }
        }

        const enable = () => {
            for (const btn of button) {
                btn.disabled = false
                btn.innerText = ''
            }
        }

        const resetgame = () => {
            turno = true;
            enable();
            msgcontainer.classList.add("hide");
        }


        newbtn.addEventListener("click", resetgame);