import { ThemeProvider, Typography } from "@mui/material";
import Back from "../../../style/cards/back";

export default function Curved() {
  return (
    <ThemeProvider theme={Back}>
      <Typography>
        <svg>
          <filter id="shadow" x="0" y="0">
            <feDropShadow dx="5" dy="5" floodColor="#3B444B" stdDeviation="0" floodOpacity="1" />
          </filter>
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <g filter="url(#shadow)">
            <text fill="#aaaaaa">
              <textPath startOffset="17.5%" xlinkHref="#curve">
                OWPD
              </textPath>
            </text>
          </g>
        </svg>
      </Typography>
    </ThemeProvider>
  );
}