// Higher Order Component (HOC) - A React component that renders another component
// Allows us to: 
    // Reuse code
    // Render hijacking
    // Prop manipulation
    // Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAdmin && <p>This is private info. Please don't share!!</p>}
//       <WrappedComponent {...props}/>
//     </div>
//   );
// };

const withAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>Please log in to view info</p>
      )}
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthentication(Info);

// ReactDOM.render(<AdminInfo  isAdmin={false} info="These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo  isAuthenticated={false} info="These are the details"/>, document.getElementById('app'));