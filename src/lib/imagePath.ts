const repoName = "kjb-portfolio";
const isProd = process.env.NODE_ENV === "production";

export function getImagePath(src: string) {
  return isProd ? `/${repoName}${src}` : src;
}
