import { Button,useColorMode,Box,Text } from "@chakra-ui/react"
import {MoonIcon,SunIcon } from '@chakra-ui/icons'


export default function Darkmode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Box minWidth="100vw" height="50" px={6}>
        <Text float="left" m={2} fontSize={20}  fontWeight="semibold">Crypto Price App</Text>
        <Button onClick={toggleColorMode} size="sm" m={2} float="right" >
            {colorMode === "light" ? <MoonIcon w={5} h={5} /> : <SunIcon w={5} h={5} />}
        </Button>
      </Box>
    )
  }