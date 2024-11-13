import { Menu, Group, Center, Burger, Container, Image, Drawer, Button, Stack, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import AMPLogo from "../../images/AMP.png";
import classes from './NavBar.module.css';
import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent } from 'motion/react';
import { useScroll } from 'motion/react';


const links = [
  {
    link: '#1',
    label: 'Clients',
    links: [
      { link: '/', label: 'Mortgage Options' },
      { link: '/', label: 'Mortgage Calcuator' },
      { link: '/', label: 'Apply Online' },
      { link: '/', label: 'First-Time Homebuyers' },
    ],
  },
  {
    link: '#2',
    label: 'Brokers',
    links: [
      { link: '/', label: 'Partnerships' },
      { link: '/', label: 'Realtor Training' },
    ],
  },
  {
    link: '#3',
    label: 'Recruiting',
    links: [
      { link: '/', label: 'Careers' },
      { link: '/', label: 'AMP Score' },
      { link: '/', label: 'Power of One' },
    ],
  },
];

function NavBar() {
  const [opened] = useDisclosure(false);  
  const [drawerOpened, { open, close }] = useDisclosure(false); 
  const [scrolled, setScrolled] = useState(false);
  const scrollThreshold = 400;
  const { scrollY } = useScroll();
  const [appear, setAppear] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => 
  {
    const previous = scrollY.getPrevious() 
    if (previous !== undefined && latest > previous && latest > 150) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);  
      } else {
        setScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <Menu.Dropdown style={{zIndex: 9999}} >{menuItems}</Menu.Dropdown>
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
    <header style={{ marginBottom: 0, width:'100%', top: 0, 
      borderBottom: "0",
      backgroundColor: 'transparent',
      position: 'sticky', zIndex:999,  }} className={classes.header}>
      <motion.div variants={{
        visbile: { y: "100%" },
        hidden: { y: "-100% "},
      }}
      style={{
        transition: 'box-shadow 0.3s ease-in-out',
        backgroundColor:'white',
        boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: 'calc(0.0625rem* var(--mantine-scale)) solid var(--mantine-color-gray-3)'
      }}
      animate={appear ? "hidden" : "visible"}
      transition={{ duration: 0.60, ease: "easeInOut" }}>

      <Container size="md">
        <div className={classes.inner}>

          <Image src={AMPLogo} w={110} />
          <Group gap={5} visibleFrom="sm">
            {items}
          <Group ml="sm" gap={10}>
          <Button component='a' target='_blank' href='https://jrboston.zipforhome.com/LoanApplication/Contact?Language=E' >Apply</Button>
          <Button component='a' target='_blank' href='https://calendly.com/jrboston/your-business-success-americas-mortgage-professionals' variant='outline'>Lets Chat</Button>
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
                      href={subLink.link}
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
      </motion.div>
    </header>

  );
}

export default NavBar;
