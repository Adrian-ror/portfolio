import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};


export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1
              className="text-4xl font-semibold text-gray-900 tracking-wide capitalize font-poppins mb-4">{RESUME_DATA.name}</h1>

            <p className="max-w-2xl text-lg font-semibold text-gray-800 leading-relaxed mb-4">
              {RESUME_DATA.about}
            </p>

            <p className="max-w-2xl text-sm text-gray-600 flex items-center gap-x-2 mb-4">
              <a
                className="flex items-center gap-x-1.5 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-4 w-4" />
                <span>{RESUME_DATA.location}</span>
              </a>
            </p>

            <div className="flex gap-4 pt-2 font-sans text-sm text-gray-700 print:hidden">
              {RESUME_DATA.contact.email && (
                <Button
                  className="rounded-full border-2 border-gray-300 hover:bg-gray-100 p-2 transition duration-200 ease-in-out"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.tel && (
                <Button
                  className="rounded-full border-2 border-gray-300 hover:bg-gray-100 p-2 transition duration-200 ease-in-out"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="w-5 h-5 text-gray-700 hover:text-green-600" />
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="rounded-full border-2 border-gray-300 hover:bg-gray-100 p-2 transition duration-200 ease-in-out"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                  </a>
                </Button>
              ))}
            </div>

            <div className="hidden flex-col gap-1 font-sans text-sm text-gray-700 print:flex">
              {RESUME_DATA.contact.email && (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline text-blue-600">{RESUME_DATA.contact.email}</span>
                </a>
              )}
              {RESUME_DATA.contact.tel && (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline text-green-600">{RESUME_DATA.contact.tel}</span>
                </a>
              )}
            </div>

          </div>

          <Avatar
            className="w-48 h-48 rounded-full border-4 border-gray-500 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl}
                         className="w-full h-full object-cover rounded-full" />
            <AvatarFallback
              className="flex items-center justify-center w-full h-full bg-gray-200 text-xl font-semibold text-white rounded-full">
              {RESUME_DATA.initials}
            </AvatarFallback>
          </Avatar>

        </div>


        <Section className="space-y-4 bg-white">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            About
          </h2>
          <p className="text-lg font-serif text-gray-800 leading-relaxed">
            {RESUME_DATA.summary}
          </p>

        </Section>


        <Section className="space-y-8 ">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Education
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}
                    className="border border-gray-200 rounded-lg transition-transform duration-300 hover:scale-105">
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between gap-x-4 text-lg">
                    <h3 className="font-semibold leading-tight text-gray-800">
                      {education.school}
                    </h3>
                    <div className="text-sm font-bold text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-2 bg-gray-50 rounded-b-lg text-center text-gray-800 border border-gray-200">
                  <p className="font-bold">{education.degree}</p>
                </CardContent>
              </Card>
            );
          })}
        </Section>


        <Section className="space-y-6 print:break-inside-avoid">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-4">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-white font-bold border-2 border-gray-600 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:bg-gray-600 hover:text-gray-100 hover:scale-110 hover:rotate-1"
                >
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>



        <Section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Projects
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-6 print:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>


        </Section>

      </section>

      <CommandMenu
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
