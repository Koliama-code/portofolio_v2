import { HeroButton } from "./HeroButton";

export function HeroContent() {
  return (
    <section>
      <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
              Ship 10x Faster with NS
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg">
              Highly customizable components for building modern websites...
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <HeroButton href="#link">Start Building</HeroButton>
              <HeroButton href="#link" variant="ghost">
                Request a demo
              </HeroButton>
            </div>
          </div>
          <img
            className="pointer-events-none order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
            src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
            alt="Abstract Object"
          />
        </div>
      </div>
    </section>
  );
}
