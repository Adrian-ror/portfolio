import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-gray-300 rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="mb-2">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-2 hover:underline"
              >
                {title}
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="font-mono text-xs text-gray-500 underline hidden print:inline">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-sm text-gray-700">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="px-4 py-2 bg-teal-800 text-white font-bold border-2 border-teal-700 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-teal-700 hover:text-gray-200 hover:rotate-1"
          >
            {tag}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
