import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import wayLife from "@/public/images/way_life.jpg";

interface FounderMemberProp {
  name: string;
  age?: string;

  image?: string;
  description?: string;
  phone?: string;
  email?: string;
}

export default function FounderMember({
  name,
  image,
  description,
}: FounderMemberProp) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: { sx: "73%", xs: "80%" },
        height: "100%",
        marginTop: 3,
        borderTopLeftRadius: "70px",
        borderBottomRightRadius: "70px",
        overflow: "hidden",
        textAlign: "justify",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: 400 },
          height: { xs: 300, sm: 400, md: 800, lg: 440 },
        }}
        image={"/images/way_life.jpg"}
        alt="Founder image"
      />
      {/* . ಈ ಪ್ರಸ್ತಾಪದ ಫಲಿತಾಂಶವಾಗಿ, .  .. */}
      <div className="ml-6">
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent>
            <div className="font-bold text-4xl">{name}</div>
            <div className="text-base font-medium">
              <ul className="list-outside list-disc">
                <div className="pt-1 font-extrabold text-lg"></div>
                <li className="pt-1">
                1944 - Discussion on the need for such a hostel at the Madhwa Yuva Sammelana.
                  
                </li>
                <li className="pt-1">
                1945 - Establishment of Sri Madhwa Yuvaka Sangha under the leadership of Late. Sri Subhodha Ramarayaru.
                </li>
                <li className="pt-1">
                  1946 - Sangha started its activities.
                </li>

                <li className="pt-1">
                  1948 - Officially registered under Subregistrar of The Government of Mysore.
                  
                </li>
                <li className="pt-1">
                  1950 - Final Draft of Byelaw of the Sangha.
                </li>

                <li className="pt-1">
                  1952 - Establishment of Satpantha Students Union.
                </li>
                <li className="pt-1">
                  1996 -  Formation of Sri Madhwa Education and Charitable Trust.               </li>

                <li className="pt-1">
                  2004 - Major building renovation works were carried out.
                </li>
                <li className="pt-1">
                  2009 - The Bayalu Ranga Mandira ( open-air auditorium ) was inaugurated.
                </li>
                <li className="pt-1">
                  2021 - The Sangha celebrated its Amritha Mahotsava - 75 years of establishment.
                </li>
                <div className="pt-3 font-medium">
                  Over its seven decades of existence, Sri Madhwa Yuvaka
                  Sangha(R.) has focused on the spiritual, cultural, and educational
                  development of Brahmin youth.
                </div>
              </ul>
            </div>
          </CardContent>
        </Box>
      </div>
    </Card>
  );
}
