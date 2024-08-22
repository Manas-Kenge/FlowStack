import { Cards } from '@/components/Cards';
import { Image } from '@nextui-org/react';
import Link from 'next/link';


export default function servicess() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock the Power of Our SaaS Platform
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our SaaS platform offers a comprehensive suite of tools and services to help your business thrive in
                  the digital age. Discover how our solutions can streamline your operations and drive growth.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/services.avif"
                width="600"
                height="500"
                alt="Hero"
                className="mx-auto overflow-hidden rounded-xl object-center"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-6 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Our Comprehensive SaaS Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our SaaS platform offers a wide range of services to help your business succeed. Explore our offerings
                  and find the perfect solutions for your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="rounded-full bg-primary p-3">
                  <InfoIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Gain valuable insights into your business with our advanced analytics tools.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="rounded-full bg-primary p-3">
                  <BotIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Automation</h3>
                <p className="text-center text-muted-foreground">
                  Streamline your workflows and boost productivity with our automation solutions.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="rounded-full bg-primary p-3">
                  <CombineIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-center text-muted-foreground">
                  Empower your team to work together seamlessly with our collaboration tools.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="rounded-full bg-primary p-3">
                  <LockIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Security</h3>
                <p className="text-center text-muted-foreground">
                  Protect your data and ensure compliance with our robust security features.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="rounded-full bg-primary p-3">
                  <ScalingIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Scalability</h3>
                <p className="text-center text-muted-foreground">
                  Scale your business with ease using our flexible and scalable infrastructure.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="rounded-full bg-primary p-3">
                  <ImportIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Integrations</h3>
                <p className="text-center text-muted-foreground">
                  Seamlessly connect your tools and applications with our extensive integration options.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="rounded-full bg-primary p-3">
                  <FlagIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Reporting</h3>
                <p className="text-center text-muted-foreground">
                  Generate comprehensive reports and insights to drive informed decision-making.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                <div className="rounded-full bg-primary p-3">
                  <PowerIcon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Support</h3>
                <p className="text-center text-muted-foreground">
                  Rely on our dedicated support team to help you every step of the way.
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-6">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Cards />
    </div>
  );
}

function BotIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function CombineIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function FlagIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function ImportIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  )
}


function InfoIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LockIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function PowerIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function ScalingIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  )
}