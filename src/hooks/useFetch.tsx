import axios from 'axios'
import { useRouter } from 'next/navigation'

const useFetch = () => {
  const router = useRouter()

  const apiCall = async (
    data: {
      path: string
      method: string
      validate: any
    },
    body: any
  ) => {
    try {
      const { path, method, validate } = data
      console.log(data)
      const { error } = validate.payload.validate(body)
      if (error) {
        return {
          status: false,
          type: 'validation error',
          message: `Validation Error ${error.message}`,
        }
      }

      const res = await axios({
        method,
        url: `${process.env.NEXT_PUBLIC_API_URL}${path}`,
        data: body,
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })

      if (res.status === 401) {
        router.push('/login')
      }

      if (res.status === 200) {
        validate(res.data)
      }
    } catch (error) {
      console.log(error)
      return {
        status: false,
        type: 'error',
        message: 'Something went wrong',
      }
    }
  }

  return { apiCall }
}

export default useFetch
