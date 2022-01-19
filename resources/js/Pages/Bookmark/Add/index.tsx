import React, {useState} from "react";
import Layout from "../../../components/common/layout";
import {Inertia} from "@inertiajs/inertia";

interface Props {

}

const BookmarkAddPage: React.FC<Props> = () => {

  const [state, setState] = useState({
    link: '',
    title: 'Some hardcoded title'
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    Inertia.post('/bookmarks/preview', state);
  }

  return <div>
    <Layout>
      <h1>Add Pages</h1>
      <div className={'row'}>
        <div className={'col-sm-8'}>
          <form onSubmit={handleSubmit}>
            <div className={'form-group'}>
              <label htmlFor={'link'}>Link</label>
              <input type={"text"} className={'form-control'} name={'link'} onChange={handleChange}/>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  </div>
}

export default BookmarkAddPage;
