import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import type { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "30px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "30px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
  };
  return <Image {...emojiMap[rating]} topMargin={1} />;
};

export default Emoji;
