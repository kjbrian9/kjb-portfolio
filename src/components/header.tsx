import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/dark-mode-button";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  return (
    <div
      className="flex flex-row w-full items-center justify-end fixed bg-[var(--headerbg)] h-20 top-0 backdrop-blur-sm shadow-black-2xl xl:pr-10"
      id="header "
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => {
                scrollTo("home");
              }}
              className="bg-transparent"
            >
              Home
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => {
                scrollTo("aboutMe");
              }}
              className="bg-transparent"
            >
              About me
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => {
                scrollTo("projects");
              }}
              className="bg-transparent"
            >
              Projects
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => {
                scrollTo("contacts");
              }}
              className="bg-transparent"
            >
              Contacts
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle></ModeToggle>
    </div>
  );
}

export default Header;
