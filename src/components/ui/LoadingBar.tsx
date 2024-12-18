import { MoonLoader } from 'react-spinners'

export default function LoadingBar() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <MoonLoader color="#f9f0f0" size={100} loading />
    </div>
  )
}
