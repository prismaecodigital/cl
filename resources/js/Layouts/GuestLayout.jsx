import { Link } from '@inertiajs/react';
import { Mails } from 'lucide-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    {/* <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" /> */}
                    <Mails className='text-ole w-28 h-28 sm:w-36 sm:h-36' />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
