import { Card, Group, Image, Text } from "@mantine/core";

function BlogCard({ item }) {

    return (
        <>
            <Card shadow="sm" padding="lg" radius="sm" withBorder
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  component="a">
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={200}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="left" mt="md">
              <Text h={50} ta="left" fw={500}>{item.link}</Text>
              <Text size="sm" ta="left" c="dimmed">
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with
                </Text>
            </Group>
          </Card>
        </>
    )
}

export default BlogCard;