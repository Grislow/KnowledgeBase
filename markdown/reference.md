A quick reference for __markdown__ syntax according to the Github Flavored Markdown Spec.

#### Useful resources
* [Github Flavored Markdown Spec](https://github.github.com/gfm/#links)
* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
* [Markdown in emails](https://markdown-here.com/, "Markdown-here")
* [Emojis Cheatsheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

#### Table of contents
* [Breaks](#breaks)
* [Headers](#headers)
* [Emphasis](#emphasis)
* [Strikethrough](#strikethrough)
* [Blockquotes](#blockquotes)
* [Lists](#lists)
* [Links](#links)
* [Images](#images)
* [Code](#code)
* [Tables](#tables)
* [Task Lists](#task-lists)
* [Mentions](#mentions)
* [Emojis](#emojis)

&nbsp;
# Breaks

### Thematic break
```markdown
a

***

thematic

___

break

---
```

a

***

thematic

___

break

---

### Line break
```markdown
Line\
Break
```

Line\
Break

&nbsp;
# Headers
```markdown
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
# h1
## h2
### h3
#### h4
##### h5
###### h6

```markdown
h1
===
h2
---
```
h1
===
h2
---

&nbsp;
# Emphasis

```markdown
Wrap in *asterisk* or _underscore_ to make text *italic*
**Double** that to make it __bold__
Mix it up for a **_flavor_** of both
```

Wrap in *asterisk* or _underscore_ to make text *italic*\
**Double** that to make it __bold__\
Mix it up for a **_flavor_** of both

&nbsp;
# Strikethrough

```markdown
Double tylda to ~~strikethrough~~
```

Double tylda to ~~strikethrough~~

&nbsp;
# Blockquotes

```markdown
William Shakespeare
>To be or not to be
```
William Shakespeare
>To be or not to be

&nbsp;
# Lists

#### Unordered
```markdown
* Milk
* Fruit
   * Apples
   * Oranges
   * Bananas
* Bread
```
* Milk
* Fruit
   * Apples
   * Oranges
   * Bananas
* Bread

#### Ordered
```markdown
1. Javascript
   1. React
   1. Jquery
   1. Angular
1. HTML
1. CSS
```
1. Javascript
   1. React
   1. Jquery
   1. Angular
1. HTML
1. CSS

&nbsp;
# Links

#### Automatic
https://www.google.pl/ will be transformed automatically just like a link in angle brackets <https://github.com/>

#### Inline
```markdown
[Markdown Quick Reference](https://github.com/Grislow/KnowledgeBase/wiki/Markdown/ "Title")
```
[Markdown Quick Reference](https://github.com/Grislow/KnowledgeBase/wiki/Markdown/ "Title")

#### Reference
```markdown
You can use reference links directly [Google].
Or like [this][1].
Another option if you don't like the reference name is [using another name][Some text]

[Google]: https://www.google.pl/
[1]: https://www.bing.com/
[Some text]: https://www.yahoo.com/
```

You can use reference links directly [Google].
Or like [this][1].
Another option if you don't like the reference name is [using another name][Some text].

[Google]: https://www.google.pl/
[1]: https://www.bing.com/
[Some text]: https://www.yahoo.com/

&nbsp;
# Images

#### Inline
```markdown
![Some alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/200px-Ei-sc-github.svg.png "Optional Title text")
```
![Some alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/200px-Ei-sc-github.svg.png "Optional Title text")

#### Reference
```markdown
![Gihub logo][logo]

[logo]: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/200px-Ei-sc-github.svg.png "Small github logo"
```
![Gihub logo][logo]

[logo]: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/200px-Ei-sc-github.svg.png "Small github logo"

&nbsp;
# Code

#### Inline

```markdown
Using a `const` would've been good practice.
```

Using a `const` would've been good practice.

#### No syntax highlighting
````
```
No language specified means
const no = 'syntax'
<p>highlighting</p>
```
````
```
No language specified means
const no = 'syntax'
<p>highlighting</p>
```

#### Syntax highlighting
````
``` javascript
let difficulty = 'easy';
console.log(`Markdown is ${difficulty} to learn`);
```

``` java
public class Main
{
  public static void main(String[] args) {
    String difficulty = "easy";
    System.out.println("Markdown is " + difficulty + " to learn");
  }
}
```

``` python
difficulty = "easy";
print('Markdown is {:s} to learn'.format(difficulty));
```
````
&nbsp;
``` javascript
let difficulty = 'easy';
console.log(`Markdown is ${difficulty} to learn`);
```

``` java
public class Main
{
  public static void main(String[] args) {
    String difficulty = "easy";
    System.out.println("Markdown is " + difficulty + " to learn");
  }
}
```

``` python
difficulty = "easy";
print('Markdown is {:s} to learn'.format(difficulty));
```

&nbsp;
# Tables
```markdown
This|Is|The|Table|Header
----|--|:---:|:-----|------:
colons|specify|the|text|alignment
text|is|centered|by|default
every|other|line|different|background
```
This|Is|The|Table|Header
----|--|:---:|:-----|------:
colons|specify|the|text|alignment
text|is|centered|by|default
every|other|line|different|background

&nbsp;
# Task Lists

```markdown
- [x] Walk the dog
- [x] Create a markdown wiki page to get the hang of it
- [x] Start using markdown obsessively
- [ ] Start working out
```
- [x] Walk the dog
- [x] Create a markdown wiki page to get the hang of it
- [x] Start using markdown obsessively
- [ ] Start working out

&nbsp;
# Mentions

```markdown
@username will notify the person to view the comment.
This doesn't always work as intended. 
An interesting workaround if you simply want to mention someone is using a link [@Grislow](https://github.com/Grislow)
```

@username will notify the person to view the comment. This doesn't always work as intended. An interesting workaround if you simply want to mention someone is using a link [@Grislow](https://github.com/Grislow)

&nbsp;
# Emojis

```markdown
You can use emojis in markdown :ok_hand:
:heavy_check_mark: it out yourself and I'm sure you'll :heart: it. You can find a :link: at the top of this wiki.
```

You can use emojis in markdown :ok_hand:
:heavy_check_mark: it out yourself and I'm sure you'll :heart: it. You can find a :link: at the top of this wiki.
