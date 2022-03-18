import type { GetServerSideProps } from "next"
const Rendered: React.FC = props => {
  return <div>{JSON.stringify(props, null, 2)}</div>
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      hi: true,
      headers: req.headers
    }
  }
}

export default Rendered