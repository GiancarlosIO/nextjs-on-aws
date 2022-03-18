const Rendered = props => {
  return <div>{JSON.stringify(props, null, 2)}</div>
}

export const getServerSideProps = ({req}) => {
  return {
    props: {
      hi: true,
      headers: req.headers
    }
  }
}

export default Rendered