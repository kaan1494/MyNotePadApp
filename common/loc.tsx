import i18n from 'i18n-js';

const de = {
    Home: "Passwörter",
    Accept: "Bestatigen",
    PassPlaceHolder:"Geben Sie Ihre Passwort ein",
    PassErr:"Fehlerhafte Pass bro!",
    AllPass:"Passwarter"
};
const tr = {
    Home: "Passwords",
    Accept: "Okay",
    PassPlaceHolder:"Enter Your Password",
    PassErr:"Hatali sifre!",
    AllPass:"Tüm sifreler"
};
const en = de;


i18n.fallbacks = true;
i18n.translations = { de, tr, en}

export{
    i18n
}