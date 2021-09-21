
    var btn = document.getElementById("btn");
    var randomNo = Math.floor(Math.random() * 10);
    console.log(randomNo);
    var counter = 0;
    var a = [];
    function x() {
        counter++;
        if (counter < 5) {
            var input = document.getElementById("input").value;
            if (input > randomNo) {
                document.getElementById('text').innerHTML = `your Guess too High! Try Again`;
                document.getElementById('count').innerHTML = ` guess remaining ${5 - counter} `;
                a.push(input);
                document.getElementById('array').innerHTML = `Previous Guess  ${a}`;
                console.log(a);
            }
            else if (input < randomNo) {
                document.getElementById('text').innerHTML = `your Guess too Low! Try Again`;
                document.getElementById('count').innerHTML = `guess remaining ${5 - counter} `;
                a.push(input);
                document.getElementById('array').innerHTML = `Previous Guess  ${a}`;
                console.log(a);
            }
            else {
                document.getElementById('text').innerHTML = `Your Guess Right! Refresh Page`;
                document.getElementById('count').innerHTML = ``;
                document.getElementById('array').innerHTML = `Previous Guess  ${a}`;
                a.push(input);
                console.log(a);
            }
        }
        else {
            document.getElementById('text').innerHTML = `exceeded no of attempts`;
        }
    }
    btn.addEventListener('click', x)
