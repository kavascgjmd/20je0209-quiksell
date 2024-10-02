// App.jsx
import React, { Suspense } from 'react';
import './App.css';
import TopNav from './Components/TopNav/TopNav';
import DashView from './Components/DashView/DashView';
import { useRecoilValue } from 'recoil';
import { dataState } from './Atom';
import Loading from './components/Loading/Loading';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AppContent />
    </Suspense>
  );
};

const AppContent = () => {
  // This will suspend until the data is loaded
  useRecoilValue(dataState);

  return (
    <div>
      <TopNav />
      <DashView />
    </div>
  );
};

export default App;
