import cn from 'classnames';

export default function Navbar({ isModal }: { isModal?: boolean }) {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Creators', href: '/' },
    { label: 'Themes', href: '/' },
    { label: 'About', href: '/' }
  ]

  return (
    <nav className={cn(!isModal && 'hidden lg:flex items-center w-[30%]')}>
      <ul className={cn('flex gap-4 pl-4 h-full text-black', isModal && 'flex-col')}>
        {navLinks.map(navLink => (
          <li className={cn('flex items-center font-ar-julian', isModal && 'justify-center')} key={navLink.label}>
            <a className="px-4 py-2 rounded-4xl hover:bg-yellow-400/70" href={navLink.href}>{navLink.label.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}