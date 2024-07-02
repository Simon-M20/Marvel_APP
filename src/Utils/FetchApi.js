import CryptoJS from "crypto-js";

const baseUrl = "https://gateway.marvel.com";

let ts = Number(new Date()); //time stamp
let publicKey = "8f7ecc878fe2a5fd991a1678ad727b53";
let privateKey = "e6c8194d027e43f883bdb351a72353e357d03a9a";

let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

export const searchCharacter = async (name) => {
    try {
        let url = `${baseUrl}/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.data.results);
        return data.data.results;
    } catch (err) {
        console.log(err);
    }
};

export const getCharacters = async () => {
    try {
        let url = `${baseUrl}/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.data;
    } catch (err) {
        console.log(err);
    }
};

export const getCharacterInfo = async (id, page = 0, menuOption) => {
    try {
        if (id) {
            const limit = 20;
            const offset = page * limit;
            let url = `${baseUrl}/v1/public/characters/${id}/${menuOption}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
            const res = await fetch(url);
            const data = await res.json();
            return data.data;
        }
    } catch (error) {
        console.log(error);
    }
};
