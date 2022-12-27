import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Loadable from '../Helpers/Loadable';
const Home = Loadable(lazy(() => import('../Components/Home/Home')));

export default function ROUTES() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
