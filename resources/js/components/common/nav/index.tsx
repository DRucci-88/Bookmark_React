import React from "react";
import {InertiaLink, Link} from "@inertiajs/inertia-react";
import route from "ziggy-js";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href={'/'}>
          Bookmark
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="{{ __('Toggle navigation') }}">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={'nav-item'}>
              <InertiaLink className={'nav-link'} href={route('bookmark.index')}>
                Bookmarks
              </InertiaLink>
            </li>

            <li className={'nav-item'}>
              {/*<a className={'nav-link'} href={'#'}>Bookmark Add</a>*/}
              <InertiaLink className={'nav-link'} href={route('bookmark.add')}>
                Bookmark Add Ziggy
              </InertiaLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className={'nav-item'}>
              <Link href={route('logout')} className={'nav-link'} method="post" type="button">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu;
