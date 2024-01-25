import { createBoard } from '@wixc3/react-board';
import { PicksTable } from '../../../components/picks-table/picks-table';

export default createBoard({
    name: 'PicksTable',
    Board: () => <PicksTable />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 414,
        windowHeight: 896,
    },
});
