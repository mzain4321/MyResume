'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FontAwesome({ 
  icon, 
  className = "",
  brand = false 
}) {
  if (!icon) {
    console.error("No icon prop provided to FontAwesome component");
    return null;
  }

  try {
    const iconProp = brand ? ['fab', icon] : ['fas', icon];
    return <FontAwesomeIcon icon={iconProp} className={className} />;
  } catch (error) {
    console.error(`Could not find icon ${icon}:`, error);
    return null;
  }
}