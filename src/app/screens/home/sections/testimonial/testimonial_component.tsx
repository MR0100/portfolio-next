import Image from "next/image";

export default function TestimonialComponent({
  data,
}: {
  data: {
    name: string;
    position: string;
    image: string;
    testimonial: string;
  };
}) {
  return (
    <div className="w-auto bg-grey p-[42px] flex flex-col items-center">
      <Image
        src={data.image}
        width={100}
        height={100}
        alt={data.name}
        className="pb-[24px]"
      />
      <p className="font-semibold text-[20px]">{data.name}</p>
      <p className="text-[17px] opacity-50 pb-[24px]">{data.position}</p>
      <p className="text-[17px] text-center">{data.testimonial}</p>
    </div>
  );
}
