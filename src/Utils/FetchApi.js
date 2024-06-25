import CryptoJS from "crypto-js";

const baseUrl = "https://gateway.marvel.com";

let ts = Number(new Date()); //time stamp
let publicKey = "8f7ecc878fe2a5fd991a1678ad727b53";
let privateKey = "e6c8194d027e43f883bdb351a72353e357d03a9a";

let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
console.log(hash, ts);

// let url = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

export const searchCharacter = async (name) => {
    try {
        let url = `${baseUrl}/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const res = await fetch(url);
        const data = await res.json();
        return data.data.results[0];
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

export const getCharacterData = async (id) => {
    try {
        console.log(id);
        let url = `${baseUrl}/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getCharacterSeries = async (id) => {
    try {
        if (id) {
            let url = `${baseUrl}/v1/public/characters/${id}/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            return data.data;
        }
    } catch (error) {
        console.log(error);
    }
};

export const getCharacterComics = async (character) => {
    try {
        const res = await fetch(`${baseUrl}/${character}/encounters`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
