import {
    Center,
    Skeleton,
} from "@chakra-ui/react"


const SplashScreen = () => {
    return (
        <Center w="100%" h="100vh">
            <Skeleton
                variant="shine"
                width={{base:"80%" ,md:"70%" ,lg:"50%"}}
                height="2"
                css={{
                    "--start-color": "colors.pink.500",
                    "--end-color": "colors.orange.500",
                }}
            />
        </Center>
    )
}
export default SplashScreen;