import '../assets/pollPage.css';

import Poll from '../components/Poll';

function PollPage() {
    return (
        <div className="poll">
            <div className="container-poll">
                <Poll title="Voce gosta do seu trabalho?"/>
            </div>
        </div>
    )
}

export default PollPage;
