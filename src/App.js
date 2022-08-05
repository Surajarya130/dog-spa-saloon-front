import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// Same as react main file structure, stored the UI pages also in such fashion.
import { 
  SearchByDate,
  WaitList,
  CheckOutPage,
  Dashboard,
  QuickView,
  AddPup,
  SearchByName,
  LiveSearch
} from './pages';


function App() {
  return (
    <>
    {/* Dashboard and it's inner page, React Router V6 used */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} >
          <Route path='/' element={<QuickView />} />
          <Route path='/addpuppy' element={<AddPup />} />
          <Route path='/quickview' element={<QuickView />} />
          <Route path='/waitinglist' element={<WaitList />} />          
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route path="/liveSearch" element = {<LiveSearch />} />
          <Route path='/searchbydate' element={<SearchByDate />} />
          <Route path='/searchbyname' element={<SearchByName />} />
        </Route>
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
