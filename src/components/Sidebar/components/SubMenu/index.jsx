import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(prevState => !prevState)

  const linkStyle = {
    textDecoration: 'none',
  }
  console.log('SubMenu Item ', item)
  const linkHover = {
    color: '#2666CF',
  }
  return (
    <>
      <Link
        as={RouterLink}
        to={item.path}
        style={linkStyle}
        _hover={linkHover}
        _focus={{ boxShadow: 'none' }}
        onClick={item.subNav && showSubnav}
      >
        <Flex flexDir="row" gap={2} align="center">
          <Icon as={item.icon} />
          <Text color="#000" _hover={linkHover}>
            {item.title}
          </Text>
          {item.subNav && subnav ? (
            <Icon as={item.iconOpened} />
          ) : item.subNav ? (
            <Icon as={item.iconClosed} />
          ) : null}
        </Flex>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <Link
                to={item.path}
                as={RouterLink}
                _hover={linkHover}
                _focus={{ boxShadow: 'none' }}
              >
                <Flex
                  flexDir="row"
                  gap={2}
                  align="center"
                  style={{ background: '#7882A4', color: 'white' }}
                  p='2px 0 2px 20px'
                >
                  <Icon as={item.icon} />
                  <Text _hover={linkHover}>
                    {item.title}
                  </Text>
                </Flex>
              </Link>
            )
          })}
      </Link>
    </>
  )
}

export default SubMenu
