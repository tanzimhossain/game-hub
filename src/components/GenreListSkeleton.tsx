import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  // You can decide how many skeleton items you want to show while loading
  const skeletons = Array.from({ length: 12 });

  return (
    <List>
      {skeletons.map((_, index) => (
        <ListItem key={index} paddingY="7px">
          <HStack>
            <Skeleton boxSize="30px" borderRadius={4} />
            <SkeletonText noOfLines={1} width="150px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
