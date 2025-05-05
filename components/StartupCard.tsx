import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    id,
    image,
  } = post;
  return (
    <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group">
      <div className="flex-between">
        <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${id}`}>
            <h3 className="text-[26px] font-bold line-clamp-1">{title}</h3>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default StartupCard;
