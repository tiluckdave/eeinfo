import React from "react";
import {
  IconButton,
  Icon,
  useColorMode,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import useSound from "use-sound";

const ThemeToggle = ({ mobile }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound("/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    toggleColorMode();
    colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
  };

  return (
    <Tooltip
      label={colorMode === "dark" ? "Light mode" : "Dark mode"}
      aria-label="A tooltip"
    >
      {mobile ? (
        <Button
          size="sm"
          leftIcon={
            colorMode === "dark" ? (
              <Icon as={SunIcon} />
            ) : (
              <Icon as={MoonIcon} />
            )
          }
          onClick={handleClick}
        >
          {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      ) : (
        <IconButton
          isRound
          aria-label="Switch theme"
          variant={mobile ? "ghost" : undefined}
          icon={
            colorMode === "dark" ? (
              <Icon as={SunIcon} />
            ) : (
              <Icon as={MoonIcon} />
            )
          }
          onClick={handleClick}
        />
      )}
    </Tooltip>
  );
};
export default ThemeToggle;
