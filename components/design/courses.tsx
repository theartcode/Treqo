"use client";

import { Users, Lightbulb } from "lucide-react";

export default function TacMentorStory() {
  return (
    <section className="bg-[#FBF8E4] font-sans w-full px-[5%] py-28 overflow-hidden">
      <div className="max-w-[1150px] mx-auto w-full space-y-24">

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          <div className="order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D1D1D]/20 mb-5">
              <Users className="w-4 h-4 text-[#1D1D1D]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1D1D1D]">
                TAC Faculty
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-[#1D1D1D] mb-4">
              A team that supports you <br />
              <span className="font-serif italic font-light text-[#FFC62A]">
                every step
              </span>
            </h2>

            <p className="text-[#1D1D1D]/70 text-base leading-relaxed max-w-md">
              TAC mentors are professionals who have worked across design,
              marketing, and product strategy. They focus on explaining real
              systems used in the industry so students understand how things
              actually work.
              <br /><br />
              Every mentor brings practical insights and case studies that
              simplify complex concepts and make learning engaging.
            </p>
          </div>

          <div className="order-2 rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Mentors"
              className="object-cover w-full h-[320px]"
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Teaching"
              className="object-cover w-full h-[320px]"
            />
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D1D1D]/20 mb-5">
              <Lightbulb className="w-4 h-4 text-[#1D1D1D]" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1D1D1D]">
                TAC Method
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-[#1D1D1D] mb-4">
              Making complex ideas <br />
              <span className="font-serif italic font-light text-[#FFC62A]">
                simple
              </span>
            </h2>

            <p className="text-[#1D1D1D]/70 text-base leading-relaxed max-w-md">
              At TAC, concepts are broken down into simple frameworks so
              students can learn faster. Mentors focus on the reasoning behind
              every idea, ensuring that knowledge is practical and useful.
              <br /><br />
              Through real-world examples and interactive sessions, students
              develop clarity and confidence.
            </p>
          </div>
        </div>

        {/* LONG TEXT SECTION */}
        <div className="max-w-[850px] space-y-8 w-full">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1D1D1D]/20 mb-5">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1D1D1D]">
                TAC Students
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-[#1D1D1D] mb-4">
              For people who want more out of learning
            </h2>

            <p className="text-[#1D1D1D]/70 leading-relaxed text-base">
              TAC was created for students who want to build meaningful
              skills. Our mentors understand that everyone learns differently,
              which is why concepts are explained using practical examples,
              projects, and collaborative sessions.
              <br /><br />
              Instead of memorizing theory, students learn how to think,
              analyze, and solve real-world problems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1D1D1D] mb-2">
              The TAC experience
            </h3>

            <p className="text-[#1D1D1D]/70 leading-relaxed text-base">
              TAC is more than just a classroom. It is an environment where
              students build confidence, develop new perspectives, and grow
              into capable professionals ready for the industry.
            </p>
          </div>

        </div>

        {/* BANNER IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-sm w-full">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
            alt="TAC learning"
            className="object-cover w-full h-[300px] md:h-[420px]"
          />
        </div>

      </div>
    </section>
  );
}