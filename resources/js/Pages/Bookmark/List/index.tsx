import React from "react";
import Layout from "../../../components/common/layout";
import {InertiaLink} from "@inertiajs/inertia-react";
import route from "ziggy-js";

interface Props {
  bookmarks: Array<any>
}

const BookmarkListPage: React.FC<Props> = ({bookmarks}) => {
  return <div>
    <Layout>
      <div className={'row'}>
        <div className={'col-sm-8'}>
          <ul className={'list-group'}>
            {bookmarks.length > 0 && bookmarks.map((bookmark, index) => {
              return(
                <li className={'list-group-item'} key={index}>
                  <div className={'mb-3'}>
                    <InertiaLink href={route('bookmark.view', {bookmark: bookmark.id})}>
                      {bookmark.title}
                    </InertiaLink>
                  </div>
                  <span>{bookmark.description}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>

  </div>
}

export default BookmarkListPage;
