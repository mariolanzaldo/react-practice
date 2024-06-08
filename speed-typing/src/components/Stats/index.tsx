import { Grid, Typography } from "@mui/material";
import useStats from "../../hooks/useStats";
import HistoryTable from "./HistoryTable";
import BasicLineChart from "./BasicLineChart";


function Stats() {

    const { data } = useStats();

    return (
        <Grid
            container
            // item
            justifyContent="center"
            marginTop={3}
            xs={12}
        >
            <Grid
                container
                item
                justifyContent="center"

                xs={12}
            >
                <Typography
                    variant="h3"
                    textAlign="center"
                >
                    Stats
                </Typography>
            </Grid>

            <Grid
                container
                item
                xs={10}
            >

                <HistoryTable />
            </Grid>
            {data?.wpm?.length > 0 && data?.maxWpm?.length > 0 && (
                <Grid
                    container
                    item
                    xs={10}
                >
                    <Grid
                        container
                        item
                        xs={6}
                    >
                        <BasicLineChart
                            caption={"Speed"}
                            data={data.wpm}
                            xAxis={data.date}
                        />
                    </Grid>

                    <Grid
                    container
                    item
                    xs={6}
                    >
                    <BasicLineChart
                        caption={"Max Speed"}
                        // yLabel="max wpm"
                        data={data.maxWpm}
                        xAxis={data.date}
                    />
                </Grid>
                </Grid>
            )}

            {data?.accuracy?.length > 0 && data?.mistakes?.length > 0 && (
                <Grid
                    container
                    item
                    xs={12}
                >
                    <Grid
                        container
                        item
                        xs={6}
                    >
                        <BasicLineChart
                            caption={"Accuracy"}
                            data={data.accuracy}
                            xAxis={data.date}
                        />
                    </Grid>

                    <Grid
                        container
                        item
                        xs={6}
                    >
                        <BasicLineChart
                            caption={"Mistakes"}
                            // yLabel="mistakes"
                            data={data.mistakes}
                            xAxis={data.date}
                        />
                    </Grid>
                </Grid>
            )}

        </Grid>
    )
}

export default Stats;