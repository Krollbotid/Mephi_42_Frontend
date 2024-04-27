const axios = require('axios');

axios.get('https://json.geoiplookup.io/')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

/* ans browser and node browser are same:

{
    "ip": "195.88.126.8",
    "isp": "ISP CentroSet",
    "org": "CentroSet Ltd.",
    "hostname": "195.88.126.8",
    "latitude": 55.6141,
    "longitude": 37.6239,
    "postal_code": "",
    "city": "Moscow",
    "country_code": "RU",
    "country_name": "Russia",
    "continent_code": "EU",
    "continent_name": "Europe",
    "region": "Moscow",
    "district": "Yuzhny Administrative Okrug",
    "timezone_name": "Europe/Moscow",
    "connection_type": "Corporate",
    "asn_number": 49124,
    "asn_org": "CentroSet Ltd.",
    "asn": "AS49124 - CentroSet Ltd.",
    "currency_code": "RUB",
    "currency_name": "Russian Ruble",
    "success": true,
    "premium": false
}

*/