import '../style/Dashboard.scss'
import { Box } from "@mui/system";
import QuotesCard from "../components/OneWordPerDay/QuotesCard";

export default function Dashboard() {
    return (
        <Box>
            <QuotesCard />
        </Box>
    )
}