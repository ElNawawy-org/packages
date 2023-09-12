import Grid from 'modules/cp_membersAndPermissions/atoms/Grid';
import Column from 'modules/cp_membersAndPermissions/atoms/Column';

import RootLayout from 'modules/cp_membersAndPermissions/organisms/RootLayout';
import Header from 'modules/cp_membersAndPermissions/organisms/Header';
import Card from 'modules/cp_membersAndPermissions/molecules/Card';

//Todo: remove any
const T_CP_membersAndPermissions: any = ({ members }: any) => {
  const CardsList = members?.map((member: any) => (
    <Card
      key={member.id}
      member={member}
    />
  ));

  return (
    <RootLayout>
      <Column>
        <Header />

        <Grid>{CardsList}</Grid>
      </Column>
    </RootLayout>
  );
};

export default T_CP_membersAndPermissions;
