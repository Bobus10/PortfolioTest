import { navLinks } from "../../constants";

export default function BottomBar() {
  return (
    <div className='text-white flex justify-around py-3 rounded-lg bg-slate-500'>
        {navLinks.map((link) => {
            return (
                <a href={link.route}>{link.label}</a> 
            )
        })} 
    </div>
  )
}
