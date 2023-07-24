import { Outlet } from 'react-router-dom';

import Logo from 'components/logo';
import Subheader from 'components/subheader';

import './main.scss';

function Main() {
    return (
        <main>
            <section>
                <Logo />
            </section>
            <section>
                <Subheader />
                <Outlet />
            </section>
        </main>

    );
}

export default Main;