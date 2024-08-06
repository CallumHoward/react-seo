import { HStack, Card, Typography, Thumbnail } from "@safetyculture/sc-web-ui";
import { ComponentProps } from "react";

const props: ComponentProps<typeof Card.CourseLayout> = {
  title: "Karamo's Diversity, Equity and Inclusion",
  description: "Description of the course",
  subtext: (
    <Typography variant="labelSmall" color="surface.text.weaker">
      By EdApp
    </Typography>
  ),
  dueDate: { status: "negative", recurring: false, date: "Dec 21" },
  numberOfLessons: 5,
  status: { variant: "warning", children: "To Do" },
  src: "https://picsum.photos/id/132/600/400",
  progress: 20,
};

export const Library = () => {
  return (
    <HStack wrap="wrap" spacing="s8" justify="center">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index}>
          <Card.CourseLayout
            {...props}
            averageRating={4.5}
            numberOfRatings={788}
            thumbnail={
              <Thumbnail
                src="https://picsum.photos/seed/thumbnail/48"
                name="logo"
              />
            }
          />
        </Card>
      ))}
    </HStack>
  );
};
