import { usePage } from '@inertiajs/react';
import NavGroup from './NavGroup';
import NavLink from './NavLink';
import { ChevronDown, Bug, Database, LayoutDashboard, Mails, MessageSquareText, Building2, Users, Component, Sofa, Box, UserCog, Settings2, KeyRound } from 'lucide-react';

export default function NavMenu({ sidebarExpand, setSidebarExpand }) {
  const { url: inertiaUrl } = usePage();
  const urlPath = inertiaUrl.split('/');

  return (
    <nav className='nav'>
      <ul className='nav__list top'>
        {/* Dashboard */}
        <NavLink
          link={route('dashboard')}
          icon={<LayoutDashboard />}
          name='dashboard'
          text='Dashboard'
          active={urlPath[1] == 'dashboard'}
        />
        {/* Confirmation Letter */}
        <NavLink
          link={route('confirm-letter.index')}
          icon={<Mails />}
          name='confirm-letter'
          text='Confirm Letter'
          active={urlPath[1] == 'confirm-letter'}
        />

        {/* Database */}
        <NavGroup isActive={urlPath[1] == 'database'}>
          {(handleClick, open) => {
            return (
              <>
                <NavLink
                  icon={<Database />}
                  text='Database'
                  onClick={(e) => {
                    e.preventDefault();
                    sidebarExpand ? handleClick() : setSidebarExpand(true); 
                  }}
                  active={urlPath[1] == 'database'}
                >
                  <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 ${open && 'rotate-180'}`} />
                </NavLink>
                <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                  <ul className='nav__dropdown'>
                    <NavLink
                      link={route('organizations.index')}
                      icon={<Building2 />}
                      name='organization'
                      text='Organization'
                      active={urlPath[2] == 'organizations'}
                    />
                    <NavLink
                      link={route('contacts.index')}
                      icon={<Users />}
                      name='pic'
                      text='PIC'
                      active={urlPath[2] == 'contacts'}
                    />
                    <NavLink
                      link={route('events.index')}
                      icon={<Component />}
                      name='event'
                      text='Event'
                      active={urlPath[2] == 'events'}
                    />
                    <NavLink
                      link={route('rooms.index')}
                      icon={<Sofa />}
                      name='room'
                      text='Room'
                      active={urlPath[2] == 'rooms'}
                    />
                    <NavLink
                      link={route('packages.index')}
                      icon={<Box />}
                      name='package'
                      text='Package'
                      active={urlPath[2] == 'packages'}
                    />
                  </ul>
                </div>
              </>
            );
          }}
        </NavGroup>
        
        {/* Authorization */}
        <NavGroup isActive={urlPath[1] == 'authorization'}>
          {(handleClick, open) => {
            return (
              <>
                <NavLink
                  icon={<UserCog />}
                  text='Authorization'
                  onClick={(e) => {
                    e.preventDefault();
                    sidebarExpand ? handleClick() : setSidebarExpand(true); 
                  }}
                  active={urlPath[1] == 'authorization'}
                >
                  <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 ${open && 'rotate-180'}`} />
                </NavLink>
                <div className={`translate transform overflow-hidden ${!open && 'hidden'}`} >
                  <ul className='nav__dropdown'>
                    <NavLink
                      link={route('users.index')}
                      icon={<Users />}
                      name='users'
                      text='User'
                      active={urlPath[2] == 'users'}
                    />
                    <NavLink
                      link={route('roles.index')}
                      icon={<Settings2 />}
                      name='roles'
                      text='Role'
                      active={urlPath[2] == 'roles'}
                    />
                    <NavLink
                      link={route('permissions.index')}
                      icon={<KeyRound />}
                      name='permissions'
                      text='Permission'
                      active={urlPath[2] == 'permissions'}
                    />
                  </ul>
                </div>
              </>
            );
          }}
        </NavGroup>
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