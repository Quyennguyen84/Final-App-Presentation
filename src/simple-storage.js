const setStorage =(key,data)=>{
    const dataAsString =JSON.stringify(data);
    const encodeData = btoa(dataAsString);
    localStorage.setItem(key,encodeData);

};
const getStorage = (key)=>
{
    const value = localStorage.getItem(key);
    const decodeData = atob(value);
    return JSON.parse(decodeData);
};
const storaeHasData = () => localStorage.length > 0 ;