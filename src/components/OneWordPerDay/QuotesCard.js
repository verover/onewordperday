import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Curved from "../Common/Text/Curved";

const QuotesCard = ({
  id,
  boxShadow,
  borderRadius,
  background,
  title,
  secondary,
  body,
  date,
  type,
  facing,
  width = '100%'
}) => {
  return (
    <Box sx={{ width: width, bgColor: background }}>
      {/* Front
      <Card sx={{ boxShadow: 2, borderRadius: 3, minHeight: 250 }}>
        <CardContent textOverflow="ellipsis" overflow="hidden" nowrap>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            WORD OF THE DAY
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            {secondary}
          </Typography>
          <Typography sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "5",
            WebkitBoxOrient: "vertical",
          }}>
            {body}
          </Typography>
        </CardContent>
      </Card> */}
      {/* Back */}
      <Card sx={{ boxShadow: 2, borderRadius: 3, height: [200, 280, 250, 500], bgcolor: 'background.gradient' }}>
        <CardContent textOverflow="ellipsis" overflow="hidden" nowrap >
          <Typography>
            <Curved />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default QuotesCard