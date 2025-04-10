import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Usernames from './components/Usernames';
import Userdetails from './components/Userdetails';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Usernames />} />
            <Route path="/user/:id" element={<Userdetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
