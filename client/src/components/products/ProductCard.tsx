import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

export function ProductCard({ title, description, image, link, tags }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-white">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          {tags?.map(tag => (
            <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={link} className="inline-flex items-center text-sm font-medium hover:text-primary group-hover:translate-x-1 transition-all">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
