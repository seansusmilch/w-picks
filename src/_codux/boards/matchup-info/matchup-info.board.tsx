import { createBoard } from '@wixc3/react-board';
import { MatchupInfo } from '../../../components/matchup-info/matchup-info';

export default createBoard({
    name: 'MatchupInfo',
    Board: () => <MatchupInfo />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 414,
        windowHeight: 896,
        canvasWidth: 348,
        canvasHeight: 960,
    },
});
