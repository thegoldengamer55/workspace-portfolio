import { FaAddressCard, FaComment, FaMedal } from "react-icons/fa";
import AboutMe from "./AboutMe";
import CodingExperience from "./CodingExperience";
import Other from "./Other";

export const allIngredients = [
  { icon: FaAddressCard, label: "About Me", view: AboutMe },
  // { icon: "🥬", label: "Lettuce" },
  // { icon: "🧀", label: "Cheese" },
  // { icon: "🥕", label: "Carrot" },
  // { icon: "🍌", label: "Banana" },
  // { icon: "🫐", label: "Blueberries" },
  // { icon: "🥂", label: "Champers?" },
  { icon: FaMedal, label: "Coding Experience", view: CodingExperience },
  { icon: FaComment, label: "Other", view: Other },
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
