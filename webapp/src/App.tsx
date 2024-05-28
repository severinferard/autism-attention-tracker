import '@mantine/core/styles.css';
import { AppShell, Burger, MantineProvider, Title } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { useDisclosure } from '@mantine/hooks';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        // navbar={{
        //   width: 300,
        //   breakpoint: 'sm',
        //   collapsed: { mobile: !opened },
        // }}
        padding="md"
      >
        <AppShell.Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title style={{ marginLeft: 20 }} order={3}>
            Attention Tracker
          </Title>
        </AppShell.Header>
        {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
      {/* <Router /> */}
    </MantineProvider>
  );
}
