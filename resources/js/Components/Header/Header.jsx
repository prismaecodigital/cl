import HeaderProfile from './HeaderProfile';
import ButtonToggleSidebar from './ButtonToggleSidebar';

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className='app__header'>
      <div className='header__wrapper'>
        {/* Header Toggle Sidebar */}
        <div className='header__toggle'>
          <ButtonToggleSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
        
        {/* Profile Dropdown */}
        <HeaderProfile />
      </div>
    </header>
  )
}
