const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.querySelector("#fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const loveBtn = document.querySelector("#loveButton")

const getLove = () => {
    axios.get("http://localhost:4000/api/love/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

loveBtn.addEventListener('click', getLove)

const numberBtn = document.querySelector("#numberButton")

const getNumber = () => {
    axios.get("http://localhost:4000/api/number/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

numberBtn.addEventListener('click', getNumber)

const babyBtn = document.querySelector("#babyButton")

const getBaby = () => {
    axios.get("http://localhost:4000/api/baby/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

babyBtn.addEventListener('click', getBaby)