import React, { useState } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import SavedProperties from './SavedProperties';
import Home from './Home';

function App() {
  const initialState = {
    userID: '',
  };

  const [userID, setUserID] = useState(initialState.userID);

  const handleLogin = (response) => {
    console.log(response, 'response');
    console.log(response.id, 'id');
    setUserID(response.id);
  };

  const handleLogout = () => window.FB.logout(() => setUserID(''));

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/view-properties"
          render={(props) => <Properties {...props} userID={userID} />}
        />
        <Route exact path="/add-property" component={AddProperty} />
        <Route
          exact
          path="/saved-properties"
          render={(props) => <SavedProperties {...props} userID={userID} />}
        />
      </Switch>
    </div>
  );
}

export default App;
