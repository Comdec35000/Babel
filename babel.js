/*
 * Babel est un localizer pour les applications en javascript
 *
 * Il tire son nom de la tour du même nom dans le folklore hébraique.
 * Son utilisation est libre, et sa modification est permise, cependant merci de
 * me créditer dans ce cas.
 * Son intérêt est de simbplifier la localisation des textes de votre 
 * application dans un objectif de traduction.
 * Pour cela il suffit d'ajouter ce document dans votre projet npm et de 
 * le require pour accéder à ses méthodes static ainsi qu'au classes 
 * qu'il propose.
 * 
 * AUTHOR : Com (Comdec35000)
 * VERSION : 1.1.1 2021/10/28
*/

const fs = require('fs');


class Babel {

    static config = {
        langDirPath: __dirname + '/',
        langages: [
            'fr_fr',
            'en_us'
        ],
        defaultLang: 'en_us'
    };

    /**
     * 
     * @param {String} pos The path to the text in the json. EX: path.to.my.text
     * @param {String} lang The lang in witch you want to translate your text.
     * @returns {String} The localized text
     */
    static localize(pos, lang) {

        var file = require(Babel.config.langDirPath + 'lang/' + lang.toLowerCase() + '.json');
        var txt = file[pos];

        if(!txt) {
            file = require(Babel.config.langDirPath + 'lang/' + Babel.config.defaultLang.toLowerCase() + '.json');
            txt = file[pos];
        }

        if(!txt) txt = pos;

        return txt;

    }

    static localizeFormated(pos, lang) {

        var text = Babel.localize(pos, lang);

        delete arguments[0];
        delete arguments[1];

        return Babel.format(text, arguments);
    }

    static format(string) {
        let a = string;
        delete arguments[0];

        Object.values(arguments[1]).forEach((v, i) => {
            a = a.replace("<" + i + "/>", v);
        });
        return a;
    }

    static genFiles() {
        if(!fs.existsSync(Babel.config.langDirPath + 'lang/')) fs.mkdir(Babel.config.langDirPath + 'lang/', err => {
            if(err) console.log(err);
        });

        Babel.config.langages.forEach(file => {
            if(!fs.existsSync(Babel.config.langDirPath + 'lang/' + file + '.json')) fs.writeFileSync(Babel.config.langDirPath + 'lang/' + file + '.json', JSON.stringify({}));
        });
    }
}

module.exports = Babel;