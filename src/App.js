import React from 'react';

const retrieve = () => {
  let { value } = await( await fetch(`/api/message`)).json()
  return value
}

function App() {
  // const value = 'World';
  const value = retrieve()
  return <div>Hello {value}</div>;
}

export default App;
