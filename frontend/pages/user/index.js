import Layout from '../../components/Layout';
import Private from '../../components/auth/private'

const UserIndex = () => {
    return (
        <Layout>
            <Private>
                <h2>user page</h2>
            </Private>
        </Layout>
    );
};

export default UserIndex;

