import Image from "next/image";
import Link from "next/link";

export default function WorkCardComponent({
  data,
}: {
  data: {
    image: string;
    projectName: string;
    projectDetails: string;
    projectId: string;
  };
}) {
  return (
    <Link href={"/portfolio/" + data.projectId} className="w-auto ">
      <Image
        src={data.image}
        width={300}
        height={200}
        alt={data.projectName}
        className="h-auto w-full pb-[24px]"
      />
      <p className="font-semibold text-[20px]">{data.projectName}</p>
      <p className="text-[17px]">{data.projectDetails}</p>
    </Link>
  );
}
