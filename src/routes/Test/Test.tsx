import { useEffect, useState } from "react";
import { Code, Title, Grid } from "@mantine/core";
import { getMatchups, getPicks } from "~/middleware/supabase/matchups";

export const Test = () => {
    const [picksData, updatePicksData] = useState('None yet');
    const [matchupsData, updateMatchupsData] = useState('None yet');
    const [usersData, updateUsersData] = useState('None yet');

    useEffect(() => {
        const getData = async () => {
            const picks = await getPicks();
            const matchups = await getMatchups();
            
            updatePicksData(JSON.stringify(picks, null, 4));
            updateMatchupsData(JSON.stringify(matchups, null, 4));
            // updateUsersData(JSON.stringify(users, null, 4));
            
            console.log('test info updated');
        }
        getData();
    }, []);

    return (
        <Grid grow>
            <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                <Title>Picks</Title>
                <Code block>{picksData}</Code>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                <Title>Matchups</Title>
                <Code block>{matchupsData}</Code>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6, lg: 4}}>
                <Title>Users</Title>
                <Code block>{usersData}</Code>
            </Grid.Col>
        </Grid>
    )
}