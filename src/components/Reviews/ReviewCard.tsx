import { Card, Image, Text, Flex, Badge } from "@mantine/core";
import stars from "../../images/stars.svg";

interface ReviewItem {
  link: string;
  key: string;
  target: string;
  desc: string;
  date: string;
  label: { [key: string]: string} | null | undefined;
}

interface ReviewItemProps {
  item: ReviewItem;
}

function ReviewCard({ item }: ReviewItemProps) {

  const labels = item.labels ? Object.values(item.labels) : [];

  // Filter out empty labels
  const filteredLabels = labels.filter(label => label.trim() !== "");


  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        pb={0}
        radius="sm"
        withBorder
        href="https://www.zillow.com/lender-profile/info266606/"
        target="_blank"
        component="a"
      >
        <Flex h={260} direction="column" gap="10" justify="left" mt="md">
          <Flex
            justify="start"
            direction="column"
            gap="sm"
            style={{ minHeight: "270px", height: "270px", maxHeight: "270px" }}
          >
            <Flex justify="space-between">
              <Image src={stars} style={{ flexGrow: 1, maxWidth: "100px" }}></Image>
              <Text ta="right" size="sm" c="dimmed" fw={500}>
                {item.date}
              </Text>
            </Flex>

            <Text ta="left" fw={500}>
              "{item.link}"
            </Text>
            <Text ta="left" size="sm" c="dimmed">
              {item.target}
            </Text>
            <Text size="sm" ta="left" c="dimmed">
              {item.desc}
            </Text>
            <Flex mt="xs" gap={5}>
            {filteredLabels.map((labelValue, index) => (
              <Badge key={index} variant="outline">
                {labelValue}
              </Badge>
            ))}
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}

export default ReviewCard;
