// any JS here is automatically run here

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
// in the current directory, go to component and find imageList.
import ImageList from './components/imageList';

// Create a component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};


// render this component to the screen
Meteor.startup(function(){
  ReactDOM.render(<App />, document.querySelector('.container'));
});
