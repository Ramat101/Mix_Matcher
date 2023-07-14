import Logo from 'components/logo';
import Form from 'components/form';

import './main.scss';

function Main({ cms }) {
    return (
        <main>
            <section>
                <Logo />
            </section>
            <section>
                <Form cms={cms.form} />
            </section>
        </main>

    );
}

export default Main;