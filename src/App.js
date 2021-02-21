import React from 'react';

const retrieve = async () => {
  let { value } = await( await fetch(`/api/message`)).json()
  console.log(value)
  return value
}

function App() {
  // const value = 'World';
  const value = retrieve()
  return <div>Hello {value}</div>;
}

export default App;
