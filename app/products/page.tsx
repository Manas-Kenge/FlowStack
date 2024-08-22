import { BentoProduct } from "@/components/BentoProduct";
import { Typewriter } from "@/components/Typewriter";
import { Image } from "@nextui-org/react";

export default function products() {
    return (
      <div>
        <Typewriter />
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Unlock Your Business Potential
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our SaaS solutions are designed to streamline your operations, boost productivity, and drive growth.
                Discover the key features that make our products stand out.
              </p>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automation</h3>
                  <p className="text-muted-foreground">
                    Automate repetitive tasks and workflows to save time and increase efficiency.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Empower your team to work together seamlessly with built-in communication and project management
                    tools.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Scalability</h3>
                  <p className="text-muted-foreground">
                    Easily scale your business as it grows, with flexible pricing and the ability to add more users and
                    features.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Insights</h3>
                  <p className="text-muted-foreground">
                    Gain valuable insights into your business performance with our powerful analytics and reporting
                    tools.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src="/products.jpg"
              width="300"
              height="300"
              alt="Features"
              className="mx-auto aspect-square overflow-hidden rounded-xl sm:w-full lg:order-first"
            />
          </div>
        </div>
      </section>
      <BentoProduct />
      </div>
    );
  }