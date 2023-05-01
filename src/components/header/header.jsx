import { ReactComponent as ToggleIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/toggle.svg";
import { ReactComponent as SearchIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/search.svg";
import { ReactComponent as CartIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/cart.svg";
import { ReactComponent as MoonIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/moon.svg";
import { ReactComponent as SunIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/sun.svg";
import { ReactComponent as LogoIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/logo.svg";



function NavbarMenu() {
  const lists = ['男款','女款','最新消息','客製商品','聯絡我們']
  return (
    lists.map(list => 
      <li className="nav-item" key={list}>
        <a className="nav-link" href="/some/valid/uri">{list}</a>
      </li>
    )
  )
}

function NavbarIcon() {
  const icons = [
    {name: 'search', img: <SearchIcon className="nav-icon cursor-point"/>},
    {name: 'cart', img: <CartIcon className="nav-icon cursor-point"/>}, 
    {name: 'moon', img: <MoonIcon className="nav-icon cursor-point"/>}, 
    {name: 'sun', img: <SunIcon className="nav-icon cursor-point"/>}
  ]
  return (
    icons.map(icon => 
      icon.name === 'moon' ?
      <li id="theme-toggle"className="nav-item" key={icon.name}> {icon.img} </li> :
      <li className="nav-item" key={icon.name}> {icon.img} </li> 
    )
  )
}


export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">

        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <ToggleIcon className="icon-toggle cursor-point"/>
        </label>

        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <NavbarMenu />
          </ul>
          <ul className="nav-list site-action-list">
            <NavbarIcon />
          </ul>
        </nav>

        <a className="header-logo-container" href="/some/valid/uri">
          <LogoIcon className="icon-logo cursor-point"/>
        </a>
      </div>
    </header>
  )
}