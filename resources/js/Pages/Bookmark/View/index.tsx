import React, {MouseEventHandler} from "react";
import Layout from "../../../components/common/layout";
import {Inertia} from "@inertiajs/inertia";

interface Props {
  bookmark: any
}

const BookmarkViewPage: React.FC<Props> = ({bookmark}) => {

  const handleSave = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("Handle Save");
    Inertia.post('/bookmarks/make-active', {
      id: bookmark.id
    })
  }

  return (
    <Layout>
      <div className={'row'}>
        <div className={'col-md-12'}>
          {bookmark.title && (
            <div className={'card'}>
              <div className={'card-header'}>
                {bookmark.title}
              </div>
              <div className={'card-body'}>
                <p>URL: {bookmark.url}</p>
                <p>{bookmark.description}</p>
                <img src={bookmark.img_url} alt={bookmark.title} width={400}/>
              </div>
              <button className={'btn btn-primary'} onClick={handleSave}>Save</button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )


}

export default BookmarkViewPage;
