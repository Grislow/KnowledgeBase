Various Javascript-related things I think are worth knowing or having available for quick reference when needed.



#### Table of contents
* [Performance](#performance)
* [Regular Expressions](#regular-expressions)
    * [Digits](#digits)
    * [Alphanumeric](#alphanumeric)
    * [Login](#login)
    * [URL](#url)
    * [IP](#ip)
    * [Dates and Time](#dates-and-time)
    * [Credit Cards](#credit-cards)

## Performance
Avoid using the `new` operator whenever possible.

## Regular Expressions
More on regular expressions in [Javascript](/javascript/md/es5.md#regular-expressions).

Credits to: 
* [Digital Fortress](https://digitalfortress.tech/tricks/top-15-commonly-used-regex/) - for the list and inspiration. Keep in mind that lots of their regular expressions had to be fixed not to match empty strings and some had to be trimmed to reduce excess subexpressions.
* [regular-expressions.info](https://www.regular-expressions.info) - a comprehensive guide on regular expressions.

A `^` at the beginning together with `$` at the end of any regular expression searches for an exact match(for example no trailing whitespace). Otherwise it will search it as a substring meaning it can be preceeded or followed by any characters.

Keep in mind some of these are just fun examples - if a regular expression is too long you should think of a different approach:
* [parsers](/resources/glossary.md#accessor)
* extract atomic parts(subexpressions) and check them individually
* use control flow and string properties/methods that don't involve regular expressions

#### Digits
``` javascript
// whole numbers
var whole = /^\d+$/;
// decimal numbers
var dec = /^\d*\.\d+$/;
// whole and decimal numbers
var wholeDec = /^\d*\.?\d+$/;
// negative/postive whole and decimal numbers
var negPosWholeDecimal = /^-?\d*\.?\d+$/;
// whole, decimal and fraction numbers
var wholeDecFrac = /^[-]?\d?[,.]?\d+([\/]\d+[,.]?\d*)*$/;
```

#### Alphanumeric
``` javascript
// alphanumeric excluding whitespaces
var ANnoWhiteSpace = /^[a-zA-Z0-9]+$/;
// alphanumeric including whitespaces
var ANwithWhiteSpace = /^[a-zA-Z0-9 ]+$/;
```

### Login
``` javascript
// username of 3-16 characters
var username = /^[a-zA-Z0-9_-]{3,16}$/;

// email excluding some edge cases youll probably never encounter
var email = /^([a-zA-Z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

// weak password: 1 letter, 1 number, 8+ characters
var weak = /(?=.*\d)(?=.*[a-zA-Z])^.{8,}$/;

// moderate password: 1 uppercase, 1 lowercase, 1 number, 8+ characters
var moderate = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])^.{8,}$/

// strong password: 1 uppercase, 1 lowercase, 1 number, 1 special character, 8+ characters
var strong = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])^.{8,}$/;
```

### URL
``` javascript
// slug
var slug = /[a-z0-9]+(?:-[a-z0-9]+)*/;

// http(s) protocol
var httphttps = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// https
var https = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// http protocol
var http = /http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// optional http or https protocal
var optional = /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

// ftp protocol :D - i know but according to RFC959 the username and password can contain almost all ASCII characters
var ftp = /^ftp:\/\/[\!#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?a-zA-Z0-9]{2,}(:[\!#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?a-zA-Z0-9]+)?@[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/;

// ftp handling usernames with only dots and underscores
var ftpBetter = /^ftp:\/\/[a-zA-Z0-9._]{2,}(:[\!#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?a-zA-Z0-9]+)?@[-a-zA-Z0-9@:%._\+~#=]{2,250}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/;
```

### IP
``` javascript
// IP4 address
var ip4 = /^((2[0-5]{2}|1\d{2}|0?\d{1,2})\.){3}(2[0-5]{2}|1\d{2}|0?\d{1,2})$/;

// IP6 address
var ip6 = /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$/;
```

### Dates and Time
Components of a __date__(year, month, day, seperator) and __time__(hours, minutes, seconds, milliseconds, seperator) in various formats.

These are pieces out of which you can create a regular expression matching any date/time/datetime format.
``` javascript
// YEAR
var yy = /(\d{2})/;                     // 89, 18, 10
var yyyy = /([12]\d{3})/;               // 1001, 2018, 2100 
var yANY = /(([12]\d{3})|(\d{2}))/;     // 01, 2001, 99, 1999

// MONTH
var m = /(1[0-2]|[1-9])/;               // 1, 11
var mm = /(0[1-9]|1[0-2])/;             // 01, 09, 12
var mmm = /([jJ]an|[fF]eb|[mM]ar|[aA]pr|[mM]ay|[jJ]un|[jJ]ul|[aA]ug|[sS]ep|[oO]ct|[nN]ov|[dD]ec)/;
                                        // jan, Oct, dec
var mmmm = /([jJ]anuary|[fF]ebruary|[mM]arch|[aA]pril|[mM]ay|[jJ]une|[jJ]uly|[aA]ugust|[sS]eptember|[oO]ctober|[nN]ovember|[dD]ecember)/;
                                        // january, December, October
var mORmm = /(1[0-2]|0?[1-9])/;         // 1, 01, 11
var NOmmmm = /((1[0-2]|0?[1-9])|([jJ]an|[fF]eb|[mM]ar|[aA]pr|[mM]ay|[jJ]un|[jJ]ul|[aA]ug|[sS]ep|[oO]ct|[nN]ov|[dD]ec))/;
                                        // 1, 01, jan, Jan

// DAY
var d = /([12]\d|3[01]|[1-9])/;         // 1, 11, 21, 31
var dd = /(0[1-9]|[12]\d|3[01])/;       // 01, 09, 11
var ddd = /([sS]un|[mM]on|[tT]ue|[wW]ed|[tT]hu|[fF]ri|[sS]at)/;
                                        // Thu, fri, sat
var dORdd = /([12]\d|3[01]|0?[1-9])/;   // 1, 01, 21, 30, 31

// DATE SEPARATORS
var dot = /\./;
var space = / /;
var dash = /-/;
var slash = /\//;
var all = /[-./ ]/;

// HOUR
var h12 = /(1[0-2]|0?\d)/;              // 0, 7, 12
var hh12 = /(0\d|1[0-2])/;              // 00, 07, 12
var h24 = /(1\d|2[0-3]|\d)/;            // 0, 1, 12, 23
var hh24 = /(0\d|1\d|2[0-3])/;          // 00, 01, 12, 23 

// MINUTES OR SECONDS
var s = /([1-5]?\d)/;                   // 0, 1, 11, 59
var ss = /([1-5]\d|0\d)/;               // 00, 01, 11, 59

// MILLISECONDS
var ms = /([1-9]\d{1,2}|\d)/;           // 1, 11, 111
var msms = /(\d{3})/;                   // 001, 011, 111

// TIME MARKER
var ampm = /(am|AM|pm|PM)/;             

// TIME SEPARATOR
var colon = /:/;
var space = / /;

// DATE-TIME SEPERATORS
var spaceORT = /[ T]/;
```

Connect date components using date seperators.
``` javascript
// YYYYMMDD with any seperator
var yyyymmdd = /([12]\d{3})[-./ ](0[1-9]|1[0-2])[-./ ](0[1-9]|[12]\d|3[01])/;
// D-M-YY
var dmyy = /([12]\d|3[01]|[1-9])-(1[0-2]|[1-9])-(\d{2})/;
```

Connect time components using a colon.
``` javascript
// HHMMSSmsms 24h clock
var hhmmssmili = /(0\d|1\d|2[0-3]):([1-5]\d|0\d):([1-5]\d|0\d):(\d{3})/;
// HMS 12h clock
var hms12 = /(1[0-2]|0?\d):([1-5]?\d):([1-5]?\d) (am|AM|pm|PM)/;
```

Connect date and time using `T` or space.
``` javascript
// DD.MM.YYYYTHHMMSS
var datetime = /(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.([12]\d{3})T(0\d|1\d|2[0-3]):([1-5]\d|0\d):([1-5]\d|0\d)/;
```

### Credit Cards
``` javascript
var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
var mastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
var americanExpress = /^3[47][0-9]{13}$/;
var dinersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
var discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
var jcb = /^(?:2131|1800|35\d{3})\d{11}$/;
```


### Prep string literal
Credits to: 
* [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-unicode-escape)
``` javascript
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

var wrongRegExp = new RegExp('100.5$');
var rightRegExp = new RegExp(escapeRegExp('100.5$'));

var str = 'A course cost 100.5$ which is way too much';

str.match(wrongRegExp);                 // null
str.match(rightRegExp)[0];              // "100.5$"
```