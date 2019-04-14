# React Guide

__Source__:
* [official guide](https://reactjs.org/docs/hello-world.html)
* [reactenlightenment](https://www.reactenlightenment.com/react-jsx/5.7.html)
* [Router-based Code Splitting](https://reacttraining.com/react-router/web/guides/quick-start)

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
* [Components](#componenets)
    * [Function Components](#function-components)
    * [Class Components](#class-components)
    * [Conversion](#conversion)
    * [Component Rendering](#rendering)
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
* [Conditional Rendering](#conditional-rendering)
* [Lists and Keys](#lists-and-keys)
    * [Rendering Collections](#rendering-collections)
    * [List Component](#list-components)
    * [Keys](#keys)
    * [Embedding Map](#embedding-map)
* [Forms](#forms)
    * [Controlled Components](#controlled-components)
    * [Textarea](#textarea)
    * [Select](#select)
    * [File Input](#file-input)
    * [Multiple Inputs](#multiple-inputs)
    * [Uncontrolled Components](#uncontrolled-components)
* [Composition](#composition-1)
    * [Containment](#containment)
    * [Specialization](#specialization)
    * [Inheritance](#inheritance)
* [React-Router](#react-router)
    * [Basic Components](#basic-components)
    * [Server Rendering](#server-rendering)
    * [Scroll Restoration](#scroll-restoration)
    * [Testing](#testing)
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

&nbsp;
# Introduction
React is a JavaScript library created by Facebook for UI development.

&nbsp;
# Installation
React is designed for gradual adoption. This means you can use it as little as embedding a widget and as much as creating a whole react based single page application.

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






&nbsp;
# JSX
An HTML-like syntax extension to JavaScript. This couples rendering logic with UI logic within a decoupled component.

__Properties__:
* may contain children
* values embedded in JSX are escaped preventing XSS
* JSX is implicitly transformed into objects called `React elements`

``` javascript
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
|HTML Attribute|JSX Attribute|Description|
|--------------|-------------|-----------|
|`checked`|`defaultChecked`|Used to control input components|
|`class`|`className`|Specify the classes of an element|
|`for`|`htmlFor`|Which form element a label is bound to|
|----|`onChange`|Event is fired whenever a form field is changed|
|`selected`|`selected`|Set whether an `<option>` component is selected|
|----|`style`|Used for CSS in JS. Pass an object with camelcase css properties to change an elements styling|
|----|`value`|Set a value for an `<input>` or `<textarea>` field|

Other supported attributes:
```
accept          acceptCharset   accessKey   action      allowFullScreen     alt 
async           autoComplete    autoFocus   autoPlay    capture             cellPadding 
cellSpacing     challenge       charSet     checked     cite                classID
className       colSpan         cols        content     contentEditable     contextMenu 
controls        controlsList    coords      crossOrigin data                dateTime
default         defer           dir         disabled    download            draggable 
encType         form            formAction  formEncType formMethod          formNoValidate
formTarget      frameBorder     headers     height      hidden              high
href            hrefLang        htmlFor     httpEquiv   icon                id 
inputMode       integrity       is          keyParams   keyType             kind 
label           lang            list        loop        low                 manifest
marginHeight    marginWidth     max         maxLength   media               mediaGroup 
method          min             minLength   multiple    muted               name 
noValidate      nonce           open        optimum     pattern             placeholder     
poster          preload         profile     radioGroup  readOnly            rel 
required        reversed        role        rowSpan     rows                sandbox 
scope           scoped          scrolling   seamless    selected            shape 
size            sizes           span        spellCheck  src                 srcDoc 
srcLang         srcSet          start       step        style               summary
tabIndex        target          title       type        useMap              value 
width           wmode           wrap
```

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
Components in React allow grouping React Elements and any 


## Function Components


## Class Components


## Conversion


## Component Rendering


## Composition


## Extraction


## Props


## Render Props



&nbsp;
# State and Lifecycle

## Local State


## Lifecycle Methods


## Using State


## Data Flow


## Lifting State Up


&nbsp;
# Handling Events



&nbsp;
# Conditional Rendering



&nbsp;
# Lists and Keys

## Rendering Collections


## List Component


## Keys


## Embedding Map



&nbsp;
# Forms

## Controlled Components


## Textarea


## Select


## File Input


## Multiple Inputs


## Uncontrolled Components



&nbsp;
# Composition


## Containment


## Specialization


## Inheritance



&nbsp;
# React-Router
Source: [reacttraining.com](https://reacttraining.com/react-router/web/guides/quick-start)

## Basic Components

## Server Rendering

## Scroll Restoration

## Testing




&nbsp;
# Accessibility



## Semantic HTML


## Forms


## Focus Control


## Mouse and Pointer




&nbsp;
# Code Splitting



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
