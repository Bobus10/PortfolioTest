import { navLinks } from '../../constants'

export default function NavBar() {
  return (
    <nav className='text-white flex justify-center items-center'>
        <ul>
            {navLinks.map((link) => {
                return (
                    <li>
                        <a href={link.route}>{link.label}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}
