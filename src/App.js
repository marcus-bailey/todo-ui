import React from 'react';

function App() {
  // const value = 'World';
  let { value } = await( await fetch(`/api/message`)).json();
  // document.querySelector('#name').textContent = text;
  return <div>Hello {value}</div>;
}

export default App;
