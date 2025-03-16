"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ClientSvg from "@/components/svg/client-svg"
import TestimonialSvg from "@/components/svg/testimonial-svg"

export default function ClientsPage() {
  const casesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-out")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (casesRef.current) observer.observe(casesRef.current)
    if (testimonialsRef.current) observer.observe(testimonialsRef.current)

    return () => {
      if (casesRef.current) observer.unobserve(casesRef.current)
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current)
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">Client Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Discover how we've helped organizations across industries achieve remarkable results through our strategic
            consulting services.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div
          ref={casesRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Real results from our strategic partnerships with clients across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Technology</div>
                <h3 className="text-2xl font-bold mb-4">30% Revenue Growth for Tech Firm</h3>
                <p className="text-muted-foreground mb-6">
                  We helped a growing technology company optimize their sales process and expand into new markets,
                  resulting in a 30% increase in annual revenue.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">30% Revenue Growth</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">3 New Markets</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Retail</div>
                <h3 className="text-2xl font-bold mb-4">Streamlined Operations for Retail Chain</h3>
                <p className="text-muted-foreground mb-6">
                  We redesigned the supply chain and inventory management processes for a retail chain, reducing costs
                  by 22% and improving customer satisfaction.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">22% Cost Reduction</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">15% Higher NPS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Healthcare</div>
                <h3 className="text-2xl font-bold mb-4">Digital Transformation for Healthcare Provider</h3>
                <p className="text-muted-foreground mb-6">
                  We led a digital transformation initiative for a healthcare provider, improving patient experience and
                  reducing administrative time by 35%.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">35% Time Savings</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">28% Higher Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Manufacturing</div>
                <h3 className="text-2xl font-bold mb-4">Lean Manufacturing Implementation</h3>
                <p className="text-muted-foreground mb-6">
                  We implemented lean manufacturing principles for a production facility, increasing productivity by 40%
                  and reducing waste by 25%.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">40% Productivity Increase</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">25% Waste Reduction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Financial Services</div>
                <h3 className="text-2xl font-bold mb-4">Customer Experience Transformation</h3>
                <p className="text-muted-foreground mb-6">
                  We redesigned the customer journey for a financial services firm, resulting in a 45% increase in
                  customer retention and 20% growth in referrals.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">45% Better Retention</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">20% More Referrals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden shadow-sm border border-border/50">
              <div className="p-6">
                <div className="text-primary font-medium mb-2">Education</div>
                <h3 className="text-2xl font-bold mb-4">Leadership Development Program</h3>
                <p className="text-muted-foreground mb-6">
                  We designed and implemented a leadership development program for an educational institution, improving
                  staff engagement by 50% and reducing turnover.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">50% Higher Engagement</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-primary mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">32% Lower Turnover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <ClientSvg />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div
          ref={testimonialsRef}
          className="container px-4 md:px-6 mx-auto opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Hear directly from the organizations we've helped transform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg p-8 shadow-sm border border-border/50 relative">
              <svg className="h-10 w-10 text-primary/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-lg mb-4 pt-6 pl-10">
                "The strategic insights and operational improvements delivered by the consulting team have been
                transformative for our business. Their collaborative approach and deep expertise made all the
                difference."
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">CEO, TechInnovate Solutions</div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border/50 relative">
              <svg className="h-10 w-10 text-primary/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-lg mb-4 pt-6 pl-10">
                "Working with this consulting firm has been a game-changer for our retail operations. Their process
                optimization expertise helped us reduce costs while improving customer satisfaction."
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">COO, Retail Excellence Group</div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border/50 relative">
              <svg className="h-10 w-10 text-primary/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-lg mb-4 pt-6 pl-10">
                "The leadership development program they designed for our organization has transformed our management
                team. We're seeing higher engagement, better collaboration, and improved results."
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Jennifer Martinez</div>
                  <div className="text-sm text-muted-foreground">Director of HR, Education Forward</div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-sm border border-border/50 relative">
              <svg className="h-10 w-10 text-primary/20 absolute top-6 left-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-lg mb-4 pt-6 pl-10">
                "Their strategic guidance helped us navigate a challenging market transition and emerge stronger than
                before. The team's insights and hands-on approach were invaluable to our success."
              </div>
              <div className="flex items-center">
                <div>
                  <div className="font-bold">Robert Williams</div>
                  <div className="text-sm text-muted-foreground">President, Manufacturing Solutions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <TestimonialSvg />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">
                Become Our Next Success Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

