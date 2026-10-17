import Image from "next/image";

// Top of inner pages: big title on the left, a round photo inside an orange ring on the right.
export function PageHero({
  title,
  sub,
  image,
  alt,
  children,
}: {
  title: string;
  sub: string;
  image?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-accent">
      <div className="wrap grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-7">
          <h1 className="display max-w-[16ch] text-[clamp(42px,6vw,92px)] text-ink">{title}</h1>
          <p className="mt-6 max-w-[52ch] text-[18px] leading-[1.6] text-body md:text-[20px]">{sub}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        {image ? (
          <div className="relative mx-auto w-[min(78vw,420px)] lg:col-span-5 lg:mx-0 lg:ml-auto lg:w-full lg:max-w-[460px]">
            <div className="aspect-square rounded-full bg-primary p-[11%]">
              <div className="shutter circle-photo relative h-full w-full">
                <Image src={image} alt={alt ?? ""} fill fetchPriority="high" loading="eager" sizes="(min-width: 1024px) 380px, 70vw" className="object-cover" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
