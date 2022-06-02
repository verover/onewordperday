import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

const QuotesCard = ({
  id,
  boxShadow,
  borderRadius,
  background,
  title,
  secondary,
  label,
  date,
  type
}) => {
  return (
    <Box sx={{ width: '42%' }}>
      <Card sx={{ boxShadow: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            WORD OF THE DAY
          </Typography>
          <Typography variant="h5" component="div">
            Overwhelmed
          </Typography>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly with a benevolent smile. well meaning and kindly with a benevolent smile. well meaning and kindly with a benevolent smile.
          </Typography>
        </CardContent>
        <CardActions sx={{ borderTop: 0.1, borderColor: 'primary.main', backgroundColor: 'secondary.main' }}>
          <ExpandMore aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Card>
    </Box>
  )
}

export default QuotesCard