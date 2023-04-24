const access_token = storaeHasData() ? getStorage('access_token');
const token = 'Bearer ${access_token}';
const _get = async (URL) => {
    const res =await fetch(URL, {
        method: 'GET',
        headers: {
            Authorization: token,
            'Content - Type' : 'application/json',
        },
    });
    return res.json();
};
const _post = async(URL, data) =>{
    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content - Type' : 'application/json'
        },
        body: JSON.stringify(data),
    });
    return res.json();
};
const _put = async(URL,data) =>{
    const res = await fetch(URL, {
        method : 'PUT',
        headers: {
            Authorization: token,
        },
        body: JSON.stringify(data),
    });
    return res.json();
};