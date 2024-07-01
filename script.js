// script.js

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.impact-number');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-max');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
