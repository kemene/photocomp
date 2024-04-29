import React from 'react'
import { Link } from 'react-router-dom'
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core'

import {
  natureBackground,
  sideForm,
} from './styles.module.css'

const Login = () => {

  return (
    <div className={natureBackground}>
      <Paper className={sideForm} radius={0} p={30}>
        <Title order={2} ta='center' mt='md' mb={50}>
          Signup to Photo Competition!
        </Title>

        <TextInput label='Email address' placeholder='hello@gmail.com' size='md' />
        <PasswordInput label='Password' placeholder='Your password' mt='md' size='md' />
        <Checkbox label='Keep me logged in' mt='xl' size='md' />
        <Button fullWidth mt='xl' size='md'>
          Login
        </Button>

        <Text ta='center' mt='md'>
          Don't have an account yet?{' '}
          <Anchor component={Link} to='/register'>Register</Anchor>
        </Text>
      </Paper>
    </div>
  )
}


export default Login
