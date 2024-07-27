import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[75dvh] flex max-lg:flex-col justify-center items-center pt-20 max-sm:self-start sm:max-w-6xl">
        <Image
          src="/Hemant_Sharma_Profile.jpg"
          width="250"
          height="250"
          alt="Hemant Sharma, Behind the Mac"
          id="heroShadowAnimation"
          className="rounded-full w-80 h-80 aspect-square m-5"
        ></Image>
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-center text-[#2997ff]">
            Hemant Sharma
          </h1>
          <article className="mt-10 text-slate-300 lg:mx-40 xl:mx-24">
            <p className="text-2xl max-sm:text-lg text-center">
              I&apos;m an experienced Software Engineer and a Full Stack
              Developer who is based in India 🇮🇳 and I am passionate about
              building applications and solving real-world problems, I have
              experience in building web apps using technologies like Next.js,
              Node.js, SvelteKit, TypeScript, and Adonis.js.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
