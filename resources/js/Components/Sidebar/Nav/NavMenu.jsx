import { usePage } from '@inertiajs/react';
import NavGroup from './NavGroup';
import NavLink from './NavLink';
import { Bug, LayoutDashboard, MessageSquareText } from 'lucide-react';

export default function NavMenu({ sidebarExpand, setSidebarExpand }) {
  const { url: inertiaUrl } = usePage();
  const urlPath = inertiaUrl.split('/');

  return (
    <nav className='nav'>
      <ul className='nav__list top'>
        <NavLink
          link={route('dashboard')}
          icon={<LayoutDashboard />}
          name='dashboard'
          text='Dashboard'
          active={urlPath[1] == 'dashboard'}
        />
      </ul>

      <ul className='nav__list'>
        <NavLink
          link='#'
          icon={<MessageSquareText />}
          name='feedback'
          text='Feedback'
        />
        <NavLink
          link='#'
          icon={<Bug />}
          name='bug-issues'
          text='Report Bug/Issue'
        />
      </ul>
    </nav>
  );
}