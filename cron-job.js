//La api la he subido a herok, el cron job decidí realizarlo en local

const cheerio = require('cheerio');
const cron = require('node-cron');
const axios = require('axios').default;


cron.schedule('5 * * * * *', async () => {
    const html = await axios.get('https://salty-spire-81639.herokuapp.com/');

    const $ = cheerio.load(html.data);

    const filas = $('tbody.table-body tr');

    filas.each( async (index, el) => {

        const secuencia = $(el).children().eq(0).text().toString();

        const detalle = $(el).children().eq(1).text().toString();

        const usuario = $(el).children().eq(2).text().toString();

        const debe = parseInt($(el).children().eq(3).text().toString(),10);

        const haber = parseInt($(el).children().eq(4).text().toString(),10);

        const tipo = $(el).children().eq(5).text().toString();

        const transaccion = {secuencia, detalle, usuario, debe, haber, tipo};
        
        axios.post('https://salty-spire-81639.herokuapp.com/api/transaccion', transaccion)
        .then( response => console.log(response.data));

    } );

    console.log('Hecho');
});
