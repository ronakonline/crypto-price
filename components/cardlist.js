import { Text, SimpleGrid, Box, Divider,Flex } from "@chakra-ui/react";
import {ArrowUpIcon, ArrowDownIcon} from "@chakra-ui/icons";

export default function CardList({ data }) {
  return (
    <SimpleGrid spacing={10} columns={[1,1,1,3]}>
      {data.map((item) => (
        <Box key={item.id} shadow="base" p={4} borderRadius="xl">
          <Text fontSize="2xl" fontWeight="bold" m={2}>
            {item.name}/
            <Text as="span" fontWeight="normal" fontSize="lg">
              {item.symbol}
            </Text>
          </Text>
          <Divider />
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold" m={2}>
              Rs {item.quote.INR.price}
            </Text>
            <Text fontSize="lg" m={2}>
              {item.quote.INR.percent_change_1h > 0 ? (
                <ArrowUpIcon color="green.500" />
              ) : (
                <ArrowDownIcon color="red.500" />
              )}
              {item.quote.INR.percent_change_1h}%
            </Text>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  );
}
