import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import './global.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public route; everybody will be able to see. e.g. signup signin page */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm/>} />
          <Route path='/sign-up' element={<SignupForm/>} />
        </Route>

        {/* Private route; only those who are signed-in can see it. */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home />}/>
        </Route>

      </Routes>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
    </main>
  )
}

export default App