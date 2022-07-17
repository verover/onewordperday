import '../style/Dashboard.scss'
import { Box, Container } from "@mui/system";
import QuotesCard from "../components/OneWordPerDay/QuotesCard";
import { Grid } from '@mui/material';

export default function Dashboard() {
    return (
        <Box bgcolor={'background.main'} height={'100vh'} display='flex' justifyContent="center" alignItems="center">
            <Container>
                <Grid container justifyContent="space-around" alignItems="center" columnSpacing={5} rowSpacing={3}>
                    <Grid item xs={12} sm={8} md={4}>
                        <QuotesCard background={'background.main'} title={"Advocates"} secondary={"Noun"} body={"a person who publicly supports or recommends a particular cause or policy."}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <QuotesCard background={'background.main'} title={"Lawyer"} secondary={"Noun"} body={"a person who practices or studies law; an attorney or a counselor."}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4}>
                        <QuotesCard background={'background.main'} title={"Evidences"} secondary={"Noun"} body={"the available body of facts or information indicating whether a belief or proposition is true or valid.the available body of facts or information indicating whether a belief or proposition is true or valid.the available body of facts or information indicating whether a belief or proposition is true or valid."}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}