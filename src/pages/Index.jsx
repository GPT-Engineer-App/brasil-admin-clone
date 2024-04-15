import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { FaUser, FaMoneyBillAlt, FaCreditCard, FaChartBar } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Flex bg="blue.500" p={4} justifyContent="space-between" alignItems="center">
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5jbyUyMGRvJTIwYnJhc2lsJTIwbG9nb3xlbnwwfHx8fDE3MTMyMTg4NDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Banco do Brasil Logo" h={8} />
        <Flex alignItems="center">
          <FaUser color="white" size={20} />
          <Text ml={2} color="white" fontWeight="bold">
            Admin User
          </Text>
        </Flex>
      </Flex>

      <Flex p={8}>
        <Box flex={1} bg="white" p={6} borderRadius="md" boxShadow="md" mr={8}>
          <Heading size="lg" mb={4}>
            Account Overview
          </Heading>
          <Flex justifyContent="space-between">
            <Box textAlign="center">
              <FaMoneyBillAlt color="green.500" size={24} />
              <Text fontSize="2xl" fontWeight="bold">
                $12,500
              </Text>
              <Text>Account Balance</Text>
            </Box>
            <Box textAlign="center">
              <FaCreditCard color="purple.500" size={24} />
              <Text fontSize="2xl" fontWeight="bold">
                $1,800
              </Text>
              <Text>Credit Limit</Text>
            </Box>
            <Box textAlign="center">
              <FaChartBar color="blue.500" size={24} />
              <Text fontSize="2xl" fontWeight="bold">
                $8,200
              </Text>
              <Text>Monthly Expenses</Text>
            </Box>
          </Flex>
        </Box>

        <Box flex={2} bg="white" p={6} borderRadius="md" boxShadow="md">
          <Heading size="lg" mb={4}>
            Recent Transactions
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Description</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>2023-06-01</Td>
                  <Td>Grocery Store</Td>
                  <Td isNumeric>-$120.50</Td>
                </Tr>
                <Tr>
                  <Td>2023-06-02</Td>
                  <Td>Restaurant</Td>
                  <Td isNumeric>-$80.00</Td>
                </Tr>
                <Tr>
                  <Td>2023-06-03</Td>
                  <Td>Salary</Td>
                  <Td isNumeric color="green.500">
                    $5,000.00
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Button mt={4} colorScheme="blue">
            View All Transactions
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
