import { Menu, Group, Center, Burger, Container, Image, Drawer, Button, Stack, Anchor, Paper, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import AMPLogo from "../../images/AMP.png";
import classes from './NavBar.module.css';

const links = [
  {
    link: '#1',
    label: 'Clients',
    links: [
      { link: '/docs', label: 'Mortgage Options' },
      { link: '/resources', label: 'Mortgage Calcuator' },
      { link: '/community', label: 'Apply Online' },
      { link: '/blog', label: 'First-Time Homebuyers' },
    ],
  },
  {
    link: '#2',
    label: 'Brokers',
    links: [
      { link: '/faq', label: 'Partnerships' },
      { link: '/demo', label: 'Realtor Training' },
    ],
  },
  {
    link: '#3',
    label: 'Recruiting',
    links: [
      { link: '/faq', label: 'Careers' },
      { link: '/demo', label: 'AMP Score' },
      { link: '/forums', label: 'Power of One' },
    ],
  },
];

function NavBar() {
  const [opened, { toggle }] = useDisclosure(false);  // This handles burger toggle state
  const [drawerOpened, { open, close }] = useDisclosure(false);  // Separate useDisclosure for drawer

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header style={{ marginBottom: 0}} className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Image src={AMPLogo} w={110} />
          <Group gap={5} visibleFrom="sm">
            {items}
          <Group ml="sm" gap={10}>
          <Button>Apply</Button>
          <Button variant='outline'>Lets Chat</Button>
          </Group>
          </Group>
          
          <Burger opened={opened} onClick={open} size="sm" hiddenFrom="sm" />

        </div>
      </Container>

      <Drawer
        opened={drawerOpened}
        onClose={close}
        title="Menu"
        padding="xl"
        size="xs"
      >
        <Stack>
          {links.map((link) => (
            <div key={link.label}>
                {link.label}
              {link.links && (
                <Stack gap={0} align="flex-start">
                  {link.links.map((subLink) => (
                    <Anchor 
                      pt={5}
                      pb={5}
                      key={subLink.link}
                      src={subLink.link}
                      onClick={(e) => {
                        e.preventDefault();
                        close(); 
                        window.location.href = subLink.link;
                      }}
                    >
                    {subLink.label}
                    </Anchor>
                  ))}
                </Stack>
              )}
            </div>
          ))}
        </Stack>
      </Drawer>
    </header>
  );
}

export default NavBar;
