const container = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
    const b = document.createElement('button');
    b.append('Hey!');
    container.appendChild(b);

}

