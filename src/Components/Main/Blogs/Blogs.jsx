import React from 'react';
import './Blogs.css'
import Footer from '../../Footer/Footer';

const Blogs = () => {
    return (
        <div >
            <div className='blogs'>
                <h1 className='text-center mb-5 fw-bolder'>Blog of Answering the questions</h1>
                <h2>When should you use context API?</h2>
                <h4>When data or state needs to be shared across several application components, React's Context API should be used. It offers a method for passing data down the component tree without having to explicitly send props at each level. <br />
                    Context can be especially helpful when components are deeply nested and require access to shared data, or when it's necessary to prevent "prop drilling"—passing props down through several levels of components—both of which are problematic.</h4>

                <h2>What is a custom hook?</h2>
                <h4>A custom hook in React is a function that enables logic reuse across many components. In order to exchange and reuse functionality between components in a more modular approach, custom hooks are a means to extract common functionality from components.

                    The built-in hooks that React offers, such as useState, useEffect, useContext, and useReducer, can be combined to create custom hooks. </h4>
                <h2>What is useRef?</h2>
                <h4>useRef is a React hook that creates a mutable reference to a DOM element or a value that persists between re-renders. It allows you to directly access and manipulate DOM nodes without relying on React to manage their state.
                    To utilize useRef, first call the useRef hook and supply an initial value as an argument. The hook returns a "ref" object with a "current" field for storing the value or reference to a DOM element.</h4>
                <h2>What is useMemo?</h2>
                <h4>useMemo is a hook in React that is used for memoization or cashing. Memoization is a technique used to optimize performance by caching the results of expensive computations or functions so that they can be reused when needed, rather than being recalculated every time.
                    The useMemo hook takes two arguments: a function that returns the value that needs to be memoized, and an array of dependencies. The hook will recompute the memoized value only if one or more of the dependencies have changed since the last render.</h4>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Blogs;