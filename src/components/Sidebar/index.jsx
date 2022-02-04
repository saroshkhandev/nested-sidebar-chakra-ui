import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Text, Flex, IconButton } from '@chakra-ui/react'
import * as FaIcons from 'react-icons/fa'
import SubMenu from './components/SubMenu'
import { SidebarData } from './components/SidebarData'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const collapseToggler = () => {
    setIsCollapsed(prevState => !prevState)
  }
  const item = {
    title: 'Dashboard',
    path: '/dashboard',
    icon: FaIcons.FaHome,
  }
  return (
    <Flex
      flexDir="column"
      h="100vh"
      w={isCollapsed ? '80px' : '240px'}
      bg="#FAFAFA"
      align="center"
      style={{ position: 'relative' }}
      gap={5}
      p={2}
    >
      <Flex flexDir="column" align="flex-start" gap={3}>
        {SidebarData.map((data, index) => (
          <SubMenu item={data} key={index} />
        ))}
      </Flex>
      <IconButton
        icon={isCollapsed ? <FaIcons.FaAngleRight /> : <FaIcons.FaAngleLeft />}
        aria-label="Collapse"
        onClick={collapseToggler}
        borderRadius={0}
        _focus={{ boxShadow: 'none' }}
        w="100%"
        style={{ position: 'absolute', bottom: 0, left: 0 }}
      />
    </Flex>
  )
}

export default Sidebar
