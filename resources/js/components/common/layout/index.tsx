import React from "react";
import Menu from "../nav";

interface Props {

}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <div className={'mb-3'}>
        <Menu/>
      </div>
      <div className={'container'}>
        {children}
      </div>
    </>
  )
}

export default Layout;

//
// const Layout: React.FC<Props> = ({children}) => {
//   return
//   <div className={'container'}>
//     {children}ss
//   </div>
// }
//
// export default Layout;
