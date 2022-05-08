import type { NextPage } from 'next'
import Layout from "../components/layout";
import Calc from "../components/calc";

const Home: NextPage = () => {
  return (
      <div>
          <Layout header="Calc" title="Calculator">
            <div className="text-center">
                <Calc />
            </div>
          </Layout>
      </div>
  )
}

export default Home
