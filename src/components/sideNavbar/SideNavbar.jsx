import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryIcon from '@mui/icons-material/History';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ChatIcon from '@mui/icons-material/Chat';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Genral',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'History',
    title: 'History',
    icon: <HistoryIcon />,
  },
  {
    segment: 'Calender',
    title: 'Calender',
    icon: <CalendarMonthIcon />,
  },
  {
    segment: 'Appointments',
    title: 'Appointments',
    icon: <BookOnlineIcon />,
  },
  {
    segment: 'Statics',
    title: 'Statics',
    icon: <BarChartIcon />,
  },
  {
    kind: 'header',
    title: 'Tools',
  },
  {
    segment: 'Chat',
    title: 'Chat',
    icon: <ChatIcon />
  },
  {
    segment: 'Support',
    title: 'Support',
    icon: <LocalPhoneIcon />
  },

];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function SideNavbar(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <div className="grid grid-cols-2 gap-3">
          <div className='border-2 border-blue-500 h-full'>
            we are boxes
          </div>
          <div className='border-2 border-blue-500 h-full'>
            we are boxes
          </div>

        </div>
      </DashboardLayout>
    </AppProvider>
  );
}
