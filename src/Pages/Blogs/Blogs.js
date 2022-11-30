import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 px-20 py-24 mb-10 shadow-lg bg-slate-200">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <ul>
            <li>
              Local state is perhaps the easiest kind of state to manage in
              React, considering there are so many tools built into the core
              React library for managing it. useState is the first tool one
              should reach for to manage state in project components.
            </li>
            <li>
              What do you do if you want to update a component’s state from
              basically anywhere in your app? You turn it into global state. To
              manage it, however, you should opt for a third-party solution.
              Many developers are inclined to use built-in React features like
              the Context API to manage their state. To be clear: the Context
              API is not a state management solution. It is a way to avoid
              problems like props drilling.
            </li>
            <li>
              What happens when there is a network error? Do I really need to
              hit my server every time my user visits the home page if the data
              hasn’t changed? Do I need to add useState and useEffect in every
              component I want to fetch my data? To fix this, there are a couple
              of great libraries that make data fetching in React a breeze. For
              example React Query. They not only give us a convenient hook to
              both get and change data from an API, but they keep track of all
              the necessary states and cache the data for us.
            </li>
            <li>
              URL state is quite easy to manage, usually through custom hooks
              that give us all the information we need about our location,
              history, and pathname. If you are using React Router, you can get
              all the information you need using useHistory or useLocation.
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            A unit test is a type of software test that focuses on components of
            a software product. The purpose is to ensure that each unit of
            software code works as expected. A unit can be a function, method,
            module, object, or other entity in an application’s source code. The
            objective of a unit test is to test an entity in the code, ensure
            that it is coded correctly with no errors, and that it returns the
            expected outputs for all relevant inputs.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <ul>
            <li>
              Angular: Angular has a steep learning curve, considering it is a
              complete solution, and mastering Angular requires you to learn
              associated concepts like TypeScript and MVC. Even though it takes
              time to learn Angular, the investment pays dividends in terms of
              understanding how the front end works.
            </li>
            <li>
              React: React offers a Getting Started guide that should help one
              set up React in about an hour. The documentation is thorough and
              complete, with solutions to common issues already present on Stack
              Overflow. React is not a complete framework and advanced features
              require the use of third-party libraries. This makes the learning
              curve of the core framework not so steep but depends on the path
              you take with additional functionality. However, learning to use
              React does not necessarily mean that you are using the best
              practices.
            </li>
            <li>
              Vue: Vue provides higher customizability and hence is easier to
              learn than Angular or React. Further, Vue has an overlap with
              Angular and React with respect to their functionality like the use
              of components. Hence, the transition to Vue from either of the two
              is an easy option. However, simplicity and flexibility of Vue is a
              double-edged sword — it allows poor code, making it difficult to
              debug and test.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
