const url = 'https://icanhazdadjoke.com/ss';

const btn = document.querySelector('.btn');
const text = document.querySelector('.result');


btn.addEventListener('click', () => {
    getDadJoke();
});


const getDadJoke = async () => {
    text.textContent = 'Loading...'
    try {

        const response = await fetch(url, {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'learning app',
            },
        })
        if (!response.ok) {
            throw new Error('Status code 404 fffffffffff')
        }
        console.log(response)
        const data = await response.json();
        text.textContent = data.joke;

    } catch (error) {
        console.log(error.message)
        text.textContent = 'There are some error...'
    }

}

getDadJoke();