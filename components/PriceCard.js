import { Box, Container, Divider, Flex, Text } from "@chakra-ui/layout";
import {ArrowUpIcon, ArrowDownIcon} from "@chakra-ui/icons";


export default function PriceCard({data}) {
    return (
        <Container mt={4}>
            <Box boxShadow="xl" rounded="3xl" p={8}>
                <Text fontSize="2xl" fontWeight="bold" m={2}>
                    {data.name}/<Text as="span" fontWeight="normal" fontSize="lg">{data.symbol}</Text>
                </Text>
                <Divider />
                <Flex justify="space-between">
                <Text fontSize="lg" fontWeight="semibold" m={2}>
                    Rs {data.quote.INR.price}
                </Text>
                <Text fontSize="lg" m={2}>
                    {data.quote.INR.percent_change_1h > 0 ? <ArrowUpIcon color="green.500" /> : <ArrowDownIcon color="red.500" />}
                    {data.quote.INR.percent_change_1h}%
                </Text>
                </Flex>
            </Box>
        </Container>
    )
}


