import Agent from "@/app/components/agent"
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>

        <Agent
        userName={user?.fullName!}
        userId={user?.id!}
        type="generate" 
        interviewId={""} 
        feedbackId={""} 
        questions={[]} />
    </>
  );
};

export default Page;
