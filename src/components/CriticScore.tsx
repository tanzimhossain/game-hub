import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize="sm"
      paddingX={2}
      borderRadius={4}
      colorScheme={score > 75 ? "green" : score > 50 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
