import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import wayLife from '@/public/images/way_life.jpg'

interface FounderMemberProp {
  name: string;
  age?:string
  
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
  const theme = useTheme();
  console.log('this is image', image);
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: { sx: '73%', xs: '80%' },
        height: '100%',
        marginTop: 3,
        borderTopLeftRadius: '70px',
        borderBottomRightRadius: '70px',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component='img'
        sx={{
          width: { xs: '100%', md: 400 },
          height: { xs: 300, sm: 400, md: 250, lg: 350 },
        }}
        image={wayLife.src}
        alt='Founder image'
      />
      {/* . ಈ ಪ್ರಸ್ತಾಪದ ಫಲಿತಾಂಶವಾಗಿ, .  .. */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>
          <div className='font-bold text-4xl'>{name}</div>
          <div className='font-small text-sm'>

            <ul className='list-outside hover:list-inside list-disc'>
              <div className='pt-1 font-extrabold text-lg'>ಶ್ರೀ ಮಾಧ್ವ ಯುವಕ ಸಂಘ (ರಿ), ಕೃಷ್ಣ ರಾಜೇಂದ್ರ ರಸ್ತೆ, ಬೆಂಗಳೂರು</div>
              <li className='pt-1'>
                1945 ರಂದು ದಿವಂಗತ ಶ್ರೀ ಸುಬೋಧ ರಾಮರಾಯರ ನೇತೃತ್ವದಲ್ಲಿ ಸ್ಥಾಪನೆಗೊಂಡಿತು.
                ಉನ್ನತ ವ್ಯಾಸಂಗಕ್ಕಾಗಿ ಬೆಂಗಳೂರಿಗೆ ಬರುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ವಸತಿ
                ಸೌಕರ್ಯವನ್ನು ನೀಡುವ ಸಲುವಾಗಿ ಆರಂಭಗೊಂಡ ಈ ವಿದ್ಯಾರ್ಥಿ ನಿಲಯವು, ಇಂದಿಗೆ
                ಸಾವಿರಾರು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆಶ್ರಯದಾಯಕವಾಗಿದ್ದು ಸಮಾಜಕ್ಕೆ ಉತ್ತಮ
                ಸತ್ಪ್ರಜೆಗಳನ್ನು ನೀಡಿದೆ. ಪ್ರಸ್ತುತ 110 ವಿದ್ಯಾರ್ಥಿಗಳು ಇಲ್ಲಿ ಉಚಿತ
                ವಸತಿ ಸೌಕರ್ಯವನ್ನು ಪಡೆಯುತ್ತಿದ್ದಾರೆ.1944 ರಲ್ಲಿ, ಮಾಧ್ವ ಯುವ
                ಸಮ್ಮೇಳನದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿ ನಿಲಯದ ಅನಿವಾರ್ಯತೆಯ ಬಗ್ಗೆ ಪ್ರಸ್ತಾಪ
                ಮಂಡಿಸಲಾಯಿತು
              </li>
              <li className='pt-1'>
                1945 ರಲ್ಲಿ ಶ್ರೀ ಮಾಧ್ವ ಯುವಕ ಸಂಘದ ಸ್ಥಾಪನೆಗೆ ಕಾರಣವಾಯಿತು. 1946 ರಲ್ಲಿ
                ಸಂಘದ ಕಾರ್ಯ ಆರಂಭವಾಯಿತು ಮತ್ತು 1948 ರಲ್ಲಿ ಮೈಸೂರು ಸರ್ಕಾರದ ಅಡಿಯಲ್ಲಿ
                ಅಧಿಕೃತವಾಗಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿತು
              </li>
              <li className='pt-1'>
                1950 ರಲ್ಲಿ ಸಂಘದ ಪ್ರಥಮ ನಿಬಂಧನೆ ರಚನೆಯಾಯಿತು . 1952 ರಲ್ಲಿ ಸತ್ಪಂಥ
                ವಿದ್ಯಾರ್ಥಿ ಒಕ್ಕೂಟದ ಸ್ಥಾಪನೆ. 1996 ರಲ್ಲಿ ಶ್ರೀ ಮಾಧ್ವ ಎಜುಕೇಶನ್ ಅಂಡ್
                ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್ ಸ್ಥಾಪನೆಯಾಯಿತು.
              </li>
              <li className='pt-1'>
                2002 ರಲ್ಲಿ ಸುವರ್ಣ ಸತ್ಪಂಥ ಸಮಾರಂಭ ಮತ್ತು 2015 ರಲ್ಲಿ ವಜ್ರ ಮಹೋತ್ಸವ
                ಕಟ್ಟಡದ ನವೀಕರಣ ಮತ್ತು ಬಯಲು ರಂಗ ಮಂದಿರ ಲೋಕಾರ್ಪಣೆ ನಡೆಯಿತು. 2021 ರಲ್ಲಿ
                ಸಂಘವು ಅಮೃತ ಮಹೋತ್ಸವವನ್ನು ಆಚರಿಸುತ್ತಿದೆ
              </li>
              <li className='pt-1'>
                ಈ ಚರಿತ್ರೆಯು ಶ್ರೀ ಮಾಧ್ವ ಯುವಕ ಸಂಘದ ಏಳು ದಶಕಗಳ ಸೇವೆಯ ಸಾರಾಂಶವಾಗಿದೆ. ಈ
                ಸಂಘವು ಯುವಜನರ ಧಾರ್ಮಿಕ, ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಉನ್ನತಿಗಾಗಿ
                ಶ್ರಮಿಸುತ್ತಾ ಬಂದಿದೆ
              </li>
            </ul>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
}
