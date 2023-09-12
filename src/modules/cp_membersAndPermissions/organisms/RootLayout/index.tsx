import Container from 'modules/cp_membersAndPermissions/atoms/Container';

import SideNavbar from 'modules/cp_membersAndPermissions/organisms/SideNavbar';
import Nav from 'modules/cp_membersAndPermissions/organisms/Nav';

import style from './style.module.css';

//Todo: remove any
const RootLayout = ({ children }: any) => {
  return (
    <Container>
      <Nav />

      <SideNavbar />

      <main className={style.main}>{children}</main>
    </Container>
  );
};

export default RootLayout;
