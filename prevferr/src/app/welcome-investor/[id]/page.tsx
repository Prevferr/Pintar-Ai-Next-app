// pages/investor/[id].tsx

import { NextPage, GetServerSideProps } from "next";
import { GET } from "../action"; // Assuming your action file is in the same directory

interface InvestorProps {
  investor: {
    // Define the structure based on your investor type
    id: number;
    // ... other properties
  };
}

const InvestorPage: NextPage<InvestorProps> = ({ investor }) => {
  // Render your page using the data received from the server
  return (
    <div>
      <h1>Investor Details</h1>
      {/* Render investor details here */}
      <pre>{JSON.stringify(investor, null, 2)}</pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<InvestorProps> = async (
  context
) => {
  const { params, req, res } = context;

  // Use the GET function from your action file
  const response = await GET(req, { params: { id: params?.id as string } });

  // If there is an error, return appropriate props
  if ("error" in response) {
    res.statusCode = response.status;
    return {
      props: {
        investor: null,
      },
    };
  }

  // If successful, return investor data as props
  return {
    props: {
      investor: response,
    },
  };
};

export default InvestorPage;
