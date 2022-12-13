import useStateRef from 'react-usestateref'
import Styles from './Header.module.css'; 
import Drawer from './Drawer';

export default function Header() {
  const [menuFlag,setMenuFlag,menuRef]=useStateRef(false);

  const handleMenuClick=()=>{
    setMenuFlag(!menuFlag)
  }

  return (
    <>
        <div className={Styles.navbarWrapper}>
          <div className={Styles.navbarList} onMouseEnter={handleMenuClick} > <a >menu</a></div>
          <div className={Styles.navbarList}><a href="#">About Us</a> </div>
          <div className={`${Styles.navbarList} ${Styles.headerTitle}`} > <a href="/">bloobloom</a> </div>
          <div className={Styles.navbarList}><a href="#">login</a> </div>
          <div className={Styles.navbarList}><a href="#">Bag(0)</a></div>
        </div>
        {menuRef.current && <Drawer />}
    </>
    
  )
}
