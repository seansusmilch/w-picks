import { createBoard } from '@wixc3/react-board';
import App from '../../../routes/App/App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
});
