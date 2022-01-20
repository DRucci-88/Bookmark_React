import React from "react";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="{{ url('/') }}">
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
              <a className={'nav-link'} href={'#'}>Bookmarks</a>
            </li>
            <li className={'nav-item'}>
              <a className={'nav-link'} href={'#'}>Bookmark Add</a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className={'nav-item'}>
              <a className={'nav-link'} href={'#'}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu;
