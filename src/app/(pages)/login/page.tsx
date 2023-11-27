'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useLoginStore } from '@/store/login'
import Routes from '@/utils/routes'
import useFetch from '@/hooks/useFetch'

export default function Home() {
  const { email, password, setEmail, setPassword } = useLoginStore()
  const { apiCall } = useFetch()

  const submitHandler = async (e: any) => {
    e.preventDefault()
    // use any way of sending data to server
    const data = {
      email,
      password,
    }
    const res = await apiCall(Routes.LOGIN, data)
    console.log(res)
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-y-3 w-[300px]"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="email"
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
