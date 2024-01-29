module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will see an abundance of money come your way", "You will meet your soulmate in 2024", "Your dream job will be yours this year", "You will see an increase of wins this year", "2024 is your worst year tread carefully with all endeavors"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getLove: (req, res) => {
        const loves = ["Your soulmate's name starts with a Z", "Your soulmate's name starts with a A", "Your soulmate's name starts with a F", "Your soulmate's name starts with a H"];
      
        // choose random letter
        let randomIndex = Math.floor(Math.random() * loves.length);
        let randomLove = loves[randomIndex];
      
        res.status(200).send(randomLove);
    },

    getNumber: (req, res) => {
        const numbers = ["24", "777", "4", "13", "13"];
      
        // choose random number
        let randomIndex = Math.floor(Math.random() * numbers.length);
        let randomNumber = numbers[randomIndex];
      
        res.status(200).send(randomNumber);
    },

    getBaby: (req, res) => {
        const babies = ["Valetina", "Charlie", "Luke", "Samantha", "Draco"];
      
        // choose random name
        let randomIndex = Math.floor(Math.random() * babies.length);
        let randomBaby = babies[randomIndex];
      
        res.status(200).send(randomBaby);
    }
};

