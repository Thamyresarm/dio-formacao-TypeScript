import { Button } from "@chakra-ui/react";

interface INButton {
    onClick: () => void
}

export const NButton = ({onClick}: INButton) => {
    return (
        <Button
            onClick={onClick}
            colorScheme="teal"
            size="sm"
            width="100%"
            marginTop="5px"
        >
            Entrar
        </Button>        
    )
}

export default NButton