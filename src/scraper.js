const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://example.com'; // Replace with a real URL

async function scrapeWebsite() {
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const scrapedData = [];
        $('h2').each((index, element) => {
            scrapedData.push($(element).text());
        });

        console.log('Scraped Data:', scrapedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

scrapeWebsite();
