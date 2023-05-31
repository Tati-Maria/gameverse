import Title from '../components/ui/Title'

const NotFound = () => {
  return (
    <div
    className="flex flex-col items-center justify-center space-y-4"
    >
      <Title title="404 Not Found" />
      <p>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}

export default NotFound