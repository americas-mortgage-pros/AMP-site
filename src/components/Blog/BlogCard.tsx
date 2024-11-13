import { Card, Image, Text, Badge, Flex, Divider } from "@mantine/core";
import { IconClockHour4Filled } from "@tabler/icons-react";
import Placeholder from "../../images/adjustable-rate.jpg"

interface BlogItem {
  link: string;
  key: string;
  target: string;
  desc: string;
}

interface BlogCardProps {
  item: BlogItem; 
}

function BlogCard({item} : BlogCardProps) {


    let badgeColor;
    if (item.target === "Realtors") {
        badgeColor = "teal"
    } else if (item.target === "First-time homebuyers") {
        badgeColor = "yellow"
    } else if (item.target === "Refinance") {
        badgeColor = "green"
    }

    return (
        <>
            <Card shadow="sm" padding="lg" pb={0} radius="sm" withBorder
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  component="a">
            <Card.Section>
              <Image
                src={Placeholder}
                height={200}
                alt="Norway"
              />
            </Card.Section>

            <Flex h={280} direction="column" gap="10" justify="left" mt="md">
            <Badge color={badgeColor} variant="filled">{item.target}</Badge>
            <Flex justify="start" direction="column" gap="sm" style={{  minHeight: "170px", height: "170px", maxHeight: "170px"}}>
              <Text ta="left" fw={500}>{item.link}</Text>
              <Text size="sm" ta="left" c="dimmed">
                  {item.desc}
                </Text>
            </Flex>
                <Card.Section>

                <Divider orientation="horizontal" size="xs" mt="md" />
                <Flex px="md" justify="space-between">
                    
                <Flex p="md" pl={0} align="center" gap={5} style={{flexBasis: "50%"}} justify="center" > <IconClockHour4Filled size={18} color="#868e96"></IconClockHour4Filled> <Text c="dimmed" size="sm" ta="center">10 Hours Ago</Text></Flex>
                <Divider orientation="vertical" size="xs"/>
                <Flex p="md" pr={0} align="center" style={{flexBasis: "50%"}} justify="center"><Text c="dimmed" size="sm" ta="center">5 Min Read</Text></Flex>
                
                </Flex>
                </Card.Section>
            </Flex>
          </Card>
  
        </>
    )
}

export default BlogCard;