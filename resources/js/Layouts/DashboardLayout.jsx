import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header/Header';
import Sidebar from '@/Components/Sidebar/Sidebar';
import { ToastContent, ToastWrapper } from '@/Components/Notification/Toast';

export default function DashboardLayout({ title, children }) {
  const flash = usePage().props.flash;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const { 'toast-success': successMessage, 'toast-error': failedMessage } = flash;

    if (successMessage) ToastContent.success(successMessage);
    if (failedMessage) ToastContent.error(failedMessage);
  }, [flash]);

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

      <ToastWrapper />
    </>
  );
}
