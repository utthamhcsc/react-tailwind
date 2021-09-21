import { Switch, Route } from 'react-router-dom';

import RealEstate from './real-estate';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/real-estate" component={RealEstate} />
    </Switch>
  );
}

export default App;
