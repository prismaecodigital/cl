import { Link, usePage } from "@inertiajs/react";
import { User, LogOut } from "lucide-react";

export default function DropdownProfile() {
  const user = usePage().props.auth.user;

  return (
    <div className='dropdown__wrapper'>
      <ul className='dropdown__content'>
        <Link
          href={route('profile.index', user.id)}
          className='dropdown__list ole'
        >
          <User /> Profile
        </Link>
      </ul>
      <Link href={route('logout')} method="post" as="button" className='dropdown__log-out ole'>
        <LogOut /> Log Out      
      </Link>
    </div>
  );
}
