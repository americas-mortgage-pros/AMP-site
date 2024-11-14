import { Card, Image, Text, Badge, Flex, Divider, Paper } from "@mantine/core";
import { IconClockHour4Filled } from "@tabler/icons-react";
import Placeholder from "../../images/adjustable-rate.jpg";

interface BlogItem {
  link: string;
  key: string;
  target: string;
  desc: string;
}

interface BlogCardProps {
  item: BlogItem;
}

function BlogCard({ item }: BlogCardProps) {
  let badgeColor;
  if (item.target === "Realtors") {
    badgeColor = "teal";
  } else if (item.target === "First-time homebuyers") {
    badgeColor = "yellow";
  } else if (item.target === "Refinance") {
    badgeColor = "green";
  }

  return (
    <Paper h="100%">
      <Card h="100%" shadow="sm" padding="lg" radius="sm" withBorder href="#" target="_blank" component="a">
        <Card.Section>
          <Image src={Placeholder} height={130} alt="Norway" />
        </Card.Section>

        <Flex direction="column" gap="10" justify="flex-start" mt="md" style={{ height: '100%' }}>
          <Badge color={badgeColor} variant="filled">{item.target}</Badge>
          <Flex justify="start" direction="column" gap="sm">
            <Text ta="left" fw={500}>{item.link}</Text>
            <Text size="sm" ta="left" c="dimmed">{item.desc}</Text>
          </Flex>

          <div style={{ flexGrow: 1, height: "0px" }} />

          <Card.Section>
            <Divider orientation="horizontal" size="xs" mt="md" />

            <Flex justify="space-between" style={{ marginTop: 'auto' }}>
              <Flex py="md" align="center" gap={5} style={{ flexBasis: "50%" }} justify="center">
                <IconClockHour4Filled size={18} color="#868e96" />{" "}
                <Text c="dimmed" size="sm" ta="center">10 Hours Ago</Text>
              </Flex>
              <Divider orientation="vertical" size="xs" />
              <Flex align="center" style={{ flexBasis: "50%" }} justify="center">
                <Text c="dimmed" size="sm" ta="center">5 Min Read</Text>
              </Flex>
            </Flex>
          </Card.Section>
        </Flex>
      </Card>
    </Paper>
  );
}

export default BlogCard;
