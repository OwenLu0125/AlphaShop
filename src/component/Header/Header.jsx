import styles from './Header.module.scss'

const navItemList = ['男款', '女款', '最新消息', '客製商品', '聯絡我們']
const NavItem = ({ item }) => {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href='#'>
        {item}
      </a>
    </li>
  )
}

const Header = ({ icons }) => {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={`${styles.headerContainer} mx-auto`}>
          {/* <!-- navbar-toggle --> */}
          <input id='navbar-toggle' className={styles.navbarToggle} type='checkbox' />
          <label htmlFor='navbar-toggle' className={styles.burgerContainer}>
            <svg className={`${styles.iconToggle} cursor-point`}>
              <use xlinkHref={`${icons}#svg-icon-toggle`} />
            </svg>
          </label>

          {/* <!-- navbar-menu --> */}
          <nav className={styles.navbarMenu}>
            <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
              {
                navItemList.map((item, index) =>
                  <NavItem item={item} key={index} />
                )
              }
            </ul>
            <ul className={`${styles.navList} ${styles.siteActionList}`}>
              {/* <!-- search --> */}
              <li className={styles.navItem}>
                <svg className={`${styles.navIcon} cursor-point`}>
                  <use xlinkHref={`${icons}#svg-icon-search`} />
                </svg>
              </li>
              {/* <!-- cart --> */}
              <li className={styles.navItem}>
                <svg className={`${styles.navIcon} cursor-point`}>
                  <use xlinkHref={`${icons}#svg-icon-cart`} />
                </svg>
              </li>
              <li id='theme-toggle' className={styles.navItem}>
                {/* <!-- moon --> */}
                <svg className={`${styles.navIcon} cursor-point`}>
                  <use xlinkHref={`${icons}#svg-icon-moon`} />
                </svg>
                {/* <!-- sun --> */}
                <svg className={`${styles.navIcon} cursor-point d-none`}>
                  <use xlinkHref={`${icons}#svg-icon-sun`} />
                </svg>
              </li>
            </ul>
          </nav>

          {/* <!-- logo --> */}
          <a className={styles.headerLogoContainer} href='#'>
            <svg className={`${styles.iconLogo} cursor-point`}>
              <use xlinkHref={`${icons}#svg-icon-logo`} />
            </svg>
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
