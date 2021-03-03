import fs from 'fs';

export async function getRequest(url = '', options = {}) {
    const response = await fetch(url, options);

    return await response.json();
}

export async function getRequestWithToken(url = '', token = '', options = {}) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    });

    const data = response.json();
    return data;
}

export async function getNewToken() {
    const username = 'BZaa-av5L6RmZKlPgZaGNkea';
    const password = 'jchbf_Q5zRWCaEg4TCB4m9cLIioPiml0';
    const encodedData = Buffer.from(`${username}:${password}`).toString(
        'base64'
    );
    const response = await fetch('https://auth.commercetools.co/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${encodedData}`
        },
        body:
            'grant_type=client_credentials&scope=view_products:nuts-custom-demo-1'
    });

    const data = await response.json();
    const token = data.access_token;
    
    fs.writeFile('.env', `ACCESS_TOKEN=${token}`, function (err) {
        if (err) return console.log(err);
    });

    return token;
}
