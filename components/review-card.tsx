import { Item } from "@radix-ui/react-accordion";
import Image from "next/image";

interface ReviewCardProps {
  id: string;
  name: string;
  job: string;
  city: string;
  img: string;
  text: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  name,
  job,
  city,
  img,
  text,
}) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center pb-10 text-center md:w-2/3">
      <Image
        src={`https://i.pravatar.cc/150?img=${img}`}
        alt={name}
        width={100}
        height={100}
        className="right-1 h-20 w-20 rounded-full shadow-lg md:h-32 md:w-32"
      />
      <h3 className="mt-6 text-lg font-semibold text-primary">{name}</h3>
      <span className="text-xs sm:text-sm">
        {job}, {city}
      </span>
      <p className="mt-4 text-sm sm:text-lg">{text}</p>
    </div>
  );
};

export default ReviewCard;
