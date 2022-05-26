# Javascript Language Glossary

Source:
* [wikipedia](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_JavaScript/Glossary_of_JavaScript)
* [medium - 11 javascript concepts](https://medium.com/javascript-in-plain-english/11-javascript-concepts-every-web-developer-should-know-to-take-their-skills-to-the-next-level-37ef6693111a)

#### Table of contents

* [IIFE](#iife)

&nbsp;
# IIFE
Stands for **I**mmediately **I**nvoked **F**unction **E**xpression. A function expression that is invoked immediately after its definition. Used as a hack for managing accessibility.

``` javascript
(() => console.log(‘Hello world’))();
```