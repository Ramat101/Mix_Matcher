import { Outlet } from 'react-router-dom';

import Logo from 'components/logo';
import Subheader from 'components/subheader';

import './main.scss';

function Main({ cms }) {
    return (
        <main>
            <section>
                <Logo />
            </section>
            <section>
                <Subheader cms={cms.subheading} />
                <Outlet />
            </section>
        </main>

    );
}

export default Main;