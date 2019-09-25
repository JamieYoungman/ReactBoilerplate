import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: black;
`;
H1.displayName = 'H1';

const App = () => (
  <div>
    <H1>Hello World </H1>
  </div>
);

export default App;
