import Image from "next/image";

export default function Author() {
  return (
    <div className="flex flex-row">
      <Image
        priority
        className='rounded-full mb-6'
        src="/images/profile/kevin.jpg"
        height={64}
        width={64}
        alt={"Kevin"}
      />
      <div>Kevin Toh</div>
    </div>
  );
}