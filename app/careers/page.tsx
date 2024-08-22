import Link from "next/link"

export default function careers() {
    return (
        <div className="w-full max-w-5xl mx-auto py-12 md:py-24 lg:py-32">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Join Our Team</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              At FlowStack, we&apos;re on a mission to revolutionize the way people work. Our innovative products and services
              empower our customers to achieve more, while our vibrant culture fosters a sense of community and belonging.
              If you&apos;re passionate about making a difference and want to be part of a dynamic, forward-thinking team,
              we&apos;d love to hear from you.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Senior Software Engineer</h2>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Job Description</h3>
              <p className="text-muted-foreground md:text-lg/relaxed">
                As a Senior Software Engineer at FlowStack, you&apos;ll be responsible for designing, developing, and
                maintaining cutting-edge web applications that drive our business forward. You&apos;ll work closely with
                cross-functional teams to identify user needs, architect scalable solutions, and deliver high-quality code
                that exceeds our customer&apos;s expectations.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">Responsibilities</h3>
              <ul className="space-y-1 text-muted-foreground md:text-lg/relaxed">
                <li>
                  <CheckIcon className="mr-2 inline-block h-5 w-5" />
                  Design and develop robust, scalable, and maintainable web applications using modern JavaScript
                  frameworks and technologies.
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-5 w-5" />
                  Collaborate with product managers, designers, and other engineers to understand requirements and
                  translate them into technical solutions.
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-5 w-5" />
                  Implement best practices for code quality, testing, and deployment to ensure the reliability and
                  performance of our applications.
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-5 w-5" />
                  Stay up-to-date with the latest industry trends and technologies, and contribute to the team&apos;s technical
                  decision-making.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Apply Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function CheckIcon(props:any) {
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }