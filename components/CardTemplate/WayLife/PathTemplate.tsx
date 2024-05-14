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
          height: { xs: 300, sm: 400, md: 680, lg: 360 },
        }}
        image={"/images/way_life.jpg"}
        alt="Founder image"
      />
      {/* . ಈ ಪ್ರಸ್ತಾಪದ ಫಲಿತಾಂಶವಾಗಿ, .  .. */}
      <div className="ml-6">
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent>
            <div className="font-bold text-4xl">{name}</div>
            <div className="font-small text-sm">
              <ul className="list-outside list-disc">
                <div className="pt-1 font-extrabold text-lg"></div>
                <li className="pt-1">
                  Established in 1945 under the leadership of Sri Subodha
                  Ramarayaru, the student hostel was founded to provide free
                  accommodation for Brahmin students coming to Bangalore for
                  higher education.
                </li>
                <li className="pt-1">
                  Over the years, it has grown into a facility that accommodates
                  thousands of students, nurturing them into contributing
                  members of society.Currently, the hostel provides free
                  accommodation facilities to around 110 students.
                </li>
                <li className="pt-1">
                  The need for such a hostel was discussed at the Madhwa Youth
                  Conference in 1944.
                </li>
                <li className="pt-1">
                  The Sri Madhwa Yuva Sangha was formally established in 1945,
                  with activities commencing in 1946.
                </li>

                <li className="pt-1">
                  It was officially registered under the Mysore government in
                  1948.
                </li>
                <li className="pt-1">
                  The first constitution of the Sangha was drafted in 1950.
                </li>

                <li className="pt-1">
                  The Satpantha Student Union was established in 1952.
                </li>
                <li className="pt-1">
                  The Sri Madhwa Education and Charitable Trust was formed in
                  1996.
                </li>

                <li className="pt-1">
                  Major renovations were carried out in 2002, including the
                  construction of the Golden Jubilee Auditorium.
                </li>
                <li className="pt-1">
                  The Bayalu Ranga Mandira( open auditorium) was inaugurated in
                  2015.
                </li>
                <li className="pt-1">
                  The Sangha continues to celebrate the Amritha Mahotsava in
                  2021.
                </li>
                <div className="pt-3 font-medium">
                  Over its seven decades of existence, the Sri Madhwa Yuvaka
                  Sangha has focused on the spiritual, cultural, and educational
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
