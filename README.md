# Babel

## *Introduction :*
Babel est un localizer libre, gratuit et opensource qui vise à faciliter la traduction des application Javascript. Il tire son nom de la tour éponyme dans le folklore Hébraique.

## *Quickstart*

Avant toute chose, Babel **n'est pas** un package npm, juste un module node que vous pouvez à vos projets de bots discord et le require à partir de son chemin de fichier.
Son utilisation est libre, et sa modification est permise, cependant merci de me créditer dans ce cas.
```js
var Eaque = require('<path_to_file>/babel.js');
```
Il faut ensuite modifier les configurations de Babel afin d'ajouter les langages voulu, changer le langage par défaut et le chemin où se génèreront les fichiers de localisations.
```js
static config = {
	langDirPath:  './',
	langages: [
		'fr_fr',
		'en_us'
	],
	defaultLang:  'en_us'
};
```
Pour initialiser le module afin qu'il génère ses fichiers il suffit d'utiliser la méthode statique Babel#genFiles, puis d'utiliser la méthode Babel#localize en passant comme argument le unlocalized string ainsi que le langage choisi pour qu'il retourne le texte que vous avez configuré dans le json correspondant.

```js
const Babel = require('./babel.js');

Babel.genFiles();

console.log(Babel.localize('text.hello'), 'fr_fr');
console.log(Babel.localize('text.hello'), 'en_us');
```
fr_fr.json :
```json
{
	"text.hello" : "Bonjour !"
}
```
en_us.json :
```json
{
	"text.hello" : "Hello !"
}
```
Ce qui donnera  : 
```
-> Bonjour !
-> Hello !
```
