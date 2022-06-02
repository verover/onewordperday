import '../style/Dashboard.scss'
import { Box } from "@mui/system";
import QuotesCard from "../components/OneWordPerDay/QuotesCard";

export default function Dashboard() {
    return (
        <Box sx={{ bgcolor: 'background.main', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <QuotesCard/>
        </Box>
    )
}