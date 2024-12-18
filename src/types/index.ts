import { mock_projects_buttons } from "@/mock-data/projects";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  isActive?: boolean;
};

export type ProjectButton = (typeof mock_projects_buttons)[number]["icon"];
