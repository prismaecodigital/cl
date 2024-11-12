import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header/Header';
import Sidebar from '@/Components/Sidebar/Sidebar';

export default function DashboardLayout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head title={title} />

      <main className='app'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='app__content'>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className='min-h-screen'>
            <div className='content'>
              { children }
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
