# React Guide

__Source__:
* [official guide](https://reactjs.org/docs/hello-world.html)
* [reactenlightenment](https://www.reactenlightenment.com/react-jsx/5.7.html)
* [Router-based Code Splitting](https://reacttraining.com/react-router/web/guides/quick-start)
* [programmingwithmosh](https://programmingwithmosh.com)

__TODO__:
* [Advanced Concepts](https://reactjs.org/docs/accessibility.html)
* [2FA React Apps](https://scotch.io/tutorials/multifactor-authentication-in-your-react-apps)
* [edureka.com](https://www.edureka.co/blog/interview-questions/react-interview-questions/)

#### Table of contents
* [Introduction](#introduction)
* [Installation](#installation)
    * [Embed React](#embed-react)
    * [Add JSX](#add-JSX)
    * [Toolchains](#Toolchains)
* [Thinking in React](#thinking-in-react)
* [JSX](#JSX)
    * [Expressions](#expressions)
    * [Attributes](#attributes)
    * [Children](#children)
* [Elements](#elements)
* [Components](#components)
    * [Function Components](#function-components)
    * [Class Components](#class-components)
    * [Component Rendering](#component-rendering)
    * [Composition](#composition)
    * [Extraction](#extraction)
    * [Props](#props)
    * [Render Props](#render-props)
* [State and Lifecycle](#state-and-lifecycle)
    * [Local State](#local-state)
    * [Lifecycle Methods](#lifecycle-methods)
    * [Using State](#using-state)
    * [Data Flow](#data-flow)
    * [Lifting State Up](#lifting-state-up)
* [Handling Events](#handling-events)
  * [Event Names](#event-names)
  * [Binding Event Handlers](#binding-event-handlers)
* [Conditional Rendering](#conditional-rendering)
* [Lists and Keys](#lists-and-keys)
    * [Keys](#keys)
* [Forms](#forms)
    * [Controlled Components](#controlled-components)
    * [Multiple Inputs](#multiple-inputs)
    * [Textarea](#textarea)
    * [Select](#select)
    * [Uncontrolled Components](#uncontrolled-components)
* [Composition](#composition-1)
    * [Containment](#containment)
    * [Specialization](#specialization)
* [React-Router](#react-router)
    * [Basic Components](#basic-components)
    * [Server Rendering](#server-rendering)
    * [Scroll Restoration](#scroll-restoration)
    * [Testing](#testing)
* [Reach-Router](#reach-router)
* [Accessibility](#accessibility)
    * [Semantic HTML](#semantic-html)
    * [Forms](#forms-1)
    * [Focus Control](#focus-control)
    * [Mouse and Pointer](#mouse-and-pointer)
* [Code Splitting](#code-splitting)
    * [React.lazy](#react.lazy)
    * [Router-Based Code Splitting](#router-based-code-splitting)
    * [Named Exports](#named-exports)
* [Context](#context)
* [Error Boundaries](#error-boundaries)
* [Refs](#refs)
    * [Forwarding Refs](#forwarding-refs)
    * [Refs and DOM](#refs-and-dOM)
* [Fragments](#fragments)
* [Higher Order Components](#higher-order-components)
* [Integration](#integration)
* [Optimization](#optimization)
* [Portals](#portals)
* [Reconciliation](#reconciliation)
* [Type Checking](#type-checking)
    * [Static Type Checking](#static-type-checking)
    * [PropTypes](#proptypes)
* [StrictMode](#strictmode)
* [Server Side Rendering](#server-side-rendering)
* [Reference](#reference)
* [Tooling](#tooling)
* [Async UI](#Async-UI)

&nbsp;
# Introduction
React is a JavaScript library created by Facebook for UI development.

&nbsp;
# Installation
React is designed for gradual adoption. This means you can use it as little as embedding a widget and as much as creating a whole react based single page application.

The core react dependencies are:
* __react__ -> the react library
* __react-dom__ -> the react renderer

There are many different renderers for react which make it suitable for mobile, vr, web development and more. Just switch the renderer to suit the environment in which it will be displayed.

## Embed React
Check out example with multiple buttons [here](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda)
1. Add a DOM Container for the React Widget
    ``` html
    <div id="react-container"></div>
    ```
1. Add necessary dependencies through `<script>` tags
    * __Development__
        ``` html
            <!--- ... -->
            <!-- Add React and React-DOM library -->
            <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
            <!-- Add script containing the React component -->
            <script src="likeButton.js"></script>
        </body>
        ```
    * __Production__
        ``` html
            <!--- ... -->
            <!-- Add React and React-DOM library -->
            <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
            <!-- Add script containing the React component -->
            <script src="likeButton.js"></script>
        </body>
        ```
1. Create the React Component
    ``` javascript
    'use strict';

    const e = React.createElement;

    class LikeButton extends React.Component {
        constructor(props) {
            super(props);
            this.state = { liked: false };
        }

        render() {
            if (this.state.liked) {
                return 'You liked this.';
            }

            return e(
                'button',
                { onClick: () => this.setState({ liked: true }) },
                'Like'
            );
        }
    }

    const domContainer = document.querySelector('#react-container');
    ReactDOM.render(e(LikeButton), domContainer);
    ```

## Add JSX
To add support for Reacts HTML-like syntax called JSX you need to use a JavaScript transpiler like Babel.

``` shell
# install dependencies
npm install babel-cli@6 babel-preset-react-app@3

# run package runner tool if no build tool configured
npx babel --watch src --out-dir . --presets react-app/prod
```

## Toolchains
Using toolchains makes working with React much easier. Benefits are:
* `scales` well for many files and components
* allows use third-party `npm` libraries
* `linting` to detect mistakes early
* `hot reload` of CSS and JS changes during development
* source code `optimization` for production

__Popular Tools__
|Name|Description|
|----|-----------|
|`Gatsby`|Static website generator for react apps|
|`Create React App`|Boilerplate for react applications|
|`Next.js`|Framework for static and server side rendered react applications|
|`Neutrino`|Build tool that combines webpack and presets that can be shared across application|
|`nwb`|Tool for publishing React components for `npm`|
|`Parcel`|Zero-configuration bundler that works with React applications|
|`Razzle`|Server-side rendering framework that offers more flexibility than `Next.js`|

Or create your own toolchain following this [guide](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

### Create React App
Preconfigured build environment for react apps. Lets you build a react app without all the hastle of creating and configuring a boilerplate. It is a perfect tool for quickly starting work on a react based `Single Page Application`.

Create your environment with 3 simple commands:
``` shell
npx create-react-app my-app
cd my-app
npm start
```

### Next.js
Lightweight framework for static and `server-side rendered` applications built with React. Has built-in styling and routing solutions and works with `Node.js` by default.

More in the [official guide](https://nextjs.org/learn/basics/getting-started).

### Gatsby
An excellent framework for creating `static websites` using React. It outputs pre-rendered HTMl and CSS based on your React components.

Resource:
* [gatsby documentation](https://www.gatsbyjs.org/docs/)
* [gatsby templates](https://www.gatsbyjs.org/starters/?v=2)

&nbsp;
# Thinking in React
A good approach to designing and implementing a react application is:
1. Get the mocks from your designer
1. Seperate the mock into standalone elements
    * have the `Single Responsibility Principle` in mind - each component should ideally do one thing
    * each component should match one piece of your data model
1. Build a static version in react
    * building a static version usually requires a lot of typing and little thinking
    * __don't use state__ to build the static version
    * think in terms of props
    * for __smaller projects__ - build __Top-Down__
    * for __larger projects__ - build __Bottom-Up__ and write tests as you go
    * components should only have a `render()` method since everything else is used for interactivity(hence, being dynamic)
1. Identify the minimal required UI State
    * keep it DRY - Don't Repeat Yourself
    * when determining if a piece of data should be stored in state ask the following questions:
        1. Is it passed via props? - probably isn't state
        1. Does it change over time? - if the answer is no, then it probably isn't state
        1. Can you compute it based on other available data? - then it isn't state
1. Determine which components own the state
    * identify which components use that state
    * if shared by more than one component find the closest common ancestor
    * if you can't find a common ancestor create a component just for holding that piece of state
1. Implement Inverse Data Flow
    * pass callback functions down to components that will effect state held higher in the hierarchy


&nbsp;
# JSX
An HTML-like syntax extension to JavaScript. This couples rendering logic with UI logic within a decoupled component.

Anywhere you use JSX you must import React.

__Properties__:
* may contain children
* values embedded in JSX are escaped preventing XSS
* JSX is implicitly transformed into objects called `React elements`

``` javascript
import React from 'react';

// basic JSX
const header = <h1 className="header__primary">This is JSX</h1>;

// same as
const header = React.createElement(
    'h1',
    {className: 'header__primary'},
    'This is JSX'
);

// transformed into objects
const element = {
    type: 'h1',
    props: {
        className: 'header__primary',
        children: 'This is JSX'
    }
};

// children
const list = (
    <ul>
        <li>Oranges</li>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Maple Syrup</li>
    </ul>
);
```

## Expressions
Expression can be evaluated within JSX by placing them in curly brackets `{ expr }`. Any valid JavaScript expression is also a valid JSX expression.

JSX is also an expression, hence it can be used anywhere a value is expected.

``` javascript
const profileHeader = <h2>Hi, I'm {formatName(user)}</h2>;
const presentSelf = <p>I am a {user.job} that lives in {user.location}</p>;

function greetUser(user) {
    if(user) {
        return <h1>Hello {formatName(user)}</h1>;
    }
    return <h1>Please create an account</h1>;
}
```

## Attributes
To specify attribute values use string literals or expressions. Do not embed expressions in string literals.

Attribute names need to be written in camelCase notation.

A reference for all attributes that are both supported in React and HTML5.

|HTML Attribute|JSX Attribute|Description|Element|Values|
|--------------|-------------|-----------|-------|----------|
|`accept `|`accept`|File types or groups an input field accepts|`<input type="file" />`|`.csv`, `audio/*`| 
|`accept-charset`|`acceptCharset`|Type of char encoding/s form data is submitted in|`<form>`|`UTF-8 UTF-16`| 
|`accesskey`|`accessKey`|Keyboard shortcut to access a specific element|`<a>`, `<area>`, `<button>`, `<input>`, `<label>`, `<legend>`, `<textarea>`|`g`|
|`action`|`action`|Where form data is sent once submitted|`<form>`|`/data_submit.php`|
|`allowfullscreen`|`allowFullScreen`|If iframe video can be displayed in full screen mode|`<iframe>`|`boolean`| 
|`alt`|`alt`|Provides alternative information for an image which can't be viewed for some reason|`<image>`|`cat pic`| 
|`async`|`async`|Script will be executed asynchronously|`<script> `|`boolean`| 
|`autocomplete `|`autoComplete`|Whether autocomplete should be enabled for an input field|`<input>`|`off`, `on`| 
|`autofocus `|`autoFocus`|Whether an element should be autofocused on page load|`<input>`|`boolean`| 
|`autoplay`|`autoPlay`|Whether a video should automatically start playing when available|`<video>`|`boolean`| 
|`capture`|`capture`|Decide how an image, video or audio is captured. User facing camera, environment facing camera or whether audio should be captured or uploaded|`<input type="file" accept="image/* video/*"/>`|`user`, `environment`, `boolean`|
|`charset`|`charSet`|Character encoding/s a script uses|`<script src="..."/>`|`UTF-8`| 
|`checked`|`defaultChecked`|Used to control a checkbox input components value|`<input type="checkbox"/>`|`boolean`|
|`cite`|`cite`|Source of a quotation. Mostly used for SEO purposes|`<blockquote>`|`https://wikipedia.org/something`| 
|`class`|`className`|Style class/es of an element|`global`|`string`|
|`colspan`|`colSpan`|Number of columns a table cell should span|`<td>`,`<th>`|`number`| 
|`cols`|`cols`|How wide a textarea is|`<textarea>`|`number`| 
|`content`|`content`|A value associated with the type of meta tag|`<meta>`|`string`| 
|`contenteditable`|`contentEditable`|Makes the content of an element editable|`global`|`boolean`| 
|`contextmenu`|`contextMenu`|Define id of a `<menu>` element that will serve as the objects context menu. Experimental feature|`global`|`string`| 
|`controls`|`controls`|Specifies whether audio/video controls are visible|`<audio>`,`<video>`|`boolean`| 
|`controlslist`|`controlsList`|Which audio/video controls should be visible|`<audio>`,`<video>`|`nodownload`| 
|`coords`|`coords`|Coordinates of a hotspot area on an image `<map>`. Passed value depends on area `shape`|`<area>`|`0,0,150,50`, `100,50,8`| 
|`crossorigin`|`crossOrigin`|Configure CORS requests for an elements fetched data|`<image>`,`<video>`,`<script>`|`anonymous`, `use-credentials`| 
|`data-*`|`data-*`|Associates some data with an element that is than excesible through that elements `dataset` property|`global`|`any`| 
|`datetime`|`dateTime`|The datetime specified in an element|`<del>`, `<ins>`, `<time>`|`datetime`|
|`default`|`default`|Enables a `<track>` by default|`<track>`|`boolean`|
|`defer`|`defer`|If `true` loads the script after the page is parsed|`<script>`|`boolean`|
|`dir`|`dir`|Which direction text in an element is presented in|`global`|`ltr`, `rtl`, `auto`|
|`disabled`|`disabled`|Disables an element making it unclickable and uneditable|`<button>`, `<command>`, `<fieldset>`, `<input>`, `<keygen>`, `<optgroup>`, `<option>`, `<select>`, `<textarea>`|`boolean`|
|`download`|`download`|Downloads a file specified in `href` when the link or area is clicked|`<a>`, `<area>`|`boolean`|
|`draggable`|`draggable`|  |`global`|  |
|`enctype`|`encType`|  |`<form>`|  |
|`for`|`htmlFor`|Which element a label or output is bound to|`<label>`, `<output>`|`string`|
|`form`|`form`|  |`<button>`, `<fieldset>`, `<input>`, `<keygen>`, `<label>`, `<meter>`, `<object>`, `<output>`, `<progress>`, `<select>`, `<textarea>`|  |
|`formaction`|`formAction`|An element specific form action that overrides the `<form>` action|`<input>`, `<button>`|`/name_submit.php`| 
|`formenctype`|`formEncType`|Specifies the character encoding of submitted form data. Overrides the same setting on `<form>` element level|`<input>`, `<button>`|`UTF-8`| 
|`formmethod`|`formMethod`|  |`<input>`, `<button>`|  |
|`formnovalidate`|`formNoValidate`|  |`<input>`, `<button>`|  |
|`formtarget`|`formTarget`|  |`<input>`, `<button>`|  |
|`headers`|`headers`|  |`<td>`, `<th>`|  |
|`height`|`height`|  |`<canvas>`, `<embed>`, `<iframe>`, `<img>`, `<input>`, `<object>`, `<video>`|`10px`, `10em`, `10rem`, `10%`| 
|`hidden`|`hidden`|Prevents an element from being rendered|`global`|`boolean`| 
|`high`|`high`|  |`<meter>`|  |
|`href`|`href`|  |`<a>`, `<area>`, `<base>`, `<link>`|  |
|`hreflang`|`hrefLang`|  |`<a>`, `<area>`, `<link>`|  |
|`http-equiv`|`httpEquiv`|Used to simulate an http response header. It's value should be specified in `content` attribute|`<meta>`|`Content-Security-Policy`| 
|`icon`|`icon`|Specifies an icon that represents a menu item or command. __Experimental feature__|`<menuitem>`|`url`| 
|`id`|`id`|Assign a unique id to an element for reference|`global`|`string`| 
|`inputmode`|`inputMode`|  |`<textarea>`, `contenteditable`|  |
|`integrity`|`integrity`|  |`<link>`, `<script>`|  |
|`is`|`is`|Specify that an element is a custom webcomponent(name passed as value). __Experimental feature__|`global`|`string`| 
|`kind`|`kind`|The kind of text track|`<track>`|`captions`, `chapters`, `descriptions`, `metadata`, `subtitles`|
|`label`|`label`|The title of an element|`<optgroup>`, `<option>`, `<track>`|`string`| 
|`lang`|`lang`|What language the content is or should be in|`global`|`locale`| 
|`list`|`list`|List of options that are suggested as input field values. Usually the `id` of a `<datalist>`|`<input>`|`string`|
|`loop`|`loop`|  |`<audio>`, `<bgsound>`, `<marquee>`, `<video>`|  |
|`low`|`low`|  |`<meter>`|  |
|`manifest`|`manifest`|  |`<html>`|  |
|`max`|`max`|Maximum allowed value|`<input>`, `<meter>`, `<progress>`|`number`| 
|`maxlength`|`maxLength`|  |`<input>`, `<textarea>`|  |
|`media`|`media`|  |`<a>`, `<area>`, `<link>`, `<source>`,`<style>`|  |
|`mediagroup`|`mediaGroup`|Indicates the name of a group of media element an element belongs to. __Experimental feature__|`<audio>`, `<video>`|`string`| 
|`method`|`method`|  |`<form>`|  |
|`min`|`min`|  |`<input>`, `<meter>`|  |
|`minlength`|`minLength`|  |`<input>`, `<textarea>`|  |
|`multiple`|`multiple`|  |`<input>`, `<select>`|  |
|`muted`|`muted`|  |`<audio>`, `<video>`|`boolean`| 
|`name`|`name`|Identifies an element in a form|`<button>`, `<form>`, `<fieldset>`, `<iframe>`, `<input>`, `<keygen>`, `<object>`, `<output>`, `<select>`, `<textarea>`, `<map>`, `<meta>`, `<param>`|`string`| 
|`novalidate`|`noValidate`|  |`<form>`|  |
|`nonce`|`nonce`|A string that identifies that the content of a `<script>` or `<style>` element was generated by a trusted server. Used for CSP reasons. The content of the string should be generated by the server that is injecting the element content|`<script>`, `<style>`|`string`|
|`open`|`open`|Determines if content of `<details>` element will be expanded|`<details>`|`boolean`|
|`optimum`|`optimum`|Optimum value of `<meter>` element|`<meter>`|`number`| 
|`pattern`|`pattern`|A regular expression against which an `<input>` field is validated|`<input>`|`regexp`| 
|`placeholder`|`placeholder`|A hint on what should be entered into an `<input>` or `<textarea>` element|`<input>`, `<textarea>`|`string`| 
|`poster`|`poster`|A url of an image that is shown before the video is loaded|`<video>`|`url`| 
|`preload`|`preload`|  |`<audio>`, `<video>`|| 
|`readonly`|`readOnly`|Makes an element uneditable|`<input>`, `<textarea>`|boolean| 
|`rel`|`rel`|  |`<a>`, `<area>`, `<link>`|  |
|`required`|`required`|Indicates if an element must have a non-empty value|`<input>`, `<selected>`, `<textarea>`|`boolean`|
|`reversed`|`reversed`|Indicates if an ordered list should be displayed in descending order|`<ol>`|`boolean`|
|`role`|`role`|The ARIA role of an element. Used for accessibility|`global`|`string`|
|`rows`|`rows`|Number of rows a `<textarea>` should span|`<textarea>`|`number`| 
|`rowspan`|`rowSpan`|Number of rows a table cell should span over|`<td>`, `<th>`|`number`| 
|`sandbox`|`sandbox`|  |`<iframe>`|`boolean`| 
|`scope`|`scope`|  |`<th>`|  |
|`selected`|`selected`|Set whether an `<option>` component is selected|`<option>`|`boolean`|
|`size`|`size`|Width of an element in pixels|`<input>`, `<select>`|`number`|
|`spellcheck`|`spellCheck`|Determines whether an element's content should be checked for correct spelling|`global`|`boolean`|
|`src`|`src`|A url to the content|`<audio>`, `<embed>`, `<iframe>`, `<img>`, `<input>`, `<script>`, `<source>`, `<track>`, `<video>`|`url`|
|`srclang`|`srcLang`|The language of the content in a `<track>` element|`<track>`|`locale`|
|`srcset`|`srcSet`|Specify a list of responsive images|`<img>`, `<source>`|`url`|
|`start`|`start`|The first number in an ordered list|`<ol>`|`number`|
|`step`|`step`|A valid interval for a numeric input value|`<input type="number" /> `|`number`|
|`style`|`style`|Specifies inline element style which overrides any other applied CSS styles|`global`|`string`|
|`summary`|`summary`|A summary of a table used by screen readers|`<table>`|`string`|
|`tabindex`|`tabIndex`|Specifies the tab order of elements|`global`|`number`|
|`target`|`target`|Specifies where new content(like anchor tag url or form outcome) is displayed|`<a>`, `<area>`, `<base>`, `<form>`|`_blank`, `_self`, `_parent`, `_top`|
|`title`|`title`|Text that is displayed when an element is hovered over|`global`|`string`|
|`type`|`type`|The type of an element|`<button>`, `<input>`, `<command>`, `<embed>`, `<object>`, `<script>`, `<source>`, `<style>`, `<menu>`|`string`|
|`usemap`|`useMap`|Maps a list of areas in a `<map>` element to another element|`<img>`, `<input>`, `<object>`|`#somename`|
|`value `|`value`|Set a value for an `<input>` or `<textarea>` field|`<button>`, `<data>`, `<input>`, `<li>`, `<meter>`, `<option>`, `<progress>`, `<param>`|`string`|
|`width`|`width`|Sets the width of an element|`<canvas>`, `<embed>`, `<iframe>`, `<img>`, `<input>`, `<object>`, `<video>`|`number`|
|`wmode`|`wmode`|Specifies how a flash movie is rendered in an `<embed>` tag|`<embed>`|`window`, `opaque`, `transparent`|
|`wrap`|`wrap`|Indicates that text should be wrapped|`<textarea>`|`boolean`|

``` javascript
const profileImg = (
    <img 
        src = {user.profileImgUrl} 
        alt = {user.name} + " profile image"
        className = "user__image image__small"
    />
);
```

&nbsp;
# Elements
React `Elements` are the smallest building blocks in a React App. Components are made out of elements. Elements are immutable. When rerendering to include changes React only updates what is necessary.

A React application is usually rendered within the `root` DOM node.
``` html
<body>
    <div id="root"></div>
</body>
```

Rendering a React Element is as simple as initializing the element and passing it to the `ReactDOM.render()` function along with the root element it will be render in.
``` javascript
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

&nbsp;
# Components
Components in React allow grouping React Elements and logic. Component names by convention should start with a capital letter.

## Function Components
A function that returns JSX.

``` javascript
import React from "react";

const Button = (props) => <button type="button">{props.text}</button>;

export default Button;
```

## Class Components
A class that extends `React.Component` and has a `render()` method that returns JSX.

`render()`
* each class component needs to have a render method
* must return jsx
* must be pure(no side effects)

``` javascript
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    handleClick() {
        alert("You clicked the button");
    }

    render() {
        return (
            <h1>Class Component</h1>
            <button type="button" onClick={this.handleClick}>Click Me</button>
        )
    }
}

export default App;
```

## Component Rendering
Components are rendered through the render function.

``` jsx
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

## Composition
You can compose multiple components within a single parent component.

```jsx
const Hi = props => <h1>Hi, {props.name}</h1>;

const App = () => (
  <div>
    <Hi name="Greg" />
    <Hi name="John" />
    <Hi name="Alice" />
  </div>
);
```

## Extraction
If a component is complex or is reused extract it into its own component.

Keep your components as simple as possible.

Good practice is to have a seperate file for each component.

## Props
Props is a collection of immutable data that is passed down from parent to child.

> All React components must act like pure functions with respect to their props

``` javascript
import React from 'react';
import { render } from 'react-dom';
import User from './User';

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      users: []
    };
  }

  render(
    <div>
      <h1>Users List</h1>
      <User name="John" type="Consumer" />
      <User name="Greg" type="Provider" />
    </div>
  );
}

const User = props => {
  const { name, type } = props;
  return (
    <div>
      <p>{name} is a {type}</p>
    </div>
  );
}
```

## Render Props
[docs](https://reactjs.org/docs/render-props.html)


&nbsp;
# State and Lifecycle
State is data that you can store in your components. Unlike props, state is mutable and is not passed down from parent to child.

Each component has a "lifecycle". Various methods are implicitly called depending on what stage of its lifecycle the component currently is in. These methods are called [lifecycle methods](#lifecycle-methods).

## Local State
Each class component can store local state. 

State should be initialized in the component constructor through `this.state = {...}`. This is the only situation in which you can assign to `this.state`

Once initialized the local state can only be changed throught the built-in `setState()` method:
* belongs to the component - call through `this.setState()`
* takes an object as argument - `this.setState({ someState: someVal })
* `setState` does a shallow merge, it will not overwrite state that has not been referenced in passed object


``` javascript
class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      users: [],
      something: []
    };
  }
  func() {
    // only updates users state
    this.setState({ users: props.users })
  }

  render() {
    // trick to dump state into DOM
    return (
      <div>
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
      </div>
    );
  }

}
```

## Lifecycle Methods
A components lifecycle can be boiled down to 3 phases:
* Mounting - component is rendered to the DOM
* Update - component receives new data
* Unmount - component is removed form the DOM

Up to version 16.3 of React the flow for each phase was:
* __Mounting__
  1. `constructor()` - first lifecycle method that is called as long as you are using ES6 classes
  1. `componentWillMount()` - called after the constructor. Popular before ES6 classes where introduced and components where initialized through `React.createClass({})` method. Is now **DEPRECATED**
  1. `render()` - renders the component to the UI. Most popular lifecycle method
  1. DOM and refs are updated
  1. `componentDidMount()` - called after the component is initially rendered to the DOM  
* __Udpate__
  1. Component either receives new props, its state is changed or `forceUpdate()` is called
  1. `componentWillReceiveProps()` - called right after the component receives new props. Is now **DEPRECATED** - replaced by `getDerivedStateFromProps()`
  1. `shouldComponentUpdate()` - called after the component receives new props or its state is changed. Should return a boolean value that determines if the component should update or not
  1. `componentWillUpdate()` - called right before the component is rerendered. Is now **DEPRECATED** - replaced by `getSnapshotBeforeUpdate()`
  1. `render()` - rerenders the component with new state or props
  1. DOM and refs are updated
  1. `componentDidUpdate()` - called after the component is rerendered
* __Unmount__
  1. `componentWillUnmount()` - called right before the component is removed from the DOM

Version 16.3 and later of React flow:
* __Mounting__
  1. `constructor()` - same as prior to 16.3
  1. `static getDerivedStateFromProps(nextProps, prevState)` - called before the component is rendered, when it receives new props and when its state is changed
  1. `render()` - same as prior to 16.3
  1. DOM and refs are updated
  1. `componentDidMount()` - same as prior to 16.3
* __Udpate__
  1. Component either receives new props, its state is changed or `forceUpdate()` is called
  1. `static getDerivedStateFromProps(nextProps, prevState)` - same as in Mounting phase
  1. `shouldComponentUpdate()` - same as prior to 16.3
  1. `render()` - same as prior to 16.3
  1. `getSnapshotBeforeUpdate(prevProps, prevState)` -> called right after the component is rerendered. Passes its return value do `componentDidUpdate`
  1. DOM and refs are updated
  1. `componentDidUpdate()` - same as prior to 16.3
* __Unmount__
  1. `componentWillUnmount()` - same as prior to 16.3

``` javascript
class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    something.get({user: userid})
      .then(data => {
        let users;

        if(data.users) {
          if(Array.isArray(data.users)) {
            users = data.users;
          } else {
            users = [data.users];
          }
        } else {
          users = [];
        }
        this.setState({ users })
      })
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return (
            <User
              name={user.name}
              type={user.type}
            />
          )
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
```

## Using State
There are two forms of the `setState()` function. 

One takes an object as an argument and shallow merges that object with the current state.
``` jsx
this.setState({counter: 5});
```

The other one accepts a callback function. This function takes two arguments in the following order:
* `state` -> the previous state
* `props` -> the current props
``` jsx
this.setState((prevState, props) => {
  counter: prevState.counter + props.inc
});
```

## Data Flow
Data flow in react is "unidirectional"(or "top-down"). This means that data is passed from parent to child element through props.

Components only communicate through props. State is encapsulated within the component it belongs to.

Props are only transfered from parent to child, not the other way around.

## Lifting State Up
Lifting state up is a technique used when two child elements need to make use of the same piece of state. Instead of storing that state on the child elements, you would __lift it up__ to their closest shared ancestor. This way you have __one source of truth__. The ancestor can than pass this state as props to the children elements.

To manipulate that state through the children elements the ancestor would pass a `onChange` event handler as props. 

``` jsx
function toDouble(num) {
  return num * 2;
}

function toSingle(num) {
  return num / 2;
}

const NumberInput = props => {
  const { handleChange, number, representation } = props;

  const legend = representation === 's'  ? 
    'The value':
    'Double the value';
  
  return (
    <fieldset>
      <legend>{legend}</legend>
      <input onChange={(e) => handleChange(e.target.value)} value={number}/>
    </fieldset>
  )
}

class Numbers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      representation: 's'
    }
  }

  handleSingleChange = (value) => {
    this.setState({
      number: value,
      representation: 's'
    })
  }

  handleDoubleChange = (value) => {
    this.setState({
      number: value,
      representation: 'd'
    })
  }

  render() {
    const { representation, number } = this.state;
    const single = representation === 's' ? number : toSingle(number);
    const double = representation === 'd' ? number : toDouble(number);

    return (
      <div>
        <NumberInput 
          representation="s"
          number={single}
          handleChange={this.handleSingleChange}
        />
        <NumberInput 
          representation="d"
          number={double}
          handleChange={this.handleDoubleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Numbers />,
  document.getElementById('root')
);
```

&nbsp;
# Handling Events
Events in React are handled just like events on DOM elements with a few key differences:
* events are named using camelCase
* event handlers are passed as functions, not as strings
* to prevent default behavior you need to call the `preventDefault()` method of the handled SyntheticEvent

SyntheticEvents are Reacts specific replicates of DOM element events and are defined according to W3C spec so they are cross-browser compatible.

## Event Names
Source: [flaviocopes](https://flaviocopes.com/react-events/)

Reference for various event grouped by operation type:
* __Clipboard__
  * `onCopy` - when content is coppied and stored in the clipboard
  * `onCut` - when content is cut and stored in the clipboard
  * `onPaste` - when content is pasted from the clipboard
* __Composition__
  * `onCompositionEnd` - when user finishes typing in non-latin characters
  * `onCompositionStart` - when user starts typing in non-latin characters
  * `onCompositionUpdate` - when adds characters to a non-lating character composition
* __Keyboard__
  * `onKeyDown` - when a key on the keyboard is pressed
  * `onKeyPress` - when a character is typed
  * `onKeyUp` - when a key on the keyboard is released
* __Focus__
  * `onFocus` - when an element is in focus
  * `onBlur` - when an element looses focus
* __Form__
  * `onChange` - when an input elements content is changed - it is connected to the DOM element `oninput` event
  * `onInput` - when an input elements content is changed
  * `onSubmit` - when the form is submitted
* __Mouse__
  * `onClick` - when a mouse key is clicked
  * `onContextMenu` - when right mouse key is clicked to open context menu
  * `onDoubleClick` - when a mouse key is double-clicked
  * `onDrag` - when an element or selection is being dragged
  * `onDragEnd` - when dragging element or selection is finished
  * `onDragEnter` - when a dragged element or selection is over a drop target
  * `onDragExit` - when a dragged element or selection leaves the area over a drop target
  * `onDragLeave` - when a dragged element or selection leaves the area over a drop target
  * `onDragOver` - when a dragged element or selection is moved over a drop target
  * `onDragStart` - when an element or selection starts being dragged
  * `onDrop` - when a dragged element or selection is dropped on a drop target
  * `onMouseDown` - when a mouse button is pressed over an element
  * `onMouseEnter` - when the mouse cursor enters an elements area
  * `onMouseLeave` - when the mouse cursor leaves an element area
  * `onMouseMove` - when the mouse cursor moves over an elements area
  * `onMouseOut` - when the mouse cursor leaves an elements area - **this event bubbles**
  * `onMouseOver` - when the mouse cursor is over the element - **this event bubbles**
  * `onMouseUp` - when a mouse button is released over an element
  * `onWheel` - when the mouse wheel is triggered
* __Scroll__
  * `onScroll` - when an element is horizontally or vertically scrolled over
* __Select__
  * `onSelect` - when an element is selected
* __Touch__
  * `onTouchCancel` - when a touch event gets interrupted
  * `onTouchEnd` - when an the finger is removed from the element
  * `onTouchMove` - when a touched element is dragged on a touchscreen
  * `onTouchStart` - when an element is initially touched on a touchscreen
* __Media__
  * `onAbort` - when media loading is aborted
  * `onCanPlay` - when the browser can play the media file
  * `onCanPlayThrough` - when the browser can play the media file without stopping for bufforing. Based on the average loading speed
  * `onDurationChange` - when the duration of the media file changes
  * `onEmptied` - when the current playlist is empty
  * `onEncrypted` - when the media is encrypted
  * `onEnded` - when the media file has reached its end
  * `onError` - when loading a file is disturbed
  * `onLoadedData` - when data for the current frame of the media file is loaded but the next frame is not yet loaded
  * `onLoadedMetadata` - when the media files metadata is loaded
  * `onLoadStart` - when the media file starts loading. This is the first event fired during a media files loading process
  * `onPause` - when the media file is paused
  * `onPlay` - when the media file starts playing
  * `onPlaying` - while the media file is playing
  * `onProgress` - while the browser is downloading the media file
  * `onRateChange` - when the playing speed of the media file is changed
  * `onSeeked` - when the user finishes skipping to a new position in the media file
  * `onSeeking` - while the user is skipping to a new position in the media file
  * `onStalled` - when media data is not available
  * `onSuspend` - when the media data retrieval is purposefully stopped
  * `onTimeUpdate` - when the playing position of the media file is changed
  * `onVolumeChange` - when the volume of the media file is changed
  * `onWaiting` - when loading is stopped while the next frame is buffered
* __Image__
  * `onLoad` - when the image has been loaded
  * `onError` - when loading a file is disturbed
* __Animation__
  * `onAnimationStart` - when a css animation has started
  * `onAnimationEnd` - when a css animation has completed(unless it was aborted)
  * `onAnimationIteration` - when a css animation iteration has ended
* __Transition__
  * `onTransitionEnd` - when a css transition has completed

## Binding Event Handlers
For the `this` keyword to work as expected in an event handler you need to bind it to the component instance. 

This can be done in one of three ways:
* binding event handler method in the class constructor
* handling the event through an arrow function as a class field
* passing an arrow function as the event handler directly in the component

``` javascript
import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);

    // binding the event handler
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick(e) {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  // arrow function as a class field
  handleIndexClick = e => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  render() {
    return (
      <div>
        <button onClick={handleIndexClick}>
          ...
        </button>
        <!-- arrow function directly in the component -->
        <button onClick={(e) => e.preventDefault()}>
          ...
        </button>
      </div>
    )
  }
}

export default Example;
```

## Passing Arguments
To pass an extra argument to an event handler either:
* use closures
* pass it as a parameter through the `bind()` method

``` jsx
// closure
<button onClick={(e)=> this.eventHandler(someVal, e)}>...</button>

// bind parameter
<button onClick={this.eventHandler.bind(this, someVal)}>...</button>
```

&nbsp;
# Conditional Rendering
You can conditionally render components depending on some logic. This logic could involve prop or state values.

This can be achieved through:
* element variables
* inline with logical operator
* inline with ternary operator
* return null to prevent rendering

Returning `null` still executes the components lifecycle methods.

``` jsx
function SignUpButton(props) {
  const { loggedIn } = props;

  if(loggedIn){
    // return null to prevent rendering
    return null;
  }

  return (
    <button type="button">
      SignUp
    </button>
  );
}

const HelloUser = props => {
  const { loggedIn, username } = props;
  let text;

  // element variables
  if(loggedIn) {
    text = <p>Hi {username}!!</p>
  } else {
    text = <h1>Sign up and start using our services for free!</h1>
  }

  return (
    <div>
      <!-- inline with ternary operator -->
      <img src={logoImg} alt="our logo" />

      <!-- inline with logical operator -->
      {loggedIn && <p>Logged in as {username}</p>}

      <!-- element variable -->
      {text}

      <SignUpButton loggedIn={loggedIn} />
    </div>
  );
}
```

&nbsp;
# Lists and Keys
Tranforming a list into an array of react components is done through the array prototype's `map()` function.

For react to optimally work with an array of components each one should be assigned a unique `key`, which is an attribute specific to react.

``` jsx
const ListExample = props => {
  const { someList } = props;

  const renderList = someList.map(el => {
    <li key={el._id} >
      {el.firstname} {el.lastName}
    </link>
  });

  return (
    <ul>{renderList}</ul>
  );
}
```

## Keys
Keys enable React to smoothly work with list items.

Thanks to keys React can quickly determine which items should be update, removed, added or moved.

Do not use the index as the key, since the order of items can change. Use a piece of data that is unique to the component, like a database id. React will use indexes by default if not key is explicitly assigned. 

Always assign keys to the top level element that is being returned in the maps callback function.

Keys do not need to be globally unique - only among siblings. 

Keys are not passed to components, unless done so in props with a different name. 

``` javascript
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return (
            <User
              key={user.id}
              name={user.name}
              type={user.type}
            />
          )
        })}
      </div>
    );
  }
}
```

&nbsp;
# Forms
Forms usually contain there own state. In react this can be implemented in one of two ways:
* __controlled components__ - using state as the single source of truth. This is considered good practice - this way any state pertaining to a component is stored in a single location.
* __refs__ - storing references to input elements. Reading those elements value upon submit. This is considered bad practice - state pertaining to a single component is stored in more than one place. 

Unlike in HTML, React unifies how values in various input fields are handled. A good example are `<select>` and `<textarea>` fields which have a `value` attribute for referencing the current value. 


## Controlled Components
Implementing a controlled component involves the following steps:
* storing input field values in the components state
* setting the inputs field value to it's respective piece of state
* changing that piece of state through an `onChange` event handler set on that input element
* handling form submission in a `onSubmit` function

For an out-of-the-box fully-fledged solution to forms use [Formik](https://jaredpalmer.com/formik/).
* includes validation
* error handling
* form submission
* is based on controlled components

``` jsx
import React from 'react';
import COUNTRIES from 'countries';

class SearchParams extends React.Component {
  state = {
    location: 'Warsaw, PL',
    country: "",
    street: ""
  };

  handleLocationChange = e => {
    this.setState({
      location: e.target.value
    });
  };
  handleCountryChange = e => {
    this.setState({
      country: e.target.value
    });
  }

  render() {
    return (
      <div className="search-params">
        <form>
          <span>
            <label htmlFor="location">
            Location
            </label>
            <input
              name="location"
              value={this.state.location}
              onChange={this.handleLocationChange}
              placeholder="Location"
            />
          </span>
          <span>
            <label htmlFor="country">
              Country
            </label>
            <select
              name="country"
              value={this.state.country}
              onChange={this.handleCountryChange}
              onBlur={this.handleCountryChange}
            >
              <option />
              {
                COUNTRIES.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))
              }
            </select>
          </span>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
```

## Multiple Inputs
You can refactor the previous example to handle multiple inputs by specifying the `name` attribute on each input field and using its value in a unified `onChange` handler.

``` jsx
import React from 'react';
import COUNTRIES from 'countries';

class SearchParams extends React.Component {
  state = {
    location: 'Warsaw, PL',
    country: "",
    street: ""
  };

  handleFormChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="search-params">
        <form>
          <span>
            <label htmlFor="location">
            Location
            </label>
            <input
              name="location"
              value={this.state.location}
              onChange={this.handleFormChange}
              placeholder="Location"
            />
          </span>
          <span>
            <label htmlFor="country">
              Country
            </label>
            <select
              name="country"
              value={this.state.country}
              onChange={this.handleFormChange}
              onBlur={this.handleCountryChange}
            >
              <option />
              {
                COUNTRIES.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))
              }
            </select>
          </span>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
```

## Textarea
In React textareas behave differently than in HTML. Their value is controlled through a `value` field.

``` jsx
...
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        What did you think of the product?
        <textarea value={this.state.feedback} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
...
```

## Select
In a `<select>` element the current selected value is stored in it's `value` attribute.

You can also specify a multi-select by setting the `multiple` attribute to `true`. The `value` attribute can be of array type.

``` jsx
...
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <span>
        <label>
          What is your favorite fruit?
        </label>
        <select value={this.state.favorite} onChange={this.handleChange}>
          <option value="orange">Orange</option>
          <option value="banana">Banana</option>
          <option value="apple">Apple</option>
        </select>
      </span>
      <span>
        <label>
          Why is this your favorite fruit?
        </label>
        <select multiple={true} value={this.state.why} onChange={this.handleChange}>
          <option value="yummy">Its delicious</option>
          <option value="shape">The shape</option>
          <option value="color">The color</option>
          <option value="healthy">Its healthy</option>
        </select>
      </span>
      <input type="submit" value="Submit" />
    </form>
  );
}
...
```

## Uncontrolled Components
In some cases uncontrolled components can be easier to implement and/or are the better choice:
* converting legacy code
* integrating React app with non-React library

[docs](https://reactjs.org/docs/uncontrolled-components.html#the-file-input-tag)

File inputs need to be uncontrolled components because they're values are read-only.

&nbsp;
# Composition
In React you should always prefer composition over inheritance in terms of reusability.

If your thinking about using inheritance - be aware that even the creators of React have not found a use case in which inheritance would be a good solution.

## Containment
When a components children are established dynamically you can reference them using the `children` props.

This works because React elements are objects. You can also implement your own children-like logic through props.

``` jsx
const Container = props => (
  <div className='Container'>
    {props.children}
  </div>
);

const SplitPane = props => (
  <div className='SplitPane'>
    <div className="SplitPane-left">
      {props.left}
    </div>
    <div className="SplitPane-right">
      {props.right}
    </div>
  </div>
);

const CallToAction = props => (
  <div>
    <Container>
      <h1>Join now and get one month 50% off!</h1>
      <h2>This is a once in a lifetime opportunity!</h2>
      <h3>Don't wait - press the button below to sign up!</h3>
      <button type='button'>Sign Up</button>
    </Container>
    <SplitPane
      left={
        <OutTraits />
      }
      right={
        <CompetitionTraits />
      }
    />
  </div>
)
```

## Specialization
In cases where a component is a specialized version of another component just render the more "generic" component within the more "specific" component and assign props appropriately. The `children` props also facilitates extending the component. 

``` jsx
// generic
const Greeting = props => {
  const { userName, message } = props;
  return (
    <NiceContainer>
      <h1>{userName}</h1>
      <p>{message}</p>
      {props.children}
    </NiceContainer>
  );
}

// specialized
const AdminGreeting = props => {
  const { issueCount } = props;

  return (
    <Greeting 
      userName="Admin"
      message="Hello admin, there is lot's of work today"
    >
      <p>There are currently {issueCount} pending issues</p>
    </Greeting>
  );
}
```

&nbsp;
# React-Router
Source: [reacttraining.com](https://reacttraining.com/react-router/web/guides/quick-start)

## Basic Components

## Server Rendering

## Scroll Restoration

## Testing

&nbsp;
# Reach-Router
An alternative to React-Router with built-in accessibility.

``` javascript
import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import List from './List';
import Table from './Table';
import * as data from './example.json';

class App extends React.Component {

  render() {
    return (
      <div>
        <Link to="/">
          <h1>Hi</h1>
        </Link>
        <Router>
          <List path="/" />
          <Table path="/table/:id" items={data.items}/>
        </Router>
      </div>
    );
  }
}

class Table extends React.Component {

  render() {
      <Link to={`/deatils/%{id}`}>
        {this.props.items.map(item => {
          return (
            <Item
              key={item.id}
              name={item.name}
              type={item.type}
            />
          )
        })}
      </Link>
  }
}

render(<App />, document.getElementById("root"));
```

&nbsp;
# Accessibility
__A11y__(Accessibility) is designing websites with assistive technology in mind, so that they can be used by people who cannot interact with them in some forms due to physical limitations.

TODO: [official docs](https://reactjs.org/docs/accessibility.html)


## Semantic HTML


## Forms


## Focus Control


## Mouse and Pointer




&nbsp;
# Code Splitting
Code splitting is the process of dividing a large bundled application into smaller bundles that are loaded only when they are needed. This helps improve performance in large applications.



## React.lazy


## Router-Based Code Splitting


## Named Exports



&nbsp;
# Context


&nbsp;
# Error Boundaries


&nbsp;
# Refs



## Forwarding Refs


## Refs and DOM



&nbsp;
# Fragments



&nbsp;
# Higher Order Components



&nbsp;
# Integration



&nbsp;
# Optimization



&nbsp;
# Portals



&nbsp;
# Reconciliation



&nbsp;
# Type Checking

## Static Type Checking


## PropTypes



&nbsp;
# StrictMode


&nbsp;
# Server Side Rendering
Source: [Next.js](https://github.com/zeit/next.js/)


&nbsp;
# Reference


&nbsp;
# Tooling

Example eslint config
``` json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

&nbsp;
# Async UI


Loader:
``` javascript
import { navigate } from "@reach/router";

class Async extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    } 
  }

  componentDidMount() {
    someApi.item.get({
      id: this.props.id
    }).then(data => {
      let item = data.item;
      this.setState({
        name: item.name,
        size: item.size,
        loading: false
      })
    }).catch(err => { 
      this.setState({error: err})
      // or with reach router
      navigate("/");
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>
    }

    const { name, size } = this.state;

    return (
      <div>
        <h1>{name}</h1>
        <h2>{size}</h2>
      </div>
    )
  }
}
```

&nbsp;
# Snippets

Carousel.js
``` javascript
import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  }

  // updates every time the props change
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo['@size'] === 'pn')
    }

    return { photos };
  }

  handleIndexClick = e => {
    this.setState({
      active: +e.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary item" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img 
              onClick={this.handleIndexClick}
              key={photo.value} 
              data-index={index}
              src={photo.value} 
              className={index === active ? 'active': ''} 
              alt="item thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;
```