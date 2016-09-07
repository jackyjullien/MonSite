const DELAY = 1000;
class Horloge {
    constructor(container) {
        // arrow function '=>" préserve le this
        this.interval = setInterval(() => {
            let now = new Date(); // portée restrictive sur le bloc local
            container.innerHTML = `${now.getHours()}h ${now.getMinutes()}m ${now.getSeconds()}s`;
        }, DELAY);
    }
}

export default Horloge;