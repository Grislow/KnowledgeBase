# VSCode Reference

__TODO__:
* [vs hacks](https://medium.freecodecamp.org/here-are-some-super-secret-vs-code-hacks-to-boost-your-productivity-20d30197ac76)


#### Table of contents

* [Tools](#tools)
  * [User Snippets](#User-Snippets)
* [Extension](#extensions)
  * [React Code Snippets](#React-Code-Snippets)
  * [Rest Client](#Rest-Client)
  * [Settings Sync](#settings-sync)

&nbsp;
# Tools
Various tools that come prepackaged with VSCode.

## User Snippets
Create you own project specific and global snippets to boost productivity. 
* open command palette `CMD + Shift + P`
* type in `User Snippets`
* select a **project** or **language** to bind the snippet with

Syntax:
* `scope` - optional, limits a global snippet to a specific set of languages or projects
* `name` - is display by IntelliSense if no description is given
* `prefix` - trigger words
* `body` - one or more lines that are joined to create the snippet
* `${1: default_value}` - a placeholder through which you can tab through with default values.
* `${1|let, const|} - a list of correct values that can be selected in a dropdown
* `$0` - the final placeholder you will tab to
* `description` - optional description displayed by IntelliSense

Variables:
* `TM_SELECTED_TEXT` - current selected text
* `TM_CURRENT_LINE` - contents of current line
* `TM_CURRENT_WORD` - contents of word under cursor
* `TM_FILENAME` - the filename of the current document
* `TM_FILENAME_BASE` - the filename of the current document without extensions
* `TM_DIRECTORY` - the directory of the current document
* `CLIPBOARD` - the contents of your clipboard
* `WORKSPACE_NAME` - name of current workspace or folder
* `BLOCK_COMMENT_START` - start of block comment respective language
* `BLOCK_COMMENT_END` - end of block comment respective language
* `LINE_COMMENT` - a line comment

``` json
{
    "name": {
        "scope": "javascript, html",
        "prefix": [
          "for",
          "for-const"
        ],
        "body": [
          "for (${1|let,const|} ${2:element} of ${3:array}) {",
          "\t$0",
          "}"
        ],
        "description": "A for loop."
    },
    "variables": {
      "prefix": [
        "variables"
      ],
      "body": [
        "$TM_SELECTED_TEXT - selected text",
        "$TM_CURRENT_LINE - current line",
        "$TM_CURRENT_WORD - current word",
        "$TM_FILENAME - current filename",
        "$TM_FILENAME_BASE - current filename, no extension",
        "$TM_DIRECTORY - directory of current document",
        "$CLIPBOARD - clipboard contents",
        "$WORKSPACE_NAME - workspace name",
        "$BLOCK_COMMENT_START - block comment starts here",
        "and ends here $BLOCK_COMMENT_END",
        "$LINE_COMMENT - a line comment",
      ]
    }
}
```

You can assign keybindings to snippets in `keybindings.json`. Either pass a snippet body or a specific snippet by name and language id.

``` json
{
  {
    "key": "cmd+k 1",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "console.log($1)$0"
    }
  },
  {
    "key": "cmd+k 2",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "langId": "csharp",
      "name": "myFavSnippet"
    }
  }
}

```


&nbsp;
# Extensions

## React Code Snippets

[Code Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets) for react applications to boost productivity.

|Shortcut|Snippet|
|--------|-------|
|`rcc`|class component skeleton|
|`rrc`|class component skeleton with react-redux connect|
|`rrdc`|class component skeleton with react-redux connect and dispatch| 
|`rccp`|class component skeleton with prop types after the class| 
|`rcjc`|class component skeleton without import and default export| 
|`rcfc`|class component skeleton with all lifecycle methods| 
|`rwwd`|class component without import statements| 
|`rpc`|class pure component with prop types after the class| 
|`rsc`|stateless component skeleton| 
|`rscp`|stateless component with prop types skeleton|
|`rsf`|stateless named function skeleton|
|`rsfp`|stateless named function skeleton with prop types skeleton|
|`rsi`|stateless component with prop types and implicit return|
|`fcc`|class component with flow types skeleton|
|`fsf`|stateless named function skeleton with flow types skeleton|
|`fsc`|stateless component with flow types skeleton|
|`rpt`|empty propTypes declaration|
|`rdp`|empty defaultProps declaration|
|`con`|class default constructor with props|
|`conc`|class default constructor with props and context|
|`est`|empty state object|
|`cwm`|componentWillMount **DEPRECATED**|
|`cdm`|componentDidMount|
|`cwr`|componentWillReceiveProps **DEPRECATED**|
|`scu`|shouldComponentUpdate|
|`cwup`|componentWillUpdate **DEPRECATED**|
|`cdup`|componentDidUpdate|
|`cwun`|componentWillUnmount|
|`gsbu`|getSnapshotBeforeUpdate|
|`gdsfp`|static getDerivedStateFromProps|
|`cdc`|componentDidCatch|
|`ren`|render|
|`sst`|this.setState with object parameter|
|`ssf`|this.setState with function as parameter|
|`props`|this.props|
|`state`|this.state|
|`bnd`|binds the this of method inside the constructor|
|`disp`|MapDispatchToProps redux function|

## Rest Client
Allows executing HTTP request from within VSCode.

You can select a URL and type in `Rest` in the command pallette.
```
https://google.com 
```

Or you can customize the request:
* Specifier headers right after the request type and URL
* the request body can be specified after the header
```
POST https://example.com/comments HTTP/1.1
Content-Type: application/xml
Authorization: token asdasdasdasdasdasdasd123123adasd

{ "email": "someemail@gmail.com", "password": 1 }

```

## Settings Sync
Sync your vs code settings with your github account

To setup:
* generate a github token with gist option enabled
* `Shift + Alt + U` - will prompt for the token

To use:
* `Shift + Alt + U` - will upload your settings to a gist
* `Shift + Alt + D` - will download your vscode settings from a gist

