const form = document.getElementById('coin-form');
const coin = document.getElementById('coin');
const cripto = document.getElementById('cripto');
const amount = document.getElementById('amount');
const coinInfo = document.getElementById('coin-info');


// Escucha el evento submit del formulario
// funcion asincrona
form.addEventListener('submit', async e => {
    // evita que se recargue la pagina
    e.preventDefault();
    // obtiene el valor del select de monedas
    // [...coin.children] convierte los hijos del select en un array
    const coinselected = [...coin.children].find(option => option.selected).value;
    // obtiene el valor del select de criptomonedas
    const criptoselected = [...cripto.children].find(option => option.selected).value;
    // obtiene el valor del input de cantidad
    const amountValue = amount.value;

    // Atrapa errores sin detener el Prog... evita fallos y toma una accion alternativa
    try {
        // muestra un loader mientras se obtienen los datos
        // coinInfo es el elemento donde se mostraran los datos
        coinInfo.innerHTML = `
            <div class="loader"></div>
        `;
        // await espera a que se resuelva la promesa
        // fetch obtiene los datos de la API
        // .json() convierte los datos a formato JSON
        const responce = await (await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoselected}&tsyms=${coinselected}`)).json();
        const price = responce.DISPLAY[criptoselected][coinselected].PRICE;
        const pHigh = responce.DISPLAY[criptoselected][coinselected].HIGH24HOUR;
        const pLow = responce.DISPLAY[criptoselected][coinselected].LOW24HOUR;
        const pVariacion = responce.DISPLAY[criptoselected][coinselected].CHANGEPCT24HOUR;
        
        if (amountValue !== '') {
            // Si amountValue no esta vacio, calcula el resultado
            // responce.RAW[criptoselected][coinselected].PRICE obtiene el precio de la criptomoneda
            const result = Number(amountValue) / responce.RAW[criptoselected][coinselected].PRICE

            coinInfo.innerHTML = `
            <p class="info">El precio es: <span class="price">${price}</span></p>
            <p class="info">El precio mas alto es: <span class="price">${pHigh}</span></p>
            <p class="info">El precio mas bajo es: <span class="price">${pLow}</span></p>
            <p class="info">Variecion 24h: <span class="price">${pVariacion}%</span></p>
            <p class="info">Puede comprar: <span class="price">${result.toFixed(4)} ${criptoselected}</span></p>
        `;
        // .toFixed(4) limita el resultado a 4 decimales
        }else {
            coinInfo.innerHTML = `
            <p class="info">El precio es: <span class="price">${price}</span></p>
            <p class="info">El precio mas alto es: <span class="price">${pHigh}</span></p>
            <p class="info">El precio mas bajo es: <span class="price">${pLow}</span></p>
            <p class="info">Variecion 24h: <span class="price">${pVariacion}%</span></p>
        `;
        }

    } catch (error) {
        console.log(error);
        
    }
    
});



