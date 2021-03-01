export async function getRequest(url = '', options = {}) {
    const response = await fetch(url, options);

    return await response.json();
}

// export async function postRequest(url = "", options = {}) {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Basic ${base64.encode(`BZaa-av5L6RmZKlPgZaGNkea:jchbf_Q5zRWCaEg4TCB4m9cLIioPiml0`)}`
//         },
//         body: JSON.stringify({
//
//         })
//     })
// }

// async function getNewToken() {
//
// }
