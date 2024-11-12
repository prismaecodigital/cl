import { Link } from "@inertiajs/react";

export default function NavLink({ 
  link = '#', 
  icon = '', 
  name, 
  text, 
  active = false, 
  children = '', 
  className = '',
  ...props 
 }) {
  const isActive = active ? active : route().current(name + '*');
  const linkClasses = `${isActive ? 'nav__link active' : 'nav__link'} ${className}`;
  
  return (
    <li>
      <Link href={link} className={linkClasses} {...props}>
        {icon} 
        <span className='pr-6'> {text} </span>
        {children}
      </Link>
    </li>
  );
}
