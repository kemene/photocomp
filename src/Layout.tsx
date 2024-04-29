import React, { Fragment } from 'react'
import { Routes, Route, Link } from 'react-router-dom'


import { useDisclosure } from '@mantine/hooks'
import {
  AppShell,
  Burger,
  Group,
  Image,
  Button,
  NavLink,
} from '@mantine/core'

import mark from './assets/photocompetitiondotau.png'

import Overview from './Overview'
import Login from './Login'
import Register from './Signup'

const Layout = () => {
  const [opened, { toggle }] = useDisclosure()


  const Links = (
    <Fragment>
      <NavLink component={Link} to='/' label='Login' active />
    </Fragment>
  )

  return (
    <AppShell
      header={{ height: 100 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
    >
      <AppShell.Header>
        <Group h='100%' px='md' align='center' justify='space-between'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Image src={mark} w={120} />
          <Group ml='xl' visibleFrom='sm'>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py='md' px={4}>
        <Group>
          {Links}
        </Group>
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </AppShell.Main>
    </AppShell >
  )
}

export default Layout
