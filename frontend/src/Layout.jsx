import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

// Shared frame for every page: top bar, then the current route.
export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
