import Image from "next/image";

export default function CategorySection() {
  return (
    <div className="flex place-content-center p-[42px]">
      <div className="flex flex-col gap-[42px]  items-center">
        <p className="font-semibold text-[32px]">Services</p>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[24px]">
          <CategoryCard
            image="/images/01.png"
            name="Mobile Development"
            description="Create beautiful and responsive mobile applications for Android and iOS using Flutter and Dart."
          />
          <CategoryCard
            image="/images/02.png"
            name="Web Development"
            description="Develop responsive, Optimized and user-friendly web applications using React and Node.js."
          />
          <CategoryCard
            image="/images/03.png"
            name="UI|UX Designing"
            description="Design beautiful and user-friendly interfaces for mobile and web applications using Figma and Adobe XD."
          />
        </div>
      </div>
    </div>
  );
}

function CategoryCard({
  image,
  name,
  description,
}: {
  image: string;
  name: string;
  description: string;
}) {
  return (
    <div className="w-auto flex flex-col py-[64px] items-center">
      <Image
        src={image}
        alt=""
        width={124}
        height={124}
        className="pb-[42px] h-auto w-[124px]"
      />
      <p className="font-semibold text-[27px] text-center">{name}</p>
      <p className="text-center text-[17px] pt-[12px]">{description}</p>
    </div>
  );
}
