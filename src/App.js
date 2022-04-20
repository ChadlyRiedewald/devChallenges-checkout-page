import './App.scss';
import Form from './components/Form';
import Summary from './components/Summary';

function App() {
    return (
        <div className='wrapper'>
            <main>
                <div className='form-container'>
                    {Form()}
                    {Summary()}
                </div>
            </main>
            <footer className='footer'>
                <p className='footer__text'>
                    created by{' '}
                    <a
                        href='https://github.com/ChadlyRiedewald'
                        className='footer__link'
                    >
                        ChadlyRiedewald
                    </a>{' '}
                    - devChallenges.io
                </p>
            </footer>
        </div>
    );
}

export default App;
