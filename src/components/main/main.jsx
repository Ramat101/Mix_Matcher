import { Outlet } from 'react-router-dom';

import Logo from 'components/logo';

import './main.scss';

function Main({ cms }) {
    return (
        <main>
            <section>
                <Logo />
            </section>
            <section>
                <header>
                    <h2 className="header2">{ cms.heading }</h2>
                </header>
                <Outlet />
            </section>
        </main>

    );
}

export default Main;